import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = (state) => ({});

export class HomeView extends React.Component {
  static propTypes = {}

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

export default connect(mapStateToProps)(HomeView);
