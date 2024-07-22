import { Icon } from '@iconify/react';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// utils
import mockData from '../../../utils/mock-data';
//
import { varFadeIn, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const MOCK_FAQS = [
  {
  
  heading: "Tailored Guidance", 
  detail:" We provide personalized advice that aligns your educational path with your long-term career goals. Our consultants work closely with you to understand your interests, strengths, and ambitions, ensuring every decision you make is informed and purposeful."
  } ,
  {
    
    heading: "Streamlined Admissions", 
    detail:" Navigating the college admissions process can be complex. We simplify this journey by offering guidance on selecting the right colleges and programs that best fit your academic achievements and career aspirations. From application strategies to interview preparation, we ensure you present your best self to prospective institutions."
    },
    {
    
      heading: "Career Path Exploration", 
      detail:"Choosing the right career path is crucial. Our consultancy helps you explore various career options, providing insights into industry trends, job prospects, and growth opportunities. We assist you in identifying career paths that align with your passions and skills, empowering you to make informed decisions about your future."
      },
      {
    
        heading: "Scholarship Support", 
        detail:"Financial constraints shouldn’t hinder your educational goals. We offer comprehensive scholarship assistance to help you access financial aid opportunities that can alleviate the cost of education. Our team guides you through the application process, maximizing your chances of securing scholarships that suit your academic achievements and financial needs."
        },
        {
    
          heading: "Strategic Planning", 
          detail:"Education is a journey. We develop customized plans that optimize your educational pathway, ensuring you make the most of every opportunity available to you. Whether it’s course selection, academic planning, or extracurricular activities, we help you create a roadmap for success that aligns with your long-term goals."
          } ,
          {
    
            heading: "Complimentary Consultation", 
            detail:"We understand that each student’s journey is unique. That’s why we offer an initial consultation at no cost to you. This session allows us to understand your specific needs, aspirations, and challenges. It’s a chance for you to ask questions, discuss your goals, and learn how our consultancy can support you throughout your educational journey."
            }
];


// ----------------------------------------------------------------------

export default function ConsultingList() {
  return (
    <MotionInView variants={varFadeIn}>
      {MOCK_FAQS.map((accordion) => (
        <Accordion key={accordion.value}>
          <AccordionSummary expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}>
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </MotionInView>
  );
}
