import { ILanguageState } from '../../modules/language/types/langage-state/language-state.interface';
import { IProfile } from './../../modules/profile/types/profile-state.interface';
import { IDashboardState } from './../../modules/dashboard/types/dashboard-state/dashboard-state.interface';
import { IPlatformState } from 'src/app/modules/platforms/types/platforms-state/platforms-state.interface';
import { IGameState } from 'src/app/modules/games/types/games-state/games-state.interface';
import { IYourProfileState } from 'src/app/modules/yourProfile/types/yourProfile-state.interface';

export interface IAppState {
  dashboardState: IDashboardState;
  gamesState: IGameState;
  profileState: IProfile;
  languageState: ILanguageState;
  platformsState: IPlatformState;
  yourProfileState: IYourProfileState;
}
