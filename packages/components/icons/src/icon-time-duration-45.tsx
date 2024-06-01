import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTimeDuration45 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
      <path d="M7 9v2a1 1 0 0 0 1 1h1" />
      <path d="M10 9v6" />
      <path d="M7.5 4.2v.01" />
      <path d="M4.2 7.5v.01" />
      <path d="M3 12a9 9 0 1 0 9 -9" />
    </>
  ),
  displayName: 'IconTimeDuration45',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
