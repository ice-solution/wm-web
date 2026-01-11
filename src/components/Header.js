import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';

const Header = ({ showNav = true }) => {
  const location = useLocation();
  const isLaunchPage = location.pathname === '/';

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: isLaunchPage ? 'transparent' : 'white',
        boxShadow: isLaunchPage ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src="/logo.jpg"
              alt="Wingman Academies Logo"
              sx={{
                height: { xs: 40, md: 50 },
                width: 'auto',
              }}
            />
          </Box>

          {showNav && (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button
                component={Link}
                to="/home"
                sx={{
                  color: isLaunchPage ? 'white' : '#1A365D',
                  textTransform: 'none',
                  fontWeight: location.pathname === '/home' ? 'bold' : 'normal',
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/pilot-pathway"
                sx={{
                  color: isLaunchPage ? 'white' : '#1A365D',
                  textTransform: 'none',
                  fontWeight: location.pathname === '/pilot-pathway' ? 'bold' : 'normal',
                }}
              >
                Pilot Pathway
              </Button>
              <Button
                component={Link}
                to="/flying"
                sx={{
                  color: isLaunchPage ? 'white' : '#1A365D',
                  textTransform: 'none',
                  fontWeight: location.pathname === '/flying' ? 'bold' : 'normal',
                }}
              >
                Fleet
              </Button>
              <Button
                component={Link}
                to="/theory"
                sx={{
                  color: isLaunchPage ? 'white' : '#1A365D',
                  textTransform: 'none',
                  fontWeight: location.pathname === '/theory' ? 'bold' : 'normal',
                }}
              >
                Ground Theory
              </Button>
              <Button
                component={Link}
                to="/facilities"
                sx={{
                  color: isLaunchPage ? 'white' : '#1A365D',
                  textTransform: 'none',
                  fontWeight: location.pathname === '/facilities' ? 'bold' : 'normal',
                }}
              >
                Facilities
              </Button>
              <Button
                component={Link}
                to="/experiences"
                sx={{
                  color: isLaunchPage ? 'white' : '#1A365D',
                  textTransform: 'none',
                  fontWeight: location.pathname === '/experiences' ? 'bold' : 'normal',
                }}
              >
                Experiences
              </Button>
              <Button
                component={Link}
                to="/airline-prep"
                sx={{
                  color: isLaunchPage ? 'white' : '#1A365D',
                  textTransform: 'none',
                  fontWeight: location.pathname === '/airline-prep' ? 'bold' : 'normal',
                }}
              >
                Airline Prep
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FF6B35',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '4px',
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#e55a2b',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

