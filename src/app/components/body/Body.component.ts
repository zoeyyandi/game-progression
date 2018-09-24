import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../types/Game.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() Games: Game[];
  @Input() langCode: string;

  constructor() { }

  ngOnInit() {
  }
}
