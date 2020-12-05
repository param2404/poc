import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import store from './store'

const reduxStore = store()


function App() {
  return (
    <ConnectedRouter history={reduxStore.history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
