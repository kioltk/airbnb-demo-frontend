import React from 'react';

import styled from 'styled-components';
import arrowNext from './arrowNext.svg';

const Page = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f7276;
`;
const CurrentPage = styled(Page)`
  background: #0f7276;
  color: white;
`;
const Pager = styled.div`
  display: flex;
  justify-content: center;
`;
const NextPage = styled(Page)`
  background: url(${arrowNext});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: 1px solid #0f7276;
`;
export default ({ currentPage, pagesCount, ...props }) => (
  <Pager className={props.className}>
    <CurrentPage active href="/homes">
      1
    </CurrentPage>
    <Page href="#">2</Page>
    <Page href="#">3</Page>
    <Page href="#">…</Page>
    <Page href="#">17</Page>
    <NextPage href="#" />
  </Pager>
);
