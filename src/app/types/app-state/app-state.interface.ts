import { IDashboardState } from "../../modules/dashboard/types/dashboard-state/dashboard-state.interface";
import { IGamesState } from "../../modules/games/types/games-state/games-state.interface";

export interface IAppState {
  dashboardState: IDashboardState;
  gamesState: IGamesState;
}
