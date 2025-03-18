import {
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Typography,
  Modal,
  Paper,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export interface ProjectProps {
  title: string;
  description: string;
  subheader: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  subheader,
  link
}: ProjectProps) {
  const [open, setOpen] = React.useState(false);
  const [isTruncated, setIsTruncated] = React.useState(true);
  const maxLength = window.innerWidth>600?300:250; // Maximum characters to show before truncating
  
  // Check if description needs truncation
  const needsTruncation = description.length > maxLength;
  
  // Create truncated description
  const truncatedDescription = needsTruncation 
    ? `${description.substring(0, maxLength)}...` 
    : description;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle button click to open link
  const handleButtonClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

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
          <Box sx={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
                fontFamily: 'Tinos',
                textAlign: 'justify',
                mb: 1.5,
              }}
            >
              {isTruncated ? truncatedDescription : description}
              {needsTruncation && isTruncated && (
                <Button 
                  onClick={handleOpen} 
                  sx={{ 
                    p: 0, 
                    minWidth: 'auto', 
                    textTransform: 'none',
                    fontFamily: 'Tinos',
                    fontSize: '0.875rem',
                    ml: 0.5,
                    verticalAlign: 'baseline',
                    fontWeight: 'bold',
                    padding:2
                  }}
                >
                  See More
                </Button>
              )}
            </Typography>
          </Box>
        </Box>
        <CardActions>
          <Button 
            fullWidth 
            variant={'outlined'} 
            color={'primary'}  
            style={{
              display: "flex", 
              alignItems: 'center',
              justifyContent: 'center', 
              gap: 2
            }}
            onClick={handleButtonClick}
            disabled={!link} // Disable button when link is empty
          >
            {!link && <LockOutlinedIcon />}
            <Typography style={{fontSize: 18}}>
              {!link ? "Private Repo" : "Show in Github"}
            </Typography>
          </Button>
        </CardActions>
      </Card>

      {/* Modal for full description */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project-description-modal"
        aria-describedby="full-project-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Paper
          sx={{
            maxWidth: 600,
            maxHeight: '90vh',
            overflow: 'auto',
            p: 4,
            outline: 'none',
            borderRadius:'10px'

          }}
        >
          <Typography
            id="project-description-modal"
            variant="h6"
            component="h2"
            sx={{
              fontFamily: 'Comic Neue',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            id="full-project-description"
            variant="body1"
            sx={{
              fontFamily: 'Tinos',
              textAlign: 'justify',
              mb: 3,
            }}
          >
            {description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
}
