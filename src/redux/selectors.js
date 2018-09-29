import { createSelector } from "reselect";

const selectAuth = state => state.firebase.auth;

export const isLoggedIn = createSelector([selectAuth], auth => {
  return auth && !!auth.uid;
});

export const getUserUID = createSelector([selectAuth], auth => {
  return auth.uid;
});
