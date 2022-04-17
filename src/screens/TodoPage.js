import { Box } from '@mui/material';
import { useState } from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  return (
    <Box>
      <Header title="Todo" />
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Box>
  );
};
export default TodoPage;
