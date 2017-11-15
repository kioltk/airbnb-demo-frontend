import React from 'react';
import { Route } from 'react-router-dom';
import Preview from './Preview';
import Full from './Full';

export default () => (
  <div>
    <Route path="/" exact component={Preview} />
    <Route path="/homes" exact component={Full} />
  </div>
);
