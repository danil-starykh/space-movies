import React from 'react'
import { Box, Container, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  return (
    <Box 
      sx={{
        position: "relative",
        left: 0,
        bottom: 0,
        right: 0,
        bgcolor: "secondary.main",
        py: "10px"
      }} 
      component="footer"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: '5px'
          }}
        >
          <Link href="https://github.com/oldman-star">
            <GitHubIcon color="primary" />
          </Link>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography fontWeight={400} fontSize="0.9rem" color="primary">
            Copyright ©2022. Danil Starykh
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer