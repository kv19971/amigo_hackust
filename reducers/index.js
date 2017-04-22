import CounterReducer from './counter'
import JobsReducer from './jobs'
import SidebarReducer from './sidebar'
import UserPageReducer from './userpagereducer'

import { combineReducers } from 'redux'

const reducers = combineReducers({
    counter: CounterReducer,
    jobs: JobsReducer,
    sidebar: SidebarReducer,
    userpage: UserPageReducer
});

export default reducers;