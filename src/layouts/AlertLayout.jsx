import React from 'react';

export default class AlertLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render() {
    return (
      <div className='alert-container'>
        {this.props.children}
      </div>
    );
  }
}
