import { createSelector } from "reselect";

const selectAuth = state => state.firebase.auth;
const getChatkitUser = state => state.chatkit.user;

export const isLoggedIn = createSelector([selectAuth], auth => {
  return auth && !!auth.uid;
});

export const getUserUID = createSelector([selectAuth], auth => {
  return auth.uid;
});

export const getChatUserObj = createSelector([getChatkitUser], user => {
  return user.chatkitUser;
});
