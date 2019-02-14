import { EntityState } from '@ngrx/entity';
import { ILanguage } from '../language/language.interface';

export interface ILanguageState extends EntityState<ILanguage> {
  selectedLanguageId: number | null;
  error: Boolean;
  loading: Boolean;
}
