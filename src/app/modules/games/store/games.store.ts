import { IPlatformState } from './../../platforms/types/platforms-state/platforms-state.interface';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../types/app-state/app-state.interface';
import { IGameState } from '../types/games-state/games-state.interface';

@Injectable()
export class GamesStore {
  constructor(private store: Store<IAppState>) {}

  public getGames(): Observable<IGameState> {
    return this.store.pipe(select(state => state.gamesState));
  }
  public getPlatforms(): Observable<IPlatformState> {
    return this.store.pipe(select(state => state.platformsState));
  }
}
