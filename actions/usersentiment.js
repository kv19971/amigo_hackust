import store from '../mainstore'
import {makeAction, dispatchAction, dispatchAsyncAction} from './actionmaker'

const UserSentimentAction = {
    loadSentiment: function(pid){
        dispatchAsyncAction(makeAction("load_sentiments", "l", null), {
            url: "https://cinqo-amigos.herokuapp.com/kv",
            method: "GET",
            data: null
        });

    }
}

export default UserSentimentAction;
