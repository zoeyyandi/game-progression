import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AppService } from '../services/app.service';

@Injectable({ providedIn: 'root' })
export class AppEffects {
  constructor(private actions$: Actions, private appService: AppService) {}
}
