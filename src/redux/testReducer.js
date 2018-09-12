const initialState = {
    test: "Hello World"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "TEST_ACTION":
            return { test: "Hello Redux" };
        default:
            return state;
    }
};
