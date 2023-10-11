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
            A Passionate Front-End Developer who recently assembled projects in
            web development and web apps. graduated from Information Technology
            Institute (ITI) and got certified by Udacity in web development.
          </p>
          <p>
            currently working as a Front-End Developer at POS Mission.
            experienced in building dynamic web applications with a responsive
            design across all devices. skilled in HTML5, CSS3, JavaScript, Sass,
            Bootstrap, TailwindCSS, React, Vue.js and Next.js. and have basic
            knowledge of python, C++, git, SQL, Figma, and UI/UX design.
          </p>
          <p>
            Prior to that, I worked as a lawyer which allowed me to gain a
            problem-solving mindset. Interested in mastering programming and
            eager to learn more in that changeable field.
          </p>
          <p>
            My great ambition is to provide people with creative techniques that
            could make their life easier.
          </p>
        </div>
        <AboutCube />
      </article>
      <Loader type="pacman" />
    </>
  );
};

export default About;
