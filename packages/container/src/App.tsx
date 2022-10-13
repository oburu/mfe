import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Progress } from './components/Progress';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const MarketingLazy = React.lazy(() => import('./components/MarketingMF'));
const AuthLazy = React.lazy(() => import('./components/AuthMF'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export function App() {
  const [isSignIn, setIsSignIn] = React.useState(false);

  const handleSignIn = () => {
    setIsSignIn(true);
  };

  const handleSignOut = () => {
    setIsSignIn(false);
  };

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <React.Fragment>
          <Header isSignIn={isSignIn} onSignOut={handleSignOut} />
          <React.Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={handleSignIn} />
              </Route>
              <Route path="/">
                <MarketingLazy onSignIn={handleSignIn} />
              </Route>
            </Switch>
          </React.Suspense>
        </React.Fragment>
      </StylesProvider>
    </BrowserRouter>
  );
}
