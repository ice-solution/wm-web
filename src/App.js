import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LaunchPage from './pages/LaunchPage';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import FlyingPage from './pages/FlyingPage';
import TheoryPage from './pages/TheoryPage';
import ExperiencesPage from './pages/ExperiencesPage';
import PilotPathwayPage from './pages/PilotPathwayPage';
import FacilitiesPage from './pages/FacilitiesPage';
import AirlinePrepPage from './pages/AirlinePrepPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A365D',
    },
    secondary: {
      main: '#FF6B35',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LaunchPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/flying" element={<FlyingPage />} />
          <Route path="/theory" element={<TheoryPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/pilot-pathway" element={<PilotPathwayPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/airline-prep" element={<AirlinePrepPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

