import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconStretching2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M6.5 21l3.5 -5" />
      <path d="M5 11l7 -2" />
      <path d="M16 21l-4 -7v-5l7 -4" />
    </>
  ),
  displayName: 'IconStretching2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
