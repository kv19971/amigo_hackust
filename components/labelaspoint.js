import React from 'react'
import PointAction from '../actions/point'
export default class LabelAsPoint extends React.Component {

    render() {
        const { x, y } = this.props;
        return (
            <circle
                onClick={()=>{
                    PointAction.showSummary(this.props.index, this.props.payload.s);
                }}
                cx={x}
                cy={y}
                r={40}
                fill="transparent"/>
        );
    }
}