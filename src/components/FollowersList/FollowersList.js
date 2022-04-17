import { Avatar, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FollowersList = () => {
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    const fetchFollowers = async () => {
      const { data } = await axios.get('https://randomuser.me/api/?results=5');

      setFollowers(data.results);
    };

    fetchFollowers();
  }, []);
  return (
    <Box marginTop={5} boxShadow={3} padding={2} borderRadius={2}>
      {followers.map((follower, index) => (
        <Box sx={{ display: 'flex' }} paddingY={1} key={`follower-item-${index}`}>
          <Avatar
            sx={{ alignSelf: 'center', width: 56, height: 56 }}
            alt={`${follower.name.first} ${follower.name.last}`}
            src={follower.picture.large}
          />
          <Box sx={{ display: 'flex', flexGrow: '1', flexDirection: 'column' }} paddingLeft={1}>
            <Box sx={{ display: 'flex', flexGrow: '1' }}>
              <Typography component="h5" variant="h6" color="text.primary">
                {follower.name.first}
              </Typography>
              <Typography component="h5" variant="h6" color="text.primary">
                &nbsp;{follower.name.last}
              </Typography>
            </Box>
            <Box sx={{ color: '#6c6c6c' }}>{follower.login.username}</Box>
          </Box>
        </Box>
      ))}
      <Box paddingTop={2}>
        <Link to="/">Go Back</Link>
      </Box>
    </Box>
  );
};

export default FollowersList;
