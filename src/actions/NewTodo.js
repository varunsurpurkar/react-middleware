import { ADD_TODO } from '../Constants'
import { CLEAR_TODO } from '../Constants'
import { MARK_AS_COMPLETED } from '../Constants'

export const addToDo = (toDoText)=>{
      return {
        type:ADD_TODO,
        payload: toDoText
      }
}

export const clearTodo = (toDoText) =>{
     return {
       type:CLEAR_TODO,
       payload: toDoText,
     }
}

export const markAsCompleted = (toDoText) =>{
      return {
        type: MARK_AS_COMPLETED,
        payload: toDoText

      }
}

export const addToDoThunk = (toDoText) => (dispatch) =>{
    console.log('calling addToDoThunk ==> '+ toDoText)
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/5')
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      dispatch(addToDo(toDoText))
    })
    .catch(err=>{
      console.log('Error Occured ==='+err)
    })

}
