import React, { Component } from 'react';
import './Nav.css'
import PropTypes from 'prop-types';

/**
 * General nav.
 */
class Nav extends Component {
  static propTypes = {
    /** The list of nav items*/
    items: PropTypes.array
  }
  static defaultProps = {
    items: ['About', 'Contact']
  }
  render() {
    return (
      <nav className="nav">
        <ul>
          {this.props.items.map((item,k) => <li key={k}>{item}</li>)}
        </ul>
      </nav>
    );
  }
}

export default Nav;
