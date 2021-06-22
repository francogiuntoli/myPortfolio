import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3b7214",
    },
    secondary: {
      main: '#ff524e',
    },
    action:{  
     hover: "rgb(252, 119, 119, 0.8)",
   }
   
  },
  typography:{
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h5:{
      fontWeight: "400"
    },
    h6:{
      fontWeight: "200"
    }
  }
  
});

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
     <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);