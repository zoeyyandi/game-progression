import { Action } from '@ngrx/store';
import { IPlatforms } from './../types/platforms-state.interface';

export enum PlatformsActionTypes {
  GetPlatforms = '[Platforms] Get Platforms',
  GetPlatformsSuccess = '[Platforms] Get Platforms Success',
  GetPlatformsFailure = '[Platforms] Get Platforms Failure'
}

export class GetPlatforms implements Action {
  readonly type = PlatformsActionTypes.GetPlatforms;
}

export class GetPlatformsSuccess implements Action {
  readonly type = PlatformsActionTypes.GetPlatformsSuccess;
  constructor(public payload: IPlatforms) {}
}

export class GetPlatformsFailure implements Action {
  readonly type = PlatformsActionTypes.GetPlatformsFailure;
  constructor(public payload: Error) {}
}

export type PlatformsActionsUnion =
  | GetPlatforms
  | GetPlatformsSuccess
  | GetPlatformsFailure;
