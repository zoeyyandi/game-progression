import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { IAppState } from "../../../types/app-state/app-state.interface";
import { AppStore } from "../../../store/app.store";
import { IDashboardState } from "../types/dashboard-state/dashboard-state.interface";

@Injectable()
export class DashboardStore {
  constructor(private appStore: AppStore, private store: Store<IAppState>) {}

  public getDashboardState(): Observable<IDashboardState> {
    return this.appStore.getAppState().pipe(
      map(function(state) {
        return state.dashboardState;
      })
    );
  }
}
