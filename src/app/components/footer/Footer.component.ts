import { Component, OnInit, Input } from '@angular/core';
import { ILanguage } from 'src/app/types/app-state/app-state.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() language: ILanguage;

  constructor() {}

  ngOnInit() {}
}
