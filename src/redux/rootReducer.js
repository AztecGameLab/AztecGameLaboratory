import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import chatkit from "./chatkitReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  chatkit
});
