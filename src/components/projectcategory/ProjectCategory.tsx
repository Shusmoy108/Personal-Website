import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { projectCategory } from '../../data/Projects';


export default function ProjectCategory() {
  const [focusedIndex, setFocusedIndex] = React.useState<number>(0);

  const handleClick = (index: number) => {
    setFocusedIndex(index);
    console.info('You clicked the filter chip.');
  };


  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%',
      overflowX: 'auto',
      pb: 1,
      // Custom scrollbar styling
      '&::-webkit-scrollbar': {
        height: '4px',
        display: 'none',
      },
      '&:hover::-webkit-scrollbar': {
        display: 'block',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.9)',
        },
      },
      '&::-webkit-scrollbar-button': {
        display: 'none',
      },
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(255,255,255,0.7) rgba(255,255,255,0.1)',
      '&': {
        scrollbarWidth: 'none',
      },
      '&:hover': {
        scrollbarWidth: 'thin',
      },
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: 'fit-content',
          minWidth: '100%',
          gap: { xs: 2, md: 'auto' }, // Use 'auto' gap on medium+ screens
          pb: 1,
          pr: 2,
          justifyContent: { xs: 'flex-start', md: 'space-between' }, // Space between on larger screens
        }}
      >
        {projectCategory.map((category, index) => (
          <Chip
            key={index}
            onClick={() => handleClick(index)}
            size="medium"
            label={category}
            sx={{
              backgroundColor: focusedIndex === index ? 'primary.main' : 'transparent',
              color: focusedIndex === index ? 'white' : 'text.primary',
              border: focusedIndex === index ? '1px solid' : 'none',
              borderColor: focusedIndex === index ? 'primary.main' : 'transparent',
              '&:hover': {
                backgroundColor: focusedIndex === index ? 'primary.dark' : 'action.hover',
              },
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.2s ease',
              // On medium+ screens, allow chips to grow
              flexGrow: { md: 1 },
              maxWidth: { md: 'none' },
              margin: { md: '0 4px' },
              justifyContent: { md: 'center' },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}