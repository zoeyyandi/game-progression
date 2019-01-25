import { ILanguage, IProfile } from './../types/app-state/app-state.interface';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { dashboardReducer } from '../modules/dashboard/store/dashboard.reducer';
import { IAppState } from '../types/app-state/app-state.interface';
import {
  ProfileActionsUnion,
  ProfileActionTypes,
  LanguageActionsUnion,
  LanguageActionTypes
} from './app.actions';

const initialProfileState = {
  id: 0,
  firstName: '',
  lastName: '',
  image: '',
  languageId: 0,
  averageNumberOfHoursPerDay: 0
};

const initialLanguagesState = [];

export function profileReducer(
  state: IProfile = initialProfileState,
  action: ProfileActionsUnion
): IProfile {
  switch (action.type) {
    case ProfileActionTypes.GetProfile:
      return { ...state };
    case ProfileActionTypes.GetProfileSuccess:
      return { ...action.payload };
    case ProfileActionTypes.GetProfileFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export function languageReducer(
  state: Array<ILanguage | Error> = initialLanguagesState,
  action: LanguageActionsUnion
): Array<ILanguage | Error> {
  switch (action.type) {
    case LanguageActionTypes.GetLanguage:
      return [...state];
    case LanguageActionTypes.GetLanguagesSuccess:
      return [...state, action.payload];
    case LanguageActionTypes.GetLanguagesFailure:
      return [...state, action.payload];
    default:
      return state;
  }
}

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
