import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import portfolioData from '../../data/portfolio.json';
import AnimatedLetters from '../../components/UI/AnimatedLetters';
import PortfolioCards from '../../components/PagesContent/PortfolioCards';
import './index.scss';

// eslint-disable-next-line react/prop-types
const Portfolio = ({ certificates }) => {
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
            strArr={
              certificates ? 'Certificates'.split('') : 'Portfolio'.split('')
            }
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <div>
          {!certificates && <h2 className="sub-title">Projects</h2>}
          <div className="projects-container">
            <PortfolioCards
              projectsCollection={
                certificates
                  ? portfolioData.certificates
                  : portfolioData.projects
              }
            />
          </div>
        </div>
        {!certificates && (
          <div>
            <h2 className="sub-title">Previous Works</h2>
            <div className="projects-container">
              <PortfolioCards
                projectsCollection={portfolioData['previous-works']}
              />
            </div>
          </div>
        )}
      </section>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
