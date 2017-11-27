import React from 'react';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';

import Media from './../../Media';
import Wrap from './../../Wrap';
import { Paragraph } from './styled';

const MapBox = styled.div`
  height: 192px;
  ${Media.sm`height: 474px;`};
  ${Media.lg`height: 612px;`};
`;
const MapPolygon = styled.div`
  width: 150px;
  height: 150px;
  background: rgba(3, 178, 185, 0.2);
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 50%;
`;

export default () => (
  <Wrap className="col-xs">
    <MapBox>
      <GoogleMap
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
        defaultZoom={12}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <MapPolygon lat={-34.397} lng={150.644} />
      </GoogleMap>
    </MapBox>
    <Paragraph className="col-xs">
      Exact location information is provided after a booking is confirmed.
    </Paragraph>
  </Wrap>
);
