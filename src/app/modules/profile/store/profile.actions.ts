import { Action } from '@ngrx/store';
import { IProfile } from '../types/profile-state.interface';

export enum ProfileActionTypes {
  GetProfile = '[Profile] Get Profile',
  GetProfileSuccess = '[Profile] Get Profile Success',
  GetProfileFailure = '[Profile] Get Profile Failure'
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

export type ProfileActionsUnion =
  | GetProfile
  | GetProfileSuccess
  | GetProfileFailure;
