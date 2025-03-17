import {
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Typography,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export interface MobileLayoutProps {
  title: string;
  description: string;
  subheader: string;
}

export function ProjectCard({
  title,
  description,
  subheader,
}: MobileLayoutProps) {
  return (
    <Box
      sx={{
        //display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Card variant='outlined'>
        <Box
          sx={{ px: 2, pb: 2 }}
          style={{ height: 280,  padding: 20 }}
        >
          <Box
            sx={[
              {
                mb: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
              },
            ]}
          >
            <Typography component='h3' variant='h6'>
              {/* {title} */}
            </Typography>

            <Chip icon={<AutoAwesomeIcon />} label={subheader} />
          </Box>
          <Typography
            gutterBottom
            sx={{
              color: 'text.primary',
              fontFamily: 'Comic Neue',
              textAlign: 'left',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
              fontFamily: 'Tinos',
              textAlign: 'justify',
              mb: 1.5,
              textOverflow:'ellipsis'
            }}
          >
            {description}
          </Typography>
        </Box>
        <CardActions>
          <Button fullWidth variant={'outlined'} color={'primary'}>
            Show in Github
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
