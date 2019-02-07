import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './components/addGame/addGame.component';
import { GamesComponent } from './components/games/games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent
  },
  {
    path: 'add',
    component: AddGameComponent
  }
  // {
  //   path: 'edit/:id',
  //   component: EditGameComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
