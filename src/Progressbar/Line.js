import React, { Component } from 'react';
import enhancer from './enhancer';
import { propTypes, defaultProps } from './types';

class Line extends Component {

  componentDidMount() {
    const intervalId = setInterval(this.timer, 50);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  timer() {
    // setState method is used to update the state
    var newCount = this.state.currentCount + 1;
    if (newCount <= 100) {
      this.setState({ currentCount: newCount });
    } else {
      clearInterval(this.state.intervalId);
    }
  }
  render() {
    const {
      className,
      percent,
      prefixCls,
      strokeColor,
      strokeLinecap,
      strokeWidth,
      style,
      trailColor,
      trailWidth,
      ...restProps,
    } = this.props;

    delete restProps.gapPosition;

    const pathStyle = {
      strokeDasharray: '100px, 100px',
      strokeDashoffset: `${(100 - percent)}px`,
      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear',
    };

    const center = strokeWidth / 2;
    const right = 100 - (strokeWidth / 2);
    const pathString =
          `M ${strokeLinecap === 'round' ? center : 0},${center}
           L ${strokeLinecap === 'round' ? right : 100},${center}`;
    const viewBoxString = `0 0 100 ${strokeWidth}`;

    return (
      <svg
        className={`${prefixCls}-line ${className}`}
        viewBox={viewBoxString}
        preserveAspectRatio="none"
        style={style}
        {...restProps}
      >
        <path
          className={`${prefixCls}-line-trail`}
          d={pathString}
          strokeLinecap={strokeLinecap}
          stroke={trailColor}
          strokeWidth={trailWidth || strokeWidth}
          fillOpacity="0"
        />
        <path
          className={`${prefixCls}-line-path`}
          d={pathString}
          strokeLinecap={strokeLinecap}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fillOpacity="0"
          ref={(path) => { this.path = path; }}
          style={pathStyle}
        />
      </svg>
    );
  }
}

Line.propTypes = propTypes;

Line.defaultProps = defaultProps;

export default enhancer(Line);
