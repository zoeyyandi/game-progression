import { GetProfile } from './app.actions';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  IAppState,
  IProfile,
  ILanguage
} from '../types/app-state/app-state.interface';

@Injectable()
export class AppStore {
  constructor(private store: Store<IAppState>) {}

  public getprofileState(): Observable<IProfile> {
    return this.store.pipe(select(state => state.profileState));
  }
  public getLanguageState(): Observable<Array<ILanguage | Error>> {
    return this.store.pipe(select(state => state.languageState));
  }
}
