import React from 'react';
import styled from 'styled-components';
import Media from './Media';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: 8px;
  padding-left: 8px;
  ${Media.md`
    padding-right: 16px;
    padding-left: 16px
  `} ${Media.xl`max-width: 1200px;`};
`;

export default props => (
  <Wrapper>
    <div className={props.className}>{props.children}</div>
  </Wrapper>
);
