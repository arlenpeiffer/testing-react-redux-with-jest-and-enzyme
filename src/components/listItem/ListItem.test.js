import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "./../../../Utils";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Test Title",
        body: "Test Body"
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test Title",
        body: "Test Body"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findByTestAttr(wrapper, "title");
      expect(title.length).toBe(1);
    });

    it("Should render a body", () => {
      const body = findByTestAttr(wrapper, "body");
      expect(body.length).toBe(1);
    });
  });

  describe("Doesn't render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        body: "Test Body"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should not render", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
