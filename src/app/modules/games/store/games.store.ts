import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../types/app-state/app-state.interface';
import { IGame } from '../../dashboard/types/dashboard-state/dashboard-state.interface';
@Injectable()
export class GamesStore {
  constructor(private store: Store<IAppState>) {}

  public getGamesState(): Observable<Array<IGame | Error>> {
    return this.store.pipe(select(state => state.gamesState));
  }
}
