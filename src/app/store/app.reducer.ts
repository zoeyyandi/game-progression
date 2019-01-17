import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from '../../environments/environment';
import { dashboardReducer } from '../modules/dashboard/store/dashboard.reducer';
import { gamesReducer } from '../modules/games/store/games.reducer';
import { IAppState } from '../types/app-state/app-state.interface';

export const reducers: ActionReducerMap<IAppState> = {
  dashboardState: dashboardReducer,
  gamesState: gamesReducer
};

export function logger(reducer: ActionReducer<IAppState>): any {
  return storeLogger({
    collapsed: true
  })(reducer);
}

export const metaReducers: Array<
  MetaReducer<IAppState>
> = !environment.production ? [logger] : [];
