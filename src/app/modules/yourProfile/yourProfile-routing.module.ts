import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YourProfileComponent } from './components/yourProfile.component';

const routes: Routes = [
  {
    path: '',
    component: YourProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourProfileRoutingModule {}
