import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import  SitemarkIcon  from '../header/SitemarkIcon';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { contactInfo } from '../../data/Info';
const items = [
  {
    icon: <HomeIcon sx={{ color: 'text.secondary' }} />,
    title: contactInfo.addressLine1,
    description:contactInfo.addressLine2,
  },
  {
    icon: <EmailIcon sx={{ color: 'text.secondary' }} />,
    title:contactInfo.email,
    description:
      '',
  },
  // {
  //   icon: <PhoneIcon sx={{ color: 'text.secondary' }} />,
  //   title: '+1-417-576-4827',
  //   description:
  //     '',
  // },
//   {
//     icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
//     title: 'Innovative functionality',
//     description:
//       'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
//   },
];

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'baseline', gap: 4, maxWidth: 450 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <SitemarkIcon />
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' , textAlign:'left', fontFamily:'Tinos'}}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' , fontFamily:'Tinos'}}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}