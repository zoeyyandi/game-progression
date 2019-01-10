export interface IDashboardState {
  language: ILanguage;
  timeRemaining: string;
  numberOfUnfinishedGames: number;
  numberOfFinishedGames: number;
  profile: IProfile;
}

export interface IProfile {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  languageId: number;
  averageNumberOfHoursPerDay: number;
}

export interface ILanguage {
  id: number;
  name: string;
  code: string;
}
