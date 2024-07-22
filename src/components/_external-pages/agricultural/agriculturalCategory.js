import PropTypes from 'prop-types';
 
import { alpha, useTheme, styled } from '@mui/material';
import { Typography, Box, Grid, Paper,Container, } from '@mui/material';
//
import { varFadeIn, MotionInView , varFadeInUp} from '../../animate';

// ----------------------------------------------------------------------

const CATEGORIES = [
  {
    label: 'MBBS',
    icon: '/static/faqs/ic_delivery.svg',
    href: '#'
  },
  {
    label: 'BDS',
    icon: '/static/faqs/ic_delivery.svg',
    href: '#'
  },
  {
    label: 'BSMS',
    icon: '/static/faqs/ic_delivery.svg',
    href: '#'
  },
  {
    label: 'MD',
    icon: '/static/faqs/ic_delivery.svg',
    href: '#'
  },
  {
    label: 'BHMS',
    icon: '/static/faqs/ic_delivery.svg',
    href: '#'
  },
  {
    label: 'BUMS',
    icon: '/static/faqs/ic_delivery.svg',
    href: '#'
  },
  {
    label: 'MDS',
    icon: '/static/faqs/ic_delivery.svg',
    href: '#'
  },
  {
    label: 'BAMS',
    icon: '/static/faqs/ic_delivery.svg',
    href: '#'
  }
  
];

// ----------------------------------------------------------------------

CategoryCard.propTypes = {
  category: PropTypes.object
};

function CategoryCard({ category }) {
  const { label, icon } = category;

  return (
    <Paper
      sx={{
        px: 2,
        height: 60,
        display: 'flex',
        textAlign: 'left',
        alignItems: 'left',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: (theme) => theme.customShadows.z8
      }}
    >
      
      <Typography variant="subtitle2">{label}</Typography>
    </Paper>
  );
}
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
  
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));

export default function FaqsCategory() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <><RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">


          <Grid item xs={12} md={8} dir="ltr">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center'
              }}
            >

              <img
                alt={`wedo`}
                src={`static/home/Aim.svg`} />


            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Our Aim
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white'
                  }}
                >
                  Our esteemed team of educators brings a wealth of experience and expertise to the table, ensuring that each student receives the highest quality instruction tailored to their individual needs. Passionate about teaching and driven by a desire to see our students succeed, we go above and beyond to cultivate a supportive learning environment where every student can thrive.
                </Typography>
              </MotionInView>

            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>  
    <Container maxWidth="lg" sx={{ mt: 10, justifyContent: "center" }}>
      <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src="/static/about/vision.webp" alt="about-vision" style={{ width: "50%" }} />
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
    <Grid container spacing={3} sx={{ mb: 15 }}>
        {CATEGORIES.map((category) => (
          <Grid item xs={12} sm={12} md={12} key={category.label}>
            <MotionInView variants={varFadeIn}>
              <CategoryCard category={category} />
            </MotionInView>
          </Grid>
        ))}
      </Grid></>
  );
}
