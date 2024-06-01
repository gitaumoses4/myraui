import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAdjustmentsAlt = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8h4v4h-4z" />
      <path d="M6 4l0 4" />
      <path d="M6 12l0 8" />
      <path d="M10 14h4v4h-4z" />
      <path d="M12 4l0 10" />
      <path d="M12 18l0 2" />
      <path d="M16 5h4v4h-4z" />
      <path d="M18 4l0 1" />
      <path d="M18 9l0 11" />
    </>
  ),
  displayName: 'IconAdjustmentsAlt',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
