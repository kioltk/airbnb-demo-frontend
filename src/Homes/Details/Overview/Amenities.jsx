import React from 'react';
import styled from 'styled-components';
import { Box, Title, Paragraph } from './../styled';
import SpoileredContent from './../SpoileredContent';
import wireless from './wireless.svg';
import parking from './parking.svg';
import internet from './internet.svg';
import friendly from './friendly.svg';

const Grid = styled.div`
  flex-flow: wrap;
`;

const Amenity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  margin-top: 11px;
`;

const AmenityIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export default class extends React.Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Box>
        <Title>Amenities</Title>
        <Paragraph>
          <Grid className="row">
            <Amenity className="col-xs-6">
              <AmenityIcon src={internet} />
              <span>Internet</span>
            </Amenity>
            <Amenity className="col-xs-6">
              <AmenityIcon src={wireless} />
              <span>Wireless Internet</span>
            </Amenity>
            <Amenity className="col-xs-6">
              <AmenityIcon src={friendly} />
              <span>Family/kid friendly</span>
            </Amenity>
            <Amenity className="col-xs-6">
              <AmenityIcon src={parking} />
              <span>Free parking on premises</span>
            </Amenity>
          </Grid>

          <SpoileredContent message="Show all amenities">
            <Grid className="row">
              <Amenity className="col-xs-6">
                <AmenityIcon src={internet} />
                <span>Internet</span>
              </Amenity>
              <Amenity className="col-xs-6">
                <AmenityIcon src={wireless} />
                <span>Wireless Internet</span>
              </Amenity>
              <Amenity className="col-xs-6">
                <AmenityIcon src={friendly} />
                <span>Family/kid friendly</span>
              </Amenity>
              <Amenity className="col-xs-6">
                <AmenityIcon src={parking} />
                <span>Free parking on premises</span>
              </Amenity>
            </Grid>
          </SpoileredContent>
        </Paragraph>
      </Box>
    );
  }
}
