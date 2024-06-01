import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCornerLeftUpDouble = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 19h-6a3 3 0 0 1 -3 -3v-7" />
      <path d="M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4" />
    </>
  ),
  displayName: 'IconCornerLeftUpDouble',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
