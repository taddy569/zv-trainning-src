import { createStore, applyMiddleware, } from 'redux'
import createSagaMiddleware from 'redux-saga'
import  rootReducer from './reducers'


const reduxSagaMonitorOptions = {}

const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

export default store; 