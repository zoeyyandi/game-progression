import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../types/app-state/app-state.interface';
import { AppStore } from '../../../store/app.store';

@Injectable()
export class DashboardStore {
  constructor(private appStore: AppStore, private store: Store<IAppState>) {}
}
