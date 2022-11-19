import React  from 'react';
import TodoItem from './TodoItem';
function Todos(props) {
    let todosStyle = {
        marginBottom : "10vh"
    }
    return ( 
        <div className='container' style={todosStyle}>
            <h3 >Todos List</h3>
            {props.todos.length === 0 ? <h5>No todo to show</h5> :
            props.todos.map((todo)=>{
                return (
                
                <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
                
                )
            })}
            
            
        </div>
     );
}

export default Todos;