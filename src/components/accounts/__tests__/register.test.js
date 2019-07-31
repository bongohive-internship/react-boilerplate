import React from "react";
import { shallow } from "enzyme";
import Register from "../Register";

it("should render without crashing", () => {
  shallow(<Register />);
});
it("should render correctly ", () => {
  const registerSnap = shallow(<Register />);
  expect(registerSnap).toMatchSnapshot();
});
