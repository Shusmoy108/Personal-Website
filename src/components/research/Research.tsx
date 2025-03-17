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

const items = [
  {
    icon: <CloudIcon />,
    title: 'Cloud Computing',
    description:
      'Enhancing Cloud Performance Through Intelligent Load Balancing and Data Center Selection',
    imageLight: `url("${
        process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
      }/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/dash-dark.png")`,
    details: `The rapid advancement of information technology has significantly accelerated the adoption of cloud services as a viable alternative to traditional computing infrastructures. Cloud service providers offer scalable and on-demand resources, catering to users based on factors such as location, time, and pricing models. Major cloud providers—including Google Cloud, IBM Cloud, Amazon Web Services (AWS), Microsoft Azure, Red Hat, Rackspace, Verizon Cloud, and VMware—deliver a wide range of computing services, enabling clients to access configurable resources such as applications, servers, networks, and storage.

The fundamental objective of cloud computing is to optimize the utilization of distributed resources to achieve high throughput and enhanced system performance. By leveraging global data center (DC) infrastructures, cloud platforms execute workloads efficiently, reducing latency and improving response times. Various resource-sharing paradigms, such as grid computing and peer-to-peer computing, facilitate seamless data transfer and resource allocation, ensuring scalability and flexibility.

However, maintaining optimal performance in cloud environments requires robust Quality of Service (QoS) monitoring, which ensures alignment with user demands and compliance with Service Level Agreements (SLA). Key challenges affecting cloud service efficiency include data center selection, load balancing (LB), performance analysis and modeling, throughput and response time optimization, security and privacy concerns, and resource management. Among these, DC selection and LB strategies are critical to maintaining QoS and SLA commitments.

Addressing Cloud Infrastructure Challenges: Load Balancing and Data Center Selection
Data center selection is a pivotal process that allocates the most suitable data center to user requests based on various factors such as proximity, resource availability, and workload demands. Effective DC selection ensures that cloud resources are utilized efficiently, minimizing idle capacity and maximizing cost-effectiveness.

Similarly, load balancing (LB) plays a crucial role in distributing user requests across virtual machines (VMs) within DCs. A well-optimized LB strategy prevents resource overloading, reduces response time, and ensures an equitable distribution of computational tasks. Without an efficient LB mechanism, some VMs may become overwhelmed with user requests, while others remain underutilized, leading to performance bottlenecks and increased operational costs.

With the increasing demand for cloud services, the cost of deploying and maintaining new data centers has risen significantly. A key contributor to these costs is the low resource utilization ratio, with many data centers operating at only 5% to 15% capacity. To mitigate this inefficiency, intelligent DC selection and LB policies are essential to dynamically allocate resources based on real-time user demands and workload conditions.

To address these challenges, we are continuously researching and developing advanced machine learning (ML) and evolutionary algorithm-based techniques to enhance load balancing and data center selection policies. By integrating AI-driven predictive models, we can optimize workload distribution, dynamically adjust resource allocation, and improve overall system performance.

Machine learning techniques such as reinforcement learning, deep learning, and metaheuristic optimization allow for adaptive decision-making in real-time, improving the efficiency of cloud infrastructure. Evolutionary algorithms further enhance LB and DC selection by identifying optimal configurations that reduce latency, improve response times, and minimize cost overheads.

In today's competitive cloud landscape, many companies maintain in-house load balancers and private cloud infrastructures. However, optimizing these systems to ensure seamless workload management remains a challenge. Our expertise in AI-driven load balancing and data center selection can help organizations enhance the performance of their cloud environments, reduce operational costs, and ensure better resource utilization.

By leveraging intelligent ML-based optimization techniques, businesses can achieve superior workload distribution, minimize downtime, and enhance the scalability of their cloud operations. Our research and solutions aim to empower enterprises with cutting-edge, automated cloud management strategies, ensuring that their infrastructure remains agile, efficient, and cost-effective.`,
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
    title: 'Medical Data Analysis and Prediction',
    description:
      'Advancing Medical Data Analysis and Prediction for Low-Income Communities',
    imageLight: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/mobile-dark.png")`,
    details: `Access to quality healthcare remains a significant challenge in developing countries, particularly for low-income populations that struggle with inadequate medical infrastructure and limited healthcare resources. The availability of medical data has the potential to transform healthcare delivery by enabling early disease detection, predictive diagnostics, and resource optimization. However, analyzing and utilizing medical data effectively in these regions is often hindered by poor data quality, lack of electronic health records (EHRs), and limited computational resources.

One of the key challenges in medical data analysis for low-income communities is the scarcity of well-structured and high-quality health data. Many healthcare facilities still rely on paper-based records, making it difficult to track patient history and detect patterns in diseases. Additionally, the lack of advanced diagnostic tools often leads to delayed or inaccurate diagnoses, increasing the burden of preventable diseases. Addressing these issues requires scalable, cost-effective, and AI-driven solutions that can function in resource-constrained environments.

Our research focuses on developing machine learning models tailored for medical data analysis and disease prediction in low-income regions. By leveraging AI-driven predictive analytics, we aim to improve early diagnosis, patient monitoring, and healthcare decision-making. We explore techniques such as automated medical image analysis, anomaly detection in patient data, and predictive modeling for disease outbreaks, ensuring that even facilities with minimal technological infrastructure can benefit from AI-powered insights. Additionally, we investigate lightweight AI models that require lower computational power, making them suitable for mobile and offline healthcare solutions.

As the demand for affordable and accessible healthcare grows, integrating data-driven medical analysis can significantly enhance healthcare accessibility and patient outcomes in developing countries. Our goal is to bridge the gap in medical technology by providing AI-powered, cost-effective predictive tools, ensuring that even the most vulnerable populations have access to early diagnosis and better healthcare management.`,
  },
  {
    icon: <SecurityIcon />,
    title: 'IoT and Security',
    description:
      'Enhancing Smart Home Security: Identifying and Mitigating IoT Vulnerabilities',
    imageLight: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/devices-dark.png")`,
    details: `The rapid expansion of smart home technology has led to the widespread adoption of Internet of Things (IoT) devices, ranging from smart locks and security cameras to voice assistants and connected appliances. While these devices offer convenience and automation, they also introduce significant security vulnerabilities due to their low-cost hardware, limited computational power, and often weak security protocols. Many smart home IoT devices are susceptible to attacks, allowing unauthorized individuals to exploit weaknesses, gain remote control, and compromise user privacy and safety.

One of the primary challenges in smart home security is the lack of robust authentication and encryption mechanisms, making devices vulnerable to cyber threats such as man-in-the-middle attacks, device hijacking, and unauthorized data access. Additionally, firmware vulnerabilities and insecure communication channels further increase the risk of exploitation, enabling attackers to manipulate IoT devices remotely. Addressing these security flaws requires proactive threat detection and intelligent defense mechanisms that can adapt to evolving attack patterns.

To tackle these challenges, we are actively researching the integration of machine learning (ML) algorithms to enhance smart home IoT security. By leveraging AI-driven anomaly detection and predictive security models, we aim to identify vulnerabilities, detect malicious activities in real time, and prevent unauthorized access. Our research explores lightweight encryption techniques, adaptive authentication protocols, and intrusion detection systems tailored for resource-constrained IoT devices.

As smart home ecosystems continue to expand, ensuring robust security measures is critical to protecting user privacy, preventing cyber intrusions, and maintaining the integrity of IoT networks. Our goal is to develop advanced, AI-powered security solutions that enhance the resilience of smart home devices, providing a safer and more secure connected living environment.
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
    title: 'Social Disparity in Developing and Developed Country',
    description:
      'Addressing Social Inequalities: Bridging the Gap Between Developed and Developing Countries',
    imageLight: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("${
      process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'
    }/static/images/templates/templates-images/devices-dark.png")`,
    details: `The gap between developed and developing countries extends beyond economic differences, encompassing knowledge disparities, social practices, habitual differences, and varying levels of awareness. These factors contribute to inequality in education, healthcare access, technological adoption, and overall quality of life. While developed nations benefit from structured policies, technological advancements, and widespread awareness, many developing regions struggle with limited educational resources, deeply rooted traditional practices, and a lack of access to critical information. This disparity creates significant challenges in economic growth, social mobility, and overall human development.

A key aspect of this divide is the knowledge gap, where individuals in developing countries often lack access to quality education, digital literacy, and critical thinking skills, which are essential for personal and societal advancement. Furthermore, social practices and habitual differences shape the way communities adopt new technologies, interact with governance systems, and perceive opportunities for growth. In many cases, ignorance of consciousness—a lack of awareness about global standards, rights, and possibilities—prevents individuals from fully leveraging available resources and modern innovations.

Our research aims to identify and analyze these disparities, focusing on culturally and contextually appropriate solutions that can be effectively implemented in developing countries. We seek to develop strategies that bridge the knowledge gap, promote educational and technological accessibility, and encourage positive behavioral shifts without undermining local traditions and values. Through data-driven analysis, policy recommendations, and community-based initiatives, we aim to design feasible, scalable, and sustainable solutions tailored to the unique social, economic, and cultural landscapes of developing nations.

Addressing social disparity requires a multidimensional approach that integrates education, awareness programs, technology-driven solutions, and policy reforms. Our goal is to empower communities in developing countries with knowledge and practical tools that enhance social mobility, economic growth, and overall well-being, ensuring that progress is inclusive and adaptable to their specific needs.`,
  },
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
          <Typography
            variant='body2'
            sx={{
              textAlign: 'justify',
              whiteSpace: 'pre-line',
              width: '100%', fontFamily: 'Tinos',
            }}
          >
            {mobileTypedText}
          </Typography>
        </Box>
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium', fontFamily: 'Tinos', }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary', fontFamily: 'Tinos', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Research() {
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
      <Box sx={{ width: { sm: '100%', md: '100%' } }}>
        <Typography
          component='h2'
          variant='h4'
          gutterBottom
          sx={{ color: 'text.primary' ,fontFamily: 'Tinos', }}
        >
          Research Interest
        </Typography>
        <Typography
          variant='body1'
          style={{textAlign:'justify'}}
          sx={{ color: 'text.secondary',  fontFamily: 'Tinos',mb: { xs: 2, sm: 4 } }}
        >
          My research focuses on addressing global challenges through AI and
          machine learning solutions tailored for developing countries. Key
          areas of interest include enhancing cloud computing infrastructure,
          improving IoT device security in smart homes, advancing medical data
          analysis for low-income populations, and bridging social disparities
          between developed and developing nations. My goal is to identify
          vulnerabilities and develop scalable, culturally appropriate solutions
          that can improve education, healthcare, technology adoption, and
          overall well-being in resource-constrained environments.{' '}
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
                  {icon}

                  <Typography variant='h6' sx={{ fontFamily: 'Tinos',}}>{title}</Typography>
                  <Typography variant='body2' sx={{ fontFamily: 'Tinos',}}>{description}</Typography>
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
              })}
            >
              <Typography
                variant='body2'
                sx={{
                  textAlign: 'justify',
                  whiteSpace: 'pre-line',
                  width: '100%', fontFamily: 'Tinos',
                }}
              >
                {typedText}
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
