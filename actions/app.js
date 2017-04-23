import store from '../mainstore'
import {makeAction, dispatchAction, dispatchAsyncAction} from './actionmaker'

const AppAction = {
    loadUsers: function(){
        dispatchAsyncAction(makeAction("load_users", "l", null), {
            url: "https://cinqo-amigos.herokuapp.com/getAllProfiles",
            method: "GET",
            data: null
        });

    }
}

export default AppAction;
