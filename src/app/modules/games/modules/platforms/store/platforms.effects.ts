import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  GetPlatformsSuccess,
  GetPlatformsFailure,
  PlatformsActionTypes
} from './platforms.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PlatformsService } from './../services/platforms.service';
import { IPlatforms } from './../types/platforms-state.interface';

@Injectable({ providedIn: 'root' })
export class PlatformsEffects {
  constructor(
    private actions$: Actions,
    private platformsService: PlatformsService
  ) {}

  @Effect() profile$: Observable<Action> = this.actions$.pipe(
    ofType(PlatformsActionTypes.GetPlatforms),
    switchMap(() =>
      this.platformsService
        .getPlatforms()
        .pipe(
          map((platforms: IPlatforms) => new GetPlatformsSuccess(platforms))
        )
    ),
    catchError(error => observableOf(new GetPlatformsFailure(error)))
  );
}
