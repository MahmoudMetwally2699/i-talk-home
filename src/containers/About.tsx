import { getSectionAnimation } from '../animations';
import { HeroImage, Link, ListItem, Wrapper } from '../components';
import { getId } from '../utils/helper';
import { aboutSection, author } from '../utils/portfolio';
import { useEffect, useState } from 'react';


const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Mahmoud Ahmed, Welcome to my digital realm, where innovation meets excellence in the world of web development! I am a passionate MERN stack developer, and this is my playground of creativity and code.

🚀 Explore my universe of web applications, where I blend the power of MongoDB, Express.js, React.js, and Node.js to craft seamless, interactive, and dynamic experiences. Each project you'll encounter here is a testament to my dedication to pushing the boundaries of what's possible on the web.

🛠️ Behind every line of code is a story of problem-solving, user-centric design, and a commitment to delivering top-notch solutions. Whether it's crafting responsive front-end interfaces with React or architecting robust back-end systems with Node.js and Express, I thrive on challenges that require a fusion of technology and artistry.

🌐 My portfolio is a journey through the digital landscapes I've helped create. From e-commerce platforms that boost businesses to real-time chat applications that foster connections, I've had the privilege of transforming concepts into reality.

📜 While I'm a technology enthusiast at heart, I also understand the importance of clean code, scalability, and security. My projects are not just visually stunning; they are built to withstand the tests of time and traffic.

🔍 Dive into my work, explore the projects, and witness the impact of cutting-edge technologies in action. If you're ready to embark on a digital adventure together or collaborate on the next big thing, let's connect!

📧 Reach out to me through the contact page, and let's turn your web dreams into reality. Together, we can create digital experiences that leave a lasting impression.
          </p>
       
          <p>
            My main focus these days is learning mobile development and finding
            a decent job.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>

    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
