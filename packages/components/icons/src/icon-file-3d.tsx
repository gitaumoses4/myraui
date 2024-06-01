import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFile3d = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M12 13.5l4 -1.5" />
      <path d="M8 11.846l4 1.654v4.5l4 -1.846v-4.308l-4 -1.846z" />
      <path d="M8 12v4.2l4 1.8" />
    </>
  ),
  displayName: 'IconFile3d',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
