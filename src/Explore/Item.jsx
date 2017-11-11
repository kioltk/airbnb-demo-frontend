import React from 'react';
import styled from 'styled-components';
import Media from './../Media';

const Link = styled.a``;
const Box = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  -webkit-border-radius: 4px;
  border-radius: 4px;
  align-items: center;

  ${Media.sm`
    display: flex;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    -webkit-border-radius: 4px;
    align-items: center;
  `};
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
  height: 78px;
  border-radius: 3px 3px 0 0;
  ${Media.sm`
    border-radius: 4px 0 0 4px;
    height: 74px;
    width: 96px;
  `};
`;
const Text = styled.div`
  padding: 12px;
  margin: 0;
  line-height: normal;
  font-size: 17px;
  color: #383838;
  ${Media.sm`
    height: auto;
    padding: 24px;  
    vertical-align: middle;
  `};
`;
export default ({ explore, ...props }) => (
  <Link href={explore.link} className={props.className}>
    <Box>
      <Image src={explore.picture} />
      <Text>{explore.title}</Text>
    </Box>
  </Link>
);
