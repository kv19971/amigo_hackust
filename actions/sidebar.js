import store from '../mainstore'
import {makeAction, dispatchAction, dispatchAsyncAction} from './actionmaker'

const SidebarAction = {
    changeUser: function(uname){
        dispatchAction(makeAction("change_user", null, {name: uname}));
    }
}

export default SidebarAction;