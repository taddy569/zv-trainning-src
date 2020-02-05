import { stadiums } from '../../assets/data'

const initialState = stadiums

console.log(initialState)

const homeReducer = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export default homeReducer