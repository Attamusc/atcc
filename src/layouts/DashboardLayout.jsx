import React from 'react';
import { Link } from 'react-router';

export default class DashboardLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render() {
    return (
      <div className='dashboard-container'>
        <nav className='navbar navbar-full navbar-light' style={{backgroundColor: 'rgba(100, 65, 165, 1.0)'}}>
          <Link className='navbar-brand' to='/dashboard'>ATCC</Link>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/dashboard/follows'>Follows</Link>
            </li>
          </ul>
        </nav>

        <div className='dashboard-content container-fluid'>
          {this.props.children}
        </div>
     </div>
    );
  }
}
