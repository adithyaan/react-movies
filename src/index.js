import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, MemoryRouter, Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Register from './Register';
import * as serviceWorker from './serviceWorker';
import history from './history';
import Container from './Container';
import Profile from './Profile';
const Apps = () => (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/App" component={App} />      
        <Route path="/main" component={Container} />      
        <Route path="/profile" component={Profile} />      

      </Switch>
    </Router>
  );

ReactDOM.render(<Apps />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
