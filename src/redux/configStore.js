import { applyMiddleware, createStore, compose } from "redux";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import rootReducer from "./rootReducer";
import firebase from "../firebaseConfig";
import thunk from "redux-thunk";

// Configure reduxFirestore
let rfConfig = {
  userProfile: "users", // firebase root where user profiles are stored
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  enableLogging: false // enable/disable Firebase's database logging
};

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
  reduxFirestore(firebase), // Needed if using firestore
  reactReduxFirebase(firebase, rfConfig) // firebase instance as first argument, rfConfig as optional second
)(createStore);

// Initialize store and attach dev tools extension
const store = createStoreWithFirebase(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
