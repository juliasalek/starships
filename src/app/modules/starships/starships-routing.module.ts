import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsBattleComponent } from './starships-battle/starships-battle.component';

const routes: Routes = [{ path: '', component: StarshipsBattleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipsRoutingModule {}
