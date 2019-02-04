import { ILanguageState } from '../types/langage-state/language-state.interface';
import { LanguageActionsUnion, LanguageActionTypes } from './language.actions';

const initialLanguagesState = {};

export function languageReducer(
  state: ILanguageState = initialLanguagesState,
  action: LanguageActionsUnion
): ILanguageState {
  switch (action.type) {
    case LanguageActionTypes.GetLanguage:
      return { ...state };
    case LanguageActionTypes.GetLanguagesSuccess:
      return { ...state, languages: [action.payload] };
    case LanguageActionTypes.GetLanguagesFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
