import { Component, Input } from '@angular/core';
import { MatBadgePosition } from '@angular/material/badge';
import { Human } from '../../../interfaces';

@Component({
  selector: 'app-human-card',
  template: `
    <mat-card
      [matBadge]="counter"
      matBadgeColor="warn"
      matBadgeSize="medium"
      [matBadgePosition]="badgePosition"
      class="human-card"
      [ngClass]="{ 'human-card--right': badgePosition === 'after' }"
    >
      <mat-card-header>
        <mat-icon mat-card-avatar class="human-card-icon">face</mat-icon>
        <mat-card-title class="human-card-title">{{
          human.name
        }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div *ngFor="let item of human | keyvalue">
          <span [ngStyle]="{ 'font-weight': 900 }"> {{ item.key }} </span>
          {{ item.value }}
        </div>
      </mat-card-content>
      <mat-card-actions> </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      .human-card {
        background-color: var(--light-beige);
        display: flex;
        align-items: center;

        &-icon {
          color: var(--light-orange);
        }

        &-title {
          color: var(--light-blue);
        }
      }

      .human-card--right {
        .human-card-icon {
          color: var(--light-blue);
        }
      }
    `,
  ],
})
export class HumanCardComponent {
  @Input() public human!: Human;
  @Input() public badgePosition: MatBadgePosition = 'after';
  @Input() public counter = 0;
}
