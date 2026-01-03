import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, IconButton, Tabs, Tab } from '@mui/material';
import { Close } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExperiencesPage = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      name: 'Trial Flight',
      tabs: ['Trial Flight', 'Trial Flight Advanced', 'Trial Flight Premium'],
      duration: '30 minutes',
      activities: [
        '- Pre-flight briefing',
        '- Cockpit familiarisation',
        '- Take-off and landing experience',
      ],
      description: 'Experience the thrill of flying with our introductory flight session.',
    },
    {
      name: 'Trial Aerobatics',
      tabs: ['Trial Aerobatics', 'Aerobatics Advanced', 'Aerobatics Pro'],
      duration: '45 minutes',
      activities: [
        '- Safety briefing',
        '- Basic aerobatic maneuvers',
        '- Loops and rolls experience',
      ],
      description: 'Feel the adrenaline rush with our aerobatic flight experience.',
    },
    {
      name: 'Airline Simulator Experience',
      tabs: ['Simulator Basic', 'Simulator Advanced', 'Simulator Pro'],
      duration: '1 hour',
      activities: [
        '- Full flight simulator session',
        '- Realistic flight controls',
        '- Various weather conditions',
      ],
      description: 'Experience commercial airline flying in our state-of-the-art simulator.',
    },
    {
      name: 'Scenic Flight',
      tabs: ['Scenic Flight', 'Extended Scenic', 'Premium Scenic'],
      duration: '1 hour',
      activities: [
        '- Scenic route planning',
        '- Aerial photography opportunities',
        '- Breathtaking views',
      ],
      description: 'Enjoy stunning aerial views of the coastline and surrounding areas.',
    },
    {
      name: 'School Holiday Program',
      tabs: ['Holiday Program', 'Extended Program', 'Intensive Program'],
      duration: '1 to 2 days',
      activities: [
        '- Aviation education',
        '- Hands-on activities',
        '- Flight experience',
      ],
      description: 'Perfect program for young aviation enthusiasts during school holidays.',
    },
    {
      name: 'Tours',
      tabs: ['Pilot Experience Tour', 'Aviation Study Tour', 'Wingman Aviation Discovery'],
      duration: '1 to 2 days',
      activities: [
        '- Pre-flight checks & cockpit familiarisation',
        '- Flight simulator session',
        '- Scenic flight (~1hr)',
      ],
      description: 'Combination of aviation and sight-seeing in one premium package. Perfect for people seeking lifestyle and aviation experience.',
    },
  ];

  const handleExperienceClick = (index) => {
    if (selectedExperience === index) {
      setSelectedExperience(null);
    } else {
      setSelectedExperience(index);
      setActiveTab(0);
    }
  };

  const handleClose = () => {
    setSelectedExperience(null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: '3rem', md: '4.5rem' },
          }}
        >
          Experiences
        </Typography>
      </Box>

      {/* Experiences Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleExperienceClick(index)}
                sx={{
                  backgroundColor: '#1A365D',
                  color: 'white',
                  py: 4,
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#0f2542',
                  },
                }}
              >
                {experience.name}
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Expanded Detail Panel - Full Width */}
        {selectedExperience !== null && (
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
            {/* Triangle pointing to button - Calculate position based on grid position */}
            <Box
              sx={{
                position: 'absolute',
                top: -15,
                left: (() => {
                  const col = selectedExperience % 2;
                  const row = Math.floor(selectedExperience / 2);
                  // For 2-column grid: left column = 25%, right column = 75%
                  // Adjust based on row position
                  const baseLeft = col === 0 ? '25%' : '75%';
                  return baseLeft;
                })(),
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

            {/* Tabs */}
            <Box sx={{ mb: 3 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    minWidth: 120,
                  },
                }}
              >
                {experiences[selectedExperience].tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    label={tab}
                    sx={{
                      backgroundColor: index === activeTab ? '#1A365D' : 'white',
                      color: index === activeTab ? 'white' : '#1A365D',
                      border: '1px solid #1A365D',
                      mr: 1,
                      '&:hover': {
                        backgroundColor: index === activeTab ? '#0f2542' : '#f5f5f5',
                      },
                    }}
                  />
                ))}
              </Tabs>
            </Box>

            {/* Detail Content */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    backgroundColor: '#e0e0e0',
                  }}
                >
                  <Box
                    component="img"
                    src={`https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&sig=${selectedExperience}`}
                    alt={experiences[selectedExperience].name}
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
                    {experiences[selectedExperience].tabs[activeTab]}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 1 }}>
                      Duration:
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {experiences[selectedExperience].duration}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 1 }}>
                      Activities:
                    </Typography>
                    {experiences[selectedExperience].activities.map((activity, idx) => (
                      <Typography key={idx} variant="body2" sx={{ mb: 0.5 }}>
                        {activity}
                      </Typography>
                    ))}
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                      {experiences[selectedExperience].description}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                      Cost: contact for quotation
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FFD700',
                        color: '#1A365D',
                        textTransform: 'none',
                        px: 4,
                        py: 1.5,
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

      <Footer />
    </Box>
  );
};

export default ExperiencesPage;

