import logo from './logo.svg';
import './App.css';
import { Switch, Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route strict exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
