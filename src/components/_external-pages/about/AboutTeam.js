import PropTypes from 'prop-types';

import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
// material

import { Box, Card, Button, Container, Typography, IconButton } from '@mui/material';

import {  varFadeInUp, MotionInView, varFadeInDown } from '../../animate';


// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string
  })
};

function MemberCard({ member }) {
  const { name, role, avatar } = member;
  return (
    <Card key={name} sx={{ p: 1, mx: 1.5 }}>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        {role}
      </Typography>
      <Box component="img" src={avatar} sx={{ width: '100%', borderRadius: 1.5 }} />
      <Box sx={{ mt: 2, mb: 1 }}>
        {[facebookFill, instagramFilled, linkedinFill, twitterFill].map((social, index) => (
          <IconButton key={index}>
            <Icon icon={social} width={20} height={20} />
          </IconButton>
        ))}
      </Box>
    </Card>
  );
}

export default function AboutTeam() {
  

  return (
    <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }}>
       <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
        Our Story
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mb: 10,
            mx: 'auto',
            maxWidth: 630,
            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
          }}
        >
         Future Tech Educational Consultancy offers a comprehensive range of services for career counseling and admission guidance. With partnerships among the top 10 colleges in Tamil Nadu and over 12 years of experience in college admissions and career guidance, we ensure you find the best college that meets your needs with an affordable fee structure. We offer scholarships for students who achieve high ranks and provide assistance with popular and rewarding courses such as MBBS, Siddha, Ayurveda, Unani, BDS, allied health sciences, and engineering, which are in high demand among aspirants in Tamil Nadu. Additionally, we support various other courses related to the science, commerce, and arts streams, helping students to achieve their educational and career goals.
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInDown}>
        <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
          Dream team
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Great team is the key
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mb: 10,
            mx: 'auto',
            maxWidth: 630,
            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
          }}
        >
         Teamwork is essential in education, fostering collaboration and communication among students and educators. In classrooms, it promotes a sense of community and shared responsibility. Group activities allow students to leverage each other's strengths and learn from diverse perspectives. Educators also benefit from teamwork through collaborative teaching strategies, sharing best practices, and supporting one another. This collective approach ensures well-rounded education and addresses individual student needs effectively. Beyond classrooms, teamwork involves parents, administrators, and the wider community working together. Such partnerships enhance educational outcomes and provide necessary resources. In essence, teamwork in education drives innovation, fosters resilience, and prepares individuals for future success.
        </Typography>
      </MotionInView>

   
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
        sx={{ mx: 'auto' }}
      >
        View all team members
      </Button>
    </Container>
  );
}
