import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FlyingPage = () => {
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [showCockpitView, setShowCockpitView] = useState(false);
  const detailPanelRef = useRef(null);

  const aircraftData = [
    // Cessna 150 Variants
    {
      type: 'Cessna 150',
      id: 'VH-EAH',
      description: 'The Cessna 150 is a popular two-seat, single-engine light aircraft, ideal for flight training and recreational flying. Introduced in the late 1950s, its high-wing design offers excellent visibility and stability. It remains a reliable choice for both beginners and experienced pilots in general aviation.',
      suggestedTraining: 'First Solo, RPL, PPL',
      dualRate: 'AUD $440',
      soloRate: 'AUD $330',
      maxWeight: '1600 lbs',
      cruiseSpeed: '100 kts',
      engine: 'Continental O-200-A',
      avionics: 'Analog',
      seats: '2',
    },
    {
      type: 'Cessna 150',
      id: 'VH-UGU',
      description: 'The Cessna 150 is a popular two-seat, single-engine light aircraft, ideal for flight training and recreational flying. Introduced in the late 1950s, its high-wing design offers excellent visibility and stability. It remains a reliable choice for both beginners and experienced pilots in general aviation.',
      suggestedTraining: 'PPL, IFR Qualified',
      dualRate: 'AUD $460',
      soloRate: 'AUD $350',
      maxWeight: '1600 lbs',
      cruiseSpeed: '100 kts',
      engine: 'Continental O-200-A',
      avionics: 'Glass (Garmin G500TXi)',
      seats: '2',
    },
    // Cessna 172
    {
      type: 'Cessna 172',
      id: 'VH-NWW',
      description: 'The Cessna 172 is an ideal choice for flight training, renowned for its reliability, ease of handling, and excellent stability in the air. With its spacious cockpit and advanced avionics, students quickly gain confidence and experience essential flying skills. The 172\'s forgiving nature makes it perfect for beginners, while its performance capabilities support more advanced maneuvers as students progress.',
      suggestedTraining: 'PPL, CPL',
      dualRate: 'AUD $475',
      soloRate: 'AUD $365',
      maxWeight: '2300 lbs',
      cruiseSpeed: '110 knots',
      engine: 'Lycoming O-320-H2AD',
      avionics: 'Analog',
      seats: '4',
    },
    // Cessna 172 RG
    {
      type: 'Cessna 172 RG',
      id: 'VH-WRK',
      description: 'Elevate your flight training with the Cessna 172RG, featuring retractable gear and a constant-speed propeller for an enhanced flying experience. Cruising above 120 knots, this aircraft offers a perfect blend of performance and efficiency, making it ideal for Commercial Pilot License (CPL) training.',
      suggestedTraining: 'PPL, CPL',
      dualRate: 'AUD $500',
      soloRate: 'AUD $390',
      maxWeight: '2650 lbs',
      cruiseSpeed: '130 knots',
      engine: 'Lycoming O-320-F1A6',
      avionics: 'Analog',
      seats: '4',
    },
    // Cessna 210
    {
      type: 'Cessna 210',
      id: 'VH-FGW',
      description: 'The Cessna T210M Turbo Centurion can be utilized in the later stages of CPL training, offering an additional option for high-performance single-engine operations. It focuses on takeoff and landing techniques, cross-country navigation, emergency procedures, as well as managing high-altitude performance, equipping pilots with essential skills for advanced flying.',
      suggestedTraining: 'PPL, CPL, IFR',
      dualRate: 'AUD $650',
      soloRate: 'AUD $540',
      maxWeight: '3850 lbs',
      cruiseSpeed: '160 knots',
      engine: 'Continental TSIO-520-U',
      avionics: 'Analog',
      seats: '5',
    },
    // Piper 28 Warrior
    {
      type: 'Piper 28 Warrior',
      id: 'VH-FES',
      description: 'Known for its stable flight characteristics and straightforward controls, the Cherokee makes learning to fly an enjoyable experience for students of all levels. Its spacious cabin provides comfort during lessons, while its robust performance supports everything from basic maneuvers to cross-country flights.',
      suggestedTraining: 'First Solo, RPL, PPL',
      dualRate: 'AUD $470',
      soloRate: 'AUD $360',
      maxWeight: '2440 lbs',
      cruiseSpeed: '115 knots',
      engine: 'Lycoming O-320-D2A',
      avionics: 'Analog',
      seats: '4',
    },
    // Alpha 2160 Robin Variants
    {
      type: 'Alpha 2160 Robin',
      id: 'VH-JXY',
      description: 'An outstanding aircraft renowned for its aerobatic capabilities and panoramic cockpit view. Designed for both performance and precision, the Robin enables students to master advanced manoeuvres while enjoying an unparalleled perspective of the sky. Its responsive handling and agile characteristics make it an ideal choice for those seeking to enhance their flying skills in a dynamic environment.',
      suggestedTraining: 'First Solo, RPL, PPL',
      dualRate: 'AUD $490',
      soloRate: 'AUD $380',
      maxWeight: '1984 lbs',
      cruiseSpeed: '115 knots',
      engine: 'Lycoming O-320-D2A',
      avionics: 'Analog',
      seats: '2',
    },
    {
      type: 'Alpha 2160 Robin',
      id: 'VH-XXY',
      description: 'An outstanding aircraft renowned for its aerobatic capabilities and panoramic cockpit view. Designed for both performance and precision, the Robin enables students to master advanced manoeuvres while enjoying an unparalleled perspective of the sky. Its responsive handling and agile characteristics make it an ideal choice for those seeking to enhance their flying skills in a dynamic environment.',
      suggestedTraining: 'First Solo, RPL, PPL',
      dualRate: 'AUD $490',
      soloRate: 'AUD $380',
      maxWeight: '1984 lbs',
      cruiseSpeed: '115 knots',
      engine: 'Lycoming O-320-D2A',
      avionics: 'Analog',
      seats: '2',
    },
    // Beechcraft 58 Baron
    {
      type: 'Beechcraft 58 Baron',
      id: 'VH-MSS',
      description: 'The Baron BE58 is designed for multi-engine operations, facilitating training in instrument flying, engine-out procedures, and asymmetric thrust management. It incorporates advanced multi-engine navigation and instrument flight procedures, along with complex systems management, making it ideal for a range of flight scenarios.',
      suggestedTraining: 'CPL, MECIR',
      dualRate: 'AUD $850',
      soloRate: 'AUD $740',
      maxWeight: '5400 lbs',
      cruiseSpeed: '195 knots',
      engine: 'Continental IO-520',
      avionics: 'Analog',
      seats: '6',
    },
    // Beechcraft 76 Duchess
    {
      type: 'Beechcraft 76 Duchess',
      id: 'VH-KTB',
      description: 'Designed to provide a seamless transition into multi-engine flying, featuring a balanced design and dependable performance. The Duchess offers students the opportunity to develop essential skills in managing complex systems while enjoying a spacious and comfortable cockpit.',
      suggestedTraining: 'CPL, MECIR',
      dualRate: 'AUD $730',
      soloRate: 'AUD $620',
      maxWeight: '3900 lbs',
      cruiseSpeed: '130 knots',
      engine: 'LO-360-A1G6D',
      avionics: 'Analog',
      seats: '4',
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

  useEffect(() => {
    // 當選中飛機時，滾動到詳細面板
    if (selectedAircraft !== null && detailPanelRef.current) {
      detailPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedAircraft]);

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

      {/* Hero Introduction */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: '#1A365D',
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Our State-of-the-Art Training Fleet
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#666',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            At Wingman, we pride ourselves on a modern and meticulously maintained fleet of aircraft, perfectly suited for every stage of your pilot training journey. From your first solo flight to advanced multi-engine and instrument ratings, our diverse range ensures you gain comprehensive experience and confidence in the skies.
          </Typography>
        </Container>
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
                      position: 'relative',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    {/* Aircraft Type Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        backgroundColor: 'rgba(26, 54, 93, 0.9)',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {aircraft.type}
                    </Box>
                    {/* Aircraft ID Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        right: 16,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#1A365D',
                        px: 2,
                        py: 1,
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {aircraft.id}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Expanded Detail Panel - Full Width Below Grid */}
          {selectedAircraft !== null && (
            <Box
              ref={detailPanelRef}
              sx={{
                mt: 4,
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                p: 4,
                position: 'relative',
                width: '100%',
                minHeight: '400px',
                display: 'block',
              }}
            >
              {/* Triangle pointing to image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -15,
                  left: (() => {
                    const col = selectedAircraft % 2;
                    // For 2-column grid: left column = 25%, right column = 75%
                    return col === 0 ? '25%' : '75%';
                  })(),
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '15px solid transparent',
                  borderRight: '15px solid transparent',
                  borderBottom: '15px solid #f5f5f5',
                  zIndex: 1,
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
                      variant="h4"
                      sx={{
                        color: '#1A365D',
                        fontWeight: 'bold',
                        mb: 1,
                      }}
                    >
                      {aircraftData[selectedAircraft].type}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#1A365D',
                        fontWeight: '600',
                        mb: 3,
                      }}
                    >
                      {aircraftData[selectedAircraft].id}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        lineHeight: 1.8,
                        mb: 3,
                      }}
                    >
                      {aircraftData[selectedAircraft].description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 2 }}>
                        Suggested Flight Training:
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#333', mb: 3 }}>
                        {aircraftData[selectedAircraft].suggestedTraining}
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 1 }}>
                        Rates:
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                        Dual training Hourly rate:
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 2 }}>
                        {aircraftData[selectedAircraft].dualRate}
                      </Typography>

                      <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
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
                        MTOW: {aircraftData[selectedAircraft].maxWeight}
                      </Typography>
                      <Typography variant="body2">
                        Cruise Speed: {aircraftData[selectedAircraft].cruiseSpeed}
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ color: '#1A365D', fontWeight: 'bold', mb: 1 }}>
                        Build:
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

