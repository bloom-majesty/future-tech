import { Icon } from '@iconify/react';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// utils
import mockData from '../../../utils/mock-data';
//
import { varFadeIn, MotionInView } from '../../animate';

const MOCK_FAQS =  [
  {
  
  heading: "Expert Faculty", 
  detail:"Our team comprises experienced educators who specialize in various subjects and curricula. With years of teaching experience, they bring a deep understanding of academic concepts and effective teaching methodologies to ensure comprehensive learning."
  } ,
  {
    
    heading: "Customized Learning", 
    detail:"We believe in a personalized approach to education. Our tutors tailor their teaching methods to suit each student's learning style and pace, fostering a supportive environment where students can thrive academically."
    },
    {
    
      heading: "Holistic Development", 
      detail:"Beyond academics, our tuition services emphasize holistic development. We nurture critical thinking, problem-solving skills, and confidence in our students, preparing them not just for exams but for future challenges."
      },
      {
    
        heading: "Subject Expertise", 
        detail:"Whether it's mathematics, science, languages, or humanities, our tutors are equipped to provide in-depth knowledge and clarification of concepts, helping students achieve academic excellence."
        },
        {
    
          heading: "Progress Monitoring", 
          detail:" We regularly monitor student progress through assessments and feedback sessions, ensuring continuous improvement and targeted support where needed."
          } ,
       
];
export default function TutionList() {
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
