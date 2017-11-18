import React from 'react';
import styled from 'styled-components';
import Wrap from './../../Wrap';
import Filter from './Filter';
import DatePicker from './DatePicker';
import arrow from './arrowRight.svg';
import { MobileOnly } from '../../Media';
import { formatDateLabel, formatCheckinLabel, formatCheckoutLabel } from './LabelFormats';

const SelectedArrow = styled.img`margin: 8px;`;

const SelectedDates = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

const SelectedDate = styled.span`
  font-size: 18px;
  color: ${props => (props.selected ? '#0F7276;' : '#636363')};
  margin: 8px;
  padding-bottom: 2px;
  border-bottom: 1px solid ${props => (props.selected ? '#008489' : '#ffffff')};
`;

export default class extends React.Component {
  state = {
    selected: false,
    startDate: null,
    endDate: null,
    selectedStartDate: null,
    selectedEndDate: null,
    focusedInput: 'startDate',
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      startDate: this.state.selectedStartDate,
      endDate: this.state.selectedEndDate,
    });
    this.props.onApply(this.state.selectedStartDate, this.state.selectedEndDate);
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      selectedStartDate: this.state.startDate,
      selectedEndDate: this.state.endDate,
    });
  };
  onToggle = (selected) => {
    selected => this.setState({ selected });
  };

  render() {
    return (
      <Filter
        label={formatDateLabel(this.state)}
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
      >
        <MobileOnly>
          <SelectedDates>
            <SelectedDate selected={!this.state.selectedStartDate && !this.state.selectedEndDate}>
              {formatCheckinLabel(this.state)}
            </SelectedDate>
            <SelectedArrow src={arrow} />
            <SelectedDate selected={this.state.selectedStartDate && !this.state.selectedEndDate}>
              {formatCheckoutLabel(this.state)}
            </SelectedDate>
          </SelectedDates>
        </MobileOnly>
        <DatePicker
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput =>
            this.setState({ focusedInput: focusedInput || 'startDate' })}
          startDate={this.state.selectedStartDate}
          endDate={this.state.selectedEndDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({
              selectedStartDate: startDate,
              selectedEndDate: endDate,
            });
          }}
        />
      </Filter>
    );
  }
}
