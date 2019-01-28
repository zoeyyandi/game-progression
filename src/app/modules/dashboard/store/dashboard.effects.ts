import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  GetGamesSummarySuccess,
  GetGamesSummaryFailure,
  DashboardActionTypes
} from './dashboard.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DashboardService } from '../services/dashboard.service';
import { IDashboardState } from './../types/dashboard-state/dashboard-state.interface';

@Injectable({ providedIn: 'root' })
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}

  @Effect() gamesSummary$: Observable<Action> = this.actions$.pipe(
    ofType(DashboardActionTypes.GetGamesSummary),
    switchMap(() =>
      this.dashboardService
        .getGames()
        .pipe(
          map(
            (gamesSummary: IDashboardState) =>
              new GetGamesSummarySuccess(gamesSummary)
          )
        )
    ),
    catchError(error => observableOf(new GetGamesSummaryFailure(error)))
  );
}
