import React, { Component } from 'react';
import './SubHeader.scss';

export class SubHeader extends Component {

  render() {
    return (
      <div className='sub-header-component'>
        {this.props.children}
      </div>
    );
  }
}
