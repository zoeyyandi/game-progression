import { AppEffects } from "./store/app.effects";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/app.reducer";
import { AppStore } from "./store/app.store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 15
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
