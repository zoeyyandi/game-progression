import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent } from './components/games.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesStore } from './store/games.store';

@NgModule({
  declarations: [GamesComponent],
  imports: [CommonModule, RouterModule, GamesRoutingModule],
  exports: [],
  providers: [GamesStore],
  bootstrap: [GamesComponent]
})
export class GamesModule {}
