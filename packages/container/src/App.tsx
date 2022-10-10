import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MarketingMF } from './components/MarketingMF';
import { Header } from './components/Header';

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header signedIn={false} onSignOut={console.log} />
        <MarketingMF />
      </div>
    </BrowserRouter>
  );
}
