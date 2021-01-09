import { useState, useEffect } from 'react';

import './App.css';

import SignupPage from './pages/SignupPage/SignupPage';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';


function App(props) {
  



  return (
    <div className="App">
      <header className="App-header">
        
      </header>
        <main>
        <Switch>
          <Route exact path="/signup" render={props => 
          <SignupPage 
          {...props}
          />  
        } />
        </Switch>
        </main>
        <footer className="App-header">

        </footer>
    </div>
  );
}

export default withRouter(App);
