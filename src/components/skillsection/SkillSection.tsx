import { Box, Typography } from '@mui/material';

import { database, devops, frameworks, languages } from '../../data/Skill';
import { Skill } from '../skill/Skill';

function SkillSection() {
  return (
    <Box
      id='skillsection'
      style={{ paddingTop: 30 }}
      // sx={(theme) => ({
      //   width: '100%',
      //   backgroundRepeat: 'no-repeat',

      //   backgroundImage:
      //     'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
      //   ...theme.applyStyles('dark', {
      //     backgroundImage:
      //       'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
      //   }),
      // })}
    >
      {' '}
      <Typography
        component='h2'
        variant='h4'
        gutterBottom
        sx={{ color: 'text.primary', fontFamily: 'Tinos' }}
      >
        Professional Skill
      </Typography>
      <Skill
        title='Programming Languages'
        items={languages}
        animationDuration={60}
      />
      <Skill title='Frameworks' items={frameworks} animationDuration={60} />
      <Skill title='Database' items={database} animationDuration={window.innerWidth>900?0:60} />
      <Skill title='Dev Ops' items={devops} animationDuration={60} />
    </Box>
  );
}

export default SkillSection;
