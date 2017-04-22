import React from 'react';
import Counter from './pages/counter.js'
import Sidebar from './pages/sidebar'
import Jobs from './pages/jobs'
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

class App extends React.Component {
    
   render() {
      return (
          <div className="container">
              <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10">
                    {this.props.children}
                </div>
            </div>
          </div>
      );
   }
}
function mapStateToProps (store) {
    return {
        data: store.app
    };
}

export default connect(mapStateToProps)(App);