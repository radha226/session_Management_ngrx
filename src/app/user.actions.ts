import { Action } from "@ngrx/store";
import { IUser } from "./user";

export enum UserActionTypes {
  LoadUsers = "[User] Load Users",
  LoadUsersSuccess = "[User] Load Users Success",
  LoadUsersFailure = "[User] Load Users Failure",
}
// third step we have actions, actions ch 2 cheeze hoti h first is acion type and second constructor jis mai payload hota h
export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: { data: IUser[] }) {}
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: string }) {}
}

export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFailure;
