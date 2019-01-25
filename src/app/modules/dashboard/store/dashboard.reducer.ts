import { IDashboardState } from './../types/dashboard-state/dashboard-state.interface';
import {
  DashboardActionsUnion,
  DashboardActionTypes
} from './dashboard.actions';

const initialDashboardState = {
  timeRemaining: 0,
  numberOfUnfinishedGames: 0,
  numberOfFinishedGames: 0,
  getGamesError: {}
};

export function dashboardReducer(
  state: IDashboardState = initialDashboardState,
  action: DashboardActionsUnion
): IDashboardState {
  switch (action.type) {
    case DashboardActionTypes.GetGamesSummary:
      return { ...state };
    case DashboardActionTypes.GetGamesSummarySuccess:
      console.log('hihihi', action.payload);
      return { ...action.payload };
    case DashboardActionTypes.GetGamesSummaryFailure:
      return { ...state };
    default:
      return state;
  }
}
