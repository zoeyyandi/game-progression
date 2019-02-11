import { IGame } from '../games/games.interface';
import { EntityState } from '@ngrx/entity';

export interface IGameState extends EntityState<IGame> {
  selectedGameId: number | null;
  error: Boolean;
  loading: Boolean;
}
