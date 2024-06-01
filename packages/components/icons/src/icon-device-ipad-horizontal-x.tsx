import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceIpadHorizontalX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13.5 20h-8.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
      <path d="M22 22l-5 -5" />
      <path d="M17 22l5 -5" />
      <path d="M9 17h4" />
    </>
  ),
  displayName: 'IconDeviceIpadHorizontalX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
