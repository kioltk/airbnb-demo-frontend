import React from 'react';
import { Route } from 'react-router-dom';
import Preview from './Preview';
import List from './List';
import Details from './Details';

export default () => (
  <div>
    <Route path="/" exact component={Preview} />
    <Route path="/homes" exact component={List} />
    <Route path="/homes/:id" exact component={Details} />
  </div>
);
