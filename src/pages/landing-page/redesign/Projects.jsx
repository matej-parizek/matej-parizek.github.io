import { portfolioContent } from '../../../store/portfolioContent';

const Projects = () => (
  <section id="projects" className="section-shell section-projects" aria-labelledby="projects-heading">
    <div className="site-container section-grid">
      <header className="section-heading">
        <span className="section-number">02</span>
        <div><p>Selected projects</p><h2 id="projects-heading">Backend systems with real constraints.</h2><span>Concise project evidence adapted from the English CV.</span></div>
      </header>
      <div className="project-list">
        {portfolioContent.projects.map((project, index) => (
          <article className="project-row" key={project.name}>
            <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p className="metadata-label">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <details className="project-disclosure">
                <summary>Contribution and stack</summary>
                <p>{project.contribution}</p>
                <p className="technology-line"><span>Technologies</span> {project.technologies.join(' · ')}</p>
              </details>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
