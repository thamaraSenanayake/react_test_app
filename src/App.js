import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment} from './app/actions';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './app/container/login';
import SignIn from './app/container/signIn';
import HomePage from './app/container/homePage';

function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();

  return (
    // <div className="App">
    //   counter {counter}
    //   <button onClick={()=>dispatch(increment())}>+</button><button>-</button>
    //   {isLogged? <h3>loggin</h3>:''}
    // </div>
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/homePage" component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
