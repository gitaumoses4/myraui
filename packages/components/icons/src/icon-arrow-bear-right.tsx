import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBearRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3h5v5" />
      <path d="M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
    </>
  ),
  displayName: 'IconArrowBearRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
