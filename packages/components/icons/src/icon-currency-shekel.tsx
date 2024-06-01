import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyShekel = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
      <path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
    </>
  ),
  displayName: 'IconCurrencyShekel',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
