import React from 'react';
import { Box, Title, Paragraph } from './../styled';
import SpoileredContent from './../SpoileredContent';

export default () => (
  <Box>
    <Title>House Rules</Title>
    <Paragraph>
      House Rules<br />Check out by 11AM
      <SpoileredContent message="Read all rules">
        House Rules<br />Check out by 11AM<br />
        House Rules<br />Check out by 11AM<br />
        House Rules<br />Check out by 11AM
      </SpoileredContent>
    </Paragraph>
  </Box>
);
