import { IProfile } from './../../modules/profile/types/profile-state.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string;
  @Input() profile: IProfile;

  constructor() {}
}
