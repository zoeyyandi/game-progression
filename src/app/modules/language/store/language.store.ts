import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILanguage } from '../types/language-state.interface';

@Injectable()
export class LanguageStore {
  constructor(private store: Store<IAppState>) {}

  public getLanguageState(): Observable<Array<ILanguage | Error>> {
    return this.store.pipe(select(state => state.languageState));
  }
}
