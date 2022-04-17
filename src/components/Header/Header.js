import { Typography } from '@mui/material';

const Header = ({ title }) => {
  return (
    <>
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        {title}
      </Typography>
    </>
  );
};

export default Header;
