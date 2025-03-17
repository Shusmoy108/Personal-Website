import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Types for our component props
export interface SkillItem {
  logo: string;
  name: string;
}

export interface SkillProps {
  title: string;
  items: SkillItem[];
  animationDuration?: number;
}


const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  //opacity: 0.7,
};

// The reusable Skill component - now exported
export const Skill: React.FC<SkillProps> = ({ title, items, animationDuration = 30 }) => {
  // Only duplicate items if animation is enabled
  const displayItems = animationDuration === 0 ? items : [...items, ...items];

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="h5"
        variant="h5"
        align="center"
        style={{paddingBottom:20}}
        sx={{ color: 'text.secondary',                    fontFamily: 'Tinos',
        }}
      >
        {title}
      </Typography>
      
      <Box sx={{ 
        position: 'relative',
        overflow: animationDuration === 0 ? 'visible' : 'hidden',
        mt: 0.5,
        width: '100%',
        height: '140px'
      }}>
        <Box
          sx={{
            display: 'flex',
            position: animationDuration === 0 ? 'static' : 'absolute',
            justifyContent: animationDuration === 0 ? 'center' : 'flex-start',
            flexWrap: animationDuration === 0 ? 'wrap' : 'nowrap',
            animation: animationDuration === 0 ? 'none' : `scroll ${animationDuration}s linear infinite`,
            '@keyframes scroll': {
              '0%': {
                transform: 'translateX(0)',
              },
              '100%': {
                transform: 'translateX(-50%)',
              },
            },
          }}
        >
          {displayItems.map((item, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: 'column',
                margin: '0 16px',
                width: '100px', // Fixed width to align items
              }}
            >
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                style={logoStyle}
              />
              <Typography
                variant="caption"
                sx={{
                  mt: 1,
                  fontWeight: 'medium',
                  textAlign: 'center',
                  color: 'text.primary',
                  fontFamily:'Comic Neue',

                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

