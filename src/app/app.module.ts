import { DashboardService } from './modules/dashboard/services/dashboard.service';
import { AppEffects } from './store/app.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { DashboardEffects } from './modules/dashboard/store/dashboard.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/app.reducer';
import { AppStore } from './store/app.store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 15
    }),
    EffectsModule.forRoot([AppEffects, DashboardEffects])
  ],
  providers: [AppStore, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
