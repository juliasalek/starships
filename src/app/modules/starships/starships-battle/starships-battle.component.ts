import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map, takeUntil, tap, withLatestFrom } from 'rxjs';
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

      .winner-card {
        background-color: var(--light-orange);
      }

      .battle-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;
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
    // TODO think about the case of the same id in generating
    this.generateNewPlayers();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public generateNewPlayers() {
    //TODO use tap to see how many observable are here
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
    if (this.rightStarship$ && this.leftStarship$) {
      this.winner$ = this.leftStarship$.pipe(
        takeUntil(this.destroyed$),
        withLatestFrom(this.rightStarship$),
        tap((res) => console.log(res)),
        map(([first, second]) => {
          console.log(first, second);
          Number(first.crew) > Number(second.crew)
            ? (this.leftScore = this.leftScore + 1)
            : (this.rightScore = this.rightScore + 1);
          // TODO increment number for one card
          return Number(first.crew) > Number(second.crew) ? first : second;
        })
      );
    }
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
