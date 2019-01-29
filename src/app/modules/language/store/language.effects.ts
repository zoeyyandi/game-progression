import { LanguageService } from './../services/language.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  LanguageActionTypes,
  GetLanguagesSuccess,
  GetLanguagesFailure
} from './language.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ILanguage } from '../types/language-state.interface';

@Injectable({ providedIn: 'root' })
export class LanguageEffects {
  constructor(
    private actions$: Actions,
    private languageService: LanguageService
  ) {}

  @Effect() language$: Observable<Action> = this.actions$.pipe(
    ofType(LanguageActionTypes.GetLanguage),
    switchMap(() =>
      this.languageService
        .getLanguages()
        .pipe(map((language: ILanguage) => new GetLanguagesSuccess(language)))
    ),
    catchError(error => observableOf(new GetLanguagesFailure(error)))
  );
}