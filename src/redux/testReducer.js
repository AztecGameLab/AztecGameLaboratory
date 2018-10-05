const initialState = {
  test: "Hello World"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TEST_ACTION":
      return { test: "Hello Redux" };
    case "KEVIN":
      return { test: "KEVIN WAS HERE" };
    case "JIN":
      return { test: "YAHOO" };
    case "JIN2":
      return { test: "HE SAID IT" };
    case "AC":
      return { test: "testReducer by AC" };
    case "JUSTIN":
      return { test: "JUSTINLUL" };
    case "MIGUEL":
      return { test: "falcon punch" };
    default:
      return state;
  }
};
