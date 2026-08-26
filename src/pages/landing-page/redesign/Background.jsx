import { portfolioContent } from '../../../store/portfolioContent';

const Background = () => {
  const { education, languages } = portfolioContent;

  return (
    <section id="background" className="section-shell section-background" aria-labelledby="background-heading">
      <span id="about" className="legacy-anchor" aria-hidden="true" />
      <div className="site-container section-grid">
        <header className="section-heading">
          <span className="section-number">04</span>
          <div><p>Background</p><h2 id="background-heading">Education and professional context.</h2></div>
        </header>
        <div className="background-grid">
          <article><p className="metadata-label">Education</p><h3>{education.degree}</h3><p>{education.school}</p>{education.periods.map((period) => <span key={period}>{period}</span>)}</article>
          <article><p className="metadata-label">Languages</p><p className="language-summary">I speak {languages.join(' and ')}.</p></article>
          <article><p className="metadata-label">Working style</p><p>Enterprise development, production troubleshooting, direct customer collaboration, requirements clarification, and clear technical documentation.</p></article>
        </div>
      </div>
    </section>
  );
};

export default Background;
