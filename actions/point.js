import store from '../mainstore'
import {makeAction, dispatchAction, dispatchAsyncAction} from './actionmaker'

const PointAction = {
    showSummary: function(day, s){
        dispatchAction(makeAction("show_summary", null, {day: day, sentiment: s}));
    }
}

export default PointAction;