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
  facebook: 'https://i-talk-teamforever.vercel.app/',
  github: 'https://github.com/I-Talk',
  linkedin: 'https://www.linkedin.com/in/I-Talk/',
};

export const author = {
  name: 'I-Talk',
  email: 'I-Talk@gmail.com',
};

export const seoData = {
  title: 'I-Talk',
  description:
    'I-Talk .',
  author: author.name,
  image:
    '/ITalk.png',
  keywords: [
    'I-Talk',
    'I-Talk',
    '@I-Talk',
    'I-Talk',
    'Portfolio',
    'I-Talk Portfolio ',
    'I-Talk Portfolio',
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
    { name: 'Our Services', url: '/#skills' },
    { name: 'Join Us', url: '/#contact' },
  ],

};

// * Hero Section

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'About I-Talk ',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies That used to develope I-Talk:',
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
  img: '/ITalk.png',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'Our Services',
  skills: [
    {
      id: getId(),
      title: 'communication platform',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        "I-Talk: Your destination for seamless online communication.",
        "Empowering connections, one chat at a time.",
        "Join I-Talk: Where conversations flourish."
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'Chatting', icon: 'mdi:message' },
        { name: 'Voice Chat', icon: 'mdi:phone' },
        { name: 'Video Chat', icon: 'mdi:video' },
        { name: 'Emojis', icon: 'mdi:emoticon' },
        { name: 'Custom Avatars', icon: 'mdi:image' },
        { name: 'Community Forums', icon: 'mdi:forum' },
      
        { name: 'Moderation Tools', icon: 'mdi:shield-account' }
      ],
    },
    {
      id: getId(),
      title: 'RELIABLE TECH FOR STAYING CLOSE',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Low-latency voice and video feels like you’re in the same room',
    
      ],
      softwareSkills: [
        { name: 'Chatting', icon: 'mdi:message' },
        { name: 'Voice Chat', icon: 'mdi:phone' },
        { name: 'Video Chat', icon: 'mdi:video' },
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
      repo: 'https://github.com/I-Talk/Coffee-Nearby',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoFmweJrh9BMjZtmiQ07-GucfRsa6zv-9zA&usqp=CAU',
      year: 2023,
      tags: ['NextJs', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'Car Rent',
      url: 'https://car-rent-a112rur9h-I-Talk.vercel.app/',
      repo: 'https://github.com/I-Talk/Car-Rent',
      img: 'https://repository-images.githubusercontent.com/651933437/bee99934-f791-4ed2-a7b0-3178a44ed75c',
      year: 2023,
      tags: ['Nextjs', 'Tailwind'],
    },

    {
      id: getId(),
      name: 'E-shop',
      url: 'https://mern-eshopmbedobe.herokuapp.com/',
      repo: 'https://github.com/I-Talk/Eshop',
      img: 'https://camo.githubusercontent.com/491cf2f2143c70c0f5228d4ea8a4ebfa40a6e059b82aaf94bbe1fd9266d7c250/68747470733a2f2f692e696d6775722e636f6d2f613759466f38362e706e67',
      year: 2022,
      tags: ['Nextjs', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'dashboard',
      url: 'https://izo-hazel.vercel.app/',
      repo: 'https://github.com/I-Talk/IZO-',
      img: 'https://s3.amazonaws.com/creativetim_bucket/products/343/original/nextjs-material-dashboard-pro.jpg?1646999435',
      year: 2023,
      tags: ['Nextjs', 'Tailwind'],
    },
    
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'Join Us',
  subtitle: "what's next",
  paragraphs: [
    "Ready to join the conversation? At I-Talk, we're building more than just a platform—we're creating a community. Whether you're looking to connect with friends, collaborate with colleagues, or simply explore new interests, there's a place for you here. Join us today and experience the power of meaningful connections, vibrant discussions, and endless possibilities. Let's talk!",
  ],
  link: `https://i-talk-teamforever.vercel.app/`,
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
  title: 'Design & Built by I-Talk',
  link: 'https://github.com/I-Talk',
};
