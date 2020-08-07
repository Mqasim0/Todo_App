import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import AddTodoForm from './Components/AddTodoForm';
import { setUncaughtExceptionCaptureCallback } from 'process';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (text: String) => {
    if (text == '') {
      alert('Add text');
    } else {
      const newTodo = { text, complete: false };
      setTodos([...todos, newTodo]);
    }
  };
  return (
    <div
      className='container mt-5 p-5'
      style={{ boxShadow: '2px 1px 2px 2px  #000' }}
    >
      <h1 className='text-center'>Todo List</h1>
      <hr style={{ backgroundColor: '#000' }} />

      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
