import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { ProjectCard } from '../projectcard/ProjectCard';

const projects = [
  {
    title: 'Evolutionary DC Selection Policy',
    description: `Designed novel Machine Learning based data center(DC) selection policies
in cloud-environment with Java which can outperform the existing DC selection policies and reduce the
response time and data-processing time by 70% compared to the existing selection policies.`,
    subheader: 'Research',
  },
  {
    title: 'Movie Recommendation System with Clustering Algorithm',
    description: `Built a movie recommendation system using
  Apache Spark and the MovieLens dataset, employing clustering algorithms like K-Means, GMM, and LDA to
  suggest users approximately 80% similar movies based on users viewing history.`,
    subheader: 'Research',
  },
  {
    title: 'Content Suggestion with Topic Modeling',
    description: `Created a web-application with Python where user will be engaged
to read blogs and continuously get suggestion based on the blogs user is reading using BERT, LDA and LSA
and the suggestion system performs 70% better than other machine learning techniques.`,
    subheader: 'Research',
  },
  {
    title: 'Evolutionary DC Selection Policy',
    description: `Designed novel Machine Learning based data center(DC) selection policies
in cloud-environment with Java which can outperform the existing DC selection policies and reduce the
response time and data-processing time by 70% compared to the existing selection policies.`,
    subheader: 'Research',
  },
  {
    title: 'Movie Recommendation System with Clustering Algorithm',
    description: `Built a movie recommendation system using
  Apache Spark and the MovieLens dataset, employing clustering algorithms like K-Means, GMM, and LDA to
  suggest users approximately 80% similar movies based on users viewing history.`,
    subheader: 'Research',
  },
  {
    title: 'Content Suggestion with Topic Modeling',
    description: `Created a web-application with Python where user will be engaged
to read blogs and continuously get suggestion based on the blogs user is reading using BERT, LDA and LSA
and the suggestion system performs 70% better than other machine learning techniques.`,
    subheader: 'Research',
  },
];

export default function Projects() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
      style={{ padding: 0 }}

    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Pricing
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Quickly build an effective pricing table for your potential customers with
          this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
      >
        {projects.map((item) => (
          <ProjectCard title={item.title}
            description={item.description}
            subheader={item.subheader}/>
        ))}
        
      </Grid>
    </Container>
  );
}