const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const firestore = admin.firestore();

// const firebase = require("firebase");
// require("firebase/firestore");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("KEY IS", process.env.REACT_APP_FIREBASE_API_KEY);
});

exports.createUserDocument = functions.auth.user().onCreate(user => {
    const { disabled, displayName, email, emailVerified, photoURL, providerData, uid } = user;
    firestore
        .collection("users")
        .doc(user.uid)
        .set({
            disabled,
            displayName,
            email,
            emailVerified,
            photoURL,
            providerData,
            uid
        });
});
