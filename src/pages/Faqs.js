// material
import { styled } from '@mui/material';
import {  Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { FaqsHero, FaqsCategory, FaqsList} from '../components/_external-pages/faqs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Faqs() {
  return (
    <RootStyle title="Faqs | Minimal-UI">
      <FaqsHero />
      <Container sx={{ mt: 15, mb: 10 }}>
        <FaqsCategory />
        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>
            <FaqsList />
      </Container>

    </RootStyle>
  );
}