<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducers";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import organiserReducer from "./reducers/organiserReducer";
import eventReducer from "./reducers/eventReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  org: organiserReducer,
  event: eventReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(thunk)
  enhancer
);
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
=======
import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducers";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import organiserReducer from "./reducers/organiserReducer";
import eventReducer from "./reducers/eventReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  org: organiserReducer,
  event: eventReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(thunk)
  enhancer
);
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
