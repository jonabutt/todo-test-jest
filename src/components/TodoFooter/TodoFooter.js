import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const TodoFooter = ({ incompleteTasksCount }) => {
  const footerStyle = { display: 'flex', alignItems: 'center' };
  return (
    <Box paddingTop={2.5} sx={footerStyle}>
      <Box sx={{ flexGrow: '1' }}>
        {incompleteTasksCount} {incompleteTasksCount === 1 ? 'task' : 'tasks'} left
      </Box>

      <Link to="/followers">Followers</Link>
    </Box>
  );
};

export default TodoFooter;
