import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { 
  MeetingRoom, 
  LocalCafe, 
  Assignment, 
  School, 
  Weekend,
  Flight
} from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FacilitiesPage = () => {
  const campusFeatures = [
    {
      icon: <Weekend sx={{ fontSize: 40, color: '#1A365D' }} />,
      title: '24/7 Student Lounge',
      description: 'A comfortable space for relaxation and studies, available around the clock.',
    },
    {
      icon: <MeetingRoom sx={{ fontSize: 40, color: '#1A365D' }} />,
      title: 'Auditorium',
      description: 'Equipped for presentations and workshops with industry experts.',
    },
    {
      icon: <LocalCafe sx={{ fontSize: 40, color: '#1A365D' }} />,
      title: 'Pantry',
      description: 'A welcoming area for students to recharge and connect.',
    },
    {
      icon: <Assignment sx={{ fontSize: 40, color: '#1A365D' }} />,
      title: 'Examination Room',
      description: 'A quiet environment for in-house assessments.',
    },
    {
      icon: <School sx={{ fontSize: 40, color: '#1A365D' }} />,
      title: 'Training Rooms',
      description: 'Versatile spaces for hands-on learning and instruction.',
    },
    {
      icon: <Flight sx={{ fontSize: 40, color: '#1A365D' }} />,
      title: 'And much more!',
      description: 'Additional facilities to support your aviation training journey.',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '500px',
          backgroundImage: 'linear-gradient(rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.7)), url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textAlign: 'center',
              mb: 3,
            }}
          >
            World-Class Training Facilities in Perth
          </Typography>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 3,
              color: '#333',
            }}
          >
            Based at Jandakot Airport in Perth, just 15 minutes from Perth International Airport, our flying school is a perfect choice for aspiring pilots. Since the 1990s, Jandakot Airport in Perth has served as a major training base for organizations such as Singapore Airlines, Virgin Australia, Scoot, and China Southern Airlines, training thousands of airline pilots for the Asia-Pacific region.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#333',
            }}
          >
            Wingman features a <strong>9,000 square feet campus</strong> and an <strong>18,000 square feet apron and hangar</strong>, ensuring an optimal training environment. With direct airside access, students benefit from seamless flight operations and hands-on learning. Our state-of-the-art facilities establish us as a premier choice for aspiring pilots.
          </Typography>
        </Container>
      </Box>

      {/* Campus Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          sx={{
            color: '#1A365D',
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '1.8rem', md: '2.5rem' },
          }}
        >
          The Wingman Campus Experience
        </Typography>
        
        {/* Campus Image */}
        <Box
          sx={{
            width: '100%',
            height: '400px',
            borderRadius: '12px',
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mb: 4,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        />

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            mb: 4,
            color: '#333',
          }}
        >
          Our campus is strategically located in the Jandakot Airport area, providing seamless access to the airport apron. This prime location enables our trainees to immerse themselves in the aviation environment, enriching their practical learning experience. Additionally, being adjacent to a 24/7 supermarket makes our campus a convenient choice for studying and obtaining supplies.
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: '#1A365D',
            fontWeight: 'bold',
            mb: 4,
            fontSize: { xs: '1.5rem', md: '1.8rem' },
          }}
        >
          Campus Features
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {campusFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 4,
                  backgroundColor: '#f5f5f5',
                  borderRadius: '12px',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1A365D',
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Hangar Section */}
      <Box sx={{ backgroundColor: '#1A365D', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                }}
              >
                Dedicated Hangar & Direct Airside Access
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Wingman owns and operates a dedicated airside gate, hangar, and apron area, providing direct access to the airside of Jandakot Airport. This strategic setup ensures seamless operations between Wingman's campus, the apron, and the runway.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                The facility features a dedicated briefing room for pre-flight discussions and a student pre-flight area, complete with pantry and washroom amenities.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                This strategic combination of immediate apron access and professional facilities positions our hangar as an optimal environment for efficient flight training and preparation.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  height: '350px',
                  borderRadius: '12px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Statistics */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              color: '#1A365D',
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
            }}
          >
            Our Facilities at a Glance
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#1A365D',
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', md: '3rem' },
                  }}
                >
                  9,000
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  sq ft Campus
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#1A365D',
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', md: '3rem' },
                  }}
                >
                  18,000
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  sq ft Apron & Hangar
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#1A365D',
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', md: '3rem' },
                  }}
                >
                  24/7
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  Student Access
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#1A365D',
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', md: '3rem' },
                  }}
                >
                  Direct
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  Airside Access
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default FacilitiesPage;


