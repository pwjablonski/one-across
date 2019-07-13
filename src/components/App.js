import React from 'react';
import '../css/App.css';
import Layout from './Layout';
import {Provider} from 'react-redux'
import createApplicationStore from '../createApplicationStore';
import { Router} from "react-router-dom";
import history from "../util/history";


export default function App() {
  const store = createApplicationStore();
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout/>
      </Router>
    </Provider>
  );
}
