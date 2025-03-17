import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './SitemarkIcon';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }: any) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: theme
    ? `rgba(${theme.palette.background.defaultChannel} / 0.4)`
    : `alpha(${theme.palette.background.default}, 0.4)`,
  boxShadow: (theme || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position='fixed'
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth='lg'>
        <StyledToolbar variant='dense' disableGutters>
          <Box
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}
          >
            <IconButton
              sx={{
                outline: 'none',
                border: 'none',
                borderRadius: 1,
                '&:focus-visible': {
                  outline: 'none',
                  border: 'none',
                  backgroundColor: 'transparent', // Ensure no background change
                },
              }}
              onClick={() => {
                navigate('/');
              }}
            >
              <Sitemark />
            </IconButton>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button
                variant='text'
                color='info'
                size='small'
                onClick={() => {
                  navigate('/research');
                }}
                style={{
                  textTransform: 'none',
                  fontSize: 22,
                  fontFamily: 'Cookie',
                }}
              >
                Research
              </Button>
              {/* <Button
                variant='text'
                color='info'
                size='small'
                style={{
                  textTransform: 'none',
                  fontSize: 22,
                  fontFamily: 'Cookie',
                }}
                onClick={() => {
                  navigate('/skill');
                }}
              >
                Skill
              </Button> */}
              <Button
                variant='text'
                color='info'
                size='small'
                style={{
                  textTransform: 'none',
                  fontSize: 22,
                  fontFamily: 'Cookie',
                }}
                onClick={() => {
                  navigate('/publication');
                }}
              >
                Publications
              </Button>
              <Button
                variant='text'
                color='info'
                size='small'
                style={{
                  textTransform: 'none',
                  fontSize: 22,
                  fontFamily: 'Cookie',
                }}
                onClick={() => {
                  navigate('/experience');
                }}
              >
                Experiences
              </Button>
              <Button
                variant='text'
                color='info'
                size='small'
                style={{
                  textTransform: 'none',
                  fontSize: 22,
                  fontFamily: 'Cookie',
                }}
                onClick={() => {
                  navigate('/project');
                }}
              >
                Projects
              </Button>
              <Button
                variant='text'
                color='info'
                size='small'
                style={{
                  textTransform: 'none',
                  fontSize: 22,
                  fontFamily: 'Cookie',
                }}
              >
                Blogs
              </Button>
              {/* <Button variant='text' color='info' size='small' style={{textTransform:'none',fontSize:22, fontFamily:"Cookie"}}>
                Travel Stories
              </Button> */}
              {/* <Button
                variant='text'
                color='info'
                size='small'
                sx={{ minWidth: 0 }}
              >
                Blog
              </Button> */}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => {
                navigate('/connect');
              }}
              variant='text'
              color='info'
              size='small'
              style={{
                textTransform: 'none',
                fontSize: 25,
                fontFamily: 'Cookie',
              }}
            >
              Let's Connect
            </Button>

            {/* <Button color='primary' variant='text' size='small'>
              Sign in
            </Button>
            <Button color='primary' variant='contained' size='small'>
              Sign up
            </Button>
            <ColorModeIconDropdown /> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label='Menu button' onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='top'
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem
                  onClick={() => {
                    navigate('/research');
                  }}
                >
                  Research
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/publication');
                  }}
                >
                  Publications
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/experience');
                  }}
                >
                  Experience
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/project');
                  }}
                >
                  Projects
                </MenuItem>
                <MenuItem>Blogs</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button
                    color='primary'
                    variant='contained'
                    fullWidth
                    style={{ textTransform: 'none', fontFamily: 'Comic Nueue' }}
                  >
                    Let's Connect
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
