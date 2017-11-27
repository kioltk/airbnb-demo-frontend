import React from 'react';
import { css } from 'styled-components';
import Responsive from 'react-responsive';

const sizes = {
  xs: { min: 0 },
  sm: { min: 576 },
  md: { min: 768 },
  lg: { min: 991 },
  xl: { min: 1200 },
  mobile: { max: 576 },
};

const media = Object.keys(sizes).reduce((acc, sizeName) => {
  const minWidthQuery = sizes[sizeName].min / 16;
  const maxWidthQuery = sizes[sizeName].max / 16;
  acc[sizeName] = (...args) => {
    if (minWidthQuery && maxWidthQuery) {
      return css`
      @media (min-width: ${minWidthQuery}em and max-width: ${maxWidthQuery}) {
        ${css(...args)};
      }`;
    } else if (minWidthQuery) {
      return css`
        @media (min-width: ${minWidthQuery}em) {
          ${css(...args)};
        }
      `;
    }
    return css`
      @media (max-width: ${maxWidthQuery}em) {
        ${css(...args)};
      }
    `;
  };
  return acc;
}, {});

export const DesktopOnly = props => <Responsive {...props} minWidth={991} />;
export const NotDesktop = props => <Responsive {...props} maxWidth={991} />;
export const TabletOnly = props => <Responsive {...props} minWidth={576} maxWidth={991} />;
export const TabletFrom = props => <Responsive {...props} minWidth={576} />;
export const MobileOnly = props => <Responsive {...props} maxWidth={576} />;
export const MobileFrom = props => <Responsive {...props} minWidth={576} />;

export const isDesktop = () => document.documentElement.clientWidth >= 991;

export default media;
