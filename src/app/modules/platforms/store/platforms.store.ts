import { IPlatform } from '../types/platforms/platforms.interface';
import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class PlatformStore {
  constructor(private store: Store<IAppState>) {}

  public getPlatformsState(): Observable<Array<IPlatform>> {
    return this.store.pipe(select(state => state.platformsState.platforms));
  }
}
