import { createSelector } from "reselect";

const selectJoinableRooms = state => state.chatkit.joinableRooms;

export const getJoinableRooms = createSelector([selectJoinableRooms], joinableRooms => {
  return joinableRooms;
});
