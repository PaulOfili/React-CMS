import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import User from "./pages/User/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={User}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
