import { Action } from "@ngrx/store";
import { IUser } from "./user";
import { UserActions, UserActionTypes } from "./user.actions";

export const userFeatureKey = "userStateValue";

export interface State {
  // first step define interface
  userList: IUser[];
  error: string;
}

export const initialState: State = {
  // secnd step define initial state
  userList: [],
  error: "",
};

export function reducer(state = initialState, action: UserActions): State {
  //fourth step specify the acion dispatch value
  switch (action.type) {
    case UserActionTypes.LoadUsers: {
      return {
        ...state,
      };
    }
    case UserActionTypes.LoadUsersSuccess: {
      return {
        ...state,
        userList: action.payload.data,
        error: "",
      };
    }
    case UserActionTypes.LoadUsersFailure: {
      return {
        ...state,
        userList: [],
        error: "",
      };
    }
    default:
      return state;
  }
}
