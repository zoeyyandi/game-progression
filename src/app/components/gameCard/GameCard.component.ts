import { IGame } from '../../modules/games/types/games-state/games-state.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './GameCard.component.html',
  styleUrls: ['./gameCard.component.scss']
})
export class GameCardComponent {
  @Input() game: IGame;

  constructor() {}
}
