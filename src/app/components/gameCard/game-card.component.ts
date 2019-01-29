import { IGame } from '../../modules/games/types/games-state/games-state.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() game: IGame;

  constructor() {
    console.log('rfkshkgznvkfsjvnsfnvfsv', this.game);
  }
}
