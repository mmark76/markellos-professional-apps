import { useEffect, useState } from 'react'
import { content, type Language } from './content'
import './styles.css'
import './notice-modal.css'

const publicCvUrl = 'https://drive.google.com/file/d/1rStT-1HBNTMGJUThcpHNDIZ3ehnzglIF/view'

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const [darkMode, setDarkMode] = useState(false)
  const [noticeOpen, setNoticeOpen] = useState(false)
  const copy = content[language]

  const page = language === 'en'
    ? {
        brand: 'Markellos Professional Projects',
        subtitle: 'Professional Projects Portfolio',
        navLabel: 'Primary navigation',
        nav: {
          home: 'HOME',
          projects: 'PROJECTS',
          process: 'PROCESS',
          cv: 'PUBLIC CV',
        },
        languageCode: 'EL',
        languageLabel: 'Ελληνικά',
        themeLabel: darkMode ? 'Use light theme' : 'Use dark theme',
        eyebrow: 'PROFESSIONAL PROJECTS PORTFOLIO',
        title: 'Professional Projects and apps.',
        lead:
          'A collection of digital tools I have designed and developed around practical ideas, recurring tasks and real needs.',
        note:
          'Some projects are private or service-related and are presented only through general, anonymised descriptions.',
        viewProjects: 'View projects',
        visitEcosystem: 'Visit Markellos Ecosystem',
        visitProject: 'Visit application',
        projectsEyebrow: 'SELECTED PROJECTS',
        projectsTitle: 'Selected professional applications.',
        projectsIntro:
          'Each presentation explains the practical need, what the application offers and how it supports everyday work. Private code and operational data are not published.',
        details: 'Project details',
        technology: 'Technology',
        status: 'Stage of development',
        nttStatus: 'Public pilot / early-access version with 1 of 24 modules currently available.',
        processEyebrow: 'PROJECT PROCESS',
        processTitle: 'How the projects are developed.',
        noticeTitle: 'Important note',
        noticeParagraphs: [
          'This website is a personal presentation of projects and applications. It is not a commercial services page and is not intended for job seeking.',
          'The projects are based on practical needs and personal experimentation with software, organisation, automation and digital workflows.',
          'This is not an official website of any public authority, does not represent an employer and does not offer commercial or official services.',
        ],
        closeNotice: 'Close',
        cv: 'Public CV',
        footerText:
          'A personal portfolio of selected projects and applications, presented with privacy and confidentiality in mind.',
        copyright: 'All rights reserved.',
      }
    : {
        brand: 'Markellos Professional Projects',
        subtitle: 'Professional Projects Portfolio',
        navLabel: 'Κύρια πλοήγηση',
        nav: {
          home: 'ΑΡΧΙΚΗ',
          projects: 'ΕΡΓΑ',
          process: 'ΔΙΑΔΙΚΑΣΙΑ',
          cv: 'ΔΗΜΟΣΙΟ CV',
        },
        languageCode: 'EN',
        languageLabel: 'English',
        themeLabel: darkMode ? 'Χρήση φωτεινού θέματος' : 'Χρήση σκοτεινού θέματος',
        eyebrow: 'PROFESSIONAL PROJECTS PORTFOLIO',
        title: 'Έργα και εφαρμογές.',
        lead:
          'Μια συλλογή ψηφιακών εργαλείων που έχω σχεδιάσει και αναπτύξει με αφετηρία πρακτικές ιδέες, επαναλαμβανόμενες εργασίες και πραγματικές ανάγκες.',
        note:
          'Ορισμένα έργα είναι ιδιωτικά ή υπηρεσιακής φύσης και παρουσιάζονται μόνο μέσα από γενικές, ανωνυμοποιημένες περιγραφές.',
        viewProjects: 'Προβολή έργων',
        visitEcosystem: 'Markellos Ecosystem',
        visitProject: 'Άνοιγμα εφαρμογής',
        projectsEyebrow: 'ΕΠΙΛΕΓΜΕΝΑ ΕΡΓΑ',
        projectsTitle: 'Επιλεγμένες επαγγελματικές εφαρμογές.',
        projectsIntro:
          'Κάθε παρουσίαση εξηγεί την πρακτική ανάγκη, τι προσφέρει η εφαρμογή και πώς διευκολύνει την καθημερινή εργασία. Δεν δημοσιεύεται ιδιωτικός κώδικας ή υπηρεσιακά δεδομένα.',
        details: 'Λεπτομέρειες έργου',
        technology: 'Τεχνολογία',
        status: 'Στάδιο ανάπτυξης',
        nttStatus: 'Δημόσια πιλοτική έκδοση / early access με διαθέσιμη 1 από 24 ενότητες.',
        processEyebrow: 'ΔΙΑΔΙΚΑΣΙΑ ΕΡΓΟΥ',
        processTitle: 'Πώς αναπτύσσονται τα έργα.',
        noticeTitle: 'Σημαντική σημείωση',
        noticeParagraphs: [
          'Η ιστοσελίδα είναι προσωπική παρουσίαση έργων και εφαρμογών. Δεν αποτελεί εμπορική σελίδα υπηρεσιών και δεν έχει σκοπό την αναζήτηση εργασίας.',
          'Τα έργα βασίζονται σε πρακτικές ανάγκες και σε προσωπικό πειραματισμό με λογισμικό, οργάνωση, αυτοματοποίηση και ψηφιακές ροές εργασίας.',
          'Δεν είναι επίσημη ιστοσελίδα δημόσιας αρχής, δεν εκπροσωπεί εργοδότη και δεν παρέχει εμπορικές ή επίσημες υπηρεσίες.',
        ],
        closeNotice: 'Κλείσιμο',
        cv: 'Δημόσιο CV',
        footerText:
          'Προσωπικό portfolio επιλεγμένων έργων και εφαρμογών, με σεβασμό στην ιδιωτικότητα και την εμπιστευτικότητα.',
        copyright: 'Με επιφύλαξη παντός δικαιώματος.',
      }

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    document.title = language === 'en'
      ? 'Professional Projects Portfolio'
      : 'Professional Projects Portfolio — Έργα και εφαρμογές'
  }, [language, darkMode])

  useEffect(() => {
    if (!noticeOpen) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setNoticeOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [noticeOpen])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'el' : 'en'))
  }

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skipLink}</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={page.brand}>
            <span className="brand-mark" aria-hidden="true">MM</span>
            <span className="brand-copy">
              <strong>{page.brand}</strong>
              <small>{page.subtitle}</small>
            </span>
          </a>

          <nav className="main-nav" aria-label={page.navLabel}>
            <a href="#top">{page.nav.home}</a>
            <a href="#projects">{page.nav.projects}</a>
            <a href="#process">{page.nav.process}</a>
            <a href={publicCvUrl} target="_blank" rel="noreferrer">{page.nav.cv}</a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-button"
              type="button"
              onClick={() => setDarkMode((current) => !current)}
              aria-label={page.themeLabel}
              title={page.themeLabel}
            >
              <span aria-hidden="true">{darkMode ? '☾' : '☀'}</span>
            </button>
            <button className="language-button" type="button" onClick={toggleLanguage}>
              <strong>{page.languageCode}</strong>
              <span>{page.languageLabel}</span>
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="page-main">
        <section className="container content-card hero-card" id="top">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="hero-lead">{page.lead}</p>
          <p className="hero-note">{page.note}</p>
          <div className="button-row">
            <a className="button button-primary" href="#projects">{page.viewProjects}</a>
            <a className="button button-secondary" href="https://markellosecosystem.com/" target="_blank" rel="noreferrer">
              {page.visitEcosystem}
            </a>
          </div>
        </section>

        <section className="container content-card" id="projects">
          <div className="section-heading">
            <p className="eyebrow">{page.projectsEyebrow}</p>
            <h2>{page.projectsTitle}</h2>
            <p>{page.projectsIntro}</p>
          </div>

          <div className="projects-grid">
            {copy.projects.items.map((project, index) => (
              <article className="project-card" id={project.id} key={project.id}>
                <div className="project-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="project-content">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  {project.url && project.id !== 'ntt-certification' && (
                    <div className="button-row">
                      <a className="button button-secondary" href={project.url} target="_blank" rel="noreferrer">
                        {page.visitProject}
                      </a>
                    </div>
                  )}

                  <details>
                    <summary>{page.details}</summary>
                    <div className="project-details">
                      <div><h4>{copy.projects.labels.problem}</h4><p>{project.problem}</p></div>
                      <div><h4>{copy.projects.labels.solution}</h4><p>{project.solution}</p></div>
                      <div><h4>{copy.projects.labels.contribution}</h4><p>{project.contribution}</p></div>
                      <div><h4>{copy.projects.labels.safeguards}</h4><p>{project.safeguards}</p></div>
                    </div>
                  </details>

                  <div className="project-meta">
                    <div>
                      <span>{page.technology}</span>
                      <ul className="tag-list" aria-label={page.technology}>
                        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                      </ul>
                    </div>
                    <div>
                      <span>{page.status}</span>
                      <p>{project.id === 'ntt-certification' ? page.nttStatus : project.status}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container content-card" id="process">
          <div className="section-heading">
            <p className="eyebrow">{page.processEyebrow}</p>
            <h2>{page.processTitle}</h2>
          </div>
          <div className="process-grid">
            {copy.approach.items.map((item) => (
              <article className="process-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <span className="footer-mark" aria-hidden="true">MM</span>
            <div>
              <strong>{page.brand}</strong>
              <p>{page.footerText}</p>
            </div>
          </div>

          <nav className="footer-links" aria-label={page.navLabel}>
            <a href="#top">{page.nav.home}</a>
            <a href="#projects">{page.nav.projects}</a>
            <a href="#process">{page.nav.process}</a>
          </nav>

          <div className="footer-actions">
            <a href="https://markellosecosystem.com/" target="_blank" rel="noreferrer" aria-label="Markellos Ecosystem">M</a>
            <a href={publicCvUrl} target="_blank" rel="noreferrer" aria-label={page.cv}>CV</a>
            <a href="mailto:markellos.markides@gmail.com" aria-label="Email">@</a>
          </div>

          <button className="footer-notice-button" type="button" onClick={() => setNoticeOpen(true)}>
            {page.noticeTitle}
          </button>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Markellos Markides. {page.copyright}</span>
          <span>professional.markellosecosystem.com</span>
        </div>
      </footer>

      {noticeOpen && (
        <div className="notice-overlay" role="presentation" onMouseDown={() => setNoticeOpen(false)}>
          <section
            className="notice-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="notice-dialog-header">
              <h2 id="notice-title">{page.noticeTitle}</h2>
              <button
                className="notice-close"
                type="button"
                aria-label={page.closeNotice}
                title={page.closeNotice}
                onClick={() => setNoticeOpen(false)}
              >
                ×
              </button>
            </div>
            {page.noticeParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        </div>
      )}
    </>
  )
}

export default App