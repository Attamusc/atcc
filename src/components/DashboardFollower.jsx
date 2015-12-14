import React from 'react';

export default class DashboardFollower extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <div className='dashboard-follower'>
        <img className='dashboard-follower--logo' src={this.props.user.logo} />
        <div className='dashboard-follower--name'>{this.props.user.name}</div>
        <div className='dashboard-follower--created'>followed {this.props.user.createdAt} ago</div>
      </div>
    );
  }
}
