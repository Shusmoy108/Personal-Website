import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import pp from './pp.jpg'
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { aboutMe } from '../../data/Info';

const TypingAnimation = ({ text, speed = 100, pause = 1000 }:any) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < text.length) {
        const typingInterval = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, speed);
  
        return () => clearTimeout(typingInterval);
      } else {
        // Pause and reset for continuous typing
        const resetTimeout = setTimeout(() => {
          setDisplayedText("");
          setCurrentIndex(0);
        }, pause);
  
        return () => clearTimeout(resetTimeout);
      }
    }, [currentIndex, text, speed, pause]);
  
    return (
      <Typography sx={{
        textAlign: 'justify',
        color: 'text.secondary',
        fontFamily:'Comic Neue',
        width: { sm: '100%', md: '80%' },
      }}>
        {displayedText}
      </Typography>
    );
  };

export default function Hero() {
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
        style={{paddingTop:110}}

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
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
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
        <div style={{display:'flex', flexDirection:"row", gap:20}}>
        <img src={pp} alt='hello' style={{ height:400, borderRadius:10}}/>
        <TypingAnimation
        text={aboutMe}
        speed={25}
        pause={4000}
      />

        </div>
        
        {/* <StyledBox id="image" /> */}
      </Container>
    </Box>
  );
}