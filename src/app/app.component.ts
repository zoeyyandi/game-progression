import { select, Store } from '@ngrx/store';
import { AppStore } from './store/app.store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from './modules/dashboard/types/dashboard-state/dashboard-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Game Progression';
  profile$: Observable<IProfile>;

  constructor(private store: Store<AppStore>) {
    this.profile$ = this.store.pipe(select('profile'));
  }
  ngOnInit() {
    console.log('im here', this.profile$);
  }
}
