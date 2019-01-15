import { createListingsState } from '../../modules/listings/types/listings-state.functions';
import { createPlatformsState } from '../../modules/platforms/types/platforms-state.functions';

import { IGamesState } from './games-state.interface';

export function createGamestate(): IGamesState {
  return {
    listings: createListingsState(),
    platforms: createPlatformsState()
  };
}
