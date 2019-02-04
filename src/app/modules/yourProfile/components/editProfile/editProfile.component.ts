import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { ProfileStore } from '../../../profile/store/profile.store';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './editProfile.component.html',
  styleUrls: ['./editProfile.component.scss']
})
export class EditProfileComponent {
  title = 'Edit My Profile';
  constructor(
    private store: Store<IAppState>,
    public profileStore: ProfileStore
  ) {}
}
