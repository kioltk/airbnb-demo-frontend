import React from 'react';
import Filter from './Filter';
import { formatInstantLabel } from './LabelFormats';

export default class extends React.Component {
  state = {
    selected: false,
    instant: 0,
    selectedInstant: 0,
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
      instant: this.state.instant,
    });
  };

  onToggle = (selected) => {
    this.setState({ selected });
  };

  render() {
    return (
      <Filter
        label={formatInstantLabel(this.state)}
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
      >
        <div>Hello, i am instant booking filter! </div>
      </Filter>
    );
  }
}
