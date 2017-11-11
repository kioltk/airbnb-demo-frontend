import React from 'react';
import styled from 'styled-components';
import Media from './Media';

const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  ${Media.lg`max-width: 1240px;`};
`;
const Container = styled.div`
  padding-left: 0px;
  padding-right: 0px;

  ${Media.sm`padding-left:0; padding-right:0;`};
  ${Media.md`padding-left:16px; padding-right:16px;`};
  ${Media.lg`padding-left:80px; padding-right:80px;`};
  ${Media.xl`padding-left:80px; padding-right:80px;`};
`;
export default props => (
  <Wrapper>
    <Container>
      <div className={props.className}>{props.children}</div>
    </Container>
  </Wrapper>
);
