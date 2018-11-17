import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import createArtPostReducer from "./submission/submissionReducer";
import chatkit from "./chatkit/chatkitReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  art: createArtPostReducer,
  chatkit
});
