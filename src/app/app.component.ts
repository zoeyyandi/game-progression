import { LanguageStore } from './modules/language/store/language.store';
import { ProfileStore } from './modules/profile/store/profile.store';
import { GetLanguage } from './modules/language/store/language.actions';
import { GetProfile } from './modules/profile/store/profile.actions';
import { Store } from '@ngrx/store';
import { AppStore } from './store/app.store';
import { Component } from '@angular/core';
import { IAppState } from './types/app-state/app-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private store: Store<IAppState>,
    public appStore: AppStore,
    public profileStore: ProfileStore,
    public languageStore: LanguageStore
  ) {
    this.store.dispatch(new GetProfile());
    this.store.dispatch(new GetLanguage());
  }
  title = 'Game Progression';
}
