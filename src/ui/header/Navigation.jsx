import React from "react";
import styled from "styled-components";
import Adaptive from "./../Adaptive";
const Box = styled.div`
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  vertical-align: middle;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  ${Adaptive.tablet`display:none;`};
`;
const ListItem = styled.li`display: inline;`;
const ListItemLink = styled.a`
  line-height: 24px;
  font-size: 14px;
  margin: 4px;
  text-align: center;
  color: #383838;
  min-width: 56px;
  display: inline-block;
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { actions: ["Become a host", "Help", "Sign Up", "Login In"] };
  }
  render() {
    const items = this.state.actions.map(action => (
      <ListItem>
        <ListItemLink href="#">{action}</ListItemLink>
      </ListItem>
    ));
    return (
      <Box className={this.props.className}>
        <List>{items}</List>
      </Box>
    );
  }
}
export default Navigation;
