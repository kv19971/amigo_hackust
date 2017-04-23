import React from 'react'
import _ from 'lodash'
function UserSentimentReducer(state = {}, action){
    if(_.isEmpty(state)){
        state.sentiments = [0.3, 0.6 , 0.9, -0.4, -0.7, 0.3, 0.2, -0.1, 0.1]
        state.summary = {
            summary: ""
        };
        return state;
    }
    switch(action.type){
        case "load_sentiments":{
            return {
                sentiments: action.payload, 
                summary: state.summary
            };
            break;
        }
        case "show_summary":
            return {summary: {
                day: action.payload.day,
                summary: "Felt sad and useless because couldn't take son to football match as the patient is in a wheelchair.",
                sentiment: action.payload.sentiment
            }, 
            sentiments: state.sentiments
            };
            break;
        default:
            return state;
    }

}

export default UserSentimentReducer;