import * as React from 'react';
import { mount } from 'marketing/MarketingMF';
import { useHistory } from 'react-router-dom';
import { Location } from 'history';

export function MarketingMF() {
  const ref = React.useRef<HTMLDivElement>(null);
  const history = useHistory();

  function onNavigate<T extends Location>({ pathname: nextPathname }: T) {
    const { pathname } = history.location;

    pathname !== nextPathname && history.push(nextPathname);
  }

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const { onParentNavigate } = mount({
      el: ref.current,
      onNavigate,
    });

    history.listen(onParentNavigate);
  }, [ref]);

  return <div ref={ref} />;
}
