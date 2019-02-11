import { IGameState } from '../types/games-state/games-state.interface';
import { GamesActionsUnion, GamesActionTypes } from './games.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdapter from './games.adapter';

export const initialGameState: IGameState = fromAdapter.adapter.getInitialState(
  {
    selectedGameId: null,
    error: false,
    loading: false
  }
);

export function gamesReducer(
  state: IGameState = initialGameState,
  action: GamesActionsUnion
): IGameState {
  switch (action.type) {
    case GamesActionTypes.GetGames:
      return { ...state, loading: true };
    case GamesActionTypes.GetGamesSuccess:
      return fromAdapter.adapter.addAll(action.payload, {
        ...state,
        loading: false
      });
    case GamesActionTypes.GetGamesFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const getGameState = createFeatureSelector<IGameState>('gamesState');

export const selectGameIds = createSelector(
  getGameState,
  fromAdapter.selectGameIds
);
export const selectGameEntities = createSelector(
  getGameState,
  fromAdapter.selectGameEntities
);
export const selectAllGames = createSelector(
  getGameState,
  fromAdapter.selectAllGames
);
export const selectGamesTotal = createSelector(
  getGameState,
  fromAdapter.selectGamesTotal
);
