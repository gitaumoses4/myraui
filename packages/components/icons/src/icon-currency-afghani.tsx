import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyAfghani = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 13h-3.5a3.5 3.5 0 1 1 3.5 -3.5v6.5h-7" />
      <path d="M12 3v.01" />
      <path d="M12 19v2" />
    </>
  ),
  displayName: 'IconCurrencyAfghani',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
