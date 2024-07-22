import { alpha, useTheme, styled } from '@mui/material';
import { Box, Grid, Container, Typography } from '@mui/material';

import { varFadeInUp, MotionInView } from '../../animate';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
      : 'none'
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





export default function ScholarshipElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
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
                    src={`static/consulting/consulting1.png`}
                    style={{width:"50%"}}
                  />
               
             
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                Application Support
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white'
                  }}
                >
               Our team provides hands-on assistance in preparing and refining scholarship applications. We guide you through the application process, ensuring all necessary documents are organized and submitted on time. Each application is meticulously crafted to highlight your academic achievements, extracurricular activities, and personal strengths effectively.
                </Typography>
              </MotionInView>

            </ContentStyle>
          </Grid>
        </Grid>
        <Grid container spacing={5} justifyContent="center" marginTop={10}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                Financial Aid Advice
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white'
                  }}
                >
                Beyond scholarships, we offer comprehensive advice on financial aid options including grants, loans, and other forms of assistance. Our consultants help you navigate the complexities of financial aid to finance your education affordably.
                </Typography>
              </MotionInView>

            </ContentStyle>
          </Grid>

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
                    src={`static/consulting/consulting2.png`}
                    style={{width:"50%"}}
                  />
               
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
