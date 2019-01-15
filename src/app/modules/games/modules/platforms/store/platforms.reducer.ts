import { Action } from '@ngrx/store';
import { IPlatforms } from './../types/platforms-state.interface';
import { createPlatformsState } from '../types/platforms-state.functions';
import {
  PlatformsActionsUnion,
  PlatformsActionTypes
} from './platforms.actions';

export function platformsReducer(
  state: IPlatforms = createPlatformsState(),
  action: PlatformsActionsUnion
): IPlatforms {
  switch (action.type) {
    case PlatformsActionTypes.GetPlatforms:
      return { ...state };
    case PlatformsActionTypes.GetPlatformsSuccess:
      return { ...state };
    case PlatformsActionTypes.GetPlatformsFailure:
      return { ...state };
  }
}
