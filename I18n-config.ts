// i18n-config.ts
export const locales = ['nl', 'fr', 'en'];
export const defaultLocale = 'nl';

export function getLocaleFromPath(pathname: string): string {
  const pathLocale = pathname.split('/')[1];
  return locales.includes(pathLocale) ? pathLocale : defaultLocale;
}
