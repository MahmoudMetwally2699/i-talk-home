import { SEO } from '../components';
import {
  About,
  Contact,
  Experience,
  Layout,
  Projects,
  Skills,
  Homes
} from '../containers';
import { seoData } from '../utils/portfolio';
import type { NextPage } from 'next';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      <SEO url={''} {...seoData} />
      <Layout>
        <Homes />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
