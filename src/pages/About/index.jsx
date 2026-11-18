import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/UI/AnimatedLetters';
import AboutCube from '../../components/PagesContent/AboutCube';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <article className="container about-page">
        <div className="text-zone">
          <h1 className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArr={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Software Engineer with 4+ years of experience building scalable,
            responsive web applications and backend systems.
          </p>
          <p>
            Graduate of the Information Technology Institute (ITI) and
            participant in the Digital Pioneers Initiative (Digilians).
          </p>
          <p>
            Proficient across the full software development lifecycle using
            TypeScript, JavaScript, React, Next.js, Node.js, Express,
            SQL,NoSQL,and Cloud solutions.
          </p>
          <p>
            Track record of delivering high-performance user interfaces,
            RESTful/GraphQL APIs, and automated predictive decision engines.
          </p>
        </div>
        <AboutCube />
      </article>
      <Loader type="pacman" />
    </>
  );
};

export default About;
