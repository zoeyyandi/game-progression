import { GamesActionsUnion, GamesActionTypes } from './games.actions';
import { IGame } from '../../dashboard/types/dashboard-state/dashboard-state.interface';

const initialGamesState = [];

export function gamesReducer(
  state: Array<IGame | Error> = initialGamesState,
  action: GamesActionsUnion
): Array<IGame | Error> {
  switch (action.type) {
    case GamesActionTypes.GetGames:
      return [...state];
    case GamesActionTypes.GetGamesSuccess:
      return [...state, action.payload];
    case GamesActionTypes.GetGamesFailure:
      return [...state, action.payload];
    default:
      return state;
  }
}
