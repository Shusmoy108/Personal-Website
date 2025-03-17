import { Typography } from '@mui/material';

import { languages } from '../data/Skill';
import { Skill } from '../components/skill/Skill';
import { useEffect } from 'react';

function SkillPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Typography
        component='h2'
        variant='h4'
        gutterBottom
        sx={{ color: 'text.primary' }}
      >
        Professional Skill
      </Typography>
      <Skill
        title='Programming Languages'
        items={languages}
        animationDuration={60}
      />
    </div>
  );
}

export default SkillPage;
