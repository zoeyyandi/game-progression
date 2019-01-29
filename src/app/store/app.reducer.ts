import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { dashboardReducer } from '../modules/dashboard/store/dashboard.reducer';
import { IAppState } from '../types/app-state/app-state.interface';
import { profileReducer } from '../modules/profile/store/profile.reducer';
import { languageReducer } from '../modules/language/store/language.reducer';

export const reducers: ActionReducerMap<IAppState> = {
  profileState: profileReducer,
  dashboardState: dashboardReducer,
  languageState: languageReducer
  // gamesState: gamesReducer,
};

export function logger(reducer: ActionReducer<IAppState>): any {
  return storeLogger({
    collapsed: true
  })(reducer);
}

export const metaReducers: Array<
  MetaReducer<IAppState>
> = !environment.production ? [logger] : [];
