// material
import { styled } from '@mui/material';
import {  Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { TutionHero, TutionList} from '../components/_external-pages/Tution';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Tution() {
  return (
    <RootStyle title="Tution">
      <TutionHero />
      <Container sx={{ mt: 15, mb: 10 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
      Experienced Teaching for 6th to 12th Standard Tuition
        </Typography>
        <Typography variant="p" sx={{ mb: 10 }}>
        At Future Tech Educational Consultancy, we understand the importance of quality education and personalized attention in shaping a student's academic journey. Our tuition services for students from 6th to 12th standard are designed to provide expert guidance and support in every subject.
        </Typography>
            <TutionList />
      </Container>

    </RootStyle>
  );
}
