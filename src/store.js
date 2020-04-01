import {createStore , combineReducers, applyMiddleware } from 'redux'
import { todos } from './reducers/NewToDo'
import { completedTodos } from './reducers/NewToDo'
import {logger} from  './middleware/logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({todos,completedTodos})

export const configureStore = () =>{
  return createStore(rootReducer, applyMiddleware(thunk))
}
