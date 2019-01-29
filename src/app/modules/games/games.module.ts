import { GameCardComponent } from './../../components/gameCard/game-card.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { GamesEffects } from './store/games.effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent } from './components/games.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesStore } from './store/games.store';
import { GamesService } from './services/games.service';

@NgModule({
  declarations: [GamesComponent, GameCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    GamesRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([GamesEffects])
  ],
  exports: [],
  providers: [GamesStore, GamesService],
  bootstrap: [GamesComponent]
})
export class GamesModule {}
