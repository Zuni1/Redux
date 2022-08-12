import { combineReducers } from 'redux'
import countReducer from './CounterReducer'

const rootReducer = combineReducers({
    countReducer
})

export default rootReducer