import { Box } from '@mui/system';

const TodoFooter = ({ incompleteTasksCount }) => {
  const footerStyle = {};
  return (
    <Box paddingTop={2.5} sx={footerStyle}>
      {incompleteTasksCount} tasks left
    </Box>
  );
};

export default TodoFooter;
