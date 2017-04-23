import React from 'react';
import { connect } from 'react-redux';
import LabelAsPoint from '../components/labelaspoint'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import Name from '../components/name'
import UserSentimentAction from '../actions/usersentiment'

class UserSentiment extends React.Component{
    componentDidMount(){
        if(this.props.params.id != undefined){
            UserSentimentAction.loadSentiment(this.props.params.id);
        }
    }
    render(){
        var currentuser = this.props.data.filter(x => x["_id"] == this.props.params.id)[0];
        if(currentuser == undefined){
            currentuser  ={};
            currentuser.name = "Loading" 
        }
        // currentuser.sentiment - suppose this is an array 
        //alert(currentuser)
        if(this.props.sentiments == null || this.props.sentiments == undefined){
            this.props.sentiments = [];
        }
            var data = this.props.sentiments.map((x) => {return {s: x}; });
            console.log(this.props.sum);
            var avg = data.reduce((acc, val) =>(acc + val.s), 0) / data.length;
            var stdev = Math.round((data.reduce((acc, val) => {return acc + Math.pow((val.s - avg), 2)}, 0) / data.length)*100) / 100;

            var avg_2 = Math.round(avg*100)/100;
            //alert(JSON.stringify(stdev));
        return (<div>
                    <div className="row">
                        <Name>
                            Sentiment Analysis for {currentuser.name}
                        </Name>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <LineChart width={1000} height={500} data={data}
                                        margin={{top: 60, right: 50, left: 0, bottom: 5}}
                                        style={{marginLeft: "50px", marginRight: "auto"}}>
                                <XAxis label="Time" style={{fontSize: "16px"}} />
                                <YAxis label="Sentiment" style={{fontSize: "16px"}} />
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend />
                                <Line type="monotone" dataKey="s" stroke="#000000" label={<LabelAsPoint />}/>
                                </LineChart>
                        </div>
                    </div>
                    <div className="row">
                            <div style={{height: "15px"}}></div>
                        </div>
                        <div className="row">
                            <b>
                            <div className="col-md-3">
                                Average Sentiment: {avg_2}
                            </div>
                            <div className="col-md-9">
                                Standard Deviation in mood: {stdev}
                            </div>
                            </b>
                        </div>
                    <div className="row">
                            <div style={{height: "30px"}}></div>
                        </div>

                    {this.props.sum.summary == "" ? (<div></div>): (<div className="row">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3 className="panel-title">Summary</h3>
                            </div>
                            <div className="panel-body">
                                {this.props.sum.day} day(s) since the last appointment <br />
                                <div style={{height: "10px"}}></div>
                                Event Summary: <p>{this.props.sum.summary}</p>
                                <br /> 
                            </div>
                        </div>
                        
                    </div>) }
                </div>)
    }
}

function mapStateToProps (store) {
    return {
        data: store.app.users,
        sum: store.sentiment.summary,
        sentiments: store.sentiment.sentiments
    };
}

export default connect(mapStateToProps)(UserSentiment);