import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IDashboardState } from 'src/app/modules/dashboard/types/dashboard-state/dashboard-state.interface';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './DashboardCard.component.html',
  styleUrls: ['./dashboardCard.component.scss']
})
export class DashboardCardComponent implements OnChanges {
  @Input() summary: IDashboardState;
  progressBar1: number;
  progressBar2: number;
  ngOnChanges() {
    const totalGames =
      this.summary.numberOfFinishedGames + this.summary.numberOfUnfinishedGames;
    if (this.summary.numberOfUnfinishedGames !== 0) {
      this.progressBar1 =
        (this.summary.numberOfUnfinishedGames / totalGames) * 100;
      this.progressBar2 =
        (this.summary.numberOfFinishedGames / totalGames) * 100;
    }
  }
}
