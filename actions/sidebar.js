import store from '../mainstore'
import {makeAction, dispatchAction, dispatchAsyncAction} from './actionmaker'

const SidebarAction = {
    changeUser: function(uid){
        dispatchAction(makeAction("change_user", null, {id: uid}));
    }
}

export default SidebarAction;