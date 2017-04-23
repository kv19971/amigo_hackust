import React from 'react';
import { connect } from 'react-redux';
import Name from '../components/name'
class UserPage extends React.Component{
    render(){
        var currentuser = this.props.data.filter(x => x["_id"] == this.props.params.id)[0];
        if(currentuser == undefined){
            currentuser  ={};
            currentuser.name = "Loading" 
        }
        return (<div>
                    <div className="row">
                        <div className="col-md-9">
                        <Name>
                            {currentuser.name}
                        </Name>
                        </div>
                        <div className="col-md-3">
                            </div>
                    </div>
                    <div className="row">
                            <div className="panel" style={{background: "#ae0cff !important"}}>
                                 <div className="panel-heading" >
                                    <h3 className="panel-title">Personal Information</h3>
                                </div>
                                <div className="panel-body">
                                    Name: {currentuser.name} <br />
                                    Date of Birth: {currentuser.dob} <br />
                                    Booking Frequency: {currentuser.bookingFreq} <br />
                                    Last Appointment: {currentuser.last}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="panel">
                                 <div className="panel-heading">
                                    <h3 className="panel-title">Patient Health</h3>
                                </div>
                                <div className="panel-body">
                                    Condition: {currentuser.condition} <br />
                                    Diagnosis: {currentuser.diagnosis} <br />
                                    Home Work: {currentuser.hw} <br />
                                    Other: {currentuser.other}
                                </div>
                            </div>
                        </div>

            </div>)
    }
}

function mapStateToProps (store) {
    return {
        data: store.app.users
    };
}

export default connect(mapStateToProps)(UserPage);