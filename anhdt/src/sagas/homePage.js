import {
 put,
 takeLatest,
} from 'redux-saga/effects'

import { stadiums } from '../assets/data'
import {
	sortByPrice,
	sortByPriceReverse,
	sortByName,
	sortByNameReverse,
} from '../helper'

let optionStadiums = stadiums

const fakeFetch = (m) => {
	setTimeout(() => {console.log(`fake fetch for ${m} milliseconds`)}, m)
}

function* fetchStadiums() {
	yield fakeFetch(1000)
	yield put({
	  type: "SET_STADIUMS",
	  data: optionStadiums,
	})
}

function* filterStadiumsPrice(action) {
	optionStadiums = stadiums.filter(item => item.price.search(action.value) != -1)

	yield put({
		type: "SET_STADIUMS",
		data: optionStadiums,
	})
}

function* sortStadiums(action) {	
	let callback = ''

	switch (action.value) {
		case 'pa':
			callback = sortByPriceReverse
			break;
		case 'pd':
			callback = sortByPrice
			break;
		case 'na':
			callback = sortByNameReverse
			break;
		case 'nd':
			callback = sortByName
			break;
		default:
			callback = sortByNameReverse
	}

  optionStadiums = stadiums.sort(callback)
	
  console.log(`stadiums before out ${optionStadiums}`)
	
	yield put({
		type: "SET_STADIUMS",
		data: optionStadiums,
	})
}


function* searchStadiumsName(action) {
	optionStadiums = stadiums.filter(item => item.name.toLowerCase().search(action.value.toLowerCase()) != -1)

	yield put({
		type: "SET_STADIUMS",
		data: optionStadiums,
	})
}

function* actionWatcher() {
	yield takeLatest('GET_STADIUMS', fetchStadiums)
	yield takeLatest('SEARCH_NAME', searchStadiumsName)
	yield takeLatest('SORT_DATA', sortStadiums)
	yield takeLatest('FILTER_PRICE', filterStadiumsPrice)
}

export default actionWatcher

