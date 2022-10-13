import * as React from 'react';
import { mount } from 'auth/AuthMF';
import { useHistory } from 'react-router-dom';
import { Location } from 'history';

type AuthMFProps = { onSignIn: () => void };

function AuthMF({ onSignIn }: AuthMFProps) {
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
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, [ref]);

  return <div ref={ref} />;
}

export default AuthMF;
