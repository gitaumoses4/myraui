import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowAutofitDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
      <path d="M18 4v17" />
      <path d="M15 18l3 3l3 -3" />
    </>
  ),
  displayName: 'IconArrowAutofitDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
