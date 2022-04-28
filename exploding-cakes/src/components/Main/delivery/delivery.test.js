import React from "react";
import { shallow } from "enzyme";
import Delivery from "./delivery";

describe("Delivery", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Delivery />);
    expect(wrapper).toMatchSnapshot();
  });
});
