

import React, { PureComponent } from 'react';
import { node } from 'prop-types';

import './content.css';

class Content extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="content">{children}</div>
    );
  }
}

Content.propTypes = {
  children: node.isRequired,
};

export default Content;
