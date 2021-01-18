import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./user.reducer";
// sixth step create a selector for state data
const getUserFeatureState = createFeatureSelector<State>("usersState");

//we are creating a selector for get users and for error
export const getUser = createSelector(
  getUserFeatureState,
  (state) => state.userList
);
export const getError = createSelector(
  getUserFeatureState,
  (state) => state.error
);
