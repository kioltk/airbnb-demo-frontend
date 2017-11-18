import React from 'react';
import styled from 'styled-components';
import Wrap from './../../Wrap';
// import Media from './../../Media';
import Filter from './Filter';
import DatePicker from './DatePicker';
import DateFilter from './DateFilter';

const Fixed = styled.div`
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  position: fixed;
  right: 0;
  left: 0;
  top: 80.5px;
  background: white;
  z-index: 10;
`;

const Box = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
`;

const Offset = styled.div`height: 56px;`;

class Filters extends React.Component {
  state = {
    dropdown: null,
  };
  setDropdown = (dropdown, callback) => {
    this.setState({ dropdown: this.state.dropdown === dropdown ? null : dropdown }, callback);
  };

  render() {
    return (
      <Offset>
        <Fixed>
          <Wrap className="col-xs">
            <Box>
              <DateFilter
                closeDropdown={() => this.setDropdown(null)}
                onApply={(startDate, endDate) => this.setState({ startDate, endDate })}
              />
              {/* <Button
                selected={this.state.dropdown === 'guests'}
                onToggle={() => this.setDropdown('guests')}
                onCancel={() => {
                  this.setDropdown(null);
                }}
                onApply={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                label="Guests"
                text=""
              >
                Hello, i am dropdown from guests!
              </Button>
              <Button
                selected={this.state.dropdown === 'room'}
                onToggle={() => this.setDropdown('room')}
                className="hidden-md hidden-sm hidden-xs"
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                onApply={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                label="Room type"
                text=""
              />
              <Button
                className="hidden-md hidden-sm hidden-xs"
                selected={this.state.dropdown === 'price'}
                onToggle={() => this.setDropdown('price')}
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                onApply={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                label="Price"
                text=""
              />
              <Button
                className="hidden-md hidden-sm hidden-xs"
                selected={this.state.dropdown === 'instant'}
                onToggle={() => this.setDropdown('instant')}
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                onApply={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                label="Instant book"
                text=""
              />
              <Button
                selected={this.state.dropdown === 'filters'}
                onToggle={() => this.setDropdown('filters')}
                onCancel={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                onApply={() => {
                  this.setState(prevState => ({
                    dropdown: null,
                  }));
                }}
                label="More filters"
                text=""
              /> */}
            </Box>
          </Wrap>
        </Fixed>
      </Offset>
    );
  }
}
export default Filters;
