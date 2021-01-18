import React, {useReducer} from 'react'
import todoReducer, {initialState} from './reducers/todoReducer'
import {addTodo, completedTodo, clearTodo} from './actions/actions'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);


  const setTodo = (todo) => {
    dispatch(addTodo(todo))
  }

  const completeTodo = (todoID) => {
    dispatch(completedTodo(todoID))
  }

  const doneTodo = () => {
    dispatch(clearTodo())
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo App</h1>
      <TodoForm setTodo={setTodo} doneTodo={doneTodo} />
      <TodoList completeTodo={completeTodo} listTodo={state.todos} />
      </header>
    </div>
  );
}

export default App;
