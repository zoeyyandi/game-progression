import { IProfile } from './../../profile/types/profile-state.interface';
import { Action } from '@ngrx/store';

export enum YourProfileActionTypes {
  UpdateProfile = '[YourProfile] Update Profile',
  UpdateProfileSuccess = '[YourProfile] Update Profile Success',
  UpdateProfileFailure = '[YourProfile] Update Profile Failure'
}

export class UpdateProfile implements Action {
  readonly type = YourProfileActionTypes.UpdateProfile;
}

export class UpdateProfileSuccess implements Action {
  readonly type = YourProfileActionTypes.UpdateProfileSuccess;
  constructor(public payload: IProfile) {}
}

export class UpdateProfileFailure implements Action {
  readonly type = YourProfileActionTypes.UpdateProfileFailure;
  constructor(public payload: Error) {}
}

export type YourProfileActionsUnion =
  | UpdateProfile
  | UpdateProfileSuccess
  | UpdateProfileFailure;
