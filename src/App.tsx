import { useEffect, useState } from 'react'
import { content, type Language } from './content'
import './styles.css'

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const copy = content[language]
  const focus = language === 'en'
    ? {
        label: 'Professional focus',
        items: ['Civil Engineering', 'Project Management', 'Health & Safety', 'Digital Process Improvement'],
        context: 'Cyprus · Public-sector perspective · Responsible systems',
        nav: 'Primary navigation',
        details: 'Explore the case study',
      }
    : {
        label: 'Επαγγελματική εστίαση',
        items: ['Πολιτική Μηχανική', 'Διαχείριση Έργων', 'Ασφάλεια και Υγεία', 'Ψηφιακή Βελτίωση Διαδικασιών'],
        context: 'Κύπρος · Οπτική δημόσιου τομέα · Υπεύθυνα συστήματα',
        nav: 'Κύρια πλοήγηση',
        details: 'Προβολή μελέτης περίπτωσης',
      }

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'en'
      ? 'Markellos Professional Apps'
      : 'Markellos Professional Apps — Επαγγελματικό Portfolio'
  }, [language])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'el' : 'en'))
  }

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skipLink}</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={copy.brand}>
            <span className="brand-mark" aria-hidden="true">MM</span>
            <span>{copy.brand}</span>
          </a>

          <nav className="main-nav" aria-label={focus.nav}>
            <a href="#profile">{copy.nav.profile}</a>
            <a href="#expertise">{copy.nav.expertise}</a>
            <a href="#projects">{copy.nav.projects}</a>
            <a href="#approach">{copy.nav.approach}</a>
            <a href="#contact">{copy.nav.contact}</a>
          </nav>

          <button className="language-button" type="button" onClick={toggleLanguage}>
            {copy.languageName}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1>{copy.hero.title}</h1>
              <p className="hero-lead">{copy.hero.lead}</p>
              <div className="button-row">
                <a className="button button-primary" href="#projects">{copy.hero.primaryAction}</a>
                <a className="button button-secondary" href="#profile">{copy.hero.secondaryAction}</a>
              </div>
            </div>

            <aside className="hero-panel" aria-label={focus.label}>
              <span className="panel-label">{focus.label}</span>
              {focus.items.map((item) => <strong key={item}>{item}</strong>)}
              <div className="panel-rule" />
              <span>{focus.context}</span>
            </aside>
          </div>
        </section>

        <section className="section" id="profile">
          <div className="container split-layout">
            <div>
              <p className="eyebrow">{copy.profile.eyebrow}</p>
              <h2>{copy.profile.title}</h2>
            </div>
            <div className="profile-copy">
              {copy.profile.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="facts-grid">
                {copy.profile.facts.map((fact) => (
                  <div className="fact" key={fact.label}>
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="expertise">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{copy.expertise.eyebrow}</p>
              <h2>{copy.expertise.title}</h2>
              <p>{copy.expertise.intro}</p>
            </div>
            <div className="expertise-grid">
              {copy.expertise.items.map((item, index) => (
                <article className="expertise-card" key={item.title}>
                  <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading section-heading-wide">
              <p className="eyebrow">{copy.projects.eyebrow}</p>
              <h2>{copy.projects.title}</h2>
              <p>{copy.projects.intro}</p>
            </div>

            <div className="projects-list">
              {copy.projects.items.map((project, index) => (
                <article className="project-card" id={project.id} key={project.id}>
                  <div className="project-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="project-content">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>

                    <details>
                      <summary>{focus.details}</summary>
                      <div className="project-details">
                        <div><h4>{copy.projects.labels.problem}</h4><p>{project.problem}</p></div>
                        <div><h4>{copy.projects.labels.solution}</h4><p>{project.solution}</p></div>
                        <div><h4>{copy.projects.labels.contribution}</h4><p>{project.contribution}</p></div>
                        <div><h4>{copy.projects.labels.safeguards}</h4><p>{project.safeguards}</p></div>
                      </div>
                    </details>

                    <div className="project-meta">
                      <div>
                        <span>{copy.projects.labels.technologies}</span>
                        <ul className="tag-list" aria-label={copy.projects.labels.technologies}>
                          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                        </ul>
                      </div>
                      <div>
                        <span>{copy.projects.labels.status}</span>
                        <p>{project.status}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="approach">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow eyebrow-light">{copy.approach.eyebrow}</p>
              <h2>{copy.approach.title}</h2>
              <p>{copy.approach.intro}</p>
            </div>
            <div className="approach-grid">
              {copy.approach.items.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section confidentiality-section">
          <div className="container confidentiality-card">
            <div className="shield" aria-hidden="true">✓</div>
            <div>
              <h2>{copy.confidentiality.title}</h2>
              <p>{copy.confidentiality.text}</p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-card">
            <div>
              <p className="eyebrow">{copy.contact.eyebrow}</p>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.text}</p>
            </div>
            <div className="button-row contact-actions">
              <a className="button button-primary" href="mailto:markellos.markides@gmail.com">
                {copy.contact.emailAction}
              </a>
              <a className="button button-secondary" href="https://markellosecosystem.com/" target="_blank" rel="noreferrer">
                {copy.contact.ecosystemAction}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Markellos Markides</span>
          <span>{copy.footer}</span>
        </div>
      </footer>
    </>
  )
}

export default App
