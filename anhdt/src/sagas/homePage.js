import { put, takeLatest } from 'redux-saga/effects'

import { stadiums } from '../assets/data'
import * as helper from '../helper'
import * as CONSTANTS from '../constants'
import * as actionCreators from '../reducers/homePageReducer'

let optionStadiums = stadiums

const fakeFetch = (m) => {
	setTimeout(() => {console.log(`fake fetch for ${m} milliseconds`)}, m)
}

function* fetchStadiums() {
	yield fakeFetch(1000)
	yield put( actionCreators.setStadiums(optionStadiums) )
}

function* filterStadiumsPrice(action) {
	optionStadiums = stadiums.filter(item => item.price.search(action.value) !== -1)
	yield put( actionCreators.setStadiums(optionStadiums) )
}

function* sortStadiums(action) {	
	let callback = ''

	switch (action.value) {

		case CONSTANTS.PRICE_ASC:
			callback = helper.sortByPriceReverse
			break;

		case CONSTANTS.PRICE_DESC:
			callback = helper.sortByPrice
			break;

		case CONSTANTS.NAME_ASC:
			callback = helper.sortByNameReverse
			break;

		case CONSTANTS.NAME_DESC:
			callback = helper.sortByName
			break;
			
		default:
			callback = helper.sortByNameReverse
	}

  optionStadiums = stadiums.sort(callback)

  console.log(`stadiums before out ${optionStadiums}`)
	
	yield put( actionCreators.setStadiums(optionStadiums) )
}


function* searchStadiumsName(action) {
	optionStadiums = stadiums.filter(item => item.name.toLowerCase().search(action.value.toLowerCase()) !== -1)
	yield put( actionCreators.setStadiums(optionStadiums) )
}

function* actionWatcher() {
	yield takeLatest(CONSTANTS.STADIUMS_GET_ALL , fetchStadiums)
	yield takeLatest(CONSTANTS.STADIUMS_SEARCH_NAME, searchStadiumsName)
	yield takeLatest(CONSTANTS.STADIUMS_SORT_DATA, sortStadiums)
	yield takeLatest(CONSTANTS.STADIUMS_FILTER_PRICE, filterStadiumsPrice)
}

export default actionWatcher

