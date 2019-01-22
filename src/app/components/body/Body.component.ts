import { Component, OnInit, Input } from '@angular/core';
import { IGamesState } from '../../modules/games/types/games-state/games-state.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() Games: IGamesState;
  // @Input() Dashboard: IDashboardState;

  constructor() {}

  ngOnInit() {}
}
