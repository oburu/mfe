import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MarketingMF } from './components/MarketingMF';
import { Header } from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={false} onSignOut={console.log} />
        <MarketingMF />
      </StylesProvider>
    </BrowserRouter>
  );
}
