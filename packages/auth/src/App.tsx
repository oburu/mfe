import * as React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { History } from 'history';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au-mf',
});

type AppProps = {
  history: History<unknown>;
  onSignIn: () => void;
};

export function App({ history, onSignIn }: AppProps) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}
