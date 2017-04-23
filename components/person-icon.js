import React from 'react'
import { Link } from 'react-router'

export default class PersonIcon extends React.Component{
    render(){
        return (<Link to={"/"+this.props.person._id+"/"}>
            <h3>{this.props.person.name}</h3>
        </Link>);
    }
}