import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map, takeUntil, withLatestFrom } from 'rxjs';
import { Human } from '../../../interfaces';
import { StarWarsApiService } from '../../../services';

@Component({
  selector: 'app-human-battle',
  templateUrl: './human-battle.component.html',
  styleUrls: ['./human-battle.component.scss'],
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
    // TODO think about the case of the same id in generating
    this.generateNewPlayers();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public generateNewPlayers() {
    //TODO use tap to see how many observable are here
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
    if (this.rightHuman$ && this.leftHuman$) {
      this.winner$ = this.leftHuman$.pipe(
        takeUntil(this.destroyed$),
        withLatestFrom(this.rightHuman$),
        map(([first, second]) => {
          console.log(first, second);
          Number(first.height) > Number(second.height)
            ? (this.leftScore = this.leftScore + 1)
            : (this.rightScore = this.rightScore + 1);
          // TODO increment number for one card
          return Number(first.height) > Number(second.height) ? first : second;
        })
      );
    }
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
