import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChartArrowsVertical = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 21v-14" />
      <path d="M9 15l3 -3l3 3" />
      <path d="M15 10l3 -3l3 3" />
      <path d="M3 21l18 0" />
      <path d="M12 21l0 -9" />
      <path d="M3 6l3 -3l3 3" />
      <path d="M6 21v-18" />
    </>
  ),
  displayName: 'IconChartArrowsVertical',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
