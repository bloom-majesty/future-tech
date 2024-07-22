// material
import { styled } from '@mui/material';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {MedicalHero, MedicalCategory, MedicalList, MedicalForm } from '../components/_external-pages/medical';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Medical() {
  return (
    <RootStyle title="Medical | Minimal-UI">
      <MedicalHero />
        
      <Container sx={{ mt: 15, mb: 10 }}>
        <MedicalCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <MedicalList />
          </Grid>
          <Grid item xs={12} md={6}>
            <MedicalForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}