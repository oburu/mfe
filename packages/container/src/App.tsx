import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const MarketingLazy = React.lazy(() => import('./components/MarketingMF'));
const AuthLazy = React.lazy(() => import('./components/AuthMF'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header signedIn={false} onSignOut={console.log} />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </React.Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
