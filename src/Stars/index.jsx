import React from 'react';
import styled from 'styled-components';
import starPicture from './star.svg';

const Box = styled.div`display: inline-block;`;
const Star = styled.img`
  display: inline-block;
  margin-right: 4px;
  height: 100%;
`;
export default props => (
  <Box className={props.className}>
    {Array(props.stars)
      .fill()
      .map(_ => <Star src={starPicture} />)}
  </Box>
);
