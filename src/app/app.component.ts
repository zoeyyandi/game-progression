import { GetProfile, GetLanguage } from './store/app.actions';
import { Store } from '@ngrx/store';
import { AppStore } from './store/app.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Game Progression';
  constructor(private store: Store<AppStore>) {}
  ngOnInit() {
    this.store.dispatch(new GetProfile());
    this.store.dispatch(new GetLanguage());
  }
}
