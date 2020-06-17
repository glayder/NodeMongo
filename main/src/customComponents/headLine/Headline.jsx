

import React, { PureComponent } from 'react';
import { string } from 'prop-types';

import './headline.css';

class Headline extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <h1 className="headline">{children}</h1>
    );
  }
}

Headline.propTypes = {
  children: string.isRequired,
};

export default Headline;
