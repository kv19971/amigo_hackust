import React from 'react'
import _ from 'lodash'
function AppReducer(state = {}, action){
    if(_.isEmpty(state)){
        state.users = [{_id:1, name: 'Kshitij Verma'}, {id:2, name: 'Vijayjay Sambamurthy'}, {id:3, name: 'Person C'}];
        state.selectedId = 1;
        return state;
    }
    switch(action.type){
        case "load_users":
            if(action.status == "success"){
                console.log(action.payload)
                return {
                    users : action.payload
                };
            }else{
                return {
                    users: [
                            {_id:1, name: 'Loading users'}
                        ]
                    
                };
            }
            break;
        case "changed_user":
            return {
                selectedId: action.payload._id
            }
        default:
            return state;
    }

}

export default AppReducer;