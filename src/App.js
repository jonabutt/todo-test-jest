import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TodoPage from './screens/TodoPage/TodoPage';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import FollowersPage from './screens/FollowersPage';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route strict exact path="/" element={<TodoPage />} />
            <Route strict exact path="/followers" element={<FollowersPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
