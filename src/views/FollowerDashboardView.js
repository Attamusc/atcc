import React from 'react';
import { connect } from 'react-redux';
import { actions as followsActions } from '../redux/modules/follows';

import DashboardFollower from '../components/DashboardFollower';

const mapStateToProps = (state) => ({
  follows: state.follows
});

export class FollowerDashboardView extends React.Component {
  static propTypes = {
    follows: React.PropTypes.object.isRequired,
    fetch: React.PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const follows = Object.keys(this.props.follows)
    .map(id => {
      const follow = this.props.follows[id];

      return (
        <li key={follow.name}><DashboardFollower user={follow} /></li>
      );
    });

    return (
      <div className='follow-container'>
        <h1>Follower Alerts</h1>
        <ul>{follows}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, followsActions)(FollowerDashboardView);
