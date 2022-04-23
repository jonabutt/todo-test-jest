import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = incompleteTasksCount => {
  return (
    <BrowserRouter>
      <TodoFooter incompleteTasksCount={incompleteTasksCount} />
    </BrowserRouter>
  );
};
describe('TodoFooter', () => {
  it('should render the correct amount of incomplete tasks', () => {
    render(MockTodoFooter(2));
    const divElement = screen.getByText(/2 tasks left/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(MockTodoFooter(1));
    const divElement = screen.getByText(/1 task left/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(MockTodoFooter(1));
    const divElement = screen.getByText(/1 task left/i);
    expect(divElement).toBeTruthy();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(MockTodoFooter(1));
    const divElement = screen.getByText(/1 task left/i);
    expect(divElement).toBeVisible();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(MockTodoFooter(1));
    const divElement = screen.getByText(/1 task left/i);
    expect(divElement).toContainHTML('div');
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(MockTodoFooter(1));
    const divElement = screen.getByText(/1 task left/i);
    expect(divElement).toHaveTextContent('1 task left');
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(MockTodoFooter(1));
    const divElement = screen.getByText(/1 task left/i);
    expect(divElement).not.toBeFalsy();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(MockTodoFooter(1));
    const divElement = screen.getByText(/1 task left/i);
    expect(divElement.textContent).toBe('1 task left');
  });
});
