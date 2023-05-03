import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/UI/AnimatedLetters';
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import './index.scss';

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
            Institute (ITI) and got certified by Udacity in web development.{' '}
          </p>
          <p>
            currently working as a freelancer at Upwork Platform. experienced in
            building dynamic web applications with a responsive design across
            all devices. skilled in HTML5, CSS3, JavaScript, Sass, Bootstrap,
            and React. and have basic knowledge of python, C++, git, SQL, Figma,
            and UI/UX design.{' '}
          </p>
          <p>
            Prior to that, I worked as a lawyer which allowed me to gain a
            problem-solving mindset. Interested in mastering programming and
            eager to learn more in that changeable field.{' '}
          </p>
          <p>
            My great ambition is to provide people with creative techniques that
            could make their life easier. looking for a role as a Front-End
            Developer.
          </p>
        </div>
        <div className="cube-container">
          <div className="cube-spinner">
            <div className="face-1">
              <FaSass color="#dd0031" />
            </div>
            <div className="face-2">
              <FaHtml5 color="#f06529" />
            </div>
            <div className="face-3">
              <FaCss3 color="#28a4d9" />
            </div>
            <div className="face-4">
              <FaReact color="#5ed4f4" />
            </div>
            <div className="face-5">
              <FaJsSquare color="#efd81d" />
            </div>
            <div className="face-6">
              <FaGitAlt color="#ec4d28" />
            </div>
          </div>
        </div>
      </article>
      <Loader type="pacman" />
    </>
  );
};

export default About;
