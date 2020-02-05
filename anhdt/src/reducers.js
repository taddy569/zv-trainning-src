import { combineReducers } from 'redux'

import homeReducer from './containers/HomePage/homeReducer'

const rootReducer = combineReducers({
	stadiums: homeReducer,
})

export default rootReducer