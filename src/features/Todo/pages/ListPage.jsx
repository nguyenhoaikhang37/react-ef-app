import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ]);
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleChangeStatus = (index) => {
    const newTodoList = [...todoList];

    newTodoList[index].status = newTodoList[index].status === 'completed' ? 'new' : 'completed';
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);

  const handleTodoFormSubmit = (values) => {
    const newTodo = { id: new Date().getTime(), title: values.title, status: 'new' };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo list</h3>
      <TodoList todoList={renderTodoList} onChangeStatus={handleChangeStatus}></TodoList>
      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  );
}

export default ListPage;
