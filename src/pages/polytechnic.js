import { styled } from '@mui/material';
import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import {PolytechnicHero, PolytechnicCategory, PolytechnicList, PolytechnicForm } from '../components/_external-pages/polytechnic';

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

export default function Polytechnic() {
  return (
    <RootStyle title="Polytechnic | Minimal-UI">
      <PolytechnicHero />
        
      <Container sx={{ mt: 15, mb: 10 }}>
        <PolytechnicCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <PolytechnicList />
          </Grid>
          <Grid item xs={12} md={6}>
            <PolytechnicForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}