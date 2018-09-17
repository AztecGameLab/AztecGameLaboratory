const initialState = {
  test: "Hello World"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TEST_ACTION":
      return { test: "Hello Redux" };
    case "KEVIN":
      return { test: "KEVIN WAS HERE" };
    case "AC":
      return { test: "testReducer by AC" };
    default:
      return state;
  }
};
