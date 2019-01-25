import { Action } from '@ngrx/store';
import { IDashboardState } from './../types/dashboard-state/dashboard-state.interface';

export enum DashboardActionTypes {
  GetGamesSummary = '[Dashboard] Get Games Summary',
  GetGamesSummarySuccess = '[Dashboard] Get Games Summary Success',
  GetGamesSummaryFailure = '[Dashboard] Get Games Summary Failure'
}

export class GetGamesSummary implements Action {
  readonly type = DashboardActionTypes.GetGamesSummary;
}

export class GetGamesSummarySuccess implements Action {
  readonly type = DashboardActionTypes.GetGamesSummarySuccess;
  constructor(public payload: IDashboardState) {}
}

export class GetGamesSummaryFailure implements Action {
  readonly type = DashboardActionTypes.GetGamesSummaryFailure;
  constructor(public payload: Error) {}
}

export type DashboardActionsUnion =
  | GetGamesSummary
  | GetGamesSummarySuccess
  | GetGamesSummaryFailure;
