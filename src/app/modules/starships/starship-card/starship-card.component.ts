import { Component, Input } from '@angular/core';
import { MatBadgePosition } from '@angular/material/badge';
import { Starship } from '../../../interfaces';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
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

        &-content {
          width: 350px;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
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
export class StarshipCardComponent {
  @Input() public starship!: Starship;
  @Input() public badgePosition: MatBadgePosition = 'after';
  @Input() public counter = 0;
}
