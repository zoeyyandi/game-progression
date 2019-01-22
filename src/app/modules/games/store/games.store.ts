import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAppState } from '../../../types/app-state/app-state.interface';
import { AppStore } from '../../../store/app.store';
import { IGamesState } from '../types/games-state/games-state.interface';

@Injectable()
export class GamesStore {
  constructor(private appStore: AppStore, private store: Store<IAppState>) {}

  // public getGamesState(): Observable<IGamesState> {
  //   return this.appStore.getAppState().pipe(map(state => state.gamesState));
  // }
}
