import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetListings } from './../modules/listings/store/listings.actions';
import { GetPlatforms } from './../modules/platforms/store/platforms.actions';
import { IPlatforms } from './../modules/platforms/types/platforms-state.interface';
import { IGamesState } from './../types/games-state/games-state.interface';
import { IListings } from './../modules/listings/types/listings-state.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  title = 'Games Listings';
  listings$: Observable<IListings>;
  platforms$: Observable<IPlatforms>;
  constructor(private store: Store<IGamesState>) {}

  ngOnInit() {
    this.store.dispatch(new GetListings());
    this.store.dispatch(new GetPlatforms());
  }
}
