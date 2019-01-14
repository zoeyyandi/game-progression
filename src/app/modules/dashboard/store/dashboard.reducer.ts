import {
  DashboardActionTypes,
  DashboardActionsUnion
} from './dashboard.actions';
import {
  IDashboardState,
  isLanguagesError,
  ILanguage
} from './../types/dashboard-state/dashboard-state.interface';

const initialState = {
  languages: [],
  timeRemaining: '',
  numberOfUnfinishedGames: 0,
  numberOfFinishedGames: 0,
  profile: {
    id: 0,
    firstName: '',
    lastName: '',
    image: '',
    languageId: 0,
    averageNumberOfHoursPerDay: 0
  }
};

export function dashboardReducer(
  state: IDashboardState = initialState,
  action: DashboardActionsUnion
): IDashboardState {
  switch (action.type) {
    case DashboardActionTypes.GetLanguage:
      return { ...state };
    case DashboardActionTypes.GetLanguagesSuccess:
      if (!isLanguagesError(action.payload)) {
        return {
          ...state,
          languages: action.payload,
          ...(<ILanguage[]>state.languages)
        };
      }
      break;
    case DashboardActionTypes.GetLanguagesFailure:
      return { ...state, languages: action.payload };
    case DashboardActionTypes.GetProfileSuccess:
      return { ...state, profile: action.payload };
    case DashboardActionTypes.GetProfileFailure:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}
