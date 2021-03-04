import { createStore, action } from 'easy-peasy';

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false,
  });
/* eslint-enable */

export const store = createStore(
  {
    searchResults: {
      items: [],
      add: action((state, payload) => {
        state.items = payload; // eslint-disable-line
      }),
    },
  },
  composeEnhancers,
);
