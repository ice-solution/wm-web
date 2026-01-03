import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StoryPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '500px',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          px: 4,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: { xs: '3rem', md: '4.5rem' },
            }}
          >
            Our Story
          </Typography>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            We are a CASA approved Part 141/142 Flight School and an IATA Authorised Training Centre based at Jandakot Airport, Perth. We specialise in professional pilot training, aviation education, flight experiences, and youth programs.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            Designed and delivered by experienced airline pilots, our programs inspire young learners, provide unforgettable discovery experiences, and prepare aspiring pilots with the skills and qualifications needed for a successful aviation career. At Wingman, we don't just teach flying — we help you spread your wings and achieve your dreams in the sky.
          </Typography>
        </Box>
      </Container>

      {/* CEO Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '300px',
                height: '300px',
                borderRadius: '8px',
                backgroundColor: '#f0f0f0',
                backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="overline"
              sx={{
                color: '#666',
                fontWeight: 'bold',
                fontSize: '0.9rem',
              }}
            >
              CEO
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: '#1A365D',
                fontWeight: 'bold',
                mb: 3,
              }}
            >
              Nigel Leung
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#333',
                lineHeight: 1.8,
              }}
            >
              Before funding Wingman Academies, Nigel Leung was an airline pilot with Cathay Dragon, accumulating a total of 5100 flying hours with type ratings in Airbus A320/321 and A330 aircraft types. In addition, he obtained his Master's Degree in Aeronautical Engineering from London Imperial College, and is a holder of the Hong Kong Airline Transport Pilot License, and Australian Private Pilot Licence.
            </Typography>
          </Grid>
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

export default StoryPage;

