import { render, screen, fireEvent } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  it('should render first follower item', async () => {
    render(<MockFollowersList />);
    const followerDivELement = await screen.findByTestId('follower-item-0');
    expect(followerDivELement).toBeInTheDocument();
  });

  //   it('should render five follower items', async () => {
  //     render(<MockFollowersList />);
  //     const followerDivELements = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivELements.length).toBe(5);
  //   });
});
