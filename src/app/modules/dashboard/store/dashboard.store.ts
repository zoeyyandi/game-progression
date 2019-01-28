import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Injectable } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import { AppStore } from '../../../store/app.store';
import { IDashboardState } from '../types/dashboard-state/dashboard-state.interface';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardStore {
  constructor(private store: Store<IAppState>) {}
  public getDashboardState(): Observable<IDashboardState> {
    return this.store.pipe(
      select(state => {
        console.log('im here', state.dashboardState);
        return state.dashboardState;
      })
    );
  }
}
