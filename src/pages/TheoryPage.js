import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, IconButton, Card, CardContent, Divider } from '@mui/material';
import { ChevronLeft, ChevronRight, CheckCircle } from '@mui/icons-material';
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

  const theoryCourses = [
    {
      title: 'Recreational Pilot Licence (RPL) Ground Theory',
      description: "This is your first step into the exciting world of aviation. Designed for aspiring pilots who want to obtain their RPL, this course delivers the essential theoretical knowledge required to confidently and safely operate light aircraft within Australian airspace. Whether your goal is to fly for leisure or to lay the foundation for a professional flying career, this course provides the skills, understanding, and confidence for your flight training.",
      included: [
        'All course content delivered in class or online',
        '60 class hours over 2 weeks',
        'Unlimited class resits',
        'One-on-one consultation/tutorial (2 hours)',
        'Additional notes, worksheets and material',
        'Practice questions and exams',
        'Continuous tutoring support',
        'First RPL theory exam',
        'Exam review and feedback',
        'AUD100 reward for scoring 95% or above',
      ],
      cost: 'AUD 1300 + 10% GST',
    },
    {
      title: 'Private Pilot Licence (PPL) Ground Theory',
      description: "This course is designed for aspiring pilots who want to take their aviation knowledge beyond recreational flying. This comprehensive program provides the essential theoretical knowledge required to pass your PPL theory exam. Whether you're working toward a career in aviation or pursuing the freedom of private flying, this course equips you with the understanding and confidence to fly further, higher, and safer.",
      included: [
        'All course content delivered in class or online',
        '120 class hours over 3 weeks',
        'Unlimited class resits',
        'One-on-one consultation/tutorial (2 hours)',
        'Additional notes, worksheets and material',
        'Practice questions and exams',
        'Continuous tutoring support',
        'First PPL theory exam',
        'Exam review and feedback',
        'AUD100 reward for scoring 95% or above',
      ],
      cost: 'AUD 1500 + 10% GST',
    },
    {
      title: 'Commercial Pilot Licence (CPL) Ground Theory',
      description: "This course delivers the advanced theoretical understanding required to qualify for a CPL. Whether your goal is to become an airline pilot, charter pilot, or flight instructor, this course equips you with the knowledge, skills, and confidence to take your aviation career to new heights.",
      included: [
        'All course content delivered in class or online',
        '210 class hours over 7 weeks',
        'Unlimited class resits',
        'One-on-one consultation/tutorial (3 hours)',
        'Additional notes, worksheets and material',
        'Practice questions and exams',
        'Continuous tutoring support',
        'First CPL theory exam per subject',
        'Exam review and feedback',
        'AUD100 reward for scoring 95% or above per subject',
      ],
      cost: 'AUD 5600 + 10% GST',
    },
    {
      title: 'Air Transport Pilot Licence (ATPL) Ground Theory',
      subtitle: 'Aircraft Systems, Flight Planning, Performance, Navigation',
      description: "Overcome the most challenging theory subjects in aviation and remove the road block to your career. This course is delivered by experienced airline pilots and instructors, ensuring that you receive not only the necessary theoretical knowledge but also real-world insight drawn from active flight deck environments.",
      included: [
        'All course content delivered in class or online',
        '240 class hours over 8 weeks',
        'Unlimited class resits',
        'One-on-one consultation/tutorial (3 hours)',
        'Additional notes, worksheets and material',
        'Practice questions and exams',
        'Continuous tutoring support',
        'First ATPL theory exam per subject',
        'Exam review and feedback',
        'AUD100 reward for scoring 95% or above per subject',
      ],
      cost: 'AUD 4700 + 10% GST',
    },
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
          Taught by experienced instructors
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: '#1A365D',
            fontWeight: 'bold',
            fontSize: { xs: '3rem', md: '4.5rem' },
            mb: 3,
          }}
        >
          Master the Skies from the Ground Up
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#1A365D',
            fontSize: '1.1rem',
            maxWidth: '800px',
            textAlign: 'center',
            px: 2,
            lineHeight: 1.8,
          }}
        >
          Our comprehensive ground school theory courses provide the essential knowledge and understanding required for each stage of your pilot training. Taught by experienced instructors, our programs are designed to ensure you excel in your theory exams and build a strong foundation for your flying career.
        </Typography>
      </Box>

      {/* Theory Courses Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {theoryCourses.map((course, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 12px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: '#1A365D',
                      fontWeight: 'bold',
                      mb: 1,
                      fontSize: { xs: '1.75rem', md: '2rem' },
                    }}
                  >
                    {course.title}
                  </Typography>
                  {course.subtitle && (
                    <Typography
                      variant="h3"
                      sx={{
                        color: '#666',
                        fontWeight: '600',
                        mb: 2,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                      }}
                    >
                      {course.subtitle}
                    </Typography>
                  )}
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666',
                      mb: 3,
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                    }}
                  >
                    {course.description}
                  </Typography>
                  
                  <Divider sx={{ my: 3 }} />

                  <Typography
                    variant="h3"
                    sx={{
                      color: '#1A365D',
                      fontWeight: 'bold',
                      mb: 2,
                      fontSize: '1.5rem',
                    }}
                  >
                    What's Included:
                  </Typography>
                  <Grid container spacing={1} sx={{ mb: 3 }}>
                    {course.included.map((item, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                          <CheckCircle
                            sx={{
                              color: '#1A365D',
                              fontSize: '1.25rem',
                              mr: 1.5,
                              mt: 0.25,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#666',
                              lineHeight: 1.6,
                              fontSize: '1rem',
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          color: '#1A365D',
                          fontWeight: 'bold',
                          fontSize: '1.5rem',
                          mb: 0.5,
                        }}
                      >
                        Cost:
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          color: '#1A365D',
                          fontWeight: '600',
                          fontSize: '1.25rem',
                        }}
                      >
                        {course.cost}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#1A365D',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#0f2542',
                        },
                      }}
                    >
                      了解更多
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
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


