// material
import { styled } from '@mui/material';
import {  Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ConsultingHero,ConsultingService, ConsultingList} from '../components/_external-pages/Consulting';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Consulting() {
  return (
    <RootStyle title="Consulting | Minimal-UI">
      <ConsultingHero />
      <Container sx={{ mt: 15, mb: 10 }}>
        <ConsultingService/>
        <Typography variant="h3" sx={{ mb: 3 }}>
        How Can We Help You?
        </Typography>
        <Typography variant="p" sx={{ mb: 10 }}>
        At Future Tech Educational Consultancy, our consulting services are designed to assist you in navigating your educational and career goals effectively. Here’s how we can support you:
        </Typography>
            <ConsultingList />
      </Container>

    </RootStyle>
  );
}
