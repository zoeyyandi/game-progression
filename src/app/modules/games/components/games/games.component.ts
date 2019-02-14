import { IGameState } from 'src/app/modules/games/types/games-state/games-state.interface';
import { Observable } from 'rxjs';
import { GetPlatforms } from '../../../platforms/store/platforms.actions';
import { GetGames } from '../../store/games.actions';
import { GamesStore } from '../../store/games.store';
import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGame } from '../../types/games/games.interface';
import * as fromGamesReducer from '../../store/games.reducer';
import * as fromPlatformsReducer from '../../../platforms/store/platforms.reducer';
import { IPlatform } from 'src/app/modules/platforms/types/platforms/platforms.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  title = 'Games Owned';
  games = this.store.select(fromGamesReducer.selectAllGames);
  gamesCount = this.store.select(fromGamesReducer.selectGamesTotal);
  platformsIds = this.store.select(fromPlatformsReducer.selectPlatformIds);
  platforms = this.store.select(fromPlatformsReducer.selectPlatformEntities);
  constructor(private store: Store<IGameState>, public gamesStore: GamesStore) {
    this.store.dispatch(new GetGames());
    this.store.dispatch(new GetPlatforms());
  }
}
