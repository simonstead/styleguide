import React, { Component } from 'react';
import './Button.css'
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    href: PropTypes.string,
    title: PropTypes.string
  }
  static defaultProps = {
    href: "/",
    title: "Click Me"
  }

  render() {
    return (
      <a href={this.props.href} className="button">
        <div>{ this.props.title }</div>
      </a>
    );
  }
}

export default Button;
