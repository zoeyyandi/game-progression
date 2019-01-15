import { Action } from '@ngrx/store';
import { IListings } from './../types/listings-state.interface';
import { createListingsState } from '../types/listings-state.functions';
import { ListingsActionsUnion, ListingsActionTypes } from './listings.actions';

export function listingsReducer(
  state: IListings = createListingsState(),
  action: ListingsActionsUnion
): IListings {
  switch (action.type) {
    case ListingsActionTypes.GetListings:
      return { ...state };
    case ListingsActionTypes.GetListingsSuccess:
      return { ...state };
    case ListingsActionTypes.GetListingsFailure:
      return { ...state };
  }
}
