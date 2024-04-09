import {
  buildCSSVariables,
  ColorMode,
  ConfigTheme,
  ConfigThemes,
  createSemanticTokens,
  getBaseStyles,
  isColorMode,
  resolveSemanticTokens,
} from '@myraui/theme';
import { Dict, Exception } from '@myraui/utils';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import * as RA from 'fp-ts/ReadonlyArray';
import { generateSemanticTokenColors, generateThemeColors } from '../colors/generate-theme-colors';
import { PluginEnv, ResolvedThemeConfig, ResolvedThemes } from '../plugin.types';
import { createThemeSelector } from './create-theme-selector';

export function resolveTheme(themeName: string, theme: ConfigTheme): RE.ReaderEither<PluginEnv, Exception, ResolvedThemeConfig> {
  return pipe(
    RE.asks((env: PluginEnv) => env.defaultExtendTheme),
    RE.map((defaultExtendTheme) => {
      const colorMode = (isColorMode(themeName) ? themeName : theme.extend || defaultExtendTheme) as ColorMode;
      return { themeName, colorMode };
    }),
    RE.chain((themeConfig) => {
      return pipe(
        theme.semanticTokens,
        createSemanticTokens,
        resolveSemanticTokens,
        RE.chain(generateSemanticTokenColors),
        RE.chain((semanticTokens) =>
          pipe(
            generateThemeColors(theme.colors),
            RE.map((colors) => ({
              ...themeConfig,
              colors: { ...colors.colors, ...semanticTokens.colors },
              variables: [...colors.variables, ...semanticTokens.variables],
            }))
          )
        )
      );
    })
  );
}

export function buildThemes(themes: readonly ResolvedThemeConfig[]) {
  return (baseStyles: Dict) =>
    pipe(
      themes,
      RA.map((theme) => ({ ...theme, variables: buildCSSVariables(theme.variables) })),
      RA.reduce({ variants: [], utilities: {}, colors: {}, baseStyles } as ResolvedThemes, (acc, { themeName, colorMode, colors, variables }) => {
        const selector = createThemeSelector(themeName);
        return {
          ...acc,
          variants: [...acc.variants, { name: themeName, definition: [`&.${themeName}`, `&[data-theme="${themeName}"]`] }],
          utilities: { ...acc.utilities, [selector]: { 'color-scheme': colorMode } },
          colors: { ...acc.colors, ...colors },
        };
      })
    );
}

export function resolveThemes(themes: ConfigThemes): RE.ReaderEither<PluginEnv, Exception, ResolvedThemes> {
  return pipe(
    Object.entries(themes),
    RE.traverseArray(([themeName, theme]) => resolveTheme(themeName, theme)),
    RE.chainW((themes) =>
      pipe(
        RE.asks(({ prefix }: PluginEnv) => getBaseStyles(prefix)),
        RE.map(buildThemes(themes))
      )
    )
  );
}
