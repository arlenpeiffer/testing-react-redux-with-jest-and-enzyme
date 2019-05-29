import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const expectedState = [
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
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
