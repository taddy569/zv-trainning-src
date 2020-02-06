import { combineReducers } from 'redux'

import homePageReducer from './homePage'

const rootReducer = combineReducers({
	stadiums: homePageReducer,
})

export default rootReducer