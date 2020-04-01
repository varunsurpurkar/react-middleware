import React from 'react'


export default class NewToDo extends React.Component {

    state = {
      textValue: ''
    }

    onChangeText(text){
      this.setState({
        textValue: text
      })
    }

    render(){
      const { onSubmitTask } = this.props
      return (
         <div>
          <div><h1>Will add a component to add new todos</h1></div>
          <div>
           <label> ToDo Task </label>
            <input type = "text" value = {this.state.toDoText} onChange = {(e)=>{
              this.onChangeText(e.target.value)
            } }/>
            <button onClick= {()=> onSubmitTask(this.state.textValue)}>AddTask</button>
          </div>
          </div>
      )

    }
}
