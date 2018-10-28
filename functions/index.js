const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Chatkit = require("@pusher/chatkit-server");
const cors = require("cors")({ origin: true });

// Initialize firestore
admin.initializeApp();
const firestore = admin.firestore();

// Environment Variables
const { instancelocator, key } = functions.config().chatkit;

const chatkit = new Chatkit.default({
  instanceLocator: instancelocator,
  key: key
});

firestore.settings({ timestampsInSnapshots: true });

exports.createUserDocument = functions.auth.user().onCreate(user => {
  const { displayName, email, providerData, uid } = user;
  const { photoURL } = providerData[0];

  return firestore
    .collection("users")
    .doc(uid)
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

exports.createChatkitAccount = functions.auth.user().onCreate(user => {
  const { displayName, providerData, uid } = user;
  const { photoURL } = providerData[0];

  return chatkit
    .createUser({
      id: uid,
      name: displayName,
      avatar_url: photoURL
    })
    .then(() => {
      return console.log("User created successfully");
    })
    .catch(err => {
      console.log(err);
    });
});

exports.updateChatkitAccount = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    return chatkit
      .updateUser(req.body)
      .then(() => {
        return res.status(200).send(req.body, "User updated successfully");
      })
      .catch(err => {
        return res.status(500).send(req.body, err);
      });
  });
});
