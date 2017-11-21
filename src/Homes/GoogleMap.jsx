import React from 'react';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';
import location from './location.svg';
import Media from './../Media';

// SC cant style GoogleMap component, so we have to create container for it
const GoogleMapContainer = styled.div`
  background: lightgrey;
  position: fixed;
  right: 0;
  top: calc(80px + 56px);
  bottom: 0;
  left: 0;

  display: ${props => (props.showingMap ? 'block' : 'none')};
  ${Media.lg`left: calc(100% / 12 * 8);display: block`};
  ${Media.xl`left: calc((1200px) / 12 * 8 + (100% - 1200px) / 2);`};
`;
const ListToggler = styled.button`
  background: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  position: fixed;
  bottom: 40px;
  font-size: 18px;
  border-radius: 20px;
  padding: 8px 12px 8px 32px;
  background-image: url(${location});
  background-repeat: no-repeat;
  background-position: 10px 50%;
  left: calc(50% - 60px);
  ${Media.lg`display:none;`};
`;

export default ({ onListToggle, ...props }) => (
  <GoogleMapContainer showingMap={props.showingMap}>
    <GoogleMap
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />
    <ListToggler onClick={onListToggle}>Open list</ListToggler>
  </GoogleMapContainer>
);
