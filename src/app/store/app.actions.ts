import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { IAppState } from "../types/app-state/app-state.interface";

@Injectable()
export class AppStore {
  constructor(private store: Store<IAppState>) {}

  public getAppState(): Observable<IAppState> {
    return this.store.pipe(select(state => state));
  }
}
