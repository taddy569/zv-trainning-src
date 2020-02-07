import {
 put,
 takeEvery,
 takeLatest,
} from 'redux-saga/effects'

import { stadiums } from '../assets/data'

let optionStadiums = stadiums

const fakeFetch = (m) => {
	setTimeout(() => {console.log('fake_fetch')}, m)
}

// function* searchStadiums() {
// 	yield takeEvery('SEARCH_NAME', fet)
// }

function* fetchStadiums() {
	yield fakeFetch(1000)
	yield put({
	  type: "SET_STADIUMS", data: optionStadiums
	})
}

function* actionWatcher() {
	yield takeLatest('GET_STADIUMS', fetchStadiums)
}

export default actionWatcher

