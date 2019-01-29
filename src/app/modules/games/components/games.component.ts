import { GetGames } from './../store/games.actions';
import { GamesStore } from './../store/games.store';
import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  title = 'Games';
  constructor(private store: Store<IAppState>, public gamesStore: GamesStore) {
    this.store.dispatch(new GetGames());
  }
}
