import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILanguageState } from '../types/langage-state/language-state.interface';
import { LanguageActionsUnion, LanguageActionTypes } from './language.actions';
import * as fromAdapter from './language.adapter';

export const initialLanguagesState: ILanguageState = fromAdapter.adapter.getInitialState(
  {
    selectedLanguageId: null,
    error: false,
    loading: false
  }
);

export function languageReducer(
  state: ILanguageState = initialLanguagesState,
  action: LanguageActionsUnion
): ILanguageState {
  switch (action.type) {
    case LanguageActionTypes.GetLanguage:
      return { ...state };
    case LanguageActionTypes.GetLanguagesSuccess:
      return fromAdapter.adapter.addAll(action.payload, {
        ...state,
        loading: false
      });
    case LanguageActionTypes.GetLanguagesFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const getLanguageState = createFeatureSelector<ILanguageState>(
  'languageState'
);

export const selectLanguageIds = createSelector(
  getLanguageState,
  (state: ILanguageState) => state.ids
);
export const selectLanguageEntities = createSelector(
  getLanguageState,
  (state: ILanguageState) => state.entities
);
export const selectAllLanguages = createSelector(
  getLanguageState,
  fromAdapter.selectAll
);
