import React from 'react';
import '../css/App.css';
import Layout from './Layout';
import {Provider} from 'react-redux'
import createApplicationStore from '../createApplicationStore';
import { BrowserRouter as Router} from "react-router-dom";


export default function App() {
  const store = createApplicationStore();
  return (
    <Provider store={store}>
      <Router>
        <Layout/>
      </Router>
    </Provider>
  );
}
