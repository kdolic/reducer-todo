import React, {useState} from 'react';

const TodoForm = ({setTodo, doneTodo}) => {

    const [todoInput, setTodoInput] = useState('');

    const handleTodoChange = event => {
        setTodoInput(event.target.value);
    }

    const handleTodoSubmit = event => {
        event.preventDefault();
        setTodo(todoInput);
        setTodoInput('')
    }

    return(
        <div>
            <form onSubmit={handleTodoSubmit}>
                <input
                 className='todo_input'
                 type='text'
                 name='todo'
                 onChange={handleTodoChange}
                 placeholder='Add a Todo Task'
                 value={todoInput}
                />
                <button>Add Todo</button>
                <button onClick={doneTodo}>Clear</button>
            </form>
        </div>
    )
    
}

export default TodoForm;