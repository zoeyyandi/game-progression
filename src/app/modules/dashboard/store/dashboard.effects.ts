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
import { IGame } from '../types/dashboard-state/dashboard-state.interface';

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
            (games: IGame[]) =>
              new GetGamesSummarySuccess(transformGames(games))
          )
        )
    ),
    catchError(error => observableOf(new GetGamesSummaryFailure(error)))
  );
}

const transformGames = gamesArray => {
  return gamesArray.reduce(
    (acc, curr) => {
      if (!curr.isComplete) {
        return {
          ...acc,
          timeRemaining: acc.timeRemaining + curr.numberOfHoursToComplete,
          numberOfUnfinishedGames: acc.numberOfUnfinishedGames += 1
        };
      } else {
        return {
          ...acc,
          numberOfFinishedGames: acc.numberOfFinishedGames += 1
        };
      }
    },
    {
      timeRemaining: 0,
      numberOfFinishedGames: 0,
      numberOfUnfinishedGames: 0
    }
  );
};
