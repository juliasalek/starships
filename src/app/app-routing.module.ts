import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'human',
    loadChildren: () =>
      import('./human-battle/human-battle.module').then(
        (m) => m.HumanBattleModule
      ),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./starships-battle/starships-battle.module').then(
        (m) => m.StarshipsBattleModule
      ),
  },
  { path: '', redirectTo: '/human', pathMatch: 'full' },
  { path: '**', redirectTo: '/human' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
