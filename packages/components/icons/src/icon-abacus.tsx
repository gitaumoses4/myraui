import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAbacus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 3v18" />
      <path d="M19 21v-18" />
      <path d="M5 7h14" />
      <path d="M5 15h14" />
      <path d="M8 13v4" />
      <path d="M11 13v4" />
      <path d="M16 13v4" />
      <path d="M14 5v4" />
      <path d="M11 5v4" />
      <path d="M8 5v4" />
      <path d="M3 21h18" />
    </>
  ),
  displayName: 'IconAbacus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
