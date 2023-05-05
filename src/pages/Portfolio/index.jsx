import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import portfolioData from '../../data/portfolio.json';
import AnimatedLetters from '../../components/UI/AnimatedLetters';
import PortfolioCards from '../../components/PagesContent/PortfolioCards';
import './index.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="container portfolio-page">
        <h1 className="title">
          <AnimatedLetters
            strArr={'Portfolio'.split('')}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <div>
          <h2 className="sub-title">Projects</h2>
          <div className="projects-container">
            <PortfolioCards projectsCollection={portfolioData.projects} />
          </div>
        </div>
        <div>
          <h2 className="sub-title">Previous Works</h2>
          <div className="projects-container">
            <PortfolioCards
              projectsCollection={portfolioData['previous-works']}
            />
          </div>
        </div>
      </section>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
