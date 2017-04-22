import React from 'react';
import Counter from './pages/counter.js'
import Sidebar from './pages/sidebar'
import Jobs from './pages/jobs'
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

class App extends React.Component {
   render() {
      return (
          <div>
          <Sidebar />
            <div>
            {this.props.children}
            </div>
          </div>
      );
   }
}

export default App;