import * as React from 'react';
import { mount } from 'marketing/MarketingMF';
import { useHistory } from 'react-router-dom';
import { Location } from 'history';

function MarketingMF() {
  const ref = React.useRef<HTMLDivElement>(null);
  const history = useHistory();

  function onNavigate<T extends Location>({ pathname }: T) {
    if (history.location.pathname !== pathname) {
      history.push(pathname);
    }
  }

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const { onParentNavigate } = mount({
      el: ref.current,
      onNavigate,
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, [ref]);

  return <div ref={ref} />;
}

export default MarketingMF;
