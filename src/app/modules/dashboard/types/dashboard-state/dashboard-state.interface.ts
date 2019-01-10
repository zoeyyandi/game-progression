export interface IDashboardState {
  languageId: number;
  timeRemaining: string;
  numberOfUnfinishedGames: number;
  numberOfFinishedGames: number;
  profile: IProfile;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  averageNumberOfHoursToGamePerDay: number;
  isEditing: boolean;
}
