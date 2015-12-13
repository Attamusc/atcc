import React from 'react';

export default class DashboardFollower extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <div className='dashboard-follower'>
        <img className='dashboard-follower--logo' src={this.props.user.logo} />
        <span className='dashboard-follower--name'>{this.props.user.name}</span>
        <span className='dashboard-follower--created'>({this.props.user.createdAt})</span>
      </div>
    );
  }
}
