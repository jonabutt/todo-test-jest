import { Typography } from '@mui/material';

const Header = ({ title }) => {
  return (
    <>
      <Typography
        data-testid="header-1"
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom>
        {title}
      </Typography>
      <Typography
        title="Header"
        component="h3"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom>
        ZzzZ
      </Typography>
    </>
  );
};

export default Header;
