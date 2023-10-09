import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HumanBattleComponent } from './human-battle';
import { HumanCardComponent } from './human-card';
import { HumanRoutingModule } from './human-routing.module';

const uiLibModule = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [HumanBattleComponent, HumanCardComponent],
  imports: [CommonModule, HumanRoutingModule, ...uiLibModule],
})
export class HumanModule {}
