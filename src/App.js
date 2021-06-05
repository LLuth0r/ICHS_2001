import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Screens/Home';

function App() {
  return (
    <div className="App">
      <Route exact path= '/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
