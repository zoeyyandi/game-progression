export interface IDashboardState {
  timeRemaining: string;
  numberOfUnfinishedGames: number;
  numberOfFinishedGames: number;
}
export interface IGame {
  id: number;
  dateCreated: string;
  name: string;
  image: string;
  platformId: number;
  priority: number;
  numberOfHoursPlayed: number;
  numberOfHoursToComplete: number;
  isComplete: boolean;
}
