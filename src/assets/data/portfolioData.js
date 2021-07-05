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
    image: projectImages.hikeTrackerApp,
    imageAlt: 'Screen shot of hike tracker web application',
    link: 'https://gwu-hiker-tracker.herokuapp.com/',
    source: 'https://github.com/spfave/hike-tracker',
  },
  {
    title: 'PWA Expense Tracker',
    notes: [
      'Full stack PWA to log financial transactions with visual graphics to provide a user awareness of their current budget',
      'Single page app served as static HTML from server with associated JavaScript to handle UI changes. Server runs on Express.js with connection to Mongo database hosted on Mongo Atlas.',
      'PWA offline functionality enabled using browser indexedBD for temporary local storage of logged transaction. On network connection local data is sent to server to update database.',
    ],
    image: projectImages.expenseTrackerApp,
    imageAlt: 'Screen shot of expense tracker pwa',
    link: 'https://spf-expense-tracker.herokuapp.com/',
    source: 'https://github.com/spfave/pwa-expense-tracker',
  },
  {
    title: 'Fitness Log and Dashboard',
    notes: [
      'Full stack web app to log workouts and exercises with a stat tracking dashboard of the last 7 workouts',
      'App views served as static HTML from server with associated JavaScript to handle UI changes. Server runs on Express.js with connection to Mongo database hosted on Mongo Atlas, using mongoose ODM for workout data CRUD operations.',
    ],
    image: projectImages.fitnessDashboard,
    imageAlt: 'Screen shot of fitness web app dashboard',
    link: 'https://spf-fitness-tracker.herokuapp.com/',
    source: 'https://github.com/spfave/fitness-tracker',
  },
  {
    title: 'Tech Blog CMS',
    notes: [
      'Full stack web application following the model view controller design paradigm',
      'Express, Node.js, MySQL, and Sequelize (ORM) for server and database functionality',
      'Handlebars.js for server-side HTML view templates and rendering',
      'Styled using themed Bootstrap file from bootswatch.com',
    ],
    image: projectImages.techBlogApp,
    imageAlt: 'Screen shot of tech blog application',
    link: 'https://spf-tech-blog.herokuapp.com/',
    source: 'https://github.com/spfave/blog-site-mvc',
  },
  {
    title: 'City Search Weather Dashboard',
    notes: [
      'Consumes OpenWeather API to create a city weather search dashboard',
      'API consumption performed using asynchronous JS using promises and async/await',
      'Recent searches saved to browser local storage for data persistence and retrieval',
      'Bootstrap CSS framework for styling, custom theme from bootswatch.com',
    ],
    image: projectImages.weatherDashboard,
    imageAlt: 'Screen shot of weather dashboard search app',
    link: 'https://spfave.github.io/web-weather-dashboard/',
    source: 'https://github.com/spfave/web-weather-dashboard',
  },
  {
    title: 'Food and Fitness Tracker',
    notes: [
      'Single page client-side web app to allow app users to record completed exercises and meals prepared',
      'Foundation CSS framework for front end styling in combination with select custom CSS and JavaScript for dynamic front end UI changes',
      'Consumes wger Workout Manager and Edamam recipe REST APIs for external fitness and recipe data',
      'Saves selected completed exercises and meal recipes to browser local storage for data persistence',
    ],
    image: projectImages.foodFitnessHome,
    imageAlt: 'Screen shot of ',
    link: 'https://spfave.github.io/fitness-exercise-food-selector/',
    source: 'https://github.com/spfave/fitness-exercise-food-selector',
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
