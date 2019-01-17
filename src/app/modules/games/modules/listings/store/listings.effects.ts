import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  GetListingsSuccess,
  GetListingsFailure,
  ListingsActionTypes
} from './listings.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ListingsService } from './../services/listings.service';
import { IListings } from './../types/listings-state.interface';

@Injectable({ providedIn: 'root' })
export class ListingsEffects {
  constructor(
    private actions$: Actions,
    private listingsService: ListingsService
  ) {}

  @Effect() profile$: Observable<Action> = this.actions$.pipe(
    ofType(ListingsActionTypes.GetListings),
    switchMap(() =>
      this.listingsService
        .getListings()
        .pipe(map((listings: IListings) => new GetListingsSuccess(listings)))
    ),
    catchError(error => observableOf(new GetListingsFailure(error)))
  );
}
