import * as React from 'react';
import { mount } from 'auth/AuthMF';
import { useHistory } from 'react-router-dom';
import { Location } from 'history';

function AuthMF() {
  const ref = React.useRef<HTMLDivElement>(null);
  const history = useHistory();

  function onNavigate<T extends Location>({ pathname: nextPathname }: T) {
    const { pathname } = history.location;

    if (pathname !== nextPathname) {
      history.push(nextPathname);
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

export default AuthMF;
