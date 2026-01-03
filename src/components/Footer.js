import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1A365D',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo and Contact Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box
                component="img"
                src="/logo_write.jpg"
                alt="Wingman Academies Logo"
                sx={{
                  height: { xs: 50, md: 60 },
                  width: 'auto',
                }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Hong Kong Office
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                +852 67689394
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                info@wingmanacademies.com
              </Typography>
              <Typography variant="body2">
                HKPC Building, 78 Taat Chee Ave, Kowloon Tong
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Australia (Perth) Office
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                +61 405339439
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                perth@wingmanacademies.com
              </Typography>
              <Typography variant="body2">
                Building A, 631 Karel Avenue, Jandakot, WA6164, Australia
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <WhatsAppIcon sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
              <InstagramIcon sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
              <FacebookIcon sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
            </Box>
          </Grid>

          {/* Programs Column 1 */}
          <Grid item xs={12} md={4}>
            <Box
              component={Link}
              to="/home"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Hong Kong Cadet
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/home"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Singapore Cadet
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/home"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Airline Pilot Preparation (HK)
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/home"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Airline Pilot Preparation (SG)
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/home"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                ICAO English Test Workshop
              </Typography>
            </Box>
          </Grid>

          {/* Programs Column 2 */}
          <Grid item xs={12} md={4}>
            <Box
              component={Link}
              to="/experiences"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                School Holiday Programme
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/experiences"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Aviation Discovery Tour
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/home"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Wingman IATA Programme
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/home"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                STEAM Programmes
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/theory"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Our Facilities
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/home"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Our Credentials
              </Typography>
            </Box>
            <Box
              component={Link}
              to="/flying"
              sx={{ textDecoration: 'none', color: 'white', display: 'block', mb: 1 }}
            >
              <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Fleet
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

