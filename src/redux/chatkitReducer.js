const initialState = { user: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHATKIT_USER":
      return {
        user: action.payload
      };
    default:
      return state;
  }
};
