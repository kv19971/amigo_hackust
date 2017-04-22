import React from 'react'
import PersonIcon from '../components/person-icon'
import { connect } from 'react-redux';
import SidebarAction from '../actions/sidebar';


class Sidebar extends React.Component{
    handleClickHigher(id){
        return () => {SidebarAction.changeUser(id);}
    }
    render(){
        alert(JSON.stringify(this.props))
        return (
        <ul className="nav nav-pills nav-stacked">
            
                    {this.props.data.map((val, i) => (
                        <li role="presentation"><a>
                            <PersonIcon handleClick={this.handleClickHigher(val.id)} key={val.id} person={val}>
                            </PersonIcon>
                            </a>
                        </li>), this)}
            
        </ul>
        );
    }

}
function mapStateToProps (store) {
    return {
        data: store.app.users
    };
}

export default connect(mapStateToProps)(Sidebar);