import React from 'react';
import Counter from './pages/counter.js'
import Sidebar from './pages/sidebar'
import Jobs from './pages/jobs'
import AppAction from './actions/app'
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

class App extends React.Component {

    componentDidMount(){
        AppAction.loadUsers();
    }

    render() {
      return (
          <div>
              <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10" style={{minHeight: "90%"}}>
                    <div className="row">
                            <div style={{height: "20px"}}></div>
                        </div>
                    <ul className="nav nav-tabs nav-justified switchbtns">
                        <li role="presentation" style={{background: "#a87dff"}}><Link id="prlink" to={"/"+this.props.params.id+"/"}><h4 >Profile</h4></Link></li>
                        <li role="presentation" style={{background: "#d6ff7d"}}><Link to={"/"+this.props.params.id+"/sentiment"}><h4>Sentiment</h4></Link></li>
                    </ul>
                    <div className="container" style={{width:'auto'}}>
                        {this.props.children}
                    </div>
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