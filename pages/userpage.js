import React from 'react';
import { connect } from 'react-redux';
class UserPage extends React.Component{
    render(){
        return (<div>
                <h1>
                    Current user {this.props.params.id}
                </h1>
            </div>)
    }
}

function mapStateToProps (store) {
    return {
        data: store.userpage
    };
}

export default connect(mapStateToProps)(UserPage);