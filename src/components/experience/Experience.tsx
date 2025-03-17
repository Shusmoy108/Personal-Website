import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import { styled } from '@mui/material/styles';
import SecurityIcon from '@mui/icons-material/Security';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import MedicationIcon from '@mui/icons-material/Medication';
import { useEffect, useRef, useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SkillSection from '../skillsection/SkillSection';

const items = [
  {
    icon: <CloudIcon />,
    title: 'Digital Monitoring Product (DMP)',
    description: 'Enterprise Software Engineer (January 8, 2024- Present)',
    imageLight: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/dash-dark.png")`,
    details: `–Working in a large Java Based Application named Entre widely used in federal and state organizations for communication with their panels for maintaining security.

–Working in a large Java Based Automation Application named SCS-VR widely used in banks to communicate with central stations to take necessary steps during fire and burglary alarms.

–Working with different banks and financial institutions like Bank of America, Capital One, Arvest Bank, and JPMorgan Chase & Co to enhance their security with more than 6000 panels.

–Designs, writes, maintains, tests, and debugs software that is modular, maintainable, and easy to understand.
`,
  },
  // {
  //   icon: <EdgesensorHighRoundedIcon />,
  //   title: 'Unmanned Aerial Vehicle (UAV)',
  //   description:
  //     'This item could provide information about the mobile app version of the product.',
  //   imageLight: `url("${dronfly}")`,
  //   imageDark: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-dark.png")`,
  // },
  {
    icon: <MedicationIcon />,
    title: 'Girmairi',
    description: 'Software Engineer (September 1, 2021- Present)',
    imageLight: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/mobile-dark.png")`,
    details: `–Led the development team of 10+ members, providing guidance and direction to deliver most of the products successfully before the deadline.

    –Working as a seasoned full-stack developer by the company to architect and develop cutting-edge software solutions for web and mobile applications with Java, Javascript, and React Native.

    –Spearheaded the design and implementation of an AWS streamlined DevOps operation(Codepipeline, Codebuild, Codedeploy, Lambda, ECS, EC2, S3, IAM, RDS), deployed mobile application in google playstore and appstore, enhancing automation for the entire development team and increasing work efficiency by 70%.
    
    –Enhanced product quality by 85% with employing Google Analytics, Google ReCAPTCHA, CHATGPT, ZOHO and advanced SEO strategies.`,
  },
  {
    icon: <SecurityIcon />,
    title: 'Missouri State University',
    description: 'Graduate Assistant (January 17, 2022 - December 15, 2023)',
    imageLight: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/devices-dark.png")`,
    details: `
    –Courses Taught: Introduction to C++ Programming, Data Structure, Computational Thinking, Operating Systems.

    –Demonstrated expertise by consistently evaluating examination papers, facilitating laboratory sessions, assessing projects and orchestrating weekly programming workshops.

    –Orchestrated the mentor-ship of four senior student groups, providing invaluable assistance in project planning, database design, and delivering constructive feedback for empowering students to achieve outstanding project outcomes and receive accolades from industry professionals.

–Led the ROSE Grant 2023 program, enlightening ten high school teachers about the security vulnerabilities linked to IoT devices.
`,
  },
  // {
  //   icon: <SchoolIcon />,
  //   title: 'K-12 Education Learning',
  //   description:
  //     'This item could provide a snapshot of the most important metrics or data points related to the product.',
  //   imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-light.png")`,
  //   imageDark: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-dark.png")`,
  // },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Global Brand Pvt Ltd',
    description:
      'Contractual Mobile App Developer (June 1, 2021 - September 1, 2021)',
    imageLight: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/devices-dark.png")`,
    details: `–Organized the development of the company's mobile application with react-native, ensuring its 100% successful implementation and functionality in both iOS and android.

    –Developed and launched the company's one of the most comprehensive mobile applications for ecommerce, focusing on computer accessories, showcasing technical expertise and innovation.

    –Successfully orchestrated the application's launch on both Google Play Store and iOS App Store, ensuring 100% smooth rollout process.`,
  },
  //,

  // {
  //   icon: <DevicesRoundedIcon />,
  //   title: 'BigGO Limited',
  //   description:
  //     'Full Stack Developer (June 1, 2021 - 1 September 1, 2021)',
  //   imageLight: `url("${
  //     process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
  //   }/static/images/templates/templates-images/devices-light.png")`,
  //   imageDark: `url("${
  //     process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
  //   }/static/images/templates/templates-images/devices-dark.png")`,
  //   details: `–Organized the development of the company's mobile application with react-native, ensuring its 100% successful implementation and functionality in both iOS and android.

  //   –Developed and launched the company's one of the most comprehensive mobile applications for ecommerce, focusing on computer accessories, showcasing technical expertise and innovation.

  //   –Successfully orchestrated the application's launch on both Google Play Store and iOS App Store, ensuring 100% smooth rollout process.`
  // },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        fontFamily: 'Tinos',

        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  const [mobileTypedText, setMobileTypedText] = useState('');
  const [isMobileTyping, setIsMobileTyping] = useState(true);
  const mobileTextContainerRef = useRef<HTMLDivElement>(null);
  const typingSpeed = 10; // milliseconds per character

  // Effect for typing animation in mobile view
  useEffect(() => {
    if (!isMobileTyping) return;

    const textToType = selectedFeature.details || '';

    if (mobileTypedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setMobileTypedText(textToType.substring(0, mobileTypedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsMobileTyping(false);
    }
  }, [mobileTypedText, isMobileTyping, selectedFeature]);

  // Effect to scroll to bottom as text is typed
  useEffect(() => {
    if (mobileTextContainerRef.current) {
      mobileTextContainerRef.current.scrollTop =
        mobileTextContainerRef.current.scrollHeight;
    }
  }, [mobileTypedText]);

  // Reset typing when selected item changes
  useEffect(() => {
    setMobileTypedText('');
    setIsMobileTyping(true);
  }, [selectedItemIndex]);

  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {items.map(({ title }, index) => (
          <Chip
            size='medium'
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant='outlined'>
        <Box
          id='mobileBox'
          ref={mobileTextContainerRef}
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 280,
            padding: 2,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          })}
        >
          <Typography variant='h4' style={{textAlign:"center",                    fontFamily: 'Tinos',
 width:'100%'}}>Highlights</Typography>
          <Typography
            variant='body2'
            sx={{
              textAlign: 'justify',
              whiteSpace: 'pre-line',
              width: '100%',                    fontFamily: 'Tinos',

            }}
          >
            {mobileTypedText}
          </Typography>
        </Box>
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' ,                    fontFamily: 'Tinos',
            }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary',                     fontFamily: 'Tinos',
mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

// Add this function before the Experience component
const openResume = () => {
  window.open('/Shusmoy_Chowdhury_Resume.pdf', '_blank');
};

export default function Experience() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const typingSpeed = 10; // milliseconds per character

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
    // Reset the text to empty to start the animation
    setTypedText('');
    setIsTyping(true);
  };

  const selectedFeature = items[selectedItemIndex];

  // Effect to match heights
  useEffect(() => {
    const matchHeight = () => {
      if (leftBoxRef.current && rightBoxRef.current) {
        const leftHeight = leftBoxRef.current.offsetHeight;
        rightBoxRef.current.style.height = `${leftHeight}px`;
      }
    };

    matchHeight();
    window.addEventListener('resize', matchHeight);

    return () => {
      window.removeEventListener('resize', matchHeight);
    };
  }, []);

  // Effect for typing animation
  useEffect(() => {
    if (!isTyping) return;

    const textToType = selectedFeature.details || '';

    if (typedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.substring(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [typedText, isTyping, selectedFeature]);

  // Effect to scroll to bottom as text is typed
  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.scrollTop =
        textContainerRef.current.scrollHeight;
    }
  }, [typedText]);

  return (
    <Container
      id='features'
      sx={{ py: { xs: 8, sm: 16 } }}
      style={{ padding: 0 }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          color='primary'
          variant='outlined'
          onClick={openResume}
          style={{ textTransform: 'none', fontFamily: 'Comic Nueue', fontSize:16 }}
        >
          View Full CV{' '} <InfoOutlinedIcon />
        </Button>
      </div>

      <Box sx={{ width: { sm: '100%', md: '100%' } }}>
        <Typography
          component='h2'
          variant='h4'
          gutterBottom
          sx={{ color: 'text.primary',                    fontFamily: 'Tinos',          }}
        >
          Professional Experience
        </Typography>
        <Typography
          variant='body1'
          style={{ textAlign: 'justify' }}
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } ,                    fontFamily: 'Tinos',
        }}
        >
          Experienced Software Engineer with a track record of delivering
          cutting-edge web and mobile applications to prestigious clients over
          4+ years. Demonstrated expertise in adeptly managing software
          development teams through strategic planning, consulting, and
          efficient work allocation. Proficient in DevOps operations,
          successfully implementing automation in development processes. Excited
          to bring my skills and achievements to a dynamic team of innovators.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
        }}
      >
        <div>
          <Box
            id='leftBox'
            ref={leftBoxRef}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action
                        .hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {/* {icon} */}

                  <Typography variant='h6' sx={{                    fontFamily: 'Tinos',
}}>{title}</Typography>
                  <Typography variant='body2' sx={{                    fontFamily: 'Tinos',
}}>{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
          }}
          id='rightBox'
          ref={rightBoxRef}
        >
          <Card
            variant='outlined'
            sx={{
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              ref={textContainerRef}
              sx={(theme) => ({
                width: '100%',
                padding: 2,
                overflow: 'auto',
                maxHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 1,
              })}
            >
              <Typography
                variant='h4'
                style={{ textAlign: 'center', width: '100%' ,                    fontFamily: 'Tinos',
                }}
              >
                Highlights
              </Typography>

              <Typography
                variant='body2'
                sx={{
                  textAlign: 'justify',
                  whiteSpace: 'pre-line',
                  width: '100%',
                  fontFamily: 'Tinos',

                }}
              >
                {typedText}
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
      <SkillSection/>
    </Container>
  );
}
