import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  combineLatest,
  filter,
  map,
  takeUntil,
} from 'rxjs';
import { Human } from '../../../interfaces';
import { StarWarsApiService } from '../../../services';

@Component({
  selector: 'app-human-battle',
  templateUrl: './human-battle.component.html',
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
export class HumanBattleComponent implements OnInit, OnDestroy {
  public leftHuman$?: Observable<Human>;
  public rightHuman$?: Observable<Human>;
  public winner$?: Observable<Human>;
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
    const leftHumanId = this.getRandomNumber(1, 82).toString();
    const rightHumanId = this.getRandomNumber(1, 82).toString();
    this.leftHuman$ = this.apiService
      .getHumanById(leftHumanId)
      .pipe(takeUntil(this.destroyed$));
    this.rightHuman$ = this.apiService
      .getHumanById(rightHumanId)
      .pipe(takeUntil(this.destroyed$));

    this.comparePlayers();
  }

  private comparePlayers(): void {
    this.winner$ = combineLatest([
      this.leftHuman$ as Observable<Human>,
      this.rightHuman$ as Observable<Human>,
    ]).pipe(
      filter(
        ([leftValue, rightValue]) =>
          leftValue !== undefined && rightValue !== undefined
      ),
      map(([first, second]) => {
        Number(first.height) > Number(second.height)
          ? (this.leftScore = this.leftScore + 1)
          : (this.rightScore = this.rightScore + 1);
        return Number(first.height) > Number(second.height) ? first : second;
      }),
      takeUntil(this.destroyed$)
    );
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
