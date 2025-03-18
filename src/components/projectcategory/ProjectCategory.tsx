import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { projectCategory } from '../../data/Projects';

export interface ProjectCategoryProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectCategory({ 
  selectedCategory, 
  onCategoryChange 
}: ProjectCategoryProps) {
  
  const handleClick = (category: string) => {
    onCategoryChange(category);
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
        {projectCategory.map((category) => (
          <Chip
            key={category}
            onClick={() => handleClick(category)}
            size="medium"
            label={category}
            sx={{
              backgroundColor: selectedCategory === category ? 'primary.main' : 'transparent',
              color: selectedCategory === category ? 'white' : 'text.primary',
              border: selectedCategory === category ? '1px solid' : 'none',
              borderColor: selectedCategory === category ? 'primary.main' : 'transparent',
              '&:hover': {
                backgroundColor: selectedCategory === category ? 'primary.dark' : 'action.hover',
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