import { DashboardStore } from './../store/dashboard.store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// import { GetLanguage, GetProfile } from './../store/dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // constructor(private store: Store<IDashboardState>) {}
  constructor(
    // private store: Store<IDashboardState>,
    public dashboardStore: DashboardStore
  ) {}
  // ngOnInit() {
  //   this.store.dispatch(new GetProfile());
  //   this.store.dispatch(new GetLanguage());
  // }
}
