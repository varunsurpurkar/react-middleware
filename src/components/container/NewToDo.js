import { addToDo } from '../../actions/NewTodo'
import {connect} from 'react-redux'
import NewToDo from  '../ui/NewToDo'
import {addToDoThunk} from '../../actions/NewTodo'


const mapDispatchToProps = (dispatch ) =>({
    onSubmitTask :(text) => dispatch(addToDoThunk(text))

})


export default connect(null, mapDispatchToProps)(NewToDo)
