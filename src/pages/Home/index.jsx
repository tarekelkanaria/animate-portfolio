import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/UI/AnimatedLetters';
import Logo from '../../components/UI/logo';
import logoTitle from '../../assets/images/logo-k.png';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
              strArr={'anaria'.split('')}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={'web developer.'.split('')}
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
      <Loader type="pacman" />
    </>
  );
};

export default Home;
