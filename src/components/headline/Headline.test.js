import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./../../../Utils";
import Headline from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description"
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a header", () => {
      const header = findByTestAttr(wrapper, "header");
      expect(header.length).toBe(1);
    });

    it("Should render a description", () => {
      const description = findByTestAttr(wrapper, "description");
      expect(description.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
