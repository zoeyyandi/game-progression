import { GamesService } from './../services/games.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  GamesActionTypes,
  GetGamesSuccess,
  GetGamesFailure
} from './games.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IGame } from '../types/games-state/games-state.interface';

@Injectable({ providedIn: 'root' })
export class GamesEffects {
  constructor(private actions$: Actions, private gamesService: GamesService) {}

  @Effect() games$: Observable<Action> = this.actions$.pipe(
    ofType(GamesActionTypes.GetGames),
    switchMap(() =>
      this.gamesService
        .getGames()
        .pipe(map((games: IGame) => new GetGamesSuccess(games)))
    ),
    catchError(error => observableOf(new GetGamesFailure(error)))
  );
}
