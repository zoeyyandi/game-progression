export interface IDashboardState {
  languages: Array<ILanguage> | Error;
  timeRemaining: string;
  numberOfUnfinishedGames: number;
  numberOfFinishedGames: number;
  profile: IProfile | Error;
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

export const isLanguagesError = (
  languages: Array<ILanguage> | Error
): languages is Error => (<Error>languages).message !== undefined;
