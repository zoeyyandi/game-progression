// import { Injectable } from '@angular/core';
// import { Effect, Actions, ofType } from '@ngrx/effects';
// import { Observable, of as observableOf } from 'rxjs';
// import { Action } from '@ngrx/store';
// import {
//   UpdateProfileSuccess,
//   ProfileActionTypes,
//   UpdateProfileFailure
// } from './yourProfile.actions';
// import { switchMap, map, catchError } from 'rxjs/operators';
// import { AppService } from '../services/app.service';
// import { IProfile, ILanguage } from '../types/app-state/app-state.interface';

// @Injectable({ providedIn: 'root' })
// export class AppEffects {
//   constructor(private actions$: Actions, private appService: AppService) {}

//   @Effect() profile$: Observable<Action> = this.actions$.pipe(
//     ofType(ProfileActionTypes.UpdateProfile),
//     switchMap(() =>
//       this.appService
//         .updateProfile()
//         .pipe(map((profile: IProfile) => new UpdateProfileSuccess(profile)))
//     ),
//     catchError(error => observableOf(new UpdateProfileFailure(error)))
//   );
// }
