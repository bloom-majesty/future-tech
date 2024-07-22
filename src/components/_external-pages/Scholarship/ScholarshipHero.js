import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
// material
import { styled } from '@mui/material';
import { Box, alpha, Container, OutlinedInput, InputAdornment } from '@mui/material';
//
import { varFadeInUp, TextAnimate, MotionInView, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundImage: 'url(/static/overlay.svg), url(/static/consulting/consultingHero.webp)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10)
  }
}));



// ----------------------------------------------------------------------

export default function FScholarshipHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="How" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          <Box sx={{ display: 'inline', color: 'common.white' }}>
            <TextAnimate text="can" sx={{ mr: 2 }} />
            <TextAnimate text="we" sx={{ mr: 2 }} />
            <TextAnimate text="Support Your" sx={{ mr: 2 }} />
            <TextAnimate text="Journey?" />
          </Box>
         
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
