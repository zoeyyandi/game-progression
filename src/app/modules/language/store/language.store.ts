import { ILanguageState } from '../types/langage-state/language-state.interface';
import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILanguage } from '../types/language/language.interface';

@Injectable()
export class LanguageStore {
  constructor(private store: Store<IAppState>) {}

  public getLanguageState(): Observable<Array<ILanguage>> {
    return this.store.pipe(select(state => state.languageState.languages));
  }
}
