import React from 'react'
import PersonIcon from '../components/person-icon'
import { connect } from 'react-redux';
import SidebarAction from '../actions/sidebar';

import Name from '../components/name'


class Sidebar extends React.Component{
    handleClickHigher(id){
        return () => {SidebarAction.changeUser(id);}
    }
    render(){
     
        return (
            <div>
             <h2 style={{color: "#07C", textAlign: "center", fontWeight: "bold"}}>Patients</h2>  
        <ul className="nav nav-pills nav-stacked" >
                
                         
                        
                    {this.props.data.map((val, i) => (
                        <li role="presentation"  style={{borderRadius: "10px"}}>
                            <PersonIcon handleClick={this.handleClickHigher(val._id)} key={val._id} person={val}>
                            </PersonIcon>
                        </li>), this)}
            
        </ul></div>
        );
    }

}
function mapStateToProps (store) {
    return {
        data: store.app.users
    };
}

export default connect(mapStateToProps)(Sidebar);