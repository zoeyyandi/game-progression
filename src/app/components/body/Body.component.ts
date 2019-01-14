import { Component, OnInit, Input } from '@angular/core';
import { IGame } from '../../modules/games/types/games-state/games-state.interface';
import { IDashboardState } from '../../modules/dashboard/types/dashboard-state/dashboard-state.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() Games: IGame[];
  @Input() Dashboard: IDashboardState;

  constructor() {}

  ngOnInit() {}
}
