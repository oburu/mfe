import * as React from 'react';
import { mount } from 'marketing/MarketingMF';

export function MarketingMF() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
}
