import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  combineLatest,
  filter,
  map,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs';
import { Starship } from '../../../interfaces';
import { StarWarsApiService } from '../../../services';

@Component({
  selector: 'app-starships-battle',
  templateUrl: './starships-battle.component.html',
  styles: [
    `
      .battle-view {
        display: flex;
        gap: 24px;
      }

      .battle-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;

        &-card {
          background-color: var(--light-orange);
        }
      }
    `,
  ],
})
export class StarshipsBattleComponent implements OnInit, OnDestroy {
  public leftStarship$?: Observable<Starship>;
  public rightStarship$?: Observable<Starship>;
  public winner$?: Observable<Starship>;
  public leftScore = 0;
  public rightScore = 0;
  private destroyed$ = new Subject();

  constructor(private apiService: StarWarsApiService) {}

  public ngOnInit(): void {
    this.generateNewPlayers();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public generateNewPlayers() {
    const leftHumanId = this.getRandomNumber(1, 36).toString();
    const rightHumanId = this.getRandomNumber(1, 36).toString();
    this.leftStarship$ = this.apiService
      .getStarshipById(leftHumanId)
      .pipe(takeUntil(this.destroyed$));
    this.rightStarship$ = this.apiService
      .getStarshipById(rightHumanId)
      .pipe(takeUntil(this.destroyed$));

    this.comparePlayers();
  }

  private comparePlayers(): void {
    this.winner$ = combineLatest([
      this.leftStarship$ as Observable<Starship>,
      this.rightStarship$ as Observable<Starship>,
    ]).pipe(
      filter(
        ([leftValue, rightValue]) =>
          leftValue !== undefined && rightValue !== undefined
      ),
      map(([first, second]) => {
        Number(first.crew) > Number(second.crew)
          ? (this.leftScore = this.leftScore + 1)
          : (this.rightScore = this.rightScore + 1);
        // TODO increment number for one card
        return Number(first.crew) > Number(second.crew) ? first : second;
      }),
      takeUntil(this.destroyed$)
    );
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
