export const createArtPost = art => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;
    firestore
      .collection("art")
      .add({
        // Puts art.title, art.description, art.url
        ...art,
        dateCreated: new Date(),
        hearts: 0,
        owner: { displayName: profile.displayName, photoURL: profile.photoURL }
      })
      .then(() => {
        dispatch({
          type: "CREATE_ART",
          art
        });
        // Specify what to catch, in this case an error
      })
      .catch(err => {
        dispatch({
          type: "CREATE_ART_ERROR",
          err
        });
      });
  };
};
