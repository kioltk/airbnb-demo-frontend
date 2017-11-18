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
export const TabletOnly = props => <Responsive {...props} minWidth={576} maxWidth={990} />;
export const TabletFrom = props => <Responsive {...props} minWidth={576} />;
export const MobileOnly = props => <Responsive {...props} maxWidth={575} />;
export const MobileFrom = props => <Responsive {...props} maxWidth={575} />;
// export const Default = props => <Responsive {...props} minWidth={0} />;
export const isDesktop = () => document.documentElement.clientWidth >= 991;
console.log(
  'Width is ',
  document.documentElement.clientWidth,
  document.documentElement.clientWidth > 991,
);
export default media;

export class WindowResizeListener extends React.Component {
  static listeners = [];

  static onResize = () => {
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    console.log(`Resize! ${windowWidth}`);
    WindowResizeListener.listeners.forEach((listener) => {
      listener({
        windowWidth,
        windowHeight,
      });
    });
  };

  componentDidMount() {
    // Defer creating _debouncedResize until it's mounted
    // This allows users to change DEBOUNCE_TIME if they want
    // If there's no listeners, we need to attach the window listener
    if (!WindowResizeListener.listeners.length) {
      window.addEventListener('resize', WindowResizeListener.onResize, false);
    }
    WindowResizeListener.listeners.push(this.props.onResize);
    WindowResizeListener.onResize();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onResize !== this.props.onResize) {
      const idx = WindowResizeListener.listeners.indexOf(this.props.onResize);
      WindowResizeListener.listeners.splice(idx, 1, nextProps.onResize);
    }
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.onResize !== this.props.onResize;
  }
  componentWillUnmount() {
    const idx = WindowResizeListener.listeners.indexOf(this.props.onResize);
    WindowResizeListener.listeners.splice(idx, 1);
    if (!WindowResizeListener.listeners.length) {
      window.removeEventListener('resize', WindowResizeListener.onResize, false);
    }
  }

  render() {
    return null;
  }
}
