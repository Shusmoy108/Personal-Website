import React, { useEffect } from 'react';
import AppAppBar from '../components/header/Header';
import Footer from '../components/footer/Footer';
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  Container,
  Box,
  ThemeProvider,
  Typography,
} from '@mui/material';
import getLPTheme from '../theme/getLPTheme';
import { papers } from '../utilities/Property';



function PublicationPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <div>
        <AppAppBar />
        <Box
          id='hero'
          sx={(theme) => ({
            width: '100%',
            backgroundRepeat: 'no-repeat',

            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
            ...theme.applyStyles('dark', {
              backgroundImage:
                'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
            }),
          })}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pt: { xs: 14, sm: 20 },
              pb: { xs: 8, sm: 12 },
              
            }}
            style={{paddingTop:110}}

          >
            {papers.map((item: any, index: any): any => {
              return (
                <Typography
                  key={index}
                  variant='subtitle1'
                  sx={{
                    textAlign: 'justify',
                    color: 'text.primary',
                    fontFamily: 'Tinos',
                    width: { sm: '100%', md: '80%' },
                  }}
                >
                    <div style={{display:'flex', flexDirection:"row", gap:10}}>
                    <Typography
                    component='span'
                    sx={(theme) => ({
                      fontSize: 'inherit',
                      color: 'primary.main',
                      ...theme.applyStyles('dark', {
                        color: 'primary.light',
                      }),
                    })}
                  >
                    [{index + 1}]
                  </Typography>
                  <div>
                  {item.cite}

                  </div>
                    </div>
                  
                </Typography>
              );
            })}
            {/* <SequentialStrings items={strings} interval={2000} /> */}
          </Container>
        </Box>

        {/* <Hero/> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default PublicationPage;
