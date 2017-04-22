import React from 'react'
import _ from 'lodash'
function SidebarReducer(state = {}, action){
    if(_.isEmpty(state)){
        state.users = [{id:1, name: 'Person A'}, {id:2, name: 'Person B'}, {id:3, name: 'Person C'}];
        return state;
    }
    switch(action.type){
        default:
            return state;
    }

}

export default SidebarReducer;