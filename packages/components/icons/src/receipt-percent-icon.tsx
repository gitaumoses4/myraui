import { createIconVariants } from '@myraui/icon';
import React from 'react';

export const ReceiptPercentIcon = createIconVariants(
  {
    outline: {
      path: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </>
      ),
      displayName: 'ReceiptPercentIcon',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'none', stroke: 'currentColor', 'aria-hidden': true },
    },
    solid: {
      path: (
        <>
          <path
            fillRule="evenodd"
            d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
            clipRule="evenodd"
          />
        </>
      ),
      displayName: 'ReceiptPercentIconSolid',
      viewBox: '0 0 24 24',
      defaultProps: { fill: 'currentColor', 'aria-hidden': true },
    },
  },
  'outline'
);
