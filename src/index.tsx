import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "components/App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "store";
import rootSaga from "saga";

const sagaMiddleware = createSagaMiddleware();

let middleware: any[] = [sagaMiddleware];

if (process.env.REACT_APP_MODE !== "prod") {
  const logger = createLogger();
  middleware = [...middleware, logger];
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
