import { IDashboardState } from './../../modules/dashboard/types/dashboard-state/dashboard-state.interface';

export interface IAppState {
  dashboardState: IDashboardState;
  // gamesState: IGamesState;
  profileState: IProfile;
  languageState: Array<ILanguage | Error>;
}

export interface IProfile {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  languageId: number;
  averageNumberOfHoursPerDay: number;
  error?: Error;
}

export interface ILanguage {
  id: number;
  name: string;
  code: string;
}
