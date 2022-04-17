import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TodoPage from './screens/TodoPage';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route strict exact path="/" element={<TodoPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
