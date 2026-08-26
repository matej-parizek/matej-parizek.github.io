import { useEffect, useState } from 'react';
import useDarkMode from '../../utils/useDarkMode';
import Background from './redesign/Background';
import Contact from './redesign/Contact';
import Experience from './redesign/Experience';
import Expertise from './redesign/Expertise';
import Footer from './redesign/Footer';
import Hero from './redesign/Hero';
import Projects from './redesign/Projects';

const navigation = [
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Expertise', '#expertise'],
  ['Background', '#background'],
  ['Contact', '#contact'],
];

const PortfolioPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    document.title = 'Matej Parizek — Backend Software Engineer';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Backend Software Engineer working with Java, Kotlin, Spring Boot, REST APIs, SQL, Redis, Microsoft Azure, and event-driven systems.',
    );
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const focusMain = () => document.getElementById('main-content')?.focus();

  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main-content" onClick={focusMain}>Skip to content</a>
      <header className="site-header">
        <div className="site-container header-inner">
          <a className="identity" href="#top" onClick={closeMenu} aria-label="Matej Parizek, home">
            <span className="identity-mark" aria-hidden="true">MP</span>
            <span><strong>Matej Parizek</strong><small>Backend Software Engineer</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <button className="theme-control" type="button" onClick={toggle}>{isDark ? 'Light' : 'Dark'} mode</button>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Experience />
        <Projects />
        <Expertise />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
