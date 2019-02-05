import { ILanguage } from '../language/language.interface';

export interface ILanguageState {
  languages?: Array<ILanguage>;
  error?: Boolean;
}
