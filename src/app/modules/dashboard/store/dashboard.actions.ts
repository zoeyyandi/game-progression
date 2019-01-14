import { Action } from '@ngrx/store';
import {
  IProfile,
  ILanguage
} from '../types/dashboard-state/dashboard-state.interface';

export enum DashboardActionTypes {
  GetProfile = '[Dashboard] Get Profile',
  GetProfileSuccess = '[Dashboard] Get Profile Success',
  GetProfileFailure = '[Dashboard] Get Profile Failure',
  GetLanguage = '[Dashboard] Get Language',
  GetLanguagesSuccess = '[Dashboard] Get Language Success',
  GetLanguagesFailure = '[Dashboard] Get Language Failure'
}

export class GetProfile implements Action {
  readonly type = DashboardActionTypes.GetProfile;
}

export class GetProfileSuccess implements Action {
  readonly type = DashboardActionTypes.GetProfileSuccess;
  constructor(public payload: IProfile) {}
}

export class GetProfileFailure implements Action {
  readonly type = DashboardActionTypes.GetProfileFailure;
  constructor(public payload: Error) {}
}

export class GetLanguage implements Action {
  readonly type = DashboardActionTypes.GetLanguage;
}

export class GetLanguagesSuccess implements Action {
  readonly type = DashboardActionTypes.GetLanguagesSuccess;
  constructor(public payload: Array<ILanguage>) {}
}

export class GetLanguagesFailure implements Action {
  readonly type = DashboardActionTypes.GetLanguagesFailure;
  constructor(public payload: Error) {}
}

export type DashboardActionsUnion =
  | GetProfile
  | GetProfileSuccess
  | GetProfileFailure
  | GetLanguage
  | GetLanguagesSuccess
  | GetLanguagesFailure;
