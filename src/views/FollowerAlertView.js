import React from 'react';
import { connect } from 'react-redux';
import { actions as followsActions } from '../redux/modules/follows';

const mapStateToProps = (state) => ({
  follows: state.follows
});

export class FollowerAlertView extends React.Component {
  static propTypes = {
    follows: React.PropTypes.object.isRequired,
    fetch: React.PropTypes.func.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(this.props.fetch);
  }

  render() {
    return (
      <div className='follow-container'>
        <h1>Follower Alerts</h1>
        <ul>
          {Object.keys(this.props.follows).map(follow =>
            <li><span>{follow.user.name}</span></li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, followsActions)(FollowerAlertView);
