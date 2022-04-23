import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', () => {
  render(<Header title="test" />);
  const headingELement = screen.getByText(/test/i);
  expect(headingELement).toBeInTheDocument();
});

// it('should render same text passed into title prop', () => {
//   render(<Header title="test" />);
//   const headingELement = screen.getByRole('heading');
//   expect(headingELement).toBeInTheDocument();
// });

it('should render same text passed into title prop', () => {
  render(<Header title="test" />);
  const headingELement = screen.getByRole('heading', { name: 'test' });
  expect(headingELement).toBeInTheDocument();
});

it('should render same text passed into title prop', () => {
  render(<Header title="test" />);
  const headingELement = screen.getByTitle('Header');
  expect(headingELement).toBeInTheDocument();
});

it('should render same text passed into title prop', () => {
  render(<Header title="test" />);
  const headingELement = screen.getByTestId('header-1');
  expect(headingELement).toBeInTheDocument();
});

// FIND BY

it('should render same text passed into title prop', async () => {
  render(<Header title="test" />);
  const headingELement = await screen.findByText(/test/i);
  expect(headingELement).toBeInTheDocument();
});

// QueryBY

it('should render same text passed into title prop', async () => {
  render(<Header title="test" />);
  const headingELement = screen.queryByText(/dogs/i);
  expect(headingELement).not.toBeInTheDocument();
});

it('should render same text passed into title prop', async () => {
  render(<Header title="test" />);
  const headingELement = screen.getAllByRole('heading');
  expect(headingELement.length).toBe(2);
});
