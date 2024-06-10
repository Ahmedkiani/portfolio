import {
  frontend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  nyeusi,
  master,
  events,
  aws
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Node JS',
    icon: frontend,
  },
  {
    title: 'React JS',
    icon: frontend,
  },
  {
    title: 'Javascript',
    icon: javascript,
  },
  {
    title: 'Typescript',
    icon: typescript,
  },
  {
    title: 'Vue JS',
    icon: frontend,
  },
  {
    title: 'AWS',
    icon: aws,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  {
    title: 'CI/CD',
    icon: frontend,
  },
];

const technologies = [
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Context Api',
    icon: redux,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Node JS Developer',
    company_name: 'SixLogics',
    icon: reactjs,
    iconBg: '#333333',
    date: 'Apr 2021 - August 2022',
  },
  {
    title: 'Node JS Developer',
    company_name: 'Techverx',
    icon: reactjs,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'PlanetCricket',
    description:
      `Planet Cricket is your one-stop resource for the latest Cricket odds, History, breaking news.
      Write REST Api for this application in Laravel & Vue Js in MVC based architecture and Bug Fix.`,
    tags: [
      {
        name: 'Laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'VueJs',
        color: 'green-text-gradient',
      },
      {
        name: 'Vue-x',
        color: 'pink-text-gradient',
      },
    ],
    image: master,
    repo: '',
    demo: 'https://www.planetcricket.com/',
  },
  {
    id: 'project-2',
    name: 'Leebral',
    description:
      `Basically this app is a booking appointment with a legal, physical or
      teleconsultation expert in 1 click, that is based on Node js and Vuejs. Designed and implemented
      features and endpoints on core modules for improved data management.`,
    tags: [
      {
        name: 'Node JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Vue Js',
        color: 'green-text-gradient',
      },
      {
        name: 'Node JS reanimatted',
        color: 'pink-text-gradient',
      },
    ],
    image: master,
    repo: ' ',
    demo: 'https://leeberal.fr/',
  },
  {
    id: 'project-3',
    name: 'Risk Comply Management',
    description: `its autonomous system that have
    multiple user system in which Containerized application using Docker for better scalability and
    deployment. Implemented Redis and RabbitMQ queues for efficient handling of data processing.
    Developed custom authentication to ensure secure access to the application. Designed and
    implemented filters and endpoints on core modules for improved data management. Configured
    Winston logger for effective debugging and error logging. Created reports by utilizing MongoDB
    aggregations to extract data and produce meaningful insights.`,
    tags: [
      {
        name: 'Nest JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux saga',
        color: 'green-text-gradient',
      },
      {
        name: 'NextJS web view',
        color: 'pink-text-gradient',
      },
    ],
    image: master,
    repo: '',
    demo: 'https://riskcomply.online/auth/login',
  },
  {
    id: 'project-4',
    name: 'Elevate',
    description:
      `This is Basically Mobile Application Which is based on React Native and Nest Js.This is a platform
      which gives the ability to Athlete to book the session with Coach , there ‘s video session chat between
      Athlete and Coach. Although there’s few restriction on Athlete .I implemented new features.`,
    tags: [
      {
        name: 'Nest JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux saga',
        color: 'green-text-gradient',
      },
      {
        name: 'Next JS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Stripe',
        color: 'pink-text-gradient',
      },
      {
        name: 'Twillio',
        color: 'pink-text-gradient',
      },
    ],
    image: master,
    repo: '',
    demo: 'https://pro5-plus.vercel.app/',
  },
 
];

export { services, technologies, experiences, projects };
