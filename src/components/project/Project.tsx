import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ProjectCard } from '../projectcard/ProjectCard';
import ProjectCategory from '../projectcategory/ProjectCategory';
import { IconButton, Pagination } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import { automationProjects, backendProjects, boilerplateProjects, devopsProjects, frontendProjects, mobileProjects, researchProjects, webProjects } from '../../data/Projects';

// const projects = [
//   {
//     title: 'Evolutionary DC Selection Policy',
//     description: `Designed novel Machine Learning based data center(DC) selection policies
// in cloud-environment with Java which can outperform the existing DC selection policies and reduce the
// response time and data-processing time by 70% compared to the existing selection policies.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Movie Recommendation System with Clustering Algorithm',
//     description: `Built a movie recommendation system using
//   Apache Spark and the MovieLens dataset, employing clustering algorithms like K-Means, GMM, and LDA to
//   suggest users approximately 80% similar movies based on users viewing history.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Content Suggestion with Topic Modeling',
//     description: `Created a web-application with Python where user will be engaged
// to read blogs and continuously get suggestion based on the blogs user is reading using BERT, LDA and LSA
// and the suggestion system performs 70% better than other machine learning techniques.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Evolutionary DC Selection Policy',
//     description: `Designed novel Machine Learning based data center(DC) selection policies
// in cloud-environment with Java which can outperform the existing DC selection policies and reduce the
// response time and data-processing time by 70% compared to the existing selection policies.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Movie Recommendation System with Clustering Algorithm',
//     description: `Built a movie recommendation system using
//   Apache Spark and the MovieLens dataset, employing clustering algorithms like K-Means, GMM, and LDA to
//   suggest users approximately 80% similar movies based on users viewing history.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Content Suggestion with Topic Modeling',
//     description: `Created a web-application with Python where user will be engaged
// to read blogs and continuously get suggestion based on the blogs user is reading using BERT, LDA and LSA
// and the suggestion system performs 70% better than other machine learning techniques.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Evolutionary DC Selection Policy',
//     description: `Designed novel Machine Learning based data center(DC) selection policies
// in cloud-environment with Java which can outperform the existing DC selection policies and reduce the
// response time and data-processing time by 70% compared to the existing selection policies.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Movie Recommendation System with Clustering Algorithm',
//     description: `Built a movie recommendation system using
//   Apache Spark and the MovieLens dataset, employing clustering algorithms like K-Means, GMM, and LDA to
//   suggest users approximately 80% similar movies based on users viewing history.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Content Suggestion with Topic Modeling',
//     description: `Created a web-application with Python where user will be engaged
// to read blogs and continuously get suggestion based on the blogs user is reading using BERT, LDA and LSA
// and the suggestion system performs 70% better than other machine learning techniques.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Evolutionary DC Selection Policy',
//     description: `Designed novel Machine Learning based data center(DC) selection policies
// in cloud-environment with Java which can outperform the existing DC selection policies and reduce the
// response time and data-processing time by 70% compared to the existing selection policies.`,
//     subheader: 'Automation',
//   },
//   {
//     title: 'Movie Recommendation System with Clustering Algorithm',
//     description: `Built a movie recommendation system using
//   Apache Spark and the MovieLens dataset, employing clustering algorithms like K-Means, GMM, and LDA to
//   suggest users approximately 80% similar movies based on users viewing history.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Content Suggestion with Topic Modeling',
//     description: `Created a web-application with Python where user will be engaged
// to read blogs and continuously get suggestion based on the blogs user is reading using BERT, LDA and LSA
// and the suggestion system performs 70% better than other machine learning techniques.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Evolutionary DC Selection Policy',
//     description: `Designed novel Machine Learning based data center(DC) selection policies
// in cloud-environment with Java which can outperform the existing DC selection policies and reduce the
// response time and data-processing time by 70% compared to the existing selection policies.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Movie Recommendation System with Clustering Algorithm',
//     description: `Built a movie recommendation system using
//   Apache Spark and the MovieLens dataset, employing clustering algorithms like K-Means, GMM, and LDA to
//   suggest users approximately 80% similar movies based on users viewing history.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Content Suggestion with Topic Modeling',
//     description: `Created a web-application with Python where user will be engaged
// to read blogs and continuously get suggestion based on the blogs user is reading using BERT, LDA and LSA
// and the suggestion system performs 70% better than other machine learning techniques.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Evolutionary DC Selection Policy',
//     description: `Designed novel Machine Learning based data center(DC) selection policies
// in cloud-environment with Java which can outperform the existing DC selection policies and reduce the
// response time and data-processing time by 70% compared to the existing selection policies.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Movie Recommendation System with Clustering Algorithm',
//     description: `Built a movie recommendation system using
//   Apache Spark and the MovieLens dataset, employing clustering algorithms like K-Means, GMM, and LDA to
//   suggest users approximately 80% similar movies based on users viewing history.`,
//     subheader: 'Research',
//   },
//   {
//     title: 'Content Suggestion with Topic Modeling',
//     description: `Created a web-application with Python where user will be engaged
// to read blogs and continuously get suggestion based on the blogs user is reading using BERT, LDA and LSA
// and the suggestion system performs 70% better than other machine learning techniques.`,
//     subheader: 'Web',
//   },
// ];

export function Search() {
  return (
    <FormControl sx={{ width: { sm: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function Projects() {
  const [page, setPage] = React.useState(1);
  const projectsPerPage = 6;
  const projects:any[] = [...researchProjects, ...webProjects, ...backendProjects, ...mobileProjects, ...frontendProjects, ...automationProjects, ...devopsProjects, ...boilerplateProjects];
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  // Get current projects for the page
  const indexOfLastProject = page * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Scroll to top of the projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Container
      id="projects"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
      style={{ padding: 0,gap:24 }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
        
        <Typography
          component="h2"
          variant="h4"
          sx={{ 
            color: 'text.primary',
            textAlign: 'center',
            flex: { xs: 1, md: 2 }
          }}
        >
          Projects
        </Typography>
        
        <Box sx={{ 
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-end'
        }}>
          <Search />
        </Box>
      </Box>
      
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
          mb: 4
        }}
      >
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Explore my portfolio of projects spanning various technologies and domains.
          Each project demonstrates different skills and approaches to solving real-world problems.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          justifyContent:'center',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <Search />
      </Box>
      <ProjectCategory />
      
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
      >
        {currentProjects.map((item, index) => (
          <Grid item key={indexOfFirstProject + index} xs={12} sm={6} md={4}>
            <ProjectCard 
              title={item.title}
              description={item.description}
              subheader={item.subheader}
            />
          </Grid>
        ))}
      </Grid>
      
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
          <Pagination 
            count={totalPages} 
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </Container>
  );
}