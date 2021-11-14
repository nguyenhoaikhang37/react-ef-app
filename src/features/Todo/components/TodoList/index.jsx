import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './todoList.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onChangeStatus: PropTypes.func,
};

TodoList.defaultProp = {
  todoList: [],
  onChangeStatus: null,
};

function TodoList({ todoList, onChangeStatus }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames('todo-item', {
            completed: todo.status === 'completed',
          })}
          onClick={() => onChangeStatus(index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
