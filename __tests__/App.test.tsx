import { shallow } from "enzyme";
import React from "react";
import App from "../src/App";
describe("App", () => {
  describe("checking intial states", () => {
    const wrapper = shallow(<App />);
    it("check intial state message", () => {
      expect(wrapper.state("message")).toEqual("");
    });
    it("check intial state errorText", () => {
      expect(wrapper.state("errorText")).toEqual("");
    });
  });
});
