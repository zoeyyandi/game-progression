import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IDashboardState } from 'src/app/modules/dashboard/types/dashboard-state/dashboard-state.interface';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './DashboardCard.component.html',
  styleUrls: ['./dashboardCard.component.scss']
})
export class DashboardCardComponent implements OnChanges {
  @Input() summary: IDashboardState;
  progressBar1 = 0;
  pRest: number;
  progressBar2 = 0;
  ngOnChanges() {
    const totalGames =
      this.summary.numberOfFinishedGames + this.summary.numberOfUnfinishedGames;
    // this.pRest = 100 - this.progressBar1;
    this.progressBar1 =
      (this.summary.numberOfUnfinishedGames / totalGames) * 100;
    this.progressBar2 = (this.summary.numberOfFinishedGames / totalGames) * 100;
  }
}
