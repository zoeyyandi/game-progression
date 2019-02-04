import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  UpdateProfileSuccess,
  YourProfileActionTypes,
  UpdateProfileFailure
} from './yourProfile.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IProfile } from '../../profile/types/profile-state.interface';
import { YourProfileService } from '../services/yourProfile.service';

@Injectable({ providedIn: 'root' })
export class YourProfileEffects {
  constructor(
    private actions$: Actions,
    private yourProfileService: YourProfileService
  ) {}

  @Effect() profile$: Observable<Action> = this.actions$.pipe(
    ofType(YourProfileActionTypes.UpdateProfile),
    switchMap(() =>
      this.yourProfileService
        .updateProfile()
        .pipe(map((profile: IProfile) => new UpdateProfileSuccess(profile)))
    ),
    catchError(error => observableOf(new UpdateProfileFailure(error)))
  );
}
