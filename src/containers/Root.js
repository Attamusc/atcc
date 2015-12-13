import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from 'containers/DevTools';

export default class Root extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired
  }

  render() {
    const content = (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    );

    return (
      <Provider store={this.props.store}>
        <div>
          {content}
          <DevTools />
        </div>
      </Provider>
    );
  }
}
