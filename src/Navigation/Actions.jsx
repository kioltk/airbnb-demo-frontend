import React from 'react';
import styled from 'styled-components';
import Media from './../Media';

const Box = styled.div`
  display: none;
  align-items: center;
  ${Media.md`
    display: flex;
    `};
`;
const List = styled.ul`
  vertical-align: middle;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Item = styled.li`display: inline;`;
const Link = styled.a`
  line-height: 24px;
  font-size: 14px;
  margin: 4px;
  text-align: center;
  color: #383838;
  min-width: 56px;
  display: inline-block;
  &:first-child {
    margin-left: 0;
  }
`;

const actions = ['Become a host', 'Help', 'Sign Up', 'Login In'];

export default (props) => {
  const items = actions.map(action => (
    <Item>
      <Link href="#">{action}</Link>
    </Item>
  ));
  return (
    <Box className={props.className}>
      <List>{items}</List>
    </Box>
  );
};
