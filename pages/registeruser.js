import React from 'react';
import RegisterUserAction from '../actions/registeruser'
class RegisterUser extends React.Component{
    render(){
        return (<div>
                <h1>
                    Current user {this.props.data.currentUser.name}
                </h1>
            </div>)
    }
}


export default RegisterUser;