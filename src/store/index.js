import configureStore from './configureStore';
import rootReducer from '../reducers';

export default function store(initialState = {}) {
  const middlewares = [];

  // If needed later
  // const storeEnhancers = {};

  const newStore = configureStore(initialState, rootReducer, middlewares);

  return newStore;
}
