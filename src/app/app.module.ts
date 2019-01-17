import { AppRoutingModule } from './app-routing.module';
import { PlatformsService } from './modules/games/modules/platforms/services/platforms.service';
import { ListingsService } from './modules/games/modules/listings/services/listings.service';
import { PlatformsEffects } from './modules/games/modules/platforms/store/platforms.effects';
import { ListingsEffects } from './modules/games/modules/listings/store/listings.effects';
import { DashboardService } from './modules/dashboard/services/dashboard.service';
import { AppEffects } from './store/app.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { DashboardEffects } from './modules/dashboard/store/dashboard.effects';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/Header.component';
import { FooterComponent } from './components/footer/Footer.component';
import { BodyComponent } from './components/body/Body.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/app.reducer';
import { AppStore } from './store/app.store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BodyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 15
    }),
    EffectsModule.forRoot([
      AppEffects,
      DashboardEffects,
      ListingsEffects,
      PlatformsEffects
    ])
  ],
  providers: [AppStore, DashboardService, ListingsService, PlatformsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
