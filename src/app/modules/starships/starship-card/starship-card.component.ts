import { Component, Input } from '@angular/core';
import { MatBadgePosition } from '@angular/material/badge';
import { Starship } from '../../../interfaces';

@Component({
  selector: 'app-starship-card',
  template: `
    <mat-card
      [matBadge]="counter"
      matBadgeColor="warn"
      matBadgeSize="medium"
      [matBadgePosition]="badgePosition"
      class="starship-card"
      [ngClass]="{ 'starship-card--right': badgePosition === 'after' }"
    >
      <mat-card-header>
        <mat-icon mat-card-avatar class="starship-card-icon">face</mat-icon>
        <mat-card-title class="starship-card-title">{{
          starship.name
        }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="starship-card-content">
          <div *ngFor="let item of starship | keyvalue">
            <span [ngStyle]="{ 'font-weight': 900 }"> {{ item.key }} </span>
            {{ item.value }}
          </div>
        </div>
      </mat-card-content>
      <mat-card-actions> </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      .starship-card {
        background-color: var(--light-beige);
        display: flex;
        align-items: center;

        &-icon {
          color: var(--light-orange);
        }

        &-title {
          color: var(--light-blue);
        }

        &-content {
          width: 350px;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
      }

      .starship-card--right {
        .starship-card-icon {
          color: var(--light-blue);
        }
      }
    `,
  ],
})
export class StarshipCardComponent {
  @Input() public starship!: Starship;
  @Input() public badgePosition: MatBadgePosition = 'after';
  @Input() public counter = 0;
}
