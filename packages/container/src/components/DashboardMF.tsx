import * as React from 'react';
import { mount } from 'dashboard/DashboardMF';

function DashboardMF() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    mount(ref.current);
  }, [ref]);

  return <div ref={ref} />;
}

export default DashboardMF;
