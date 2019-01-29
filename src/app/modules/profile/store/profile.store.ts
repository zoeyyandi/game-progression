import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProfile } from '../types/profile-state.interface';

@Injectable()
export class ProfileStore {
  constructor(private store: Store<IAppState>) {}

  public getProfileState(): Observable<IProfile> {
    return this.store.pipe(select(state => state.profileState));
  }
}
