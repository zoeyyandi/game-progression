import { IProfile } from '../types/profile-state.interface';
import { ProfileActionsUnion, ProfileActionTypes } from './profile.actions';

const initialProfileState = {
  id: 0,
  firstName: '',
  lastName: '',
  image: '',
  languageId: 0,
  averageNumberOfHoursPerDay: 0
};

export function profileReducer(
  state: IProfile = initialProfileState,
  action: ProfileActionsUnion
): IProfile {
  switch (action.type) {
    case ProfileActionTypes.GetProfile:
      return { ...state };
    case ProfileActionTypes.GetProfileSuccess:
      return { ...action.payload };
    case ProfileActionTypes.GetProfileFailure:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
