import { SEND_JOINABLE_ROOMS } from "./chatkitConstants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_JOINABLE_ROOMS:
      return {
        joinableRooms: action.payload
      };
    default:
      return state;
  }
};
