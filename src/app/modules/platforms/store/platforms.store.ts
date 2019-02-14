import { IPlatformState } from './../types/platforms-state/platforms-state.interface';
import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class PlatformStore {
  constructor(private store: Store<IAppState>) {}

  public getPlatformsState(): Observable<IPlatformState> {
    return this.store.pipe(select(state => state.platformsState));
  }
}
