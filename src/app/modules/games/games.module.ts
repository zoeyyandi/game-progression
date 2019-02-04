import { PlatformsEffects } from './../platforms/store/platforms.effects';
import { PlatformsService } from './../platforms/services/platforms.service';
import { GameCardComponent } from './components/gameCard/GameCard.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { GamesEffects } from './store/games.effects';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent } from './components/games/games.component';
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
    EffectsModule.forFeature([GamesEffects, PlatformsEffects])
  ],
  providers: [GamesStore, GamesService, PlatformsService],
  bootstrap: [GamesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GamesModule {}
