import { Action, combineReducers } from '@ngrx/store';
import { IGamesState } from './../types/games-state/games-state.interface';
import { createGamestate } from '../types/games-state/games-state-functions';
import { listingsReducer } from '../modules/listings/store/listings.reducer';
import { platformsReducer } from '../modules/platforms/store/platforms.reducer';

export function gamesReducer(
  state: IGamesState = createGamestate(),
  action: Action
): IGamesState {
  switch (action.type) {
    default:
      return combineReducers<IGamesState>({
        listings: listingsReducer,
        platforms: platformsReducer
      })(state, action);
  }
}
