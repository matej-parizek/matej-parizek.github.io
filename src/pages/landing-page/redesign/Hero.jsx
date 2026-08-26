import { portfolioContent } from '../../../store/portfolioContent';

const Hero = () => {
  const { profile } = portfolioContent;

  return (
    <section id="top" className="hero-section" aria-labelledby="hero-heading">
      <span id="hero" className="legacy-anchor" aria-hidden="true" />
      <div className="site-container hero-grid">
        <div className="hero-main">
          <p className="eyebrow">Prague · Backend engineering · Cloud &amp; integrations</p>
          <h1 id="hero-heading">I design and build backend systems for real-world operations.</h1>
          <p className="hero-intro">{profile.summary} {profile.detail}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="text-action primary" href="#contact">Discuss a project <span aria-hidden="true">↘</span></a>
            <a className="text-action" href="#projects">View selected work <span aria-hidden="true">↓</span></a>
            <a className="text-action" href={profile.resume} target="_blank" rel="noreferrer">English CV <span aria-hidden="true">↗</span></a>
            <a className="text-action quiet" href={profile.resumeCz} target="_blank" rel="noreferrer">České CV <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside className="hero-rail" aria-label="Professional summary">
          <div><span>Current role</span><strong>Programmer Analyst</strong><p>CGI · December 2025 — Present</p></div>
          <div><span>Engineering focus</span><p>Backend platforms · REST APIs · Microservices</p></div>
          <div><span>Delivery context</span><p>Cloud integrations · Event-driven systems · Production support</p></div>
        </aside>
      </div>
      <div className="site-container hero-facts">
        <div><strong>2023</strong><span>Commercial backend development since</span></div>
        <div><strong>3 roles</strong><span>CGI and T-Mobile Czech Republic</span></div>
        <div><strong>Czech &amp; English</strong><span>Languages I speak</span></div>
      </div>
    </section>
  );
};

export default Hero;
