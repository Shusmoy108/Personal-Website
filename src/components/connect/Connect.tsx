import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import SitemarkIcon from '../header/SitemarkIcon';
import { contactInfo } from '../../data/Info';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function Connect() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [messageError, setMessageError] = React.useState(false);
  const [messageErrorMessage, setMessageErrorMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const validateInputs = (email: string, message: string) => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!message) {
      setMessageError(true);
      setMessageErrorMessage('Please provide a message about the contact info.');
      isValid = false;
    } else {
      setMessageError(false);
      setMessageErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload
    
    const isValid = validateInputs(email, message);
    if (!isValid) {
      return;
    }
    const fullMessage= message+ "\n"+"My Contact Email is "+email;
    const subject = "Connect with Shusmoy";
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
    
    window.location.href = mailtoLink; // Opens the email client
    
    // Clear the form fields
    setEmail('');
    setMessage('');
  };

  return (
    <SignInContainer direction='column' justifyContent='center'>
      <Card variant='outlined'>
        <SitemarkIcon />
        <Typography
          component='h1'
          variant='h4'
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          Let's Connect
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          <FormControl style={{alignItems:'baseline', gap:10}}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id='email'
              type='email'
              name='email'
              placeholder='your@email.com'
              autoComplete='email'
              autoFocus
              required
              fullWidth
              variant='outlined'
              color={emailError ? 'error' : 'primary'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl style={{alignItems:'baseline', gap:10}}>
            <FormLabel htmlFor='message'>Message</FormLabel>
            <TextField
              multiline
              rows={4}
              error={messageError}
              helperText={messageErrorMessage}
              name='message'
              placeholder="Let's Connect"
              id='message'
              autoFocus={false}
              required
              fullWidth
              variant='outlined'
              color={messageError ? 'error' : 'primary'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>

          <Button
            type='submit'
            fullWidth
            variant='contained'
          >
            Connect
          </Button>
        </Box>
      </Card>
    </SignInContainer>
  );
}
