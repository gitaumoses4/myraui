import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyRubel = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 19v-14h6a3 3 0 0 1 0 6h-8" />
      <path d="M14 15h-8" />
    </>
  ),
  displayName: 'IconCurrencyRubel',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
