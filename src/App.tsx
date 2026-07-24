import { useEffect, useState } from 'react'
import { content, type Language } from './content'
import './styles.css'

const publicCvUrl = 'https://drive.google.com/file/d/1rStT-1HBNTMGJUThcpHNDIZ3ehnzglIF/view'

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const copy = content[language]

  const simple = language === 'en'
    ? {
        siteName: 'Markellos Markides',
        siteSubtitle: 'Professional apps',
        navLabel: 'Primary navigation',
        nav: {
          about: 'About',
          projects: 'Apps',
          approach: 'How I work',
          contact: 'Contact',
          cv: 'CV',
        },
        kicker: 'Civil Engineer · Project Manager · Health & Safety',
        title: 'Practical digital tools for real work.',
        lead:
          'I create focused applications that help organise information, reduce repetitive work and make everyday processes clearer.',
        experience: 'More than 20 years of experience in engineering, projects, contracts and public-sector operations.',
        viewApps: 'View the apps',
        viewCv: 'View public CV',
        aboutTitle: 'About me',
        aboutParagraphs: [
          'My professional background is in civil engineering, project and contract management, public-sector operations, and workplace health and safety.',
          'I started building these applications to address practical problems I encountered: repeated data entry, scattered information, difficult monitoring and the need for reliable personal tools.',
        ],
        workTitle: 'Areas of work',
        workIntro: 'The work presented here connects professional experience with simple, useful software.',
        workItems: [
          ['Civil engineering', 'Infrastructure, technical coordination and practical problem solving.'],
          ['Project and contract management', 'Planning, coordination, procurement, contracts and delivery.'],
          ['Health and safety', 'Risk assessment, prevention, training and organised record keeping.'],
          ['Digital tools', 'Small applications that simplify repetitive or fragmented workflows.'],
        ],
        projectsTitle: 'Selected applications',
        projectsIntro:
          'These are private professional projects. The descriptions are general and do not include operational data or internal information.',
        details: 'More details',
        status: 'Current status',
        technology: 'Built with',
        approachTitle: 'How I work',
        privacyTitle: 'Privacy and confidentiality',
        contactTitle: 'Contact',
        contactText: 'For a professional discussion, contact me by email or through LinkedIn.',
        email: 'Email',
        linkedin: 'LinkedIn',
        ecosystem: 'Markellos Ecosystem',
        footer: 'Professional apps and selected work',
      }
    : {
        siteName: 'Μάρκελλος Μαρκίδης',
        siteSubtitle: 'Επαγγελματικές εφαρμογές',
        navLabel: 'Κύρια πλοήγηση',
        nav: {
          about: 'Σχετικά',
          projects: 'Εφαρμογές',
          approach: 'Τρόπος εργασίας',
          contact: 'Επικοινωνία',
          cv: 'Βιογραφικό',
        },
        kicker: 'Πολιτικός Μηχανικός · Διαχείριση Έργων · Ασφάλεια και Υγεία',
        title: 'Πρακτικά ψηφιακά εργαλεία για πραγματικές ανάγκες.',
        lead:
          'Δημιουργώ στοχευμένες εφαρμογές που βοηθούν στην οργάνωση πληροφοριών, στη μείωση της επαναλαμβανόμενης εργασίας και στη σαφέστερη διαχείριση καθημερινών διαδικασιών.',
        experience: 'Περισσότερα από 20 χρόνια εμπειρίας σε τεχνικά έργα, συμβάσεις και λειτουργίες του δημόσιου τομέα.',
        viewApps: 'Προβολή εφαρμογών',
        viewCv: 'Δημόσιο βιογραφικό',
        aboutTitle: 'Σχετικά με εμένα',
        aboutParagraphs: [
          'Το επαγγελματικό μου υπόβαθρο περιλαμβάνει την πολιτική μηχανική, τη διαχείριση έργων και συμβάσεων, τις λειτουργίες του δημόσιου τομέα και την Ασφάλεια και Υγεία στην Εργασία.',
          'Άρχισα να δημιουργώ αυτές τις εφαρμογές για πρακτικά προβλήματα που συνάντησα: επαναλαμβανόμενη εισαγωγή δεδομένων, διάσπαρτη πληροφορία, δύσκολη παρακολούθηση και ανάγκη για αξιόπιστα προσωπικά εργαλεία.',
        ],
        workTitle: 'Τομείς εργασίας',
        workIntro: 'Η παρουσίαση συνδέει την επαγγελματική εμπειρία με απλό και χρήσιμο λογισμικό.',
        workItems: [
          ['Πολιτική μηχανική', 'Υποδομές, τεχνικός συντονισμός και πρακτική επίλυση προβλημάτων.'],
          ['Διαχείριση έργων και συμβάσεων', 'Προγραμματισμός, συντονισμός, προσφορές, συμβάσεις και υλοποίηση.'],
          ['Ασφάλεια και Υγεία', 'Εκτίμηση κινδύνου, πρόληψη, εκπαίδευση και οργανωμένη τήρηση αρχείου.'],
          ['Ψηφιακά εργαλεία', 'Μικρές εφαρμογές που απλοποιούν επαναλαμβανόμενες ή κατακερματισμένες εργασίες.'],
        ],
        projectsTitle: 'Επιλεγμένες εφαρμογές',
        projectsIntro:
          'Πρόκειται για ιδιωτικά επαγγελματικά έργα. Οι περιγραφές είναι γενικές και δεν περιλαμβάνουν υπηρεσιακά δεδομένα ή εσωτερικές πληροφορίες.',
        details: 'Περισσότερες πληροφορίες',
        status: 'Τρέχουσα κατάσταση',
        technology: 'Τεχνολογίες',
        approachTitle: 'Τρόπος εργασίας',
        privacyTitle: 'Ιδιωτικότητα και εμπιστευτικότητα',
        contactTitle: 'Επικοινωνία',
        contactText: 'Για επαγγελματική επικοινωνία, μπορείς να μου στείλεις email ή να με βρεις στο LinkedIn.',
        email: 'Email',
        linkedin: 'LinkedIn',
        ecosystem: 'Markellos Ecosystem',
        footer: 'Επαγγελματικές εφαρμογές και επιλεγμένα έργα',
      }

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'en'
      ? 'Markellos Markides | Professional Apps'
      : 'Μάρκελλος Μαρκίδης | Επαγγελματικές Εφαρμογές'
  }, [language])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'el' : 'en'))
  }

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skipLink}</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={simple.siteName}>
            <span className="brand-mark" aria-hidden="true">MM</span>
            <span className="brand-text">
              <strong>{simple.siteName}</strong>
              <small>{simple.siteSubtitle}</small>
            </span>
          </a>

          <nav className="main-nav" aria-label={simple.navLabel}>
            <a href="#about">{simple.nav.about}</a>
            <a href="#projects">{simple.nav.projects}</a>
            <a href="#approach">{simple.nav.approach}</a>
            <a href="#contact">{simple.nav.contact}</a>
            <a href={publicCvUrl} target="_blank" rel="noreferrer">{simple.nav.cv}</a>
          </nav>

          <button className="language-button" type="button" onClick={toggleLanguage}>
            {copy.languageName}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero-content">
            <p className="kicker">{simple.kicker}</p>
            <h1>{simple.title}</h1>
            <p className="hero-lead">{simple.lead}</p>
            <p className="hero-experience">{simple.experience}</p>
            <div className="button-row">
              <a className="button button-primary" href="#projects">{simple.viewApps}</a>
              <a className="button button-secondary" href={publicCvUrl} target="_blank" rel="noreferrer">
                {simple.viewCv}
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container simple-grid">
            <h2>{simple.aboutTitle}</h2>
            <div className="body-copy">
              {simple.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="facts-row">
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

        <section className="section section-soft" id="work">
          <div className="container">
            <div className="section-heading">
              <h2>{simple.workTitle}</h2>
              <p>{simple.workIntro}</p>
            </div>
            <div className="work-list">
              {simple.workItems.map(([title, description]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading">
              <h2>{simple.projectsTitle}</h2>
              <p>{simple.projectsIntro}</p>
            </div>

            <div className="projects-list">
              {copy.projects.items.map((project) => (
                <article className="project-card" id={project.id} key={project.id}>
                  <p className="project-category">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  <details>
                    <summary>{simple.details}</summary>
                    <div className="project-details">
                      <div><h4>{copy.projects.labels.problem}</h4><p>{project.problem}</p></div>
                      <div><h4>{copy.projects.labels.solution}</h4><p>{project.solution}</p></div>
                      <div><h4>{copy.projects.labels.contribution}</h4><p>{project.contribution}</p></div>
                      <div><h4>{copy.projects.labels.safeguards}</h4><p>{project.safeguards}</p></div>
                    </div>
                  </details>

                  <div className="project-footer">
                    <div>
                      <span>{simple.technology}</span>
                      <ul className="tag-list" aria-label={simple.technology}>
                        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                      </ul>
                    </div>
                    <div className="status-block">
                      <span>{simple.status}</span>
                      <p>{project.status}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="approach">
          <div className="container simple-grid">
            <div>
              <h2>{simple.approachTitle}</h2>
              <p className="section-intro">{copy.approach.intro}</p>
            </div>
            <ol className="approach-list">
              {copy.approach.items.map((item) => (
                <li key={item.number}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section note-section">
          <div className="container note">
            <h2>{simple.privacyTitle}</h2>
            <p>{copy.confidentiality.text}</p>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container simple-grid">
            <div>
              <h2>{simple.contactTitle}</h2>
              <p className="section-intro">{simple.contactText}</p>
            </div>
            <div className="contact-links">
              <a href="mailto:markellos.markides@gmail.com">{simple.email}</a>
              <a href="https://www.linkedin.com/in/markellos-markides/" target="_blank" rel="noreferrer">{simple.linkedin}</a>
              <a href="https://markellosecosystem.com/" target="_blank" rel="noreferrer">{simple.ecosystem}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Markellos Markides</span>
          <span>{simple.footer}</span>
        </div>
      </footer>
    </>
  )
}

export default App
