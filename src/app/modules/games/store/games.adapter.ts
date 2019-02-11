import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IGame } from '../types/games/games.interface';

export const selectGameId = (a: IGame) => {
  return a.id;
};

export const adapter: EntityAdapter<IGame> = createEntityAdapter<IGame>({});

export const {
  selectIds: selectGameIds,
  selectEntities: selectGameEntities,
  selectAll: selectAllGames,
  selectTotal: selectGamesTotal
} = adapter.getSelectors();
