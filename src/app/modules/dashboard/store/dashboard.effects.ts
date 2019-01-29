import { ProfileStore } from './../../profile/store/profile.store';
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
    private dashboardService: DashboardService,
    private profileStore: ProfileStore
  ) {}
  averageNumberOfHoursPerDay;
  number = this.profileStore
    .getProfileState()
    .pipe(map(profile => profile.averageNumberOfHoursPerDay))
    .subscribe(value => (this.averageNumberOfHoursPerDay = value));

  @Effect() gamesSummary$: Observable<Action> = this.actions$.pipe(
    ofType(DashboardActionTypes.GetGamesSummary),
    switchMap(() =>
      this.dashboardService.getGames().pipe(
        map((gamesSummary: IDashboardState) => {
          const result =
            Number(gamesSummary.timeRemaining) /
            this.averageNumberOfHoursPerDay;
          const roundedTo1Decimal = Math.round(result * 10) / 10;
          const summary = {
            ...gamesSummary,
            timeRemaining: `${roundedTo1Decimal.toFixed(1)} Days`
          };
          return new GetGamesSummarySuccess(summary);
        })
      )
    ),
    catchError(error => observableOf(new GetGamesSummaryFailure(error)))
  );
}
