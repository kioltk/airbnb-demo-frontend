import React from 'react';
import styled from 'styled-components';

const Box = styled.div`padding-bottom: 48px;`;
const List = styled.ul``;
const Item = styled.li`margin-top: 8px;`;
const Link = styled.a`
  font-size: 15px;
  text-align: center;
  color: #636363;
`;
const Title = styled.li`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 16px;
  margin-top: 48px;
`;

export default (props) => {
  const list = props.list;
  return (
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
};
