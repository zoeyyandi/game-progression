import { IGame } from '../../types/games/games.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPlatform } from 'src/app/modules/platforms/types/platforms/platforms.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './GameCard.component.html',
  styleUrls: ['./gameCard.component.scss']
})
export class GameCardComponent implements OnChanges {
  @Input() game: IGame;
  @Input() platforms: IPlatform[];
  @Input() random: string;
  platform: string;
  estimatedPercentageCompleted: string;

  ngOnChanges() {
    if (this.platforms) {
      this.platform = this.platforms.find(
        platform => platform.id === this.game.platformId
      ).name;
    }
    this.estimatedPercentageCompleted = (
      (this.game.numberOfHoursPlayed / this.game.numberOfHoursToComplete) *
      100
    ).toFixed(1);
  }
}
