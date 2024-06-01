import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowMoveLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 12h-10" />
      <path d="M6 15l-3 -3l3 -3" />
      <path d="M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0z" />
    </>
  ),
  displayName: 'IconArrowMoveLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
