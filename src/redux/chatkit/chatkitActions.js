import { SEND_JOINABLE_ROOMS } from "./chatkitConstants";

export const sendJoinableRooms = data => ({ type: SEND_JOINABLE_ROOMS, payload: data });
