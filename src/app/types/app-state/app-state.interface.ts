import { ILanguage } from './../../modules/language/types/language-state.interface';
import { IProfile } from './../../modules/profile/types/profile-state.interface';
import { IDashboardState } from './../../modules/dashboard/types/dashboard-state/dashboard-state.interface';

export interface IAppState {
  dashboardState: IDashboardState;
  // gamesState: IGamesState;
  profileState: IProfile;
  languageState: Array<ILanguage | Error>;
}
