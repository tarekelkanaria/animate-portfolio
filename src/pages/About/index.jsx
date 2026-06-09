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
           A Passionate Software Developer with 4+ years of experience in building dynamic web applications with a responsive design. 
          </p>
          <p>
            Graduated from the Information Technology Institute (ITI) and currently working as a freelancer. 
          </p>
          <p>
            My great ambition is to provide people with creative techniques that could make their lives easier.
          </p>
         
        </div>
        <AboutCube />
      </article>
      <Loader type="pacman" />
    </>
  );
};

export default About;
