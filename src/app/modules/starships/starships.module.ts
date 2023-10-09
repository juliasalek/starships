import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StarshipsBattleComponent } from './starships-battle';
import { StarshipCardComponent } from './starship-card';
import { StarshipsRoutingModule } from './starships-routing.module';

const uiLibModule = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [StarshipsBattleComponent, StarshipCardComponent],
  imports: [CommonModule, StarshipsRoutingModule, ...uiLibModule],
})
export class StarshipsModule {}
