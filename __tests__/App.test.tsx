import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { shallow } from "enzyme";
import React from "react";
import App from "../src/App";


describe("checking intial states", () => {
  const wrapper = shallow(<App />);
  it("check intial state message", () => {
    expect(wrapper.state("message")).toEqual("");
  });
  it("check intial state errorText", () => {
    expect(wrapper.state("errorText")).toEqual("");
  });
});

describe("check ping with success", () => {
  const mockData = { message: "System" };

  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet("localhost/ping").reply(200, mockData);
  });
  it("check state message", () => {
    const wrapper = shallow<App>(<App />);
    wrapper.instance().onPressPing();
    setTimeout(() => {
      expect(wrapper.state("message")).toEqual("System");
    }, 1000);
  });
});

describe("check ping request error", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet("localhost/ping").networkError();
  });
  it("check state message", () => {
    const wrapper = shallow<App>(<App />);
    wrapper.instance().onPressPing();
    setTimeout(() => {
      expect(wrapper.state("errorText")).toEqual("Network Error");
    }, 1000);
  });
});
