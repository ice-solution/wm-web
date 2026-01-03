import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FlyingPage = () => {
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [showCockpitView, setShowCockpitView] = useState(false);

  const aircraftData = [
    {
      id: 'VH-EAH',
      image: '/flying_aircraft.png',
      cockpitView: '/flying_cockpit_view.png',
      dualRate: 'AUD $460',
      soloRate: 'AUD $350',
      maxWeight: '725kgs',
      cruiseSpeed: '100knots',
      engine: 'Continental O-200-A',
      avionics: 'Garmin G500TXi',
      seats: '2',
    },
    {
      id: 'VH-UGU',
      image: '/flying_aircraft.png',
      cockpitView: '/flying_cockpit_view.png',
      dualRate: 'AUD $460',
      soloRate: 'AUD $350',
      maxWeight: '725kgs',
      cruiseSpeed: '100knots',
      engine: 'Continental O-200-A',
      avionics: 'Garmin G500TXi',
      seats: '2',
    },
  ];

  const handleAircraftClick = (index) => {
    if (selectedAircraft === index) {
      // 如果點擊的是已選中的，則關閉
      setSelectedAircraft(null);
    } else {
      setSelectedAircraft(index);
    }
    setShowCockpitView(false);
  };

  const handleClose = () => {
    setSelectedAircraft(null);
    setShowCockpitView(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* Banner Section */}
      <Box
        sx={{
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src="/flying_banner.png"
          alt="Flying Banner"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>

      {/* Our Fleet Section */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: '#1A365D',
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
            }}
          >
            Our Fleet
          </Typography>

          <Grid container spacing={3}>
            {aircraftData.map((aircraft, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box>
                  {/* Aircraft Image */}
                  <Box
                    onClick={() => handleAircraftClick(index)}
                    sx={{
                      width: '100%',
                      height: '300px',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '8px',
                      backgroundImage: `url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&sig=${index})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Expanded Detail Panel - Full Width */}
          {selectedAircraft !== null && (
            <Box
              sx={{
                mt: 4,
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                p: 4,
                position: 'relative',
                width: '100%',
              }}
            >
              {/* Triangle pointing to image - 50% larger */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -15,
                  left: selectedAircraft === 0 ? '25%' : '75%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '15px solid transparent',
                  borderRight: '15px solid transparent',
                  borderBottom: '15px solid #f5f5f5',
                }}
              />

              {/* Close Button */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: '#1A365D',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#0f2542',
                  },
                }}
              >
                <Close />
              </IconButton>

              <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '400px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Box
                      component="img"
                      src={showCockpitView 
                        ? 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800' 
                        : 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'}
                      alt={aircraftData[selectedAircraft].id}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#1A365D',
                        fontWeight: 'bold',
                        mb: 3,
                      }}
                    >
                      {aircraftData[selectedAircraft].id}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                        Dual Training Hourly rate:
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 2 }}>
                        {aircraftData[selectedAircraft].dualRate}
                      </Typography>

                      <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                        Solo/Private Hire Hourly rate:
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 3 }}>
                        {aircraftData[selectedAircraft].soloRate}
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 1 }}>
                        Performance:
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        Max Take-off Weight: {aircraftData[selectedAircraft].maxWeight}
                      </Typography>
                      <Typography variant="body2">
                        Cruise Speed: {aircraftData[selectedAircraft].cruiseSpeed}
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 1 }}>
                        Details:
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        Engine: {aircraftData[selectedAircraft].engine}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        Avionics: {aircraftData[selectedAircraft].avionics}
                      </Typography>
                      <Typography variant="body2">
                        Seat: {aircraftData[selectedAircraft].seats}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                      <Button
                        variant="contained"
                        onClick={() => setShowCockpitView(!showCockpitView)}
                        sx={{
                          backgroundColor: '#1A365D',
                          color: 'white',
                          textTransform: 'none',
                          px: 3,
                          '&:hover': {
                            backgroundColor: '#0f2542',
                          },
                        }}
                      >
                        {showCockpitView ? 'Aircraft View' : 'Cockpit View'}
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#FFD700',
                          color: '#1A365D',
                          textTransform: 'none',
                          px: 3,
                          fontWeight: 'bold',
                          '&:hover': {
                            backgroundColor: '#e6c200',
                          },
                        }}
                      >
                        Enquire Now
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default FlyingPage;

