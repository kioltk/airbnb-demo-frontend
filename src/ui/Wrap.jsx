import React from "react";
import styled from "styled-components";
import Adaptive from "./Adaptive";

const Wrap = styled.div`
  width: 1124px;
  padding-left: 80px;
  padding-right: 80px;
  margin-left: auto;
  margin-right: auto;
  ${Adaptive.desktop`width:100%; padding-left:8px; padding-right:8px;`};
  ${Adaptive.tablet`width:100%; padding-left:8px; padding-right:8px;`};
`;
const Wrapped = styled.div``;
export default props => {
  return (
    <Wrap>
      <Wrapped className={props.className}>{props.children}</Wrapped>
    </Wrap>
  );
};
