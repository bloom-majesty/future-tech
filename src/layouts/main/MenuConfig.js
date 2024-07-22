import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import roundGrain from '@iconify/icons-ic/round-grain';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
// routes
import {  PATH_DOCS, PATH_PAGE } from '../../routes/paths';

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: 'About us',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  },
  {
    title: 'Scholarship',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: PATH_PAGE.scholarship
  },
  {
    title: 'Tution',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: PATH_PAGE.tution
  },
  {
    title: 'Consulting',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: PATH_PAGE.consulting
  },
  {
    title: 'Courses',
    path: '/pages',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'List of Course',
        items: [
          { title: 'Engineering', path: PATH_PAGE.engineering },
          { title: 'Medical', path: PATH_PAGE.medical },
          { title: 'Arts and Science', path: PATH_PAGE.Arts },
          { title: 'Polytechnic', path: PATH_PAGE.Polytechnic },
          { title: 'Design and Creativity', path: PATH_PAGE.Design },
          { title: 'Business Management', path: PATH_PAGE.Business },
          { title: 'Agricultural Sciences', path: PATH_PAGE.Agricultural },
          { title: 'Emerging Tech', path: PATH_PAGE.Emerging },
         
          
        ]
      },
     
      
      {
        subheader: 'Contact',
        items: [{ title: 'Dashboard', path: PATH_PAGE.contact }]
      }
    ]
  },
  {
    title: 'Our Team',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_DOCS
  }
];

export default menuConfig;
