import { IPlatform } from '../types/platforms/platforms.interface';
import { Action } from '@ngrx/store';

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
  constructor(public payload: IPlatform[]) {}
}

export class GetPlatformsFailure implements Action {
  readonly type = PlatformsActionTypes.GetPlatformsFailure;
  constructor(public payload: Boolean) {}
}

export type PlatformsActionsUnion =
  | GetPlatforms
  | GetPlatformsSuccess
  | GetPlatformsFailure;
