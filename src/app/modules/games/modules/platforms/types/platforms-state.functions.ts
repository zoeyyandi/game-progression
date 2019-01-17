import { IPlatforms } from './platforms-state.interface';

export function createPlatformsState(): IPlatforms {
  return [{ id: 0, name: '' }];
}
