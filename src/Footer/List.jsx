import React from 'react';
import styled from 'styled-components';

const Box = styled.div`padding-bottom: 48px;`;
const List = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #383838;
`;
const Item = styled.div`margin-top: 8px;`;
const Link = styled.a`
  font-size: 15px;
  text-align: center;
  color: #636363;
`;

export default ({ list, ...props }) => (
  <Box className={props.className}>
    <List>
      <Title>{list.title}</Title>
      {list.items.map(item => (
        <Item>
          <Link href={item.link}>{item.title}</Link>
        </Item>
      ))}
    </List>
  </Box>
);
