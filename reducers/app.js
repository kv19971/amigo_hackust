import React from 'react'
import _ from 'lodash'
function AppReducer(state = {}, action){
    if(_.isEmpty(state)){
        state.users = [{id:1, name: 'Person A'}, {id:2, name: 'Person B'}, {id:3, name: 'Person C'}];
        state.selectedId = 1;
        return state;
    }
    switch(action.type){
        case "changed_user":
            return {
                users: state.users,
                selectedId: action.payload.id
            }
        default:
            return state;
    }

}

export default AppReducer;