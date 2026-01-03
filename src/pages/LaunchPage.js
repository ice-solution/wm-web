import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LaunchPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#1A365D',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header showNav={false} />
      
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 8 }}>
        {/* Logo Section */}
        <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Box
              component="img"
              src="/logo.jpg"
              alt="Wingman Academies Logo"
              sx={{
                height: { xs: 100, md: 120 },
                width: 'auto',
              }}
            />
          </Box>
        </Container>

        {/* Map Section */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              mb: 4,
            }}
          >
            {/* Map Image */}
            <Box
              component="img"
              src="/launch-map.png"
              alt="Wingman Academies Locations Map"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px',
              }}
            />

            {/* Location Markers with Links */}
            {/* Hong Kong */}
            <Box
              component="a"
              href=""
              sx={{
                position: 'absolute',
                top: { xs: '28%', md: '30%' },
                left: { xs: '42%', md: '45%' },
                transform: 'translate(-50%, -50%)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #1A365D',
                  mb: 0.5,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                Hong Kong
              </Typography>
            </Box>

            {/* Singapore */}
            <Box
              component="a"
              href=""
              sx={{
                position: 'absolute',
                top: { xs: '48%', md: '50%' },
                left: { xs: '48%', md: '50%' },
                transform: 'translate(-50%, -50%)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #1A365D',
                  mb: 0.5,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                Singapore
              </Typography>
            </Box>

            {/* Perth */}
            <Box
              component="a"
              href=""
              sx={{
                position: 'absolute',
                top: { xs: '68%', md: '70%' },
                left: { xs: '18%', md: '20%' },
                transform: 'translate(-50%, -50%)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #1A365D',
                  mb: 0.5,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                Perth
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default LaunchPage;

