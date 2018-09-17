import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("increments count correctly after the button is pressed", () => {
  const wrapper = shallow(<Counter />);

  wrapper.find("button").simulate("click");
  wrapper.update();

  expect(wrapper.state().count).toEqual(1);
});
