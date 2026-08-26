const Footer = () => (
  <footer className="site-footer">
    <div className="site-container footer-inner">
      <div><strong>Matej Parizek</strong><p>Backend Software Engineer · Prague</p></div>
      <nav aria-label="Footer navigation"><a href="#top">Top</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
      <p>© {new Date().getFullYear()} · React / Vite</p>
    </div>
  </footer>
);

export default Footer;
