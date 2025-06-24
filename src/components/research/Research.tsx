import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { research, researchInfo } from '../../data/Research';



const items =research;
interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        fontFamily: 'Tinos',
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  const [mobileTypedText, setMobileTypedText] = useState('');
  const [isMobileTyping, setIsMobileTyping] = useState(true);
  const mobileTextContainerRef = useRef<HTMLDivElement>(null);
  const typingSpeed = 10; // milliseconds per character

  // Effect for typing animation in mobile view
  useEffect(() => {
    if (!isMobileTyping) return;

    const textToType = selectedFeature.details || '';

    if (mobileTypedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setMobileTypedText(textToType.substring(0, mobileTypedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsMobileTyping(false);
    }
  }, [mobileTypedText, isMobileTyping, selectedFeature]);

  // Effect to scroll to bottom as text is typed
  useEffect(() => {
    if (mobileTextContainerRef.current) {
      mobileTextContainerRef.current.scrollTop =
        mobileTextContainerRef.current.scrollHeight;
    }
  }, [mobileTypedText]);

  // Reset typing when selected item changes
  useEffect(() => {
    setMobileTypedText('');
    setIsMobileTyping(true);
  }, [selectedItemIndex]);

  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {items.map(({ title }, index) => (
          <Chip
            size='medium'
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant='outlined'>
        <Box
          id='mobileBox'
          ref={mobileTextContainerRef}
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 280,
            padding: 2,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          })}
        >
          <Typography
            variant='body2'
            sx={{
              textAlign: 'justify',
              whiteSpace: 'pre-line',
              width: '100%', fontFamily: 'Tinos',
            }}
          >
            {mobileTypedText}
          </Typography>
        </Box>
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium', fontFamily: 'Tinos', }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary', fontFamily: 'Tinos', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Research() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const typingSpeed = 10; // milliseconds per character

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
    // Reset the text to empty to start the animation
    setTypedText('');
    setIsTyping(true);
  };

  const selectedFeature = items[selectedItemIndex];

  // Effect to match heights
  useEffect(() => {
    const matchHeight = () => {
      if (leftBoxRef.current && rightBoxRef.current) {
        const leftHeight = leftBoxRef.current.offsetHeight;
        rightBoxRef.current.style.height = `${leftHeight}px`;
      }
    };

    matchHeight();
    window.addEventListener('resize', matchHeight);

    return () => {
      window.removeEventListener('resize', matchHeight);
    };
  }, []);

  // Effect for typing animation
  useEffect(() => {
    if (!isTyping) return;

    const textToType = selectedFeature.details || '';

    if (typedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.substring(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [typedText, isTyping, selectedFeature]);

  // Effect to scroll to bottom as text is typed
  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.scrollTop =
        textContainerRef.current.scrollHeight;
    }
  }, [typedText]);

  return (
    <Container
      id='features'
      sx={{ py: { xs: 8, sm: 16 } }}
      style={{ padding: 0 }}
    >
      <Box sx={{ width: { sm: '100%', md: '100%' } }}>
        <Typography
          component='h2'
          variant='h4'
          gutterBottom
          sx={{ color: 'text.primary' ,fontFamily: 'Tinos', }}
        >
          Research Interest
        </Typography>
        <Typography
          variant='body1'
          style={{textAlign:'justify'}}
          sx={{ color: 'text.secondary',  fontFamily: 'Tinos',mb: { xs: 2, sm: 4 } }}
        >
         {researchInfo}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
        }}
      >
        <div>
          <Box
            id='leftBox'
            ref={leftBoxRef}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action
                        .hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}

                  <Typography variant='h6' sx={{ fontFamily: 'Tinos',}}>{title}</Typography>
                  <Typography variant='body2' sx={{ fontFamily: 'Tinos',}}>{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
          }}
          id='rightBox'
          ref={rightBoxRef}
        >
          <Card
            variant='outlined'
            sx={{
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              ref={textContainerRef}
              sx={(theme) => ({
                width: '100%',
                padding: 2,
                overflow: 'auto',
                maxHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              })}
            >
              <Typography
                variant='body2'
                sx={{
                  textAlign: 'justify',
                  whiteSpace: 'pre-line',
                  width: '100%', fontFamily: 'Tinos',
                }}
              >
                {typedText}
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
