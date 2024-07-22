import { Icon } from '@iconify/react';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// utils
import mockData from '../../../utils/mock-data';
//
import { varFadeIn, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const MOCK_FAQS =  [
  {
  
  heading: "Expertise and Experience", 
  detail:"With over 12 years of experience in educational consultancy, we have a proven track record of helping students secure scholarships and achieve their academic goals."
  } ,
  {
    
    heading: "Success Stories", 
    detail:"Many of our clients have successfully secured prestigious scholarships with our guidance. We are proud of our clients' achievements and strive to replicate their success stories."
    },
    {
    
      heading: "Client-Centric Approach", 
      detail:"Your success is our priority. We provide personalized, one-on-one support tailored to your unique needs and aspirations. Our consultants are dedicated to helping you achieve your scholarship and educational goals."
      },
      {
    
        heading: "Scholarship Support", 
        detail:"Financial constraints shouldn’t hinder your educational goals. We offer comprehensive scholarship assistance to help you access financial aid opportunities that can alleviate the cost of education. Our team guides you through the application process, maximizing your chances of securing scholarships that suit your academic achievements and financial needs."
        },
        {
    
          heading: "Continuous Support", 
          detail:"Our commitment to your success doesn't end with the application process. We offer ongoing support throughout your educational journey, ensuring you have the resources and guidance you need to thrive academically."
          } ,
       
];

export default function ScholarshipList() {
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
