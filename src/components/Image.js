import React from 'react';
import './Image.css'
import PropTypes from 'prop-types';

const Image = ({ src, altText, onClick }) =>
  <img src={src} alt={altText} onClick={onClick}></img>

Image.propTypes = {
  /** The source of the image */
  src: PropTypes.string,
  /** Hover-over text of the image */
  altText: PropTypes.string,
  /** What to do when you click the image */
  onClick: PropTypes.func
}

Image.defaultProps = {
  src: "https://facebook.github.io/react/img/logo.svg",
  altText: "Test Image",
  /* eslint-disable no-console */
  onClick: event => { console.log(event.target); },
  /* eslint-enable no-console */
}

export default Image
