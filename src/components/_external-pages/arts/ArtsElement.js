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





export default function ArtsElements() {
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
                    src={`static/home/Aim.svg`}
                  />
               
             
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
  );
}
