// material
import { styled } from '@mui/material';
import {  Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ScholarshipHero,ScholarshipElements,ScholarshipList} from '../components/_external-pages/Scholarship';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Scholarship() {
  return (
    <RootStyle title="Scholarship | Minimal-UI">
      <ScholarshipHero />
      <ScholarshipElements />
      <Container sx={{ mt: 15, mb: 10 }}>
        <Typography variant="h3" sx={{ mb: 5 }}>
        Why Choose Us
        </Typography>
            <ScholarshipList />
      </Container>

    </RootStyle>
  );
}
