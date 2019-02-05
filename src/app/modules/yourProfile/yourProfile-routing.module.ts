import { EditProfileComponent } from './components/editProfile/editProfile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YourProfileComponent } from './components/yourProfile/yourProfile.component';

const routes: Routes = [
  {
    path: '',
    component: YourProfileComponent
  },
  {
    path: 'edit',
    component: EditProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourProfileRoutingModule {}
