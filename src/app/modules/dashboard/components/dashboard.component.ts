import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetLanguage, GetProfile } from './../store/dashboard.actions';
import {
  IProfile,
  IDashboardState,
  ILanguage
} from '../types/dashboard-state/dashboard-state.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profile$: Observable<IProfile>;
  language$: Observable<ILanguage>;

  constructor(private store: Store<IDashboardState>) {}
  ngOnInit() {
    this.store.dispatch(new GetProfile());
    this.store.dispatch(new GetLanguage());
  }
}
