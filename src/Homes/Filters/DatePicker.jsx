import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';
import './_datepicker.css';
import Media, { MobileOnly, DesktopOnly, TabletOnly } from './../../Media';
// The only good way to style this picker is to use css file. Im sory about it

const Box = styled.div`
  height: calc(100% - 64px);
  width: 100%;
  ${Media.sm`height:100%;margin-top:0;`};
`;
export default props => (
  <Box>
    <DesktopOnly>
      <DayPickerRangeController
        {...props}
        isDayBlocked={day => day.isBefore(moment(), 'day')}
        numberOfMonths={2}
        hideKeyboardShortcutsPanel
      />
    </DesktopOnly>
    <TabletOnly>
      <DayPickerRangeController
        {...props}
        isDayBlocked={day => day.isBefore(moment(), 'day')}
        numberOfMonths={1}
        hideKeyboardShortcutsPanel
      />
    </TabletOnly>
    <MobileOnly>
      <DayPickerRangeController
        {...props}
        isDayBlocked={day => day.isBefore(moment(), 'day')}
        orientation="verticalScrollable"
        numberOfMonths={3}
        hideKeyboardShortcutsPanel
      />
    </MobileOnly>
  </Box>
);
