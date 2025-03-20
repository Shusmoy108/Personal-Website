import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import pp from './pp.jpg';
import { useEffect, useRef, useState } from 'react';
import { aboutMe } from '../../data/Info';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const typingSpeed = 5; // Changed from 10 to 5 milliseconds per character for faster typing

  // Effect for typing animation
  useEffect(() => {
    if (!isTyping) return;

    const textToType = aboutMe || '';

    if (typedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.substring(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [typedText, isTyping]);

  // Effect to scroll to bottom as text is typed
  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.scrollTop = textContainerRef.current.scrollHeight;
    }
  }, [typedText]);

  return (
    <Box
      id="hero"
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
        style={{ paddingTop: 110 }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              fontSize: { xs: '2.5rem', sm: 'clamp(3rem, 10vw, 3.5rem)' },
              whiteSpace: { xs: 'nowrap', sm: 'normal' }
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              Hi!&nbsp;
            </Typography>
            There
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            width: '100%',
            mt: 4
          }}
        >
          {/* Image - hidden on mobile */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' }
            }}
          >
            <img
              src={pp}
              alt='Profile'
              style={{
                height: 400,
                borderRadius: 10,
                maxWidth: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>

          {/* Typing animation text */}
          <Box
            ref={textContainerRef}
            sx={{
              width: '100%',
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textAlign: 'justify',
                color: 'text.secondary',
                fontFamily: 'Comic Neue',
                width: { xs: '100%', sm: '100%', md: '100%' },
                whiteSpace: 'pre-line'
              }}
            >
              {typedText}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}