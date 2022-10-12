import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory, Location, History } from 'history';
import { App } from './App';

export type Mount = {
  el: Element;
  onNavigate?: (location: Location) => void;
  defaultHistory?: History<unknown>;
  initialPath: string;
};

export function mount({ el, onNavigate, defaultHistory, initialPath }: Mount) {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }: Location) {
      const { pathname } = history.location;
      pathname !== nextPathname && history.push(nextPathname);
    },
  };
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing_dev_root');

  const history = createBrowserHistory();

  if (devRoot) {
    mount({ el: devRoot, defaultHistory: history, initialPath: history.location.pathname });
  }
}
