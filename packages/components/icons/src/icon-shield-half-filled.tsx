import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconShieldHalfFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
      <path d="M12 3v18" />
      <path d="M12 11h8.9" />
      <path d="M12 8h8.9" />
      <path d="M12 5h3.1" />
      <path d="M12 17h6.2" />
      <path d="M12 14h8" />
    </>
  ),
  displayName: 'IconShieldHalfFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
