import { DashboardEffects } from './store/dashboard.effects';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './services/dashboard.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardStore } from './store/dashboard.store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([DashboardEffects])
  ],
  declarations: [DashboardComponent],
  exports: [],
  providers: [DashboardStore, DashboardService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {}
