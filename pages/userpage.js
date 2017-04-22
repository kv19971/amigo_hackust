import React from 'react';
import { connect } from 'react-redux';
class UserPage extends React.Component{
    render(){
        var currentuser = this.props.data[this.props.params.id - 1];
        alert(currentuser)
        return (<div>
                <h1>
                    Current user {currentuser.name}
                </h1>
            </div>)
    }
}

function mapStateToProps (store) {
    return {
        data: store.app.users
    };
}

export default connect(mapStateToProps)(UserPage);