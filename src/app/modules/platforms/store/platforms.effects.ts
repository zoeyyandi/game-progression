import { PlatformsService } from './../services/platforms.service';
import { IPlatform } from 'src/app/modules/platforms/types/platforms/platforms.interface';
import {
  GetPlatformsSuccess,
  PlatformsActionTypes,
  GetPlatformsFailure
} from './platforms.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlatformsEffects {
  constructor(
    private actions$: Actions,
    private platformService: PlatformsService
  ) {}

  @Effect() platform$: Observable<Action> = this.actions$.pipe(
    ofType(PlatformsActionTypes.GetPlatforms),
    switchMap(() =>
      this.platformService
        .getPlatforms()
        .pipe(
          map((platforms: IPlatform[]) => new GetPlatformsSuccess(platforms))
        )
    ),
    catchError(error => observableOf(new GetPlatformsFailure(true)))
  );
}
