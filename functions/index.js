const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

exports.createUserDocument = functions.auth.user().onCreate(user => {
  const { displayName, providerData, email } = user;
  const { photoURL } = providerData[0];

  return firestore
    .collection("users")
    .doc(user.uid)
    .set({
      exp: 0,
      role: "user",
      displayName,
      photoURL,
      email
    })
    .then(() => {
      return console.log("Write succeeded!");
    })
    .catch(error => {
      console.log(error.message);
    });
});
