import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowMergeAltLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 7l4 -4l4 4" />
      <path d="M18 21v.01" />
      <path d="M18 18.01v.01" />
      <path d="M17 15.02v.01" />
      <path d="M14 13.03v.01" />
      <path d="M12 3v5.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v1.394" />
    </>
  ),
  displayName: 'IconArrowMergeAltLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
