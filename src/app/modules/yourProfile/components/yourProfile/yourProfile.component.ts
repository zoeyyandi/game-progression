import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/types/app-state/app-state.interface';
import { ProfileStore } from '../../../profile/store/profile.store';

@Component({
  selector: 'app-your-profile',
  templateUrl: './yourProfile.component.html',
  styleUrls: ['./yourProfile.component.scss']
})
export class YourProfileComponent {
  title = 'My Profile';
  constructor(
    private store: Store<IAppState>,
    public profileStore: ProfileStore
  ) {}
}
