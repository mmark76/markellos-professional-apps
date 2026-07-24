import { useEffect, useState } from 'react'
import { content, type Language } from './content'
import './styles.css'

const publicCvUrl = 'https://drive.google.com/file/d/1rStT-1HBNTMGJUThcpHNDIZ3ehnzglIF/view'

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const copy = content[language]

  const page = language === 'en'
    ? {
        brand: 'Markellos Projects',
        navLabel: 'Primary navigation',
        nav: {
          projects: 'Projects',
          about: 'About',
          approach: 'Process',
          links: 'Links',
          cv: 'Public CV',
        },
        eyebrow: 'Project portfolio',
        title: 'Projects and applications.',
        lead:
          'A collection of digital tools I have designed and developed around practical ideas, recurring tasks and real needs.',
        note:
          'Some projects are private or service-related and are presented only through general, anonymised descriptions.',
        viewProjects: 'View projects',
        visitEcosystem: 'Visit the main ecosystem',
        projectsEyebrow: 'Selected projects',
        projectsTitle: 'Three service-related applications.',
        projectsIntro:
          'The portfolio focuses on what each project is intended to do, the problem it addresses and the way it was designed. It does not publish private code or operational data.',
        details: 'Project details',
        technology: 'Technology',
        status: 'Status',
        aboutEyebrow: 'About this collection',
        aboutTitle: 'A simple record of projects I have built.',
        aboutParagraphs: [
          'This website is a personal presentation of projects and applications. It is not a commercial services page and is not intended for job seeking.',
          'The projects are based on practical needs and personal experimentation with software, organisation, automation and digital workflows.',
        ],
        facts: [
          ['3', 'service-related applications'],
          ['Private', 'source repositories remain protected'],
          ['EN / EL', 'bilingual presentation'],
        ],
        approachEyebrow: 'Project process',
        approachTitle: 'How the projects are developed.',
        privacyTitle: 'Important note',
        privacyText:
          'This is a personal project portfolio. It is not an official website of any public authority, does not represent an employer and does not offer commercial or official services.',
        linksEyebrow: 'More',
        linksTitle: 'Related links',
        ecosystem: 'Markellos Ecosystem',
        github: 'GitHub profile',
        cv: 'Public CV',
        footer: 'Personal portfolio of projects and applications',
      }
    : {
        brand: 'Markellos Projects',
        navLabel: 'Κύρια πλοήγηση',
        nav: {
          projects: 'Έργα',
          about: 'Σχετικά',
          approach: 'Διαδικασία',
          links: 'Σύνδεσμοι',
          cv: 'Δημόσιο CV',
        },
        eyebrow: 'Portfolio έργων',
        title: 'Έργα και εφαρμογές.',
        lead:
          'Μια συλλογή ψηφιακών εργαλείων που έχω σχεδιάσει και αναπτύξει με αφετηρία πρακτικές ιδέες, επαναλαμβανόμενες εργασίες και πραγματικές ανάγκες.',
        note:
          'Ορισμένα έργα είναι ιδιωτικά ή υπηρεσιακής φύσης και παρουσιάζονται μόνο μέσα από γενικές, ανωνυμοποιημένες περιγραφές.',
        viewProjects: 'Προβολή έργων',
        visitEcosystem: 'Κύριο οικοσύστημα',
        projectsEyebrow: 'Επιλεγμένα έργα',
        projectsTitle: 'Τρεις εφαρμογές υπηρεσιακής φύσης.',
        projectsIntro:
          'Η παρουσίαση εστιάζει στον σκοπό κάθε έργου, στο πρόβλημα που αντιμετωπίζει και στον τρόπο σχεδιασμού του. Δεν δημοσιεύεται ιδιωτικός κώδικας ή υπηρεσιακά δεδομένα.',
        details: 'Λεπτομέρειες έργου',
        technology: 'Τεχνολογία',
        status: 'Κατάσταση',
        aboutEyebrow: 'Σχετικά με τη συλλογή',
        aboutTitle: 'Μια απλή καταγραφή των έργων που έχω δημιουργήσει.',
        aboutParagraphs: [
          'Η ιστοσελίδα είναι προσωπική παρουσίαση έργων και εφαρμογών. Δεν αποτελεί εμπορική σελίδα υπηρεσιών και δεν έχει σκοπό την αναζήτηση εργασίας.',
          'Τα έργα βασίζονται σε πρακτικές ανάγκες και σε προσωπικό πειραματισμό με λογισμικό, οργάνωση, αυτοματοποίηση και ψηφιακές ροές εργασίας.',
        ],
        facts: [
          ['3', 'εφαρμογές υπηρεσιακής φύσης'],
          ['Ιδιωτικά', 'τα repositories παραμένουν προστατευμένα'],
          ['EL / EN', 'δίγλωσση παρουσίαση'],
        ],
        approachEyebrow: 'Διαδικασία έργου',
        approachTitle: 'Πώς αναπτύσσονται τα έργα.',
        privacyTitle: 'Σημαντική σημείωση',
        privacyText:
          'Πρόκειται για προσωπικό portfolio έργων. Δεν είναι επίσημη ιστοσελίδα δημόσιας αρχής, δεν εκπροσωπεί εργοδότη και δεν παρέχει εμπορικές ή επίσημες υπηρεσίες.',
        linksEyebrow: 'Περισσότερα',
        linksTitle: 'Σχετικοί σύνδεσμοι',
        ecosystem: 'Markellos Ecosystem',
        github: 'Προφίλ GitHub',
        cv: 'Δημόσιο CV',
        footer: 'Προσωπικό portfolio έργων και εφαρμογών',
      }

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'en'
      ? 'Markellos Projects'
      : 'Markellos Projects — Έργα και εφαρμογές'
  }, [language])

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
            <span>{page.brand}</span>
          </a>

          <nav className="main-nav" aria-label={page.navLabel}>
            <a href="#projects">{page.nav.projects}</a>
            <a href="#about">{page.nav.about}</a>
            <a href="#approach">{page.nav.approach}</a>
            <a href="#links">{page.nav.links}</a>
            <a href={publicCvUrl} target="_blank" rel="noreferrer">{page.nav.cv}</a>
          </nav>

          <button className="language-button" type="button" onClick={toggleLanguage}>
            {copy.languageName}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero-content">
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
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{page.projectsEyebrow}</p>
              <h2>{page.projectsTitle}</h2>
              <p>{page.projectsIntro}</p>
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
                        <p>{project.status}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="about">
          <div className="container split-layout">
            <div>
              <p className="eyebrow">{page.aboutEyebrow}</p>
              <h2>{page.aboutTitle}</h2>
            </div>
            <div className="profile-copy">
              {page.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="facts-grid">
                {page.facts.map(([value, label]) => (
                  <div className="fact" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{page.approachEyebrow}</p>
              <h2>{page.approachTitle}</h2>
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

        <section className="note-section">
          <div className="container note-card">
            <h2>{page.privacyTitle}</h2>
            <p>{page.privacyText}</p>
          </div>
        </section>

        <section className="section links-section" id="links">
          <div className="container links-layout">
            <div>
              <p className="eyebrow">{page.linksEyebrow}</p>
              <h2>{page.linksTitle}</h2>
            </div>
            <div className="links-list">
              <a href="https://markellosecosystem.com/" target="_blank" rel="noreferrer">{page.ecosystem}</a>
              <a href="https://github.com/mmark76" target="_blank" rel="noreferrer">{page.github}</a>
              <a href={publicCvUrl} target="_blank" rel="noreferrer">{page.cv}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Markellos Markides</span>
          <span>{page.footer}</span>
        </div>
      </footer>
    </>
  )
}

export default App
