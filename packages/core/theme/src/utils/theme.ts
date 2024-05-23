import { Dict, mapKeys } from '@myraui/shared-utils';
import * as R from 'fp-ts/Record';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import { ColorPalette, ColorScale, myraColors } from '../colors';
import { ColorModeRecord, ColorModeValue, ColorValue } from '../theme.types';
import { BASE_THEME } from './constants';
import { ThemedUtilities } from './css-variables';
import { isColorScale } from '../colors/utils';
import { Utilities } from '../resolvers/resolvers';

export const isColorMode = (theme: string) => theme === 'light' || theme === 'dark';

export function resolveColorValue(colors: Record<string, ColorValue>, colorValue: unknown): ColorScale {
  if (isColorScale(colorValue)) {
    return colorValue;
  }

  const colorFromValue = colors[colorValue as never];

  if (!colorFromValue || colorFromValue === colorValue) {
    return myraColors.black.light;
  }

  return resolveColorValue(colors, colorFromValue);
}

export function resolveThemeColors(colors: Record<string, ColorValue>): ColorPalette {
  return pipe(
    colors,
    R.mapWithIndex((key, value) => resolveColorValue(colors, value))
  );
}

export function buildThemedUtilities(variables: ThemedUtilities): Dict<string | Utilities> {
  return pipe(
    variables,
    mapKeys((key) => (key === BASE_THEME ? '' : `.${key} &,[data-theme="${key}"] &`)),
    R.toEntries,
    A.reduce({}, (acc, [key, value]) => (key === '' ? { ...acc, ...value } : { ...acc, [key]: value }))
  );
}

export function isColorModeRecord(record: any): record is ColorModeRecord<any> {
  return 'light' in record;
}

export function normalizeColorModeValue<Value>(colorModeValue: ColorModeValue<Value>): ColorModeRecord<Value> {
  if (typeof colorModeValue === 'object' && isColorModeRecord(colorModeValue)) {
    return colorModeValue;
  }

  return { [BASE_THEME]: colorModeValue } as ColorModeRecord<Value>;
}
