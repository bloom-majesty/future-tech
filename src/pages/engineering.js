// material
import { styled } from '@mui/material';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {EngineeringHero, EngineeringCategory, EngineeringList, EngineeringForm, EngineeringElement, EngineeringVision } from '../components/_external-pages/engineering';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Engineering() {
  return (
    <RootStyle title="Engineering | Minimal-UI">
      <EngineeringHero />
      <EngineeringElement />
        <EngineeringVision />
       
      <Container sx={{ mt: 15, mb: 10 }}>
        <EngineeringCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <EngineeringList />
          </Grid>
          <Grid item xs={12} md={6}>
            <EngineeringForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}