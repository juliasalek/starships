import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanBattleComponent } from './human-battle/human-battle.component';

const routes: Routes = [{ path: '', component: HumanBattleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumanRoutingModule {}
