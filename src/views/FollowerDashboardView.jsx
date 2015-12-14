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

  componentWillReceiveProps() {
    this.props.eventuallyFetch();
  }

  render() {
    const follows = Object.keys(this.props.follows)
    .map(id => {
      const follow = this.props.follows[id];

      return (
        <li key={follow.name} className='follows-item'><DashboardFollower user={follow} /></li>
      );
    });

    return (
      <div className='follow-container'>
        <h1>Follower Alerts</h1>
        <ul className='follows-list'>
          {follows}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, followsActions)(FollowerDashboardView);
