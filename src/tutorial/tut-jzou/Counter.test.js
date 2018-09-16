import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

it("increments count correctly after the button is pressed", () => {
  const wrapper = shallow(<Counter />);

  wrapper.find("button").simulate("click");
  wrapper.update();

  expect(wrapper.state().count).toEqual(1);
});
