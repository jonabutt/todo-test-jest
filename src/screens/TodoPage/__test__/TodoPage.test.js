import { render, screen, fireEvent } from '@testing-library/react';
import TodoPage from '../TodoPage';
import { BrowserRouter } from 'react-router-dom';
// const mockedSetTodo = jest.fn();

const MockTodoPage = () => {
  return (
    <BrowserRouter>
      <TodoPage />
    </BrowserRouter>
  );
};

const addTasks = tasks => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe('TodoPage', () => {
  it('should render added todo task on inputting new todo', () => {
    render(<MockTodoPage />);
    addTasks(['do dishes']);

    const divElement = screen.getByText(/do dishes/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple added tasks', () => {
    render(<MockTodoPage />);
    addTasks(['do dishes', 'go grocery shopping', 'read book']);

    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('newly added task should not have line through style', () => {
    render(<MockTodoPage />);
    addTasks(['do dishes']);

    const divElement = screen.getByText(/do dishes/i);
    expect(divElement).not.toHaveStyle({ textDecoration: 'line-through' });
  });

  it('completed task should have line through style', () => {
    render(<MockTodoPage />);
    addTasks(['do dishes']);

    const divElement = screen.getByTestId('task-container');
    fireEvent.click(divElement);
    expect(divElement).toHaveStyle({ textDecoration: 'line-through' });
  });
});
