import { IYourProfileState } from './../types/yourProfile-state.interface';
import {
  YourProfileActionsUnion,
  YourProfileActionTypes
} from './yourProfile.actions';

const initialYourProfileState = {
  firstName: '',
  lastName: '',
  avatarImageUrl: '',
  averageNumberOfHoursToGamePerDay: 0
};

export function yourProfileReducer(
  state: IYourProfileState = initialYourProfileState,
  action: YourProfileActionsUnion
): IYourProfileState {
  switch (action.type) {
    case YourProfileActionTypes.UpdateProfile:
      return { ...state };
    case YourProfileActionTypes.UpdateProfileSuccess:
      return { ...state };
    case YourProfileActionTypes.UpdateProfileFailure:
      return { ...state };
    default:
      return state;
  }
}
