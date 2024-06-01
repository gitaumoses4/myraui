import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandGooglePlay = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" />
      <path d="M15 9l-10.5 11.5" />
      <path d="M4.5 3.5l10.5 11.5" />
    </>
  ),
  displayName: 'IconBrandGooglePlay',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
