import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MarketingMF } from './components/MarketingMF';
import { Header } from './components/Header';

export function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>merda</h1>
        <Header signedIn={false} onSignOut={console.log} />
        <MarketingMF />
      </div>
    </BrowserRouter>
  );
}
