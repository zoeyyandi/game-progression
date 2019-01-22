import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  GetProfileSuccess,
  ProfileActionTypes,
  LanguageActionTypes,
  GetProfileFailure,
  GetLanguagesSuccess,
  GetLanguagesFailure
} from './app.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AppService } from '../services/app.service';
import { IProfile, ILanguage } from '../types/app-state/app-state.interface';

@Injectable({ providedIn: 'root' })
export class AppEffects {
  constructor(private actions$: Actions, private appService: AppService) {}

  @Effect() profile$: Observable<Action> = this.actions$.pipe(
    ofType(ProfileActionTypes.GetProfile),
    switchMap(() =>
      this.appService
        .getProfile()
        .pipe(map((profile: IProfile) => new GetProfileSuccess(profile)))
    ),
    catchError(error => observableOf(new GetProfileFailure(error)))
  );

  @Effect() language$: Observable<Action> = this.actions$.pipe(
    ofType(LanguageActionTypes.GetLanguage),
    switchMap(() =>
      this.appService
        .getLanguages()
        .pipe(map((language: ILanguage) => new GetLanguagesSuccess(language)))
    ),
    catchError(error => observableOf(new GetLanguagesFailure(error)))
  );
}
