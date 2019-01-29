import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  GetProfileSuccess,
  ProfileActionTypes,
  GetProfileFailure
} from './profile.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IProfile } from '../types/profile-state.interface';
import { ProfileService } from '../services/profile.service';

@Injectable({ providedIn: 'root' })
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

  @Effect() profile$: Observable<Action> = this.actions$.pipe(
    ofType(ProfileActionTypes.GetProfile),
    switchMap(() =>
      this.profileService
        .getProfile()
        .pipe(map((profile: IProfile) => new GetProfileSuccess(profile)))
    ),
    catchError(error => observableOf(new GetProfileFailure(error)))
  );
}
