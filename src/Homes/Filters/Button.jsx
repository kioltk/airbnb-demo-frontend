import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import Media, { TabletFrom, MobileOnly } from './../../Media';
import close from './close.svg';

const Button = styled.button`
  padding: 7px 16px;
  margin-right: 6px;
  margin-left: 6px;
  border-radius: 4px;
  font-size: 14px;
  display: block;

  background: ${props => (props.selected ? '#008489' : 'transparent')};
  border: 1px solid ${props => (props.selected ? '#008489' : ' rgba(72, 72, 72, 0.2);')};
  color: ${props => (props.selected ? '#fff' : '#383838')};
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;
const DropdownHolder = styled.div`position: relative;`;
const DropdownWindow = onClickOutside(styled.div`
  position: absolute;
  top: 8px;
  left: 0px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  z-index: 11;
  background: #ffffff;
  ${Media.mobile`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 48px;
    border: none;
    box-shadow: none;
  `};
`);
const Actions = styled.div`
  ${Media.mobile`
    position: fixed;
    background: white;
    height: 48px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
  `};
`;
const Action = styled.button`
  height: 64px;
  width: 110px;
  font-size: 16px;
  background: transparent;
  border: none;
`;
const Cancel = styled(Action)`color: #636363;`;
const Apply = styled(Action)`
  margin-left: auto;
  color: #0f7276;
`;
const CancelImage = styled.img`
  padding: 16px 8px;
  width: 16px;
  height: 16px;
`;
const ResetButton = styled.button`
  background: transparent;
  border: none;
  color: #0f7276;
  height: 100%;
  padding-right: 8px;
`;
const ActionTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DropdownContentHolder = styled.div`
  ${Media.mobile`
    position: relative;
    height: calc(100% - 18px);
    width: 100%;
  `};
`;
const DropdownContentBox = styled.div`
  ${Media.mobile`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `};
`;
export default class extends React.Component {
  state = {
    text: this.props.text,
    selected: false,
  };
  onClick = () => {
    console.log(`Toggled ${this.props.label}`);
    this.setState({ selected: !this.state.selected });
    this.props.onToggle(this);
  };
  onCancel = () => {
    console.log(`Canceled ${this.props.label}`);
    this.props.onCancel(this);
    this.setState({ selected: false });
  };
  onApply = () => {
    console.log(`Applied ${this.props.label}`);
    this.props.onApply(this);
    this.setState({ selected: false });
  };
  onClickOutside = (evt) => {
    console.log(`Clicked ${this.props.label} outside`);
    this.props.onCancel(this);
    this.setState({ selected: false });
  };
  render() {
    return (
      <div className={this.props.className}>
        <Button
          className={this.props.className}
          onClick={this.onClick}
          selected={this.state.selected}
        >
          {this.props.text() ? this.props.text() : this.props.label}
        </Button>
        <DropdownHolder>
          {this.state.selected && (
            <DropdownWindow eventTypes="click" handleClickOutside={this.onClickOutside}>
              <MobileOnly>
                <Actions>
                  <CancelImage src={close} onClick={this.onCancel} />
                  <ActionTitle className="col-xs">{this.props.label}</ActionTitle>
                  <ResetButton onClick={this.onReset}>Reset</ResetButton>
                </Actions>
              </MobileOnly>
              <DropdownContentHolder>
                <DropdownContentBox>{this.props.children}</DropdownContentBox>
              </DropdownContentHolder>
              <TabletFrom>
                <Actions>
                  <Cancel onClick={this.onCancel}>Cancel</Cancel>
                  <Apply onClick={this.onApply}>Apply</Apply>
                </Actions>
              </TabletFrom>
            </DropdownWindow>
          )}
        </DropdownHolder>
      </div>
    );
  }
}
