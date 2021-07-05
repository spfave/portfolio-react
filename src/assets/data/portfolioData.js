import { projectImages } from '../img/projects';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const pages = ['About', 'Portfolio', 'Contact', 'Skills'];

export const projects = [
  {
    title: 'Hike and Trail Tracker',
    notes: [
      'Full stack web app for hikers to record completed hikes and document trail information for fellow hikers',
      'Collaborative designed and built full stack web application following the model view controller design paradigm and Agile software development life cycle',
      'App uses server-side HTML rendering with handlebars.js for the front end views, Node.js with express.js for back end routes and controller logic, and MySQL with Sequelize ORM for data persistence and CRUD operations',
      'User authentication and route protection implemented using passport.js using a local strategy',
    ],
    image: projectImages.imgHikeTrackerApp,
    imageAlt: 'Screen shot of hike tracker web application',
    link: 'https://gwu-hiker-tracker.herokuapp.com/',
    source: 'https://github.com/spfave/hike-tracker',
  },
  {
    title: 'Tech Blog CMS',
    notes: [
      'Full stack web application following the model view controller design paradigm',
      'Express, Node.js, MySQL, and Sequelize (ORM) for server and database functionality',
      'Handlebars.js for server-side HTML view templates and rendering',
      'Styled using themed Bootstrap file from bootswatch.com',
    ],
    image: projectImages.imgTechBlogApp,
    imageAlt: 'Screen shot of tech blog application',
    link: 'https://spf-tech-blog.herokuapp.com/',
    source: 'https://github.com/spfave/blog-site-mvc',
  },
];

export const iconLinks = [
  {
    Icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/sebastian-fav%C3%A8-8610ba7b/',
  },
  { Icon: FaGithub, link: 'https://github.com/spfave' },
  { Icon: FaEnvelope, link: 'mailto:sebpfave@email.com' },
];
