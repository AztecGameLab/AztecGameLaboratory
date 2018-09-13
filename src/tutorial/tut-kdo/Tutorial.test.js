import React from "react";
import ReactDOM from "react-dom";
import { FunctionalComponent } from "./Tutorial";

it("renders functional component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FunctionalComponent />, div);
    expect < FunctionalComponent;
});
