import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from './../../../Utils';
import Button from './index';

describe('Button Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Test Button Text',
        emitEvent: () => {}
      };
      const propsErr = checkProps(Button, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Test Button Text',
        emitEvent: mockFunc
      };
      wrapper = shallow(<Button {...props} />);
    });

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'buttonComponent');
      expect(component.length).toBe(1);
    });

    it('Should emit callback on click event', () => {
      const component = findByTestAttr(wrapper, 'buttonComponent');
      component.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
