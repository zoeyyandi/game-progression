import { ILanguageState } from './../modules/language/types/langage-state/language-state.interface';
import { ILanguage } from '../modules/language/types/language/language.interface';
import { IProfile } from './../modules/profile/types/profile-state.interface';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../types/app-state/app-state.interface';

@Injectable()
export class AppStore {
  constructor(private store: Store<IAppState>) {}

  public getprofileState(): Observable<IProfile> {
    return this.store.pipe(select(state => state.profileState));
  }
  public getLanguageState(): Observable<ILanguageState> {
    return this.store.pipe(select(state => state.languageState));
  }
}
