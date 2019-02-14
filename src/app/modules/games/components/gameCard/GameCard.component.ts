import { IGame } from '../../types/games/games.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './GameCard.component.html',
  styleUrls: ['./gameCard.component.scss']
})
export class GameCardComponent implements OnChanges {
  @Input() game: IGame;
  @Input() platforms: {};
  @Input() platformIds: Array<number>;
  @Input() random: string;
  estimatedPercentageCompleted: string;

  ngOnChanges() {
    this.estimatedPercentageCompleted = (
      (this.game.numberOfHoursPlayed / this.game.numberOfHoursToComplete) *
      100
    ).toFixed(1);
  }
}
