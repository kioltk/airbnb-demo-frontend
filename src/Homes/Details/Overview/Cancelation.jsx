import React from 'react';
import shield from './shield.svg';
import { Box, Title, Paragraph, Subtitle, SmallDivider, Link } from './../styled';

export default () => (
  <Box>
    <Title>Cancellations</Title>
    <div className="row">
      <Paragraph className="col-xs-10">
        <Subtitle>Free cancellation</Subtitle>
        <br />
        Cancel within 48 hours of booking to get a full refund.
      </Paragraph>
      <div className="col-xs-2">
        <img src={shield} alt="Superhost" />
      </div>
    </div>
    <SmallDivider />
    <Paragraph>Flexible</Paragraph>
    <Paragraph>
      Cancel up to 24 hours before check in and get a full refund (minus service fees). Cancel
      within 24 hours of your trip and the firs… <Link to="#">Read more</Link>
    </Paragraph>
  </Box>
);
