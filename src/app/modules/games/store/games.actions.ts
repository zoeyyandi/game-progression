import { Action } from '@ngrx/store';
import { IGame } from '../types/games-state/games-state.interface';

export enum GamesActionTypes {
  GetGames = '[Games] Get Games',
  GetGamesSuccess = '[Games] Get Games Success',
  GetGamesFailure = '[Games] Get Games Failure'
}

export class GetGames implements Action {
  readonly type = GamesActionTypes.GetGames;
}

export class GetGamesSuccess implements Action {
  readonly type = GamesActionTypes.GetGamesSuccess;
  constructor(public payload: IGame) {}
}

export class GetGamesFailure implements Action {
  readonly type = GamesActionTypes.GetGamesFailure;
  constructor(public payload: Error) {}
}

export type GamesActionsUnion = GetGames | GetGamesSuccess | GetGamesFailure;
