import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import { useTheme, styled, alpha } from '@mui/material';
import { Box, Grid, Card, Stack, Button, Container, Typography } from '@mui/material';
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

const LICENSES = ['Engineering', 'Medical', 'Arts and Science','Polytechnic','Design and Creativity', 'Business Management','Agricultural Sciences','Emerging Tech'];
const ICONS =['static/home/eng.svg', 'static/home/medical.svg', 'static/home/arts.svg', 'static/home/polytech.svg', 'static/home/design.svg', 'static/home/business.svg', 'static/home/agri.svg', 'static/home/tech.svg']
const COMMON = ['The systematic application of scientific principles to design, create, and optimize solutions for practical problems in various fields such as technology, infrastructure, and industry',"The study, diagnosis, treatment, and prevention of diseases and disorders to promote health and well-being in individuals and communities.","Combines creative expression and critical inquiry to explore the human experience, advance knowledge, and foster innovation across disciplines."," Our personalized counseling supports students in navigating their academic and career endeavors effectively. take a right decisions","Train Academy specializes in design and creativity programs, providing personalized counseling for students to excel in diverse career paths.","Dive into the dynamic realm of business with FutureTech's Business Management programs. Develop the critical skills and expertise needs.",'Dive into Agricultural Sciences at FutureTech. Explore crop science, animal husbandry, security and environmental sustainability.'," Discover cutting-edge innovations in fields like artificial intelligence, blockchain, and biotechnology. Join us to make  impact in the world."]
const LINKS = ['/engineering','/medical','/Arts-and-Science','/Polytechnic','/Design-and-Creativity','/Business-Management','/Agricultural-Sciences','/Emerging-Tech']
const PLANS = [...Array(8)].map((_, index) => ({
  license: LICENSES[index],
  icons:ICONS[index],
  commons:COMMON[index],
  links:LINKS[index]

}));

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));


PlanCard.propTypes = {
  cardIndex: PropTypes.number,
  plan: PropTypes.shape({
    license: PropTypes.any,
    commons: PropTypes.arrayOf(PropTypes.string),
    icons: PropTypes.arrayOf(PropTypes.string),
    links:PropTypes.arrayOf(PropTypes.string),
  
  })
};

function PlanCard({ plan, cardIndex }) {
  const theme = useTheme();
  const { license, commons,  icons, links } = plan;

  const isLight = theme.palette.mode === 'light';

  return (
    <Card 
      sx={{
        maxHeight:"lg",
        p: 5,
        boxShadow: (theme) =>
          `0px 48px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.12)}`,
        ...(cardIndex === 1 && {
          boxShadow: (theme) =>
            `0px 48px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`
        })
      }}
    >
      <Stack spacing={5}>
        <div>
          <Typography variant="h4">{license}</Typography>
        </div>
          <Box component="img" src={icons} sx={{ width: 40, height: 40 }} />
        <Stack spacing={2.5}>
         
            <Stack  spacing={1.5} direction="row" alignItems="center">
              <Box component={Icon} icon={checkmarkFill} sx={{ color: 'primary.main', width: 20, height: 20 }} />
              <Typography variant="body2" textAlign="left">{commons}</Typography>
            </Stack>
         
      </Stack>


        <Button
          size="large"
          fullWidth
          variant={cardIndex === 1 ? 'contained' : 'outlined'}
          target="_blank"
          href={links}
        >
          Explore
        </Button>
      </Stack>
    </Card>
  );
}

export default function LandingPricingPlans() {
  return (
    <RootStyle>
       <Container maxWidth="lg" sx={{ mt: 10, mb:5 }}>
      <Box
        sx={{
          
          justifyContent:"center",
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          left:500,
          top:-100
          
        }}
      >
        <img src="/static/home/msme.png" alt="about-vision" width={200}/>

        </Box>

      <Grid container justifyContent="center" >
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
            Education is what remains after one has forgotten what one has learned in school.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ mb: 3 }}>
            After 12th Standard
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography
              sx={{
                color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'text.primary')
              }}
            >
            Explore our diverse range of courses designed for post-12th standard students.
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={5}>
          {PLANS.map((plan, index) => (
            <Grid key={plan.license} item xs={12} md={4}>
              <MotionInView variants={index === 1 ? varFadeInDown : varFadeInUp}>
                <PlanCard plan={plan} cardIndex={index} />
              </MotionInView>
            </Grid>
          ))}
        </Grid>

        <MotionInView variants={varFadeIn}>
          <Box sx={{ p: 5, mt: 10, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3">Still have questions?</Typography>
            </MotionInView>

            <MotionInView variants={varFadeInDown}>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Please describe your case to receive the most accurate advice.
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <Button
                size="large"
                variant="contained"
                href="mailto:futuretechgudiance@gmail.com?subject=[need Guidance] from students"
              >
                Contact us
              </Button>
            </MotionInView>
          </Box>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
