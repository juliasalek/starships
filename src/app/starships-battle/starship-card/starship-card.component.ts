import { Component, Input } from '@angular/core';
import { MatBadgePosition } from '@angular/material/badge';
import { Starship } from 'src/app/services/star-wars-api-service.service';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styles: [
    `
      .human-card {
        background-color: #f5efe7;
        display: flex;
        align-items: center;

        &-icon {
          color: #d8c4b6;
        }

        &-title {
          color: #4f709c;
        }

        &-content {
          width: 350px;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          flex-grow: 1; /* Pozwala treści na rozciągnięcie się i zajęcie dostępnej przestrzeni */
          padding: 20px; /* Wielkość wewnętrznego marginesu treści */
        }
      }

      .human-card--right {
        .human-card-icon {
          color: #4f709c;
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
