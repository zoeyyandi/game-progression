import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from '../../modules/dashboard/types/dashboard-state/dashboard-state.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() profile: IProfile;

  constructor() {
    console.log('hihihi', this.profile);
  }

  ngOnInit() {}
}
