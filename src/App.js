import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Styling
import { Button, Grid, Segment } from "semantic-ui-react";

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
        <Grid celled columns={3} padded stackable style={{ height: "100vh" }}>
          <Grid.Column className="Chat">
            <Segment>
              <Button fluid>Chat</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row className="Announcements" style={{ height: "50vh" }}>
              <Segment>
                <header className="App-header">
                  <Button fluid>Announcements</Button>
                  <h1 className="App-title" align="center">
                    Welcome to the Aztec Game Lab!
                  </h1>
                  <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                </header>
              </Segment>
            </Grid.Row>
            <Grid.Row className="Poll">
              <Segment>
                <Button fluid>Poll</Button>
              </Segment>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column className="Feed">
            <Segment>
              <Button fluid>Feed</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
