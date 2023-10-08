import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanBattleComponent } from './components/human-battle/human-battle/human-battle.component';

const routes: Routes = [
  {
    path: '',
    component: HumanBattleComponent,
    title: 'Human Battle!'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
