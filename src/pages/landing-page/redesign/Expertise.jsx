import { portfolioContent } from '../../../store/portfolioContent';

const Expertise = () => (
  <section id="expertise" className="section-shell" aria-labelledby="expertise-heading">
    <span id="skills" className="legacy-anchor" aria-hidden="true" />
    <div className="site-container section-grid">
      <header className="section-heading">
        <span className="section-number">03</span>
        <div><p>Technical expertise</p><h2 id="expertise-heading">Backend-first, delivery-aware.</h2><span>A practical toolkit drawn from production and academic work — no arbitrary proficiency scores.</span></div>
      </header>
      <div className="expertise-grid">
        {portfolioContent.expertise.map((group) => (
          <article className="expertise-group" key={group.category}>
            <h3>{group.category}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
