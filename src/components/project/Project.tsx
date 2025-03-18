import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ProjectCard } from '../projectcard/ProjectCard';
import ProjectCategory from '../projectcategory/ProjectCategory';
import { Pagination } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { automationProjects, backendProjects, boilerplateProjects, devopsProjects, frontendProjects, mobileProjects, projectInfo, researchProjects, webProjects } from '../../data/Projects';
import { shuffleArray } from '../../utilities/Utility';


function Search({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <FormControl sx={{ width: { xs: '100%', sm: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search projects..."
        value={value}
        onChange={onChange}
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search projects',
        }}
      />
    </FormControl>
  );
}

export default function Projects() {
  // All projects combined and shuffled
  const allProjects = React.useMemo(() => 
    shuffleArray([
      ...researchProjects, 
      ...webProjects, 
      ...backendProjects, 
      ...mobileProjects, 
      ...frontendProjects, 
      ...automationProjects, 
      ...devopsProjects, 
      ...boilerplateProjects
    ]), 
    []
  );
  

  
  // State for selected category, search query, and pagination
  const [selectedCategory, setSelectedCategory] = React.useState("All categories");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const projectsPerPage = 6;
  
  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
  // Filter projects based on selected category and search query
  const filteredProjects = React.useMemo(() => {
    let filtered = allProjects;
    
    // Filter by category if not "All categories"
    if (selectedCategory !== "All categories") {
      filtered = filtered.filter(project => project.subheader === selectedCategory);
    }
    
    // Filter by search query if not empty
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) || 
        project.subheader.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [allProjects, selectedCategory, searchQuery]);
  
  // Calculate total pages based on filtered projects
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  // Reset to page 1 when category or search changes
  React.useEffect(() => {
    setPage(1);
  }, [selectedCategory, searchQuery]);
  
  // Get current projects for the page
  const indexOfLastProject = page * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
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
      style={{ padding: 0, gap: 24 }}
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
          <Search value={searchQuery} onChange={handleSearchChange} />
        </Box>
      </Box>
      
      <Box
        sx={{
          width: { sm: '100%', md: '100%' },
          textAlign: { sm: 'left', md: 'center' },
          mb: 4
        }}
      >
        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign:'justify' }}>
          {projectInfo}
        </Typography>
      </Box>
      
      {/* Mobile search - only visible on small screens */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          width: '100%',
          mb: 2
        }}
      >
        <Search value={searchQuery} onChange={handleSearchChange} />
      </Box>
      
      <ProjectCategory 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}
      >
        {currentProjects.length > 0 ? (
          currentProjects.map((item, index) => (
            <Grid item key={indexOfFirstProject + index} xs={12} sm={6} md={4}>
              <ProjectCard 
                title={item.title}
                description={item.description}
                subheader={item.subheader}
                link={item.link}
              />
            </Grid>
          ))
        ) : (
          <Box sx={{ py: 4, textAlign: 'center', width: '100%' }}>
            <Typography variant="h6" color="text.secondary">
              {searchQuery.trim() !== "" 
                ? `No projects found matching "${searchQuery}"`
                : "No projects found in this category."}
            </Typography>
          </Box>
        )}
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