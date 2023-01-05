
import * as React from 'react'; 
import { SinglePage } from './Views/Splash'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Themes/Theme'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SinglePage />   
    </ThemeProvider>
    );
}

export default App;
