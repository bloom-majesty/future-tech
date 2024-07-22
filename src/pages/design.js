// material
import { styled } from '@mui/material';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {DesignHero, DesignCategory, DesignList, DesignForm } from '../components/_external-pages/design';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Design() {
  return (
    <RootStyle title="Design | Minimal-UI">
      <DesignHero />
        
      <Container sx={{ mt: 15, mb: 10 }}>
        <DesignCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <DesignList />
          </Grid>
          <Grid item xs={12} md={6}>
            <DesignForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}