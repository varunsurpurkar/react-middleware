import {connect} from 'react-redux'
import  { ListToDo } from '../ui/ListToDo'
import { clearTodo } from '../../actions/NewTodo'
import { markAsCompleted } from '../../actions/NewTodo'

const mapStateToProps = (state)=>({
  todos:state.todos,
  completedTodos: state.completedTodos
})

const mapDispatchToProps = (dispatch) =>(
  {
    onMarkAsCompleted: (text) => dispatch(markAsCompleted(text)),
    onClear:  (text) => dispatch(clearTodo(text))
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(ListToDo)
