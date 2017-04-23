import React from 'react'

export default class Name extends React.Component{
    render(){
        return (<h1 style={{margin: "25px 50px", fontWeight: "bold", color: "#1A1110 !important"}}>
            {this.props.children}
        </h1>);
    }
}