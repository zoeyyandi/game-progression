import { YourProfileComponent } from './components/yourProfile.component';
import { YourProfileEffects } from './store/yourProfile.effects';
import { YourProfileRoutingModule } from './yourProfile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { YourProfileService } from './services/yourProfile.service';
import { YourProfileStore } from './store/yourProfile.store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    YourProfileRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([YourProfileEffects])
  ],
  declarations: [YourProfileComponent],
  exports: [],
  providers: [YourProfileStore, YourProfileService],
  bootstrap: [YourProfileComponent]
})
export class YourProfileModule {}
