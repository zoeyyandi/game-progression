import { ILanguage } from './../types/language-state.interface';
import { LanguageActionsUnion, LanguageActionTypes } from './language.actions';

const initialLanguagesState = [];

export function languageReducer(
  state: Array<ILanguage | Error> = initialLanguagesState,
  action: LanguageActionsUnion
): Array<ILanguage | Error> {
  switch (action.type) {
    case LanguageActionTypes.GetLanguage:
      return [...state];
    case LanguageActionTypes.GetLanguagesSuccess:
      return [...state, action.payload];
    case LanguageActionTypes.GetLanguagesFailure:
      return [...state, action.payload];
    default:
      return state;
  }
}
