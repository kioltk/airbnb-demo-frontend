import React from 'react';

import Wrap from './../../../Wrap';
import Info from './Info';
import Cancelation from './Cancelation';
import Rules from './Rules';
import Amenities from './Amenities';
import CommunicationRules from './CommunicationRules';

export default () => (
  <Wrap className="col-xs-12 col-lg-8">
    <Info />
    <Amenities />
    <CommunicationRules />
    <Rules />
    <Cancelation />
  </Wrap>
);
