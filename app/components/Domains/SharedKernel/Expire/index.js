/**
 *
 * Expire
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Expire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentWillReceiveProps(nextProps) {
    // reset the timer if children are changed
    if (nextProps.children !== this.props.children) {
      this.setTimer();
      this.setState({ visible: true });
    }
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    // clear any existing timer
    if (this.timer != null) {
      clearTimeout(this.timer);
    }

    // hide after `delay` milliseconds
    this.timer = setTimeout(() => {
      this.setState({ visible: false });
      this.timer = null;
      if (this.props.actionAfterExpire) this.props.actionAfterExpire();
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return this.state.visible ? <div>{this.props.children}</div> : null;
  }
}

Expire.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number.isRequired,
  actionAfterExpire: PropTypes.func,
};

export default Expire;
