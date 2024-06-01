import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceMobileMessage = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 3h10v8h-3l-4 2v-2h-3z" />
      <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
      <path d="M10 18v.01" />
    </>
  ),
  displayName: 'IconDeviceMobileMessage',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
