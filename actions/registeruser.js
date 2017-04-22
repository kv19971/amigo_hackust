import store from '../mainstore'
import {makeAction, dispatchAction, dispatchAsyncAction} from './actionmaker'

const RegisterUserAction = {
    registerUser: function(uname){
        dispatchAction(makeAction("change_user", null, {name: uname}));
    }
}

export default RegisterUserAction;