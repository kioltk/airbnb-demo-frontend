import React from 'react';

import Wrap from './../../../Wrap';
import Info from './Info';
import Cancelation from './Cancelation';
import Rules from './Rules';
import Amenities from './Amenities';
import CommunicationRules from './CommunicationRules';

export default props => (
  <div className={props.className}>
    <Info />
    <Amenities />
    <CommunicationRules />
    <Rules />
    <Cancelation />
  </div>
);
