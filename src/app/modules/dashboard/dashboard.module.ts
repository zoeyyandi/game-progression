import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./components/dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardStore } from "./store/dashboard.store";

@NgModule({
  imports: [CommonModule, RouterModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
  exports: [],
  providers: [DashboardStore]
})
export class DashboardModule {}
