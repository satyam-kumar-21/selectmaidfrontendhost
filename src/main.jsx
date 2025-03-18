// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";  // Import Provider
import store from "./store/store.jsx";  // Import the Redux store
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with the Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
