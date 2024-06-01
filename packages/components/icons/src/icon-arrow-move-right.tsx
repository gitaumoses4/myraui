import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowMoveRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 12h10" />
      <path d="M18 9l3 3l-3 3" />
      <path d="M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
    </>
  ),
  displayName: 'IconArrowMoveRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
