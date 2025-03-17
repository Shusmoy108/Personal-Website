import React, { useEffect } from 'react';
import AppAppBar from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Box, Stack, Container } from '@mui/material';
import SignIn from '../components/connect/Connect';
import Content from '../components/connect/Content';

function ConnectPage() {
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
        >
          <Stack
            direction='column'
            component='main'
            sx={[
              {
                //justifyContent: 'center',
                //height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
                //marginTop: 'max(40px - var(--template-frame-height, 0px), 0px)',
                //minHeight: '100%',
              },
              (theme) => ({
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  zIndex: -1,
                  inset: 0,
                  backgroundImage:
                    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                  backgroundRepeat: 'no-repeat',
                  ...theme.applyStyles('dark', {
                    backgroundImage:
                      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                  }),
                },
              }),
            ]}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              sx={{
                justifyContent: 'center',
                gap: { xs: 6, sm: 12 },
                p: 2,
                mx: 'auto',
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                sx={{
                  justifyContent: 'center',
                  gap: { xs: 6, sm: 12 },
                  p: { xs: 2, sm: 4 },
                  m: 'auto',
                }}
              >
                <Content />
                <SignIn />
              </Stack>
            </Stack>
          </Stack>{' '}
        </Container>
      </Box>
      <Footer />
    </div>
  );
}

export default ConnectPage;
