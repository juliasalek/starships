import { Component, Input } from '@angular/core';
import { MatBadgePosition } from '@angular/material/badge';
import { Human } from 'src/app/services/star-wars-api-service.service';
// TODO if field is unknown then dont display

@Component({
  selector: 'app-human-card',
  templateUrl: './human-card.component.html',
  styleUrls: ['./human-card.component.scss']
})
export class HumanCardComponent {
  @Input() public human!: Human;
  @Input() public badgePosition: MatBadgePosition = "after";
  @Input() public counter = 0;
}
