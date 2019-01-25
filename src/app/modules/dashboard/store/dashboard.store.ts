import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/app.store';
import { IDashboardState } from '../types/dashboard-state/dashboard-state.interface';

@Injectable()
export class DashboardStore {
  constructor(
    private appStore: AppStore,
    private dashboardStore: Store<IDashboardState>
  ) {}
}
