import React from 'react';
import './App.css';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import getLPTheme from './theme/getLPTheme';
import AppRoutes from './Route';


function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));
  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <div className="App">
      <AppRoutes />

      </div>

    {/* <div className="App">
     <AppAppBar/>
     <Hero/>
     <Footer/>
    </div> */}
    </ThemeProvider>
  );
}

export default App;
