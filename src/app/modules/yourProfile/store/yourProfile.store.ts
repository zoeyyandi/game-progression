import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { Injectable } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import { IYourProfileState } from './../types/yourProfile-state.interface';
import { Observable } from 'rxjs';

@Injectable()
export class YourProfileStore {
  constructor(private store: Store<IAppState>) {}
  // public getDashboardState(): Observable<IYourProfileState> {
  //   return this.store.pipe(select(state => state.dashboardState));
  // }
}
