import { IGame } from '../games/games.interface';

export interface IGameState {
  games?: Array<IGame>;
  error?: Error;
}
