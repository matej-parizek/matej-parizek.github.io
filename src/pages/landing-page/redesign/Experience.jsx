import { portfolioContent } from '../../../store/portfolioContent';

const Experience = () => (
  <section id="experience" className="section-shell" aria-labelledby="experience-heading">
    <div className="site-container section-grid">
      <header className="section-heading">
        <span className="section-number">01</span>
        <div><p>Experience</p><h2 id="experience-heading">Production work, in context.</h2><span>Roles where requirements, implementation, performance, and support meet.</span></div>
      </header>
      <div className="evidence-list">
        {portfolioContent.experience.map((role) => (
          <article className="evidence-row" key={`${role.company}-${role.role}`}>
            <div className="evidence-meta"><span>{role.period}</span><span>{role.location}</span></div>
            <div className="evidence-content">
              <p className="metadata-label">{role.company}</p>
              <h3>{role.role}</h3>
              <p className="evidence-summary">{role.summary}</p>
              <ul className="achievement-list">{role.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className="technology-line"><span>Technologies</span> {role.technologies.join(' · ')}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
