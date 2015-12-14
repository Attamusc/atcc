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
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-3'>Attamusc Twitch Control Center</h1>
            <p className='lead'>Dashboard for all things Attamusc on Twitch</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, counterActions)(HomeView);
