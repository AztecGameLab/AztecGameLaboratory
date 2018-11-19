export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;
    firestore
      .collection(post.payload)
      .add({
        // ... post,
        // This enables automatic allocation if the proper label is there
        // ... art,
        // art.title, art.description, art.url
        title: post.title,
        description: post.description,
        url: post.url,
        dateCreated: new Date(),
        hearts: 0,
        owner: { displayName: profile.displayName, photoURL: profile.photoURL }
      })
      .then(() => {
        dispatch({
          type: "CREATE_POST",
          post
        });
        // Specify what to catch, in this case an error
      })
      .catch(err => {
        dispatch({
          type: "CREATE_POST_ERROR",
          err
        });
      });
  };
};
