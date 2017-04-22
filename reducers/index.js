import CounterReducer from './counter'
import JobsReducer from './jobs'
import SidebarReducer from './sidebar'
import AppReducer from './app'
import UserPageReducer from './userpagereducer'

import { combineReducers } from 'redux'

const reducers = combineReducers({
    counter: CounterReducer,
    jobs: JobsReducer,
    app: AppReducer,
    sidebar: SidebarReducer,
    userpage: UserPageReducer
});

export default reducers;