import React from "react";
import "../css/App.css";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Layout from "./Layout";
import createApplicationStore from "../createApplicationStore";
import history from "../util/history";

export default function App() {
  const store = createApplicationStore();
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout />
      </Router>
    </Provider>
  );
}
