import { Action } from '@ngrx/store';
import { IProfile, ILanguage } from '../types/app-state/app-state.interface';

export enum ProfileActionTypes {
  GetProfile = '[Profile] Get Profile',
  GetProfileSuccess = '[Profile] Get Profile Success',
  GetProfileFailure = '[Profile] Get Profile Failure'
}

export enum LanguageActionTypes {
  GetLanguage = '[Language] Get Language',
  GetLanguagesSuccess = '[Language] Get Language Success',
  GetLanguagesFailure = '[Language] Get Language Failure'
}

export class GetProfile implements Action {
  readonly type = ProfileActionTypes.GetProfile;
}

export class GetProfileSuccess implements Action {
  readonly type = ProfileActionTypes.GetProfileSuccess;
  constructor(public payload: IProfile) {}
}

export class GetProfileFailure implements Action {
  readonly type = ProfileActionTypes.GetProfileFailure;
  constructor(public payload: Error) {}
}

export class GetLanguage implements Action {
  readonly type = LanguageActionTypes.GetLanguage;
}

export class GetLanguagesSuccess implements Action {
  readonly type = LanguageActionTypes.GetLanguagesSuccess;
  constructor(public payload: ILanguage) {}
}

export class GetLanguagesFailure implements Action {
  readonly type = LanguageActionTypes.GetLanguagesFailure;
  constructor(public payload: Error) {}
}

export type ProfileActionsUnion =
  | GetProfile
  | GetProfileSuccess
  | GetProfileFailure;

export type LanguageActionsUnion =
  | GetLanguage
  | GetLanguagesSuccess
  | GetLanguagesFailure;
