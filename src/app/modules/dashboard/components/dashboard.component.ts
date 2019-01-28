import { GetGamesSummary } from './../store/dashboard.actions';
import { DashboardStore } from './../store/dashboard.store';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/types/app-state/app-state.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private store: Store<IAppState>,
    public dashboardStore: DashboardStore
  ) {
    this.store.dispatch(new GetGamesSummary());
  }
}
