import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNfc = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 20a3 3 0 0 1 -3 -3v-11l5 5" />
      <path d="M13 4a3 3 0 0 1 3 3v11l-5 -5" />
      <path d="M4 4m0 3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3z" />
    </>
  ),
  displayName: 'IconNfc',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
