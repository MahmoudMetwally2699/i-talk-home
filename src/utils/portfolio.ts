import { StringKeyValueType } from '../types';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  facebook: 'https://www.facebook.com/vatsalsinghkv',
  github: 'https://github.com/MahmoudMetwally2699',
  linkedin: 'https://www.linkedin.com/in/mahmoud-ahmed-b14672218/',
};

export const author = {
  name: 'Mahmoud Ahmed',
  email: 'mahmetwally99@gmail.com',
};

export const seoData = {
  title: 'Mahmoud Ahmed | MERN Stack Developer',
  description:
    'Mahmoud ahmed is a full stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    '/favicon.jpg',
  keywords: [
    'Mahmoud Ahmed',
    'Mahmoud Ahmed',
    '@Mahmoud Ahmed',
    'Mahmoud Ahmed',
    'Portfolio',
    'Mahmoud Ahmed Portfolio ',
    'Mahmoud Ahmed Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'Home', url: '/#Home' },
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'About me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'NextJs',
      'TailwindCSS',
      'ExpressJs',
      'TypeScript',
      'NodeJs',
      'reactjs',
      'Mongodb',
      'CSS Animations',
    ],
  },
  img: '/mahmoud-ahmed.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'My Craft: Elevating Digital Realms',
  skills: [
    {
      id: getId(),
      title: 'Mern stack developer',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    {
      id: getId(),
      title: 'Designer',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
      ],
    },
 
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "My Journey: Shaping the Digital Landscape",
  experiences: [
    {
      company: 'Freelancer',
      role: 'MERN Stack developer',
      started: 'august 2019',
      upto: 'present',
      tasks: [
        'Database Design and Management (MongoDB)',
        'Server-Side Development (Node.js and Express.js',
        'Front-End Development (React.js & Nextjs)',
        'Data Fetching and Manipulation',
        'Testing and Debugging',
        'Performance Optimization',
      ],
    },
   
    
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'My Portfolio Showcase: Crafting Digital Marvels',
  projects: [
    {
      id: getId(),
      name: 'Coffee Nearby',
      url: 'https://coffee-connoisseur-b.vercel.app/',
      repo: 'https://github.com/MahmoudMetwally2699/Coffee-Nearby',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoFmweJrh9BMjZtmiQ07-GucfRsa6zv-9zA&usqp=CAU',
      year: 2023,
      tags: ['NextJs', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'Car Rent',
      url: 'https://car-rent-a112rur9h-mahmoudmetwally2699.vercel.app/',
      repo: 'https://github.com/MahmoudMetwally2699/Car-Rent',
      img: 'https://repository-images.githubusercontent.com/651933437/bee99934-f791-4ed2-a7b0-3178a44ed75c',
      year: 2023,
      tags: ['Nextjs', 'Tailwind'],
    },

    {
      id: getId(),
      name: 'E-shop',
      url: 'https://mern-eshopmbedobe.herokuapp.com/',
      repo: 'https://github.com/MahmoudMetwally2699/Eshop',
      img: 'https://camo.githubusercontent.com/491cf2f2143c70c0f5228d4ea8a4ebfa40a6e059b82aaf94bbe1fd9266d7c250/68747470733a2f2f692e696d6775722e636f6d2f613759466f38362e706e67',
      year: 2022,
      tags: ['Nextjs', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'dashboard',
      url: 'https://izo-hazel.vercel.app/',
      repo: 'https://github.com/MahmoudMetwally2699/IZO-',
      img: 'https://s3.amazonaws.com/creativetim_bucket/products/343/original/nextjs-material-dashboard-pro.jpg?1646999435',
      year: 2023,
      tags: ['Nextjs', 'Tailwind'],
    },
    
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
   
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Mahmoud Ahmed',
  link: 'https://github.com/MahmoudMetwally2699',
};
