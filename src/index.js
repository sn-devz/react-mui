import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-multi-carousel/lib/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@material-ui/styles';
import {appTheme} from './utils';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
