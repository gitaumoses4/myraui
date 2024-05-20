import { MYRA_UI_PREFIX } from '@myraui/theme';
import React, { PropsWithChildren } from 'react';
import { Provider } from './context';

export const MyraUIProvider: React.FC<PropsWithChildren<MyraUIProviderProps>> = (props) => {
  return <Provider value={{ prefix: props.prefix || MYRA_UI_PREFIX }}>{props.children}</Provider>;
};

export interface MyraUIProviderProps {
  /**
   * The css variable prefix defined in the theme plugin config.
   */
  prefix?: string;
}

export interface MyraUIContextValue {
  prefix: string;
}
