const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

exports.createUserDocument = functions.auth.user().onCreate(user => {
    const { customClaims, disabled, displayName, email, emailVerified, photoURL, uid } = user;
    const { creationTime } = user.metadata;
    const { displayName: providerName, email: providerEmail, photoURL: providerPhotoURL, providerId, uid: providerUid } = user.providerData[0];
    return firestore
        .collection("users")
        .doc(user.uid)
        .set({
            customClaims,
            disabled,
            displayName,
            email,
            emailVerified,
            photoURL,
            uid,
            creationTime,
            providerName,
            providerEmail,
            providerPhotoURL,
            providerId,
            providerUid
        })
        .then(() => {
            return console.log("Write succeeded!");
        })
        .catch(error => {
            console.log(error.message);
        });
});
