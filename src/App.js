import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Products from "./Products";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Beer Finder</h1>
          </header>
          <main className="App-content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={Products}/>
            </Switch>
          </main>
          <footer className="App-footer">
            <p>produced by Mateus Carniatto</p>
            <p>check out the repo on <a href="">Github</a></p>
          </footer>
        </div>
    );
  }
}

export default App;
