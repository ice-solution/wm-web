import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Item = ({ title, body, right }) => (
  <Card elevation={0} sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px', height: '100%' }}>
    <CardContent>
      <Typography variant="h6" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ whiteSpace: 'pre-line' }}>{body}</Typography>
      {right && (
        <Typography sx={{ mt: 1, fontWeight: 'bold', color: '#1A365D' }}>
          {right}
        </Typography>
      )}
    </CardContent>
  </Card>
);

const AirlinePrepPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box
        sx={{
          backgroundColor: '#1A365D',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Your Direct Path to an Airline Cockpit
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Specialized programs designed to equip aspiring pilots for airline cadet programs and direct entry positions.
            Learn from former airline pilots and industry experts.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Item
              title="Airline Pilot Preparation Course"
              body={`Modules:
- Aviation Knowledge (39 hrs)
- Pilot Mindset (6 hrs)
- Pilot Soft Skills (18 hrs)
- Multi-Crew Operations (6 hrs)
- Profile Development & CV Writing (9 hrs)
- Interview Skills & Mock Interview (12 hrs)`}
              right={`Cost: AUD 4000 + 10% GST\nDuration: 3 weeks (90 hrs)`}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Item
              title="IATA Aviation Fundamentals Diploma"
              body={`One compulsory module, plus three electives:
- Overview of the Air Transportation System
- Introduction to the Airline Industry
- Air Transport Fundamentals
- Airline Marketing
- Airline Customer Service`}
              right={`Cost: AUD 8000 + 10% GST`}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Item
              title="Pilot Aptitude Tests"
              body={`COMPASS Test – AUD 150 + 10% GST
AON CUT‑E Test – AUD 400 + 10% GST`}
              right={`Duration: ~2 hrs each`}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Item
              title="ICAO English Training & Assessment"
              body={`18 class hours over 3 days
Includes: LENGUAX TEAC, first CASA AELP test`}
              right={`Cost: AUD 1200 + 10% GST`}
            />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default AirlinePrepPage;



