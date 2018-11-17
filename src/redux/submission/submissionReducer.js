const initState = {
  artPostError: null
};

// return {
//   ...state,
//   artPostError: "Art post failed!"
// };

const createArtPostReducer = (state = initState, action) => {
  // Check action type, there could be many actions
  switch (action.type) {
    case "CREATE_ART":
      console.log("CREATE_ART", action.art);
      return state;
    case "CREATE_ART_ERROR":
      console.log("CREATE_ART_ERROR", action.err);
      return state;
    default:
      return state;
  }
};

export default createArtPostReducer;
