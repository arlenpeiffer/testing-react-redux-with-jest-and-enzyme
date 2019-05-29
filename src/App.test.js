import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../Utils';
import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Test Title 1',
          body: 'Test Body 1'
        },
        {
          title: 'Test Title 2',
          body: 'Test Body 2'
        },
        {
          title: 'Test Title 3',
          body: 'Test Body 3'
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
