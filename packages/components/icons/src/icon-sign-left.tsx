import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSignLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 21h-4" />
      <path d="M14 21v-10" />
      <path d="M14 6v-3" />
      <path d="M18 6h-10l-2 2.5l2 2.5h10z" />
    </>
  ),
  displayName: 'IconSignLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
