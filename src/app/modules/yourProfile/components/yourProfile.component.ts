import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/types/app-state/app-state.interface';

@Component({
  selector: 'app-your-profile',
  templateUrl: './yourProfile.component.html',
  styleUrls: ['./yourProfile.component.scss']
})
export class YourProfileComponent {
  title = 'Your Profile';
  constructor(private store: Store<IAppState>) {}
}
