import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
//import testData from "./testReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
