import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
