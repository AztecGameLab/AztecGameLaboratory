import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import createArtPostReducer from "./reducers/createArtPostReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  art: createArtPostReducer
});
