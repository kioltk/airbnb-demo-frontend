import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import 'flexboxgrid2';
import './App.css';
import Landing from './Landing';
import Homes from './Homes';

export default () => (
  <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={Landing} />
      <Route path="/homes" component={Homes} />
    </div>
  </BrowserRouter>
);
