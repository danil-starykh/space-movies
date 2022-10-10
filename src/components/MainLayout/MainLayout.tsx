import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Box, Container } from '@mui/material';
import ScrollToTop from 'react-scroll-to-top';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Colors } from '../../styles/Styles';

interface MainLayoutProps {
      children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ bgcolor: "secondary.dark", minHeight: "100vh" }}>
      <Header/>
        <Box flex={1} sx={{ py: '16px', minHeight: 'calc(100vh - 170px)' }}>
          <Container >
            { children }
          </Container>
        </Box>
      <Footer/>
      <ScrollToTop 
        smooth 
        style={{ background: Colors.primary }} 
        top={400}
        component={<NavigationIcon sx={{ color: Colors.card_bg_color }}/>}
      />
    </Box>
  )
}

export default MainLayout;