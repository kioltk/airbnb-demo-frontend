import React from 'react';
import styled from 'styled-components';
import Wrap from './../../Wrap';
// import Media from './../../Media';
import Button from './Button';
import DatePicker from './DatePicker';
import arrow from './arrowRight.svg';
import { MobileOnly } from '../../Media';

const Fixed = styled.div`
  box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
  position: fixed;
  right: 0;
  left: 0;
  top: 81px;
  background: white;
  z-index: 10;
`;

const Box = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
`;

const PickedDate = styled.span`
  font-size: 18px;
  color: ${props => (props.selected ? '#0F7276;' : '#636363')};
  margin: 8px;
  padding-bottom: 2px;
  border-bottom: 1px solid ${props => (props.selected ? '#008489' : '#ffffff')};
`;

const PickerImage = styled.img`margin: 8px;`;

const PickerBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

const Offset = styled.div`height: 56px;`;
class Filters extends React.Component {
  state = {
    dropdown: null,
    startDate: null,
    endDate: null,
    selectedStartDate: null,
    selectedEndDate: null,
    focusedInput: 'startDate',
  };
  setDropdown = (target, dropdown, callback) => {
    this.setState({ dropdown: this.state.dropdown === dropdown ? null : dropdown }, callback);
  };

  datesTitle = () => {
    if (this.state.dropdown === 'dates') {
      return (
        `${this.state.selectedStartDate
          ? this.state.selectedStartDate.format('MMM Do')
          : 'Check in'} — ` +
        `${this.state.selectedEndDate ? this.state.selectedEndDate.format('MMM Do') : 'Check out'} `
      );
    }
    return (
      (this.state.selectedStartDate ? this.state.selectedStartDate.format('MMM Do') : '') + // cant use && here cause it returns null on string
      (this.state.selectedEndDate ? ` —  ${this.state.selectedEndDate.format('MMM Do')}` : '')
    );
  };

  render() {
    return (
      <Offset>
        <Fixed>
          <Wrap className="col-xs">
            <Box>
              <Button
                label="Dates"
                selected={this.state.dropdown === 'dates'}
                onToggle={(target) => {
                  this.setDropdown(target, 'dates');
                }}
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                    selectedStartDate: prevState.startDate,
                    selectedEndDate: prevState.endDate,
                  }));
                }}
                onApply={(target) => {
                  this.setState(prevState => ({
                    dropdown: null,
                    startDate: prevState.selectedStartDate,
                    endDate: prevState.selectedEndDate,
                  }));
                }}
                text={this.datesTitle}
              >
                <MobileOnly>
                  <PickerBox>
                    <PickedDate
                      selected={!this.state.selectedStartDate && !this.state.selectedEndDate}
                    >
                      {this.state.selectedStartDate
                        ? this.state.selectedStartDate.format('MMM Do')
                        : 'Check-in'}
                    </PickedDate>
                    <PickerImage src={arrow} />
                    <PickedDate
                      selected={this.state.selectedStartDate && !this.state.selectedEndDate}
                    >
                      {this.state.selectedEndDate
                        ? this.state.selectedEndDate.format('MMM Do')
                        : 'Check-out'}
                    </PickedDate>
                  </PickerBox>
                </MobileOnly>
                <DatePicker
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput =>
                    this.setState({ focusedInput: focusedInput || 'startDate' })}
                  startDate={this.state.selectedStartDate}
                  endDate={this.state.selectedEndDate}
                  onDatesChange={({ startDate, endDate }) => {
                    console.log('Date changed', startDate, endDate);
                    this.setState({ selectedStartDate: startDate, selectedEndDate: endDate });
                  }}
                />
              </Button>
              <Button
                selected={this.state.dropdown === 'guests'}
                onToggle={target => this.setDropdown(target, 'guests')}
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                onApply={(target) => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                label="Guests"
                text={() => ''}
              >
                Hello, i am dropdown from guests!
              </Button>
              <Button
                selected={this.state.dropdown === 'room'}
                onToggle={target => this.setDropdown(target, 'room')}
                className="hidden-md hidden-sm hidden-xs"
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                onApply={(target) => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                label="Room type"
                text={() => ''}
              />
              <Button
                selected={this.state.dropdown === 'price'}
                onToggle={target => this.setDropdown(target, 'price')}
                className="hidden-md hidden-sm hidden-xs"
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                onApply={(target) => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                className="hidden-md hidden-sm hidden-xs"
                label="Price"
                text={() => ''}
              />
              <Button
                selected={this.state.dropdown === 'instant'}
                onToggle={target => this.setDropdown(target, 'instant')}
                className="hidden-md hidden-sm hidden-xs"
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                onApply={(target) => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                label="Instant book"
                text={() => ''}
              />
              <Button
                selected={this.state.dropdown === 'filters'}
                onToggle={target => this.setDropdown(target, 'filters')}
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                onApply={(target) => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                label="More filters"
                text={() => ''}
              />
            </Box>
          </Wrap>
        </Fixed>
      </Offset>
    );
  }
}
export default Filters;
