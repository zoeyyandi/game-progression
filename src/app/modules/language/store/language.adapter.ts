import { ILanguage } from './../types/language/language.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const adapter: EntityAdapter<ILanguage> = createEntityAdapter<ILanguage>(
  {}
);

// export const {
//   selectIds: selectLanguageIds,
//   selectEntities: selectLanguageEntities,
//   selectAll: selectAllLanguages,
//   selectTotal: selectLanguagesTotal
// } = adapter.getSelectors();

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
