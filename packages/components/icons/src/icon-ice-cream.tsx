import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconIceCream = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.5v-4.5" />
      <path d="M8 17h8v-10a4 4 0 1 0 -8 0v10z" />
      <path d="M8 10.5l8 -3.5" />
      <path d="M8 14.5l8 -3.5" />
    </>
  ),
  displayName: 'IconIceCream',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
