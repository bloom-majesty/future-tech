// material
import { styled } from '@mui/material';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {AgricultureHero, AgricultureCategory, AgricultureList, AgricultureForm } from '../components/_external-pages/agricultural';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Agriculture() {
  return (
    <RootStyle title="Agriculture | Minimal-UI">
      <AgricultureHero />
        
      <Container sx={{ mt: 15, mb: 10 }}>
        <AgricultureCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <AgricultureList />
          </Grid>
          <Grid item xs={12} md={6}>
            <AgricultureForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}