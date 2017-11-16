import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import logo from './Assets/logo.svg';
import './App.css';
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </header>
          <main className="App-content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/products/:id" component={Products}/>
            </Switch>
          </main>
          <footer className="App-footer">
            <p>Duvidas? Ligue para <span>0800-YOUR-BEER</span></p>
          </footer>
        </div>
    );
  }
}

export default App;
