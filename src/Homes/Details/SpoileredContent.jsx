import React from 'react';
import styled from 'styled-components';
import { Spoiler as OriginalSpoiler } from './styled';

const Spoiler = styled(OriginalSpoiler)`
  color: #0f7276;
  font-weight: normal;
  margin-top: 15px;
`;
export default class extends React.Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className={this.props.className}>
        {this.state.isOpen && this.props.children}
        <div>
          <Spoiler onClick={this.toggle} opened={this.state.isOpen}>
            {this.props.message}
          </Spoiler>
        </div>
      </div>
    );
  }
}
