import React from 'react';
import Todo from './Todo'

const TodoList = ({completeTodo, listTodo}) => {

    return(
        <div>
            {listTodo.map(todo => <Todo key={todo.id} todo={todo} completedTodo={completeTodo}/>)}
        </div>
    )
}
export default TodoList;