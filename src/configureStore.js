import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { throttle } from "lodash";
import reducers from './reducers';
import { saveState } from "./localStorage";


const configureStore = () => {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

  store.subscribe(throttle(() => {
    saveState({
      posts: store.getState().posts
    })
  }, 1000));

  return store;
}

export default configureStore;




