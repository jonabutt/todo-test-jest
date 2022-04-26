import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import structuredClone from 'realistic-structured-clone';
import TodoFooter from '../TodoFooter/TodoFooter';

const TodoList = ({ todos, setTodos }) => {
  const [incompleteTasksCount, setIncompleteTasksCount] = useState(0);
  useEffect(() => {
    // set incomplete task count to
    setIncompleteTasksCount(
      todos.reduce((prevValue, currValue) => prevValue + (currValue.completed ? 0 : 1), 0),
    );
  }, [todos]);
  const todoStyle = {
    cursor: 'pointer',
    '&+div': {
      borderTop: '1px solid #cccccc',
    },
  };
  const onClickTodo = index => {
    // clone todo list
    const updatedTodos = structuredClone(todos);
    // get todo using index
    let updateTodo = updatedTodos[index];
    // toggle complete status of todo
    updateTodo.completed = !updateTodo.completed;
    // update todo list
    setTodos(updatedTodos);
  };
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column' }}
        minHeight={600}
        marginTop={5}
        boxShadow={3}
        padding={2}
        borderRadius={2}>
        <Box sx={{ flexGrow: '1' }}>
          {todos.map((todo, index) => (
            <Box
              padding={0.5}
              sx={{
                ...todoStyle,
                textDecoration: todo.completed ? 'line-through' : '',
              }}
              key={todo.id}
              fullWidth
              onClick={() => onClickTodo(index)}
              data-testid="task-container">
              {todo.todo}
            </Box>
          ))}
        </Box>

        <TodoFooter incompleteTasksCount={incompleteTasksCount} />
      </Box>
    </>
  );
};

export default TodoList;
