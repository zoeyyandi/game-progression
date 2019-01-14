import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  GetProfileSuccess,
  DashboardActionTypes,
  GetProfileFailure,
  GetLanguagesSuccess,
  GetLanguagesFailure
} from './dashboard.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DashboardService } from '../services/dashboard.service';
import {
  IProfile,
  ILanguage
} from '../types/dashboard-state/dashboard-state.interface';

@Injectable({ providedIn: 'root' })
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}

  @Effect() profile$: Observable<Action> = this.actions$.pipe(
    ofType(DashboardActionTypes.GetProfile),
    switchMap(() =>
      this.dashboardService
        .getProfile()
        .pipe(map((profile: IProfile) => new GetProfileSuccess(profile)))
    ),
    catchError(error => observableOf(new GetProfileFailure(error)))
  );

  @Effect() language$: Observable<Action> = this.actions$.pipe(
    ofType(DashboardActionTypes.GetLanguage),
    switchMap(() =>
      this.dashboardService
        .getLanguages()
        .pipe(map((language: ILanguage) => new GetLanguagesSuccess([language])))
    ),
    catchError(error => observableOf(new GetLanguagesFailure(error)))
  );
}
