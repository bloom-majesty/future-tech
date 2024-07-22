import { Box, Container, Typography, Grid } from '@mui/material';
import { varFadeInUp, varFadeIn, MotionInView } from '../../animate';


export default function AboutVision() {
  return (
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
  );
}
