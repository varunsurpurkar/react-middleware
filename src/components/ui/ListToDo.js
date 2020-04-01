import React from  'react'

export class ListToDo extends React.Component {

    render(){
      let {todos, completedTodos, onClear, onMarkAsCompleted} = this.props
      return(
        <div>
          <div>
           <h1> TODO LIST</h1>
            <ul>
             {
               todos.map((todo,key)=>{
                return  <div><li>{todo}</li>
                <button onClick ={
                  () =>{
                    onMarkAsCompleted(todo)
                  }
                } >MARK_AS_COMPLETED</button>
                </div>
             })
           }

            </ul>
          </div>
          <div>
           <h1> COMPLETED TODO LIST</h1>
           <ul>
            {
              completedTodos.map((todo,key)=>{
               return  <div><li>{todo}</li>
               <button onClick = {
                 ()=>{
                   onClear(todo)
                 }
               }>CLEAR_TODO</button>
               </div>
            })
          }

           </ul>
          </div>
       </div>
      )

    }


}
