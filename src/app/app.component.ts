import { GetLanguage } from './modules/dashboard/store/dashboard.actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  IProfile,
  IDashboardState,
  ILanguage
} from './modules/dashboard/types/dashboard-state/dashboard-state.interface';
import { GetProfile } from '../app/modules/dashboard/store/dashboard.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Game Progression';
  profile$: Observable<IProfile>;
  language$: Observable<ILanguage>;

  constructor(private store: Store<IDashboardState>) {}
  ngOnInit() {
    this.store.dispatch(new GetProfile());
    this.store.dispatch(new GetLanguage());
  }
}
