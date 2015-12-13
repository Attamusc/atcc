import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions as counterActions } from '../redux/modules/counter';

const mapStateToProps = (state) => ({
  counter: state.counter
});

export class HomeView extends React.Component {
  static propTypes = {
    increment: React.PropTypes.func,
    counter: React.PropTypes.number
  }

  render() {
    return (
      <div className='container text-center'>
        <h1>Attamusc Twitch Dashboard</h1>

        <Link to='/alerts/follows'>Go To FollowerAlerts View</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, counterActions)(HomeView);
