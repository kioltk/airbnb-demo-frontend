import React from 'react';
import Filter from './Filter';
import { formatMoreLabel } from './LabelFormats';

export default class extends React.Component {
  state = {
    selected: false,
  };

  onApply = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
    });
    this.props.onApply({});
  };

  onCancel = () => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
    });
  };

  onToggle = (selected) => {
    this.setState({ selected });
  };

  render() {
    return (
      <Filter
        label={formatMoreLabel(this.state)}
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
      >
        <div>Hello, we are more filters! </div>
      </Filter>
    );
  }
}
