import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanBattleComponent } from './human-battle/human-battle.component';
import { MatButtonModule } from '@angular/material/button';
import { HumanCardComponent } from './human-card/human-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

//TODO make export of all Mat modules

@NgModule({
  declarations: [HumanBattleComponent, HumanCardComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatBadgeModule],
  exports: [HumanBattleComponent],
})
export class HumanBattleModule {}
