import { IGameState } from 'src/app/modules/games/types/games-state/games-state.interface';
import { Observable } from 'rxjs';
import { GetPlatforms } from '../../../platforms/store/platforms.actions';
import { GetGames } from '../../store/games.actions';
import { GamesStore } from '../../store/games.store';
import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGame } from '../../types/games/games.interface';
import * as fromReducer from '../../store/games.reducer';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  title = 'Games Owned';
  games: Observable<IGame[]>;
  gamesCount: Observable<number>;
  constructor(private store: Store<IGameState>, public gamesStore: GamesStore) {
    this.store.dispatch(new GetGames());
    this.store.dispatch(new GetPlatforms());
  }
  ngOnInit() {
    this.gamesCount = this.store.select(fromReducer.selectGamesTotal);
    this.games = this.store.select(fromReducer.selectAllGames);
  }
}
