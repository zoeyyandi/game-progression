import { IPlatform } from 'src/app/modules/platforms/types/platforms/platforms.interface';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../types/app-state/app-state.interface';
import { IGame } from '../../dashboard/types/dashboard-state/dashboard-state.interface';
import { map, filter, mergeAll } from 'rxjs/operators';

@Injectable()
export class GamesStore {
  constructor(private store: Store<IAppState>) {}

  public getGames(): Observable<any> {
    return this.store.pipe(select(state => state.gamesState));
  }
  public getPlatforms(): Observable<Array<IPlatform>> {
    return this.store.pipe(select(state => state.platformsState.platforms));
  }
}
