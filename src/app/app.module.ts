import { AppService } from './services/app.service';
import { AppRoutingModule } from './app-routing.module';
import { AppEffects } from './store/app.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
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
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AppStore, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
