import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { shallow } from "enzyme";
import React from "react";
import App from "../src/App";

describe("App Component", () => {
  describe("checking intial states", () => {
    const wrapper = shallow(<App />);
    it("check intial state message", () => {
      expect(wrapper.state("message")).toEqual("");
    });
    it("check intial state errorText", () => {
      expect(wrapper.state("errorText")).toEqual("");
    });
  });

  describe("Should display a message on click of ping button if network call is successful", () => {
    const mockData = { message: "System" };

    beforeEach(() => {
      const mock = new MockAdapter(axios);
      mock.onGet("localhost/ping").reply(200, mockData);
    });
    it("check state message", async () => {
      const wrapper = shallow<App>(<App />);
      await wrapper.instance().onPressPing();
      expect(wrapper.state("message")).toEqual("System");
    });
  });

  describe("Should display error on click of ping button if an error is return after network call", () => {
    beforeEach(() => {
      const mock = new MockAdapter(axios);
      mock.onGet("localhost/ping").networkError();
    });
    it("check state errorText", async () => {
      const wrapper = shallow<App>(<App />);
      await wrapper.instance().onPressPing();
      expect(wrapper.state("errorText")).toEqual("Network Error");
    });
  });
});
