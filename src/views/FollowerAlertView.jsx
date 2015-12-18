import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { actions as followsActions } from '../redux/modules/follows';

import FollowAlert from '../components/FollowAlert';

const mapStateToProps = (state) => ({
  currentFollow: state.follows.currentFollow
});

export class FollowerAlertView extends React.Component {
  static propTypes = {
    currentFollow: React.PropTypes.object,
    seed: React.PropTypes.func.isRequired,
    poll: React.PropTypes.func.isRequired,
    popFollowQueue: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      showAlert: true
    };
  }

  componentWillMount() {
    this.props.seed();
    this.props.poll();
  }

  render() {
    let followAlert;
    if (this.props.currentFollow && this.state.showAlert) {
      followAlert = (
        <div className='follow-alert-container'>
          <FollowAlert follower={this.props.currentFollow}
            onComplete={() => this._idleCounter()}/>
        </div>
      );
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="follow-alert"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {followAlert}
      </ReactCSSTransitionGroup>
    );
  }

  _idleCounter() {
    window.setTimeout(() => this.setState({ showAlert: false }));
  }
}

export default connect(mapStateToProps, followsActions)(FollowerAlertView);
