import React from 'react';
import theme from './theme/theme';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import IndexScreens from './screens/index';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { jssPreset } from '@material-ui/core/styles';
import { getDirection } from './localization/index';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return getDirection() === "ltr" ? (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <IndexScreens />
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <IndexScreens />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
