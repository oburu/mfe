import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

export function mount(el: Element) {
  ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#marketing_dev_root');

  if (el) {
    mount(el);
  }
}
