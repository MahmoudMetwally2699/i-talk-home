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
          I-Talk is more than just a communication platform—it's a hub for connection, collaboration, and community-building. Born out of a passion for bringing people together, I-Talk is designed to provide users with a seamless and enriching chatting and calling experience.

Our Mission

At I-Talk, our mission is simple: to empower individuals to communicate and connect in meaningful ways. Whether you're sharing ideas with friends, collaborating on projects with colleagues, or building communities with like-minded individuals, we believe that every conversation has the power to inspire, educate, and unite.

What Sets Us Apart

What sets I-Talk apart is our unwavering commitment to user satisfaction and innovation. We strive to create an environment where users feel heard, valued, and supported every step of the way. From our intuitive interface to our cutting-edge features, we're constantly evolving to meet the needs of our diverse and dynamic community.

Our Values

Transparency, inclusivity, and integrity are at the heart of everything we do at I-Talk. We believe in fostering a culture of openness and respect, where everyone feels welcome and appreciated. By upholding these values, we aim to create a safe and supportive space where individuals can express themselves authentically and connect with others on a deeper level.

Join the Conversation

Whether you're a seasoned communicator or new to the world of online chat platforms, there's a place for you on I-Talk. Join thousands of users from around the world who have made I-Talk their go-to destination for all things communication. Start your journey today and discover why conversations are better when they happen on I-Talk.
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
