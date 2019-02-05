import { IGameState } from 'src/app/modules/games/types/games-state/games-state.interface';
import { GamesActionsUnion, GamesActionTypes } from './games.actions';

const initialGamesState = {};

export function gamesReducer(
  state: IGameState = initialGamesState,
  action: GamesActionsUnion
): IGameState {
  switch (action.type) {
    case GamesActionTypes.GetGames:
      return { ...state };
    case GamesActionTypes.GetGamesSuccess:
      return { ...state, games: action.payload };
    case GamesActionTypes.GetGamesFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
