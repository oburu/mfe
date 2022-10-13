import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { Progress } from './components/Progress';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { createBrowserHistory } from 'history';

const MarketingLazy = React.lazy(() => import('./components/MarketingMF'));
const AuthLazy = React.lazy(() => import('./components/AuthMF'));
const DashboardLazy = React.lazy(() => import('./components/DashboardMF'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export function App() {
  const [isSignIn, setIsSignIn] = React.useState(false);

  const handleSignIn = () => {
    setIsSignIn(true);
  };

  const handleSignOut = () => {
    setIsSignIn(false);
  };

  React.useEffect(() => {
    if (isSignIn) {
      history.push('/dashboard');
    }
  }, [isSignIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <React.Fragment>
          <Header isSignIn={isSignIn} onSignOut={handleSignOut} />
          <React.Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={handleSignIn} />
              </Route>
              <Route path="/dashboard">
                {!isSignIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/">
                <MarketingLazy onSignIn={handleSignIn} />
              </Route>
            </Switch>
          </React.Suspense>
        </React.Fragment>
      </StylesProvider>
    </Router>
  );
}
