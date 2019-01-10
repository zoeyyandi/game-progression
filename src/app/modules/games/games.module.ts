import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { GamesComponent } from "./components/games.component";
import { GamesRoutingModule } from "./games-routing.module";
import { GamesStore } from "./store/games.store";

@NgModule({
  imports: [CommonModule, RouterModule, GamesRoutingModule],
  declarations: [GamesComponent],
  exports: [],
  providers: [GamesStore]
})
export class GamesModule {}
