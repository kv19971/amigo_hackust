import React from 'react';
import { connect } from 'react-redux';
class UserSentiment extends React.Component{
    render(){
        var currentuser = this.props.data[this.props.params.id - 1];
        // currentuser.sentiment - suppose this is an array 
        alert(currentuser)
        return (<div>
                <h1>
                    Current usr sentiment {currentuser.name}
                </h1>
            </div>)
    }
}

function mapStateToProps (store) {
    return {
        data: store.app.users
    };
}

export default connect(mapStateToProps)(UserSentiment);