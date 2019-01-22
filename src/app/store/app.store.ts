import { Injectable } from '@angular/core';
import {
  select,
  Store,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAppState, IProfile } from '../types/app-state/app-state.interface';

@Injectable()
export class AppStore {
  constructor(private store: Store<IAppState>) {}

  public getProfileState(): Observable<IProfile> {
    return this.store.pipe(select(state => state.profileState));
  }
}
