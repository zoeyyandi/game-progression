import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PlatformsActionTypes,
  PlatformsActionsUnion
} from './platforms.actions';
import { IPlatformState } from '../types/platforms-state/platforms-state.interface';
import * as fromAdapter from './platforms.adapter';

export const initialPlatformsState: IPlatformState = fromAdapter.adapter.getInitialState(
  {
    selectedPlatformId: null,
    error: false,
    loading: false
  }
);

export function platformsReducer(
  state: IPlatformState = initialPlatformsState,
  action: PlatformsActionsUnion
): IPlatformState {
  switch (action.type) {
    case PlatformsActionTypes.GetPlatforms:
      return { ...state };
    case PlatformsActionTypes.GetPlatformsSuccess:
      return fromAdapter.adapter.addAll(action.payload, {
        ...state,
        loading: false
      });
    case PlatformsActionTypes.GetPlatformsFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const getPlatformState = createFeatureSelector<IPlatformState>(
  'platformsState'
);

export const selectPlatformIds = createSelector(
  getPlatformState,
  (state: IPlatformState) => state.ids
);
export const selectPlatformEntities = createSelector(
  getPlatformState,
  (state: IPlatformState) => state.entities
);
export const selectAllPlatforms = createSelector(
  getPlatformState,
  fromAdapter.selectAll
);
