import React from 'react';
import Typist from 'react-typist';

const TOTAL_TYPING_ELEMENTS = 2;

export default class FollowAlert extends React.Component {
  static propTypes = {
    follower: React.PropTypes.object.isRequired,
    onComplete: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      typingCompleted: 0
    };
  }

  render() {
    return (
        <Typist key={this.props.follower.id}
          className="follow-alert-wrap"
          cursor={{ show: false }}
          avgTypingDelay={40}
          stdTypingDelay={0}
          startDelay={500}
          onTypingDone={() => this.props.onComplete()}>
          <div className='follow-alert'>
            <div className="alert-title">
              New Follower
            </div>
            <div className="alert-subject">
              {this.props.follower.name}
            </div>
          </div>
        </Typist>
    );
  }
}
