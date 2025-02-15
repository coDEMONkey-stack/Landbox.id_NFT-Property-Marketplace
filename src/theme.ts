import { Theme } from '@mui/material/styles';

import defaultTheme from './themes/index';
import landBoxTheme from './themes/landBox';

const themes: { [key: string]: Theme } = {
  'default-theme': defaultTheme,
  'landBox': landBoxTheme
};

export function getTheme(name: string) {
  return themes[name];
}
