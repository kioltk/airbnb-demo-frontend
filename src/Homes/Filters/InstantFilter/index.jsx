import React from 'react';
import Filter from './../Filter';
import { formatInstantLabel } from './../LabelFormats';
import InstantPicker from './InstantPicker';

export default class extends React.Component {
  state = {
    selected: false,
    instant: false,
    selectedInstant: false,
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      instant: this.state.selectedInstant,
    });
    this.props.onApply(this.state.instant);
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      selectedInstant: this.state.instant,
    });
  };

  onToggle = (selected) => {
    this.setState({ selected });
  };

  toggleCheck = () => {
    this.setState({ selectedInstant: !this.state.selectedInstant });
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        label={formatInstantLabel(this.state)}
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
      >
        <InstantPicker toggleCheck={this.toggleCheck} checked={this.state.selectedInstant} />
      </Filter>
    );
  }
}
