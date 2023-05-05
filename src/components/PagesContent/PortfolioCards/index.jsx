/* eslint-disable react/prop-types */
import './index.scss';

const PortfolioCards = ({ projectsCollection }) => {
  return (
    <>
      {projectsCollection.map((project) => (
        <article key={project.id} className="card">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <h3 className="project-title">{project.title}</h3>
            <div className="poster">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <p className="description">{project.description}</p>
            <p className="skills">{project.skills.join(' | ')}</p>
          </a>
        </article>
      ))}
    </>
  );
};

export default PortfolioCards;
