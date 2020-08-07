import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li style={{ listStyleType: 'square', fontSize: '20px' }}>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type='checkbox'
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{' '}
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
