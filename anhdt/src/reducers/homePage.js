import { stadiums } from '../assets/data'

// const initialState = stadiums
const initialState = []

const homePageReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_STADIUMS' :
			return action.data
		default:
			return state
	}
}

export default homePageReducer