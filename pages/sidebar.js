import React from 'react'
import PersonIcon from '../components/person-icon'
import { connect } from 'react-redux';
import SidebarAction from '../actions/sidebar';


class Sidebar extends React.Component{
    handleClickHigher(name){
        return () => {SidebarAction.changeUser(name);}
    }
    render(){
        return (<div>
            <li>
                {this.props.data.users.map((val, i) => (<PersonIcon handleClick={this.handleClickHigher(val.name)} key={val.id} person={val}></PersonIcon>), this)}
            </li>
        </div>);
    }

}
function mapStateToProps (store) {
    return {
        data: store.sidebar
    };
}

export default connect(mapStateToProps)(Sidebar);