
import './App.css';
import {BrowserRouter,Route, Router, Switch} from 'react-router-dom'
import AdminTemplate from './Component/AdminTemplate';
import Login from './Component/Login';

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/admin" component={AdminTemplate}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
