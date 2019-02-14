import { ILanguage } from '../../modules/language/types/language/language.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() languages: {};
  @Input() languagesIds: Array<number>;
}
