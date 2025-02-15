import enUs from '../../compiled-lang/en-US.json';

const isProduction = process.env.NODE_ENV === 'production';

const COMPILED_LANGS: { [key: string]: any } = {
  'en-US': isProduction ? enUs : enUs,
};

export function loadLocaleData(locale: string) {
  return COMPILED_LANGS[locale];
}
