// material
import { styled } from '@mui/material';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {BusinessHero, BusinessCategory, BusinessList, BusinessForm } from '../components/_external-pages/business';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Business() {
  return (
    <RootStyle title="Business | Minimal-UI">
      <BusinessHero />
        
      <Container sx={{ mt: 15, mb: 10 }}>
        <BusinessCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <BusinessList />
          </Grid>
          <Grid item xs={12} md={6}>
            <BusinessForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}