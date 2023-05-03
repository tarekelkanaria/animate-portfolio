import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../components/UI/AnimatedLetters';
import Logo from './logo';
import logoTitle from '../../assets/images/logo-k.png';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 'n', 'a', 'r', 'i', 'a'];
  const jobArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <article className="container home-page">
      <div className="text-zone">
        <h1 className="title">
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I&apos;</span>
          <span className={`${letterClass} _14`}>m</span>
          <span className={`${letterClass} _15 name-start`}>E</span>
          <span className={`${letterClass} _16`}>l</span>
          <img src={logoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArr={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArr={jobArray}
            idx={21}
          />
        </h1>
        <h2>Front End Developer | JavaScript Developer</h2>
        <Link to="/contact" className="flat-btn">
          Contact Me
        </Link>
      </div>
      <Logo />
    </article>
  );
};

export default Home;
