import {
  PlatformsActionTypes,
  PlatformsActionsUnion
} from './platforms.actions';
import { IPlatformState } from '../types/platforms-state/platforms-state.interface';

const initialPlatformsState = {};

export function platformsReducer(
  state: IPlatformState = initialPlatformsState,
  action: PlatformsActionsUnion
): IPlatformState {
  switch (action.type) {
    case PlatformsActionTypes.GetPlatforms:
      return { ...state };
    case PlatformsActionTypes.GetPlatformsSuccess:
      return { ...state, platforms: action.payload };
    case PlatformsActionTypes.GetPlatformsFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
