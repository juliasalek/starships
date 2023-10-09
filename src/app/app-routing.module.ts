import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'human',
    loadChildren: () =>
      import('./modules/human/human.module').then(
        (m) => m.HumanModule
      ),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./modules/starships/starships.module').then(
        (m) => m.StarshipsModule
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
