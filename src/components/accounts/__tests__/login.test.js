import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

describe("login page", () => {
  it("should exists", () => {
    expect(Login).toBeDefined();
  });
  it("login renders without crashing", () => {
    shallow(<Login />);
  });
  it("should render correctly", () => {
    const loginSnap = shallow(<Login />);
    expect(loginSnap).toMatchSnapshot();
  });
  it("should contain a p element", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("p")).toHaveLength(1);
  });
});
