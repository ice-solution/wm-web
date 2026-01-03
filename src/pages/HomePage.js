import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '600px',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          px: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '600px' }}>
            <Typography
              variant="body1"
              sx={{
                color: '#1A365D',
                fontWeight: '600',
                mb: 2,
                fontSize: '1.1rem',
              }}
            >
              Transforming Passion into Airlines Profession
            </Typography>
            <Box 
              component={Link}
              to="/flying"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: '#1A365D',
                  fontWeight: 'bold',
                  fontSize: { xs: '3rem', md: '4.5rem' },
                }}
              >
                Learn to Fly
              </Typography>
              <IconButton
                sx={{
                  backgroundColor: '#1A365D',
                  color: 'white',
                  width: 56,
                  height: 56,
                  '&:hover': { backgroundColor: '#0f2542' },
                }}
              >
                <ArrowForward />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Image Grid Section */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={3}>
          {[0, 1, 2, 3].map((index) => {
            const imageUrls = [
              'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600)',
              'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600)',
              'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600)',
              'url(https://images.unsplash.com/photo-1511578314322-379afb476865?w=600)',
            ];

            const ImageBox = (
              <Box
                component={index === 0 ? Link : 'div'}
                to={index === 0 ? '/theory' : undefined}
                sx={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '8px',
                  backgroundImage: imageUrls[index],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: index === 0 ? 'pointer' : 'default',
                  display: 'block',
                  textDecoration: 'none',
                  '&:hover .hover-banner': {
                    opacity: 1,
                    transform: 'translateY(-50%)',
                  },
                }}
              >
                {/* Blue Banner with Text */}
                <Box
                  className="hover-banner"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    transform: 'translateY(-50%) translateY(20px)',
                    backgroundColor: '#1A365D',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                    zIndex: 1,
                    py: 2,
                    px: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                      textAlign: 'center',
                    }}
                  >
                    Ground Theory Courses
                  </Typography>
                </Box>
              </Box>
            );

            return (
              <Grid item xs={12} sm={6} key={index}>
                {ImageBox}
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Why Us Section */}
      <Box sx={{ backgroundColor: '#1A365D', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
            }}
          >
            Why Us?
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
                    2700
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
                    sq meters
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    Training Facilities
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
                    24/7
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                    Student Lounge
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
                    10
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                    Aircraft in fleet
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
                    503
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', mt: 1 }}>
                    Successful students became airline pilot
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
                    3
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                    Locations
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
                    16
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                    years of training experience
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
                    30+
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                    airline pilot instructors
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" sx={{ color: 'white', mb: 1 }}>
              • Taught by former airline pilots and experienced Grade 1 instructors
            </Typography>
            <Typography variant="body1" sx={{ color: 'white' }}>
              • Our team includes 3 in-house CASA testing officers
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Our Network Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography
                variant="h2"
                sx={{
                  color: '#1A365D',
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Our
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: '#1A365D',
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Network
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      p: 3,
                      borderRadius: '8px',
                      textAlign: 'center',
                      minHeight: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Certified Instructor
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      Australian Government Civil Aviation Safety Authority
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      p: 3,
                      borderRadius: '8px',
                      textAlign: 'center',
                      minHeight: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Authorised Training Centre
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#1A365D', fontWeight: 'bold' }}>
                      IATA
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      p: 3,
                      borderRadius: '8px',
                      textAlign: 'center',
                      minHeight: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Partner
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      Embry-Riddle Aeronautical University
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      p: 3,
                      borderRadius: '8px',
                      textAlign: 'center',
                      minHeight: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Partner
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      Flight Experience
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      p: 3,
                      borderRadius: '8px',
                      textAlign: 'center',
                      minHeight: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                      TechEd Network Partnership
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      hkpc (香港生產力局)
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      p: 3,
                      borderRadius: '8px',
                      textAlign: 'center',
                      minHeight: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Partner
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      Pearce Flying Club
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;

