import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { Button, Grid } from "semantic-ui-react";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid columns={3} padded style={{ height: "100vh" }}>
          <Grid.Row>
            <Grid.Column>
              <Button>Chat</Button>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row style={{ height: "50%" }}>
                <header className="App-header">
                  <h1 className="App-title" align="center">
                    Welcome to the Aztec Game Lab!
                  </h1>
                  <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                </header>
              </Grid.Row>
              <Grid.Row style={{ height: "50%" }}>
                <Button>Poll</Button>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Button>Feed</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
