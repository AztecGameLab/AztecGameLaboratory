import React from "react";
import { shallow } from "../enzyme";

import Home from "./home";

describe("<Home/>", () => {
  let ele;
  beforeEach(() => {
    ele = shallow(<Home />);
  });

  it("exists", () => {
    expect(ele.exists()).toBe(true);
  });
});
