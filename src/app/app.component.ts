import { ProfileStore } from './modules/profile/store/profile.store';
import { GetLanguage } from './modules/language/store/language.actions';
import { GetProfile } from './modules/profile/store/profile.actions';
import { Store } from '@ngrx/store';
import { AppStore } from './store/app.store';
import { Component, OnChanges, OnInit } from '@angular/core';
import { IAppState } from './types/app-state/app-state.interface';
import * as fromReducer from '../app/modules/language/store/language.reducer';
import * as fromAdapter from '../app/modules/language/store/language.adapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private store: Store<IAppState>,
    public appStore: AppStore,
    public profileStore: ProfileStore
  ) {
    this.store.dispatch(new GetProfile());
    this.store.dispatch(new GetLanguage());
  }
  public languages = this.store.select(fromReducer.selectLanguageEntities);
  public languagesIds = this.store.select(fromReducer.selectLanguageIds);
  title = 'Game Progression';
}
