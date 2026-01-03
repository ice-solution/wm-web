import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheoryPage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const facilities = [
    { name: 'Auditorium', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200' },
    { name: 'Classroom', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200' },
    { name: 'Simulator', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200' },
    { name: 'Library', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200' },
    { name: 'Lab', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200' },
  ];

  const handlePrevious = () => {
    setCarouselIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '500px',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#1A365D',
            fontWeight: '600',
            mb: 2,
            fontSize: '1.1rem',
          }}
        >
          Delivered by experienced Airline Pilots
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: '#1A365D',
            fontWeight: 'bold',
            fontSize: { xs: '3rem', md: '4.5rem' },
          }}
        >
          Ground School Theory
        </Typography>
      </Box>

      {/* Pilot Theory Course Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#1A365D',
                color: 'white',
                py: 3,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#0f2542',
                },
              }}
            >
              Recreational Pilot Theory
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#1A365D',
                color: 'white',
                py: 3,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#0f2542',
                },
              }}
            >
              Private Pilot Theory
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#1A365D',
                color: 'white',
                py: 3,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#0f2542',
                },
              }}
            >
              Commercial Pilot Theory
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#1A365D',
                color: 'white',
                py: 3,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#0f2542',
                },
              }}
            >
              Air Transport Pilot Theory
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Facilities Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: '#1A365D',
              fontWeight: 'bold',
              mb: 4,
            }}
          >
            Facilities
          </Typography>

          {/* Image Carousel */}
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                width: '100%',
                height: '500px',
                backgroundImage: `url(${facilities[carouselIndex].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                position: 'relative',
              }}
            >
              {/* Left Arrow */}
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                  },
                }}
              >
                <ChevronLeft />
              </IconButton>

              {/* Right Arrow */}
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                  },
                }}
              >
                <ChevronRight />
              </IconButton>

              {/* Caption */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: '4px',
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {facilities[carouselIndex].name}
                </Typography>
              </Box>

              {/* Pagination */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: '4px',
                }}
              >
                <Typography variant="body2">
                  {carouselIndex + 1}/{facilities.length}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default TheoryPage;

