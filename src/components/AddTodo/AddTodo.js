import { useState } from 'react';
import { Box, Button, Input } from '@mui/material';
import structuredClone from 'realistic-structured-clone';
import { v4 } from 'uuid';

const AddTodo = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState('');
  const onAddTodo = e => {
    e.preventDefault();
    // check if input is empty
    if (!todo) return;
    // clone todos
    let newTodos = structuredClone(todos);
    // push new element to the todo list
    newTodos.push({
      id: v4(),
      todo,
      completed: false,
    });
    setTodos(newTodos);
    // reset input
    setTodo('');
  };
  return (
    <form onSubmit={onAddTodo}>
      <Box display={'flex'} boxShadow={3} padding={2} borderRadius={2}>
        <Input
          placeholder="Add a new task here..."
          inputProps={{
            'aria-label': 'Description',
          }}
          onChange={e => setTodo(e.target.value)}
          value={todo}
          autoFocus
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" style={{ width: '10%' }}>
          Add
        </Button>
      </Box>
    </form>
  );
};

export default AddTodo;
