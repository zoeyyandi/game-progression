import { GetProfile, GetLanguage } from './store/app.actions';
import { Store } from '@ngrx/store';
import { AppStore } from './store/app.store';
import { Component } from '@angular/core';
import { IAppState } from './types/app-state/app-state.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<IAppState>, public appStore: AppStore) {
    this.store.dispatch(new GetProfile());
    this.store.dispatch(new GetLanguage());
  }
  title = 'Game Progression';
}
