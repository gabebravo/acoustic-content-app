import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import deepOrange from '@material-ui/core/colors/deepOrange';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: { main: cyan[500], light: cyan[200] },
    secondary: { main: deepOrange[500], light: deepOrange[200] }
  },
  typography: {
    textPrimary: '#fff'
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
