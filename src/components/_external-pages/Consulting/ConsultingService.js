import PropTypes from 'prop-types';

import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
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

export default function ConsultingService() {
  

  return (
    <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }}>
       <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
        Discover Our Exclusive Admission Counseling Services
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
         More than 2000 applicants subscribe to our premium admission counseling service every year. All the participants are served by eminent experts who are high profiled professional service with better experience and knowledge. We offer high-quality service and we promise to provide each applicant with both unbiased and comprehensive service. Specialized with one-to-one and tailored service for counseling as well as course guidance. We provide centralized delivery to ensure uniform quality of information to be served to each and every applicant. We have a highly sophisticated online system to ensure the real-time tracking of applications. We also offer offered applicants to receive admission offers from top-rated universities and colleges abroad.
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
        Our Fine Deliverables
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
        Our expert team admission counselor helps individual applicants in the selection of the right kind of college or university as per their needs and demands. We offer application assistance and counseling where the admission Counselor assists the applicants in filling the application as well as reviewing them. We provide unique guidance for University interviews for applicants. Our expert visa counselors assist in processing the visa documents and conduct mock interview sessions to offer clear insights about the entire process.
        </Typography>
      </MotionInView>
    </Container>
  );
}
