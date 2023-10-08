import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsBattleRoutingModule } from './starships-battle-routing.module';
import { StarshipsBattleComponent } from './starships-battle/starships-battle.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [StarshipsBattleComponent, StarshipCardComponent],
  imports: [
    CommonModule,
    StarshipsBattleRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
  ],
})
export class StarshipsBattleModule {}
