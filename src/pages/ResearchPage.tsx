import React, { useEffect } from 'react';
import AppAppBar from '../components/header/Header';
import Footer from '../components/footer/Footer';
import {  Box, Container } from '@mui/material';
import Research from '../components/research/Research';

function ResearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
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
         <Research/>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}

export default ResearchPage;
