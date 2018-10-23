import { createSelector } from "reselect";

const selectAuth = state => state.firebase.auth;
const selectJoinableRooms = state => state.chatkit.joinableRooms;

export const isLoggedIn = createSelector([selectAuth], auth => {
  return auth && !!auth.uid;
});

export const getUserUID = createSelector([selectAuth], auth => {
  return auth.uid;
});

export const getJoinableRooms = createSelector([selectJoinableRooms], joinableRooms => {
  return joinableRooms;
});
