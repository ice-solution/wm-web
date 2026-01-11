import React from 'react';
import { Box, Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Section = ({ title, children }) => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h4" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 2 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const PilotPathwayPage = () => {
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
            Your Journey to Becoming a Pilot
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Wingman offers a structured and comprehensive range of pilot training programs designed to guide you
            from your very first flight to a professional aviation career. Explore our pathways and find the right course
            to achieve your dreams.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Section title="Program Overviews">
          {[
            {
              title: 'Trial Introductory Flight (TIF)',
              content:
                'Hands-on Experience with a qualified instructor. Scenic Perth routes. Flexible scheduling. Perfect for first-timers.',
            },
            {
              title: 'Recreational Pilot Licence (RPL) Package',
              content:
                'Solid foundation in theory and practical skills for local flying. Includes flying hours, simulator, briefs, first exam and test.',
            },
            {
              title: 'Private Pilot Licence (PPL) Package',
              content:
                'Operate aircraft independently with navigation exercises and solo cross-country flights. Includes exams, tests and fees.',
            },
            {
              title: 'Commercial Pilot Licence (CPL) Package',
              content:
                'Transition to a professional aviation career with extensive hours, theory courses and flight tests included.',
            },
            {
              title: 'Multi-Engine Command Instrument Rating (MECIR)',
              content:
                'Qualifies you to operate multi‑engine aircraft under IFR. Includes BE76, BE58 hours, simulator and tests.',
            },
            {
              title: 'Flight Instructor Rating (FIR)',
              content:
                'Gain rewarding experience teaching others to fly and build PIC hours. Includes flying, briefings and first test.',
            },
            {
              title: 'Multi Crew Cooperation (MCC)',
              content:
                'Prepare for airline multi‑crew operations with B737 / A320 simulator sessions, theory and in‑house exam.',
            },
          ].map((item, idx) => (
            <Accordion key={idx} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold', color: '#1A365D' }}>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Section>
      </Container>

      <Footer />
    </Box>
  );
};

export default PilotPathwayPage;



