// material
import { styled } from '@mui/material';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {EmergingHero, EmergingCategory, EmergingList, EmergingForm } from '../components/_external-pages/emerging';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Emerging() {
  return (
    <RootStyle title="Emerging | Minimal-UI">
      <EmergingHero />
        
      <Container sx={{ mt: 15, mb: 10 }}>
        <EmergingCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <EmergingList />
          </Grid>
          <Grid item xs={12} md={6}>
            <EmergingForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}