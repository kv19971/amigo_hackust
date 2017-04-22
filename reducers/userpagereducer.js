import React from 'react'
import _ from 'lodash'
function UserPageReducer(state = {}, action){
    if(_.isEmpty(state)){
        state.currentUser = {name: 'Person A'};
        return state;
    }
    switch(action.type){
        case "change_user":
            return {currentUser: action.payload};
            break;
        default:
            return state;
    }

}

export default UserPageReducer;