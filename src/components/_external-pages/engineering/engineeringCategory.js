import PropTypes from 'prop-types';
// material
import { Typography, Box, Grid, Paper } from '@mui/material';
//
import { varFadeIn, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const CATEGORIES = [
  
{
  label: 'B. Tech Food Technology',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Computer Science Technology',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Computer Science Design Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'B. Tech Information Technology',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Chemical Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Computer Science Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Aerospace Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Pharmaceutical Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Biomedical Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Agriculture Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Cyber Forensic & Information Security',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Medical Electronics Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Biomedical Instrumentation Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Robotics & Automation Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Biotechnology in Genetic Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Cyber Security Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Artificial Intelligence and Data Science',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Mechatronics Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Aeronautical Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Civil Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Mechanical Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'B. Tech Fashion Technology',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Automobile Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Petrochemical Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'B. Tech Bio-Technology',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Biotechnology in Regenerative Medicine',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Biotechnology in Cancer Genetics',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Nanotechnology Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Computer Science & Business Systems',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Computer Science With Big Data Analytics',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Electrical and Electronics Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Electrical and Communicate Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Electrical and Instrumental Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Printing Technology',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Marine Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Textile and Ceramics Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Artificial Intelligence & Machine Learning',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Fire and Safety Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'BE Polymer Technology',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Computer Science With Black Chain Technology',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Computer Science in Cloud Computing',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Computer Science in Computer Networking',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Computer Science in Gaming Technology',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Computer Science with Software Engineering',
  icon: '/static/faqs/ic_delivery.svg',
  href: '#'
},
{
  label: 'Computer Science in Artificial Intelligence & Machine Learning',
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

export default function FaqsCategory() {
  return (
    <Grid container spacing={3} sx={{ mb: 15 }}>
      {CATEGORIES.map((category) => (
        <Grid item xs={12} sm={12} md={12} key={category.label}>
          <MotionInView variants={varFadeIn}>
            <CategoryCard category={category} />
          </MotionInView>
        </Grid>
      ))}
    </Grid>
  );
}
