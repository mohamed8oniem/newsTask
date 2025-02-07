import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

export const MainLayout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">News Aggregator</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Outlet />
      </Container>

      <Box
        component="footer"
        sx={{
          py: 2,
          mt: 4,
          bgcolor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} News Aggregator
        </Typography>
      </Box>
    </>
  );
};
