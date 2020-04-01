import { ADD_TODO } from '../Constants'
import { MARK_AS_COMPLETED } from '../Constants'
import { CLEAR_TODO } from '../Constants'

console.log(ADD_TODO)

const initialState = { isLoading: false, todos: [],completedTodos: [] };

export const  todos = (state = [],action)=>{
     console.log('Calling todos ')
  if(action.type === ADD_TODO){
      return state.concat(action.payload)
  }else if (action.type === CLEAR_TODO) {
    let newState= state.filter(todo => {
        return todo !== action.payload
      })
      return newState
  }
  else{
    console.log('RETURNING EXISTING STATE ')
    return state
  }
}

export const completedTodos = (state = [],action) =>{
   console.log('Calling mark as completed ')
    if(action.type === MARK_AS_COMPLETED){
      console.log(action.payload)
      return state.concat(action.payload)
    }else if (action.type === CLEAR_TODO) {
        let newState =  state.filter(todo => {
          return todo !== action.payload
        })
        return newState
      }
    else{
      return state
    }

}
