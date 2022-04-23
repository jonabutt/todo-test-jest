import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../AddTodo';

const mockedSetTodo = jest.fn();

describe('AddTodo', () => {
  it('should render input element', () => {
    render(<AddTodo todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
  it('should be able to type in input', () => {
    render(<AddTodo todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'new task' } });
    expect(inputElement.value).toBe('new task');
  });
  it('should have empty input when add button is clicked', () => {
    render(<AddTodo todos={[]} setTodos={mockedSetTodo} />);
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'new task' } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBeFalsy();
  });
});
