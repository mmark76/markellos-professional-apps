export type Language = 'en' | 'el'

type Project = {
  id: string
  eyebrow: string
  title: string
  summary: string
  problem: string
  solution: string
  contribution: string
  technologies: string[]
  safeguards: string
  status: string
}

type PortfolioContent = {
  languageName: string
  skipLink: string
  brand: string
  nav: {
    profile: string
    expertise: string
    projects: string
    approach: string
    contact: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    primaryAction: string
    secondaryAction: string
  }
  profile: {
    eyebrow: string
    title: string
    paragraphs: string[]
    facts: Array<{ value: string; label: string }>
  }
  expertise: {
    eyebrow: string
    title: string
    intro: string
    items: Array<{ title: string; description: string }>
  }
  projects: {
    eyebrow: string
    title: string
    intro: string
    labels: {
      problem: string
      solution: string
      contribution: string
      technologies: string
      safeguards: string
      status: string
    }
    items: Project[]
  }
  approach: {
    eyebrow: string
    title: string
    intro: string
    items: Array<{ number: string; title: string; description: string }>
  }
  confidentiality: {
    title: string
    text: string
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    emailAction: string
    ecosystemAction: string
  }
  footer: string
}

export const content: Record<Language, PortfolioContent> = {
  en: {
    languageName: 'Ελληνικά',
    skipLink: 'Skip to main content',
    brand: 'Markellos Professional Apps',
    nav: {
      profile: 'Profile',
      expertise: 'Expertise',
      projects: 'Case studies',
      approach: 'Approach',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Engineering judgement · Structured delivery · Practical digital tools',
      title: 'Professional experience translated into clearer systems and better decisions.',
      lead:
        'Civil engineer, project manager and health-and-safety professional with more than two decades of experience in complex projects, public-sector operations, contracts and organisational improvement.',
      primaryAction: 'View case studies',
      secondaryAction: 'Professional profile',
    },
    profile: {
      eyebrow: 'Professional profile',
      title: 'Engineering, management and digital process improvement.',
      paragraphs: [
        'My work combines civil-engineering discipline, project and contract management, health-and-safety leadership, and the design of practical digital tools.',
        'The applications presented here began with real operational needs: fragmented information, repetitive manual work, difficult monitoring and the need for safer, more consistent workflows.',
      ],
      facts: [
        { value: '20+', label: 'years of professional experience' },
        { value: 'MBA', label: 'management and strategic perspective' },
        { value: '3', label: 'selected anonymised case studies' },
      ],
    },
    expertise: {
      eyebrow: 'Areas of expertise',
      title: 'A multidisciplinary professional foundation.',
      intro:
        'The portfolio focuses on the intersection of technical responsibility, organisational management and responsible software design.',
      items: [
        {
          title: 'Civil Engineering',
          description:
            'Infrastructure, technical coordination, structured problem solving and evidence-based professional judgement.',
        },
        {
          title: 'Project & Contract Management',
          description:
            'Planning, priorities, stakeholders, deliverables, risks, contractual obligations and controlled execution.',
        },
        {
          title: 'Health & Safety',
          description:
            'Risk assessment, preventive measures, governance, training, monitoring and management information.',
        },
        {
          title: 'Digital Process Improvement',
          description:
            'Turning repetitive or fragmented workflows into maintainable, user-centred digital systems.',
        },
        {
          title: 'Public-Sector Operations',
          description:
            'Solutions shaped by accountability, traceability, accessibility, confidentiality and procedural constraints.',
        },
        {
          title: 'System Design',
          description:
            'Modular architecture, local-first workflows, data protection, role-based access and documented decisions.',
        },
      ],
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Anonymised professional case studies.',
      intro:
        'These summaries describe the problem-solving approach and engineering decisions without publishing private source code, operational records or internal infrastructure details.',
      labels: {
        problem: 'Operational need',
        solution: 'Solution',
        contribution: 'My contribution',
        technologies: 'Technology',
        safeguards: 'Safeguards',
        status: 'Status',
      },
      items: [
        {
          id: 'health-safety',
          eyebrow: 'Health, safety and governance',
          title: 'Health & Safety Management Application',
          summary:
            'A human-centred web application concept for organising, monitoring and documenting workplace safety, health and wellbeing in office environments.',
          problem:
            'Risk assessments, responsibilities, measures, training records and legal references can become fragmented across documents and difficult to monitor consistently.',
          solution:
            'A structured application model covering organisational units, workplaces, affected groups, risk assessments, preventive actions, training, compliance and management dashboards.',
          contribution:
            'Requirements definition, information architecture, workflows, data-governance principles, security model, technical direction and iterative product review.',
          technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'Role-based access'],
          safeguards:
            'Demonstration data only; backend-enforced permissions; secure-session design; no claim of official approval or replacement of legal and professional duties.',
          status: 'Private development prototype; not approved for real operational records.',
        },
        {
          id: 'treasury',
          eyebrow: 'Administrative workflow and document production',
          title: 'Electronic Treasury Workflow',
          summary:
            'A focused local-first application for completing a structured treasury form, reusing field templates, calculating totals and producing an A4 print/PDF result.',
          problem:
            'Repeated manual entry, arithmetic, numbering and document preparation increase effort and create opportunities for inconsistency.',
          solution:
            'Field-level reusable templates, automatic VAT and total calculations, amount-to-Greek-words conversion, controlled numbering, autosave, preview, printing and personal archive export/restore.',
          contribution:
            'Workflow analysis, functional requirements, calculation rules, numbering safeguards, local-data model, backup design and modular frontend architecture.',
          technologies: ['HTML', 'CSS', 'JavaScript modules', 'LocalStorage', 'Print CSS', 'JSON backup'],
          safeguards:
            'Local-only storage, explicit backup warnings, validation before restore and no central server or claim of being an official treasury system.',
          status: 'Private local-first MVP for controlled personal use.',
        },
        {
          id: 'roster',
          eyebrow: 'Planning, productivity and desktop delivery',
          title: 'Monthly Service Roster Tool',
          summary:
            'A personal local-first tool for preparing and editing monthly service rosters, calculating totals and producing print/PDF outputs.',
          problem:
            'Monthly rosters require repetitive entry, accurate separation of periods, treatment of weekends and holidays, totals and reliable personal archiving.',
          solution:
            'Independent monthly workspaces, personnel records, automatic persistence, holiday handling, totals, JSON backup/restore and a Windows desktop shell.',
          contribution:
            'Product scope, workflow modelling, period isolation, stable personnel references, backup strategy, desktop packaging direction and staged roadmap planning.',
          technologies: ['React', 'TypeScript', 'IndexedDB', 'Tauri 2', 'Rust toolchain', 'Windows installer'],
          safeguards:
            'Personal-assistance scope only, offline-oriented design, no backend or synchronisation, and mandatory verification through approved organisational procedures.',
          status: 'Private local-first application under desktop release validation.',
        },
      ],
    },
    approach: {
      eyebrow: 'Working approach',
      title: 'From operational need to maintainable solution.',
      intro:
        'The objective is not merely to digitise a form. It is to understand the work, control the risks and create a system that can evolve without losing clarity.',
      items: [
        {
          number: '01',
          title: 'Understand the real workflow',
          description: 'Map users, decisions, exceptions, documents, responsibilities and constraints before choosing technology.',
        },
        {
          number: '02',
          title: 'Define boundaries and safeguards',
          description: 'Separate prototype from production, public from private, and convenience from legal or professional authority.',
        },
        {
          number: '03',
          title: 'Build a modular foundation',
          description: 'Use clear data ownership, reusable components, documented decisions and testable workflows.',
        },
        {
          number: '04',
          title: 'Validate and improve',
          description: 'Review behaviour, accessibility, security, backup, deployment and user understanding in successive stages.',
        },
      ],
    },
    confidentiality: {
      title: 'Confidentiality by design',
      text:
        'This portfolio intentionally excludes private repositories, real operational data, internal correspondence, credentials, identifiable records and security-sensitive deployment information. Any future screenshots will use fabricated data.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Professional discussion and collaboration.',
      text:
        'For discussions related to project management, health and safety, process improvement or responsible digital tools, contact me by email.',
      emailAction: 'Send email',
      ecosystemAction: 'Visit Markellos Ecosystem',
    },
    footer: 'Professional portfolio · Selected and anonymised work',
  },
  el: {
    languageName: 'English',
    skipLink: 'Μετάβαση στο κύριο περιεχόμενο',
    brand: 'Markellos Professional Apps',
    nav: {
      profile: 'Προφίλ',
      expertise: 'Εξειδίκευση',
      projects: 'Μελέτες περίπτωσης',
      approach: 'Προσέγγιση',
      contact: 'Επικοινωνία',
    },
    hero: {
      eyebrow: 'Τεχνική κρίση · Δομημένη υλοποίηση · Πρακτικά ψηφιακά εργαλεία',
      title: 'Η επαγγελματική εμπειρία μετατρέπεται σε σαφέστερα συστήματα και καλύτερες αποφάσεις.',
      lead:
        'Πολιτικός μηχανικός, διαχειριστής έργων και επαγγελματίας ασφάλειας και υγείας με περισσότερες από δύο δεκαετίες εμπειρίας σε σύνθετα έργα, λειτουργίες δημόσιου τομέα, συμβάσεις και οργανωτική βελτίωση.',
      primaryAction: 'Προβολή έργων',
      secondaryAction: 'Επαγγελματικό προφίλ',
    },
    profile: {
      eyebrow: 'Επαγγελματικό προφίλ',
      title: 'Μηχανική, διοίκηση και ψηφιακή βελτίωση διαδικασιών.',
      paragraphs: [
        'Η εργασία μου συνδυάζει την πειθαρχία του πολιτικού μηχανικού, τη διαχείριση έργων και συμβάσεων, την ηγεσία στην ασφάλεια και υγεία και τον σχεδιασμό πρακτικών ψηφιακών εργαλείων.',
        'Οι εφαρμογές που παρουσιάζονται εδώ ξεκίνησαν από πραγματικές λειτουργικές ανάγκες: κατακερματισμένη πληροφορία, επαναλαμβανόμενη χειροκίνητη εργασία, δύσκολη παρακολούθηση και ανάγκη για ασφαλέστερες και συνεπέστερες ροές εργασίας.',
      ],
      facts: [
        { value: '20+', label: 'χρόνια επαγγελματικής εμπειρίας' },
        { value: 'MBA', label: 'διοικητική και στρατηγική οπτική' },
        { value: '3', label: 'επιλεγμένες ανώνυμες μελέτες περίπτωσης' },
      ],
    },
    expertise: {
      eyebrow: 'Τομείς εξειδίκευσης',
      title: 'Μια διεπιστημονική επαγγελματική βάση.',
      intro:
        'Το portfolio εστιάζει στη σύνδεση τεχνικής ευθύνης, οργανωτικής διοίκησης και υπεύθυνου σχεδιασμού λογισμικού.',
      items: [
        {
          title: 'Πολιτική Μηχανική',
          description: 'Υποδομές, τεχνικός συντονισμός, δομημένη επίλυση προβλημάτων και τεκμηριωμένη επαγγελματική κρίση.',
        },
        {
          title: 'Διαχείριση Έργων και Συμβάσεων',
          description: 'Προγραμματισμός, προτεραιότητες, εμπλεκόμενοι, παραδοτέα, κίνδυνοι, συμβατικές υποχρεώσεις και ελεγχόμενη εκτέλεση.',
        },
        {
          title: 'Ασφάλεια και Υγεία',
          description: 'Εκτίμηση κινδύνου, προληπτικά μέτρα, διακυβέρνηση, εκπαίδευση, παρακολούθηση και πληροφόρηση διοίκησης.',
        },
        {
          title: 'Ψηφιακή Βελτίωση Διαδικασιών',
          description: 'Μετατροπή επαναλαμβανόμενων ή κατακερματισμένων εργασιών σε συντηρήσιμα και ανθρωποκεντρικά ψηφιακά συστήματα.',
        },
        {
          title: 'Λειτουργίες Δημόσιου Τομέα',
          description: 'Λύσεις με έμφαση στη λογοδοσία, ιχνηλασιμότητα, προσβασιμότητα, εμπιστευτικότητα και διαδικαστικούς περιορισμούς.',
        },
        {
          title: 'Σχεδιασμός Συστημάτων',
          description: 'Αρθρωτή αρχιτεκτονική, local-first ροές, προστασία δεδομένων, πρόσβαση βάσει ρόλων και τεκμηριωμένες αποφάσεις.',
        },
      ],
    },
    projects: {
      eyebrow: 'Επιλεγμένα έργα',
      title: 'Ανώνυμες επαγγελματικές μελέτες περίπτωσης.',
      intro:
        'Οι περιλήψεις παρουσιάζουν την προσέγγιση επίλυσης προβλημάτων και τις τεχνικές αποφάσεις χωρίς δημοσίευση ιδιωτικού κώδικα, υπηρεσιακών δεδομένων ή εσωτερικών πληροφοριών υποδομής.',
      labels: {
        problem: 'Λειτουργική ανάγκη',
        solution: 'Λύση',
        contribution: 'Η συμβολή μου',
        technologies: 'Τεχνολογία',
        safeguards: 'Δικλίδες προστασίας',
        status: 'Κατάσταση',
      },
      items: [
        {
          id: 'health-safety',
          eyebrow: 'Ασφάλεια, υγεία και διακυβέρνηση',
          title: 'Εφαρμογή Διαχείρισης Ασφάλειας και Υγείας',
          summary:
            'Ανθρωποκεντρική διαδικτυακή εφαρμογή για οργάνωση, παρακολούθηση και τεκμηρίωση της ασφάλειας, υγείας και ευημερίας σε χώρους γραφείων.',
          problem:
            'Οι εκτιμήσεις κινδύνου, οι ευθύνες, τα μέτρα, η εκπαίδευση και οι νομικές αναφορές μπορεί να είναι κατακερματισμένες και δύσκολες στη συνεπή παρακολούθηση.',
          solution:
            'Δομημένο μοντέλο που καλύπτει οργανωτικές μονάδες, χώρους εργασίας, επηρεαζόμενες ομάδες, εκτιμήσεις κινδύνου, μέτρα, εκπαίδευση, συμμόρφωση και πίνακες διοικητικής πληροφόρησης.',
          contribution:
            'Καθορισμός απαιτήσεων, αρχιτεκτονική πληροφορίας, ροές εργασίας, αρχές διακυβέρνησης δεδομένων, μοντέλο ασφάλειας, τεχνική κατεύθυνση και επαναληπτική αξιολόγηση.',
          technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'Πρόσβαση βάσει ρόλων'],
          safeguards:
            'Μόνο δεδομένα επίδειξης, δικαιώματα που επιβάλλονται από το backend, ασφαλής σχεδιασμός συνεδριών και καμία δήλωση επίσημης έγκρισης ή αντικατάστασης νομικών υποχρεώσεων.',
          status: 'Ιδιωτικό πρωτότυπο ανάπτυξης· δεν έχει εγκριθεί για πραγματικά υπηρεσιακά δεδομένα.',
        },
        {
          id: 'treasury',
          eyebrow: 'Διοικητική ροή και παραγωγή εγγράφων',
          title: 'Ηλεκτρονική Ροή Εργασίας Ταμείου',
          summary:
            'Στοχευμένη local-first εφαρμογή για συμπλήρωση δομημένου εντύπου, επαναχρησιμοποίηση προτύπων, υπολογισμούς και παραγωγή αποτελέσματος Α4 για εκτύπωση ή PDF.',
          problem:
            'Η επαναλαμβανόμενη εισαγωγή, οι υπολογισμοί, η αρίθμηση και η προετοιμασία εγγράφων αυξάνουν τον φόρτο και τον κίνδυνο ασυνέπειας.',
          solution:
            'Πρότυπα ανά πεδίο, αυτόματος υπολογισμός ΦΠΑ και συνόλου, μετατροπή ποσού σε ελληνικές λέξεις, ελεγχόμενη αρίθμηση, αυτόματη αποθήκευση, προεπισκόπηση, εκτύπωση και προσωπικό αρχείο.',
          contribution:
            'Ανάλυση ροής, λειτουργικές απαιτήσεις, κανόνες υπολογισμού, δικλίδες αρίθμησης, μοντέλο τοπικών δεδομένων, σχεδιασμός backup και αρθρωτή frontend αρχιτεκτονική.',
          technologies: ['HTML', 'CSS', 'JavaScript modules', 'LocalStorage', 'Print CSS', 'JSON backup'],
          safeguards:
            'Αποθήκευση μόνο τοπικά, σαφείς προειδοποιήσεις backup, επικύρωση πριν από επαναφορά και καμία παρουσίαση ως επίσημο κεντρικό σύστημα.',
          status: 'Ιδιωτικό local-first MVP για ελεγχόμενη προσωπική χρήση.',
        },
        {
          id: 'roster',
          eyebrow: 'Προγραμματισμός, παραγωγικότητα και desktop διάθεση',
          title: 'Εργαλείο Μηνιαίων Καταστάσεων Υπηρεσιών',
          summary:
            'Προσωπικό local-first εργαλείο για προετοιμασία και επεξεργασία μηνιαίων καταστάσεων, υπολογισμό συνόλων και παραγωγή εκτύπωσης/PDF.',
          problem:
            'Οι μηνιαίες καταστάσεις απαιτούν επαναλαμβανόμενη εισαγωγή, σωστό διαχωρισμό περιόδων, χειρισμό Σαββατοκύριακων και αργιών, σύνολα και αξιόπιστη προσωπική αρχειοθέτηση.',
          solution:
            'Ανεξάρτητοι μηνιαίοι χώροι εργασίας, αρχείο προσωπικού, αυτόματη αποθήκευση, διαχείριση αργιών, σύνολα, JSON backup/restore και Windows desktop shell.',
          contribution:
            'Καθορισμός προϊόντος, μοντελοποίηση ροής, απομόνωση περιόδων, σταθερές αναφορές προσωπικού, στρατηγική backup, κατεύθυνση desktop συσκευασίας και σταδιακό roadmap.',
          technologies: ['React', 'TypeScript', 'IndexedDB', 'Tauri 2', 'Rust toolchain', 'Windows installer'],
          safeguards:
            'Μόνο ως προσωπικό βοηθητικό εργαλείο, offline προσανατολισμός, χωρίς backend ή συγχρονισμό και υποχρεωτική επαλήθευση μέσω εγκεκριμένων διαδικασιών.',
          status: 'Ιδιωτική local-first εφαρμογή σε φάση ελέγχου desktop έκδοσης.',
        },
      ],
    },
    approach: {
      eyebrow: 'Τρόπος εργασίας',
      title: 'Από τη λειτουργική ανάγκη σε μια συντηρήσιμη λύση.',
      intro:
        'Ο στόχος δεν είναι απλώς η ψηφιοποίηση ενός εντύπου. Είναι η κατανόηση της εργασίας, ο έλεγχος των κινδύνων και η δημιουργία ενός συστήματος που εξελίσσεται χωρίς να χάνει τη σαφήνειά του.',
      items: [
        {
          number: '01',
          title: 'Κατανόηση της πραγματικής ροής',
          description: 'Χαρτογράφηση χρηστών, αποφάσεων, εξαιρέσεων, εγγράφων, ευθυνών και περιορισμών πριν από την επιλογή τεχνολογίας.',
        },
        {
          number: '02',
          title: 'Όρια και δικλίδες προστασίας',
          description: 'Διάκριση πρωτοτύπου από παραγωγή, δημόσιου από ιδιωτικό και ευκολίας από νομική ή επαγγελματική αυθεντία.',
        },
        {
          number: '03',
          title: 'Αρθρωτή θεμελίωση',
          description: 'Σαφής ιδιοκτησία δεδομένων, επαναχρησιμοποιήσιμα στοιχεία, τεκμηριωμένες αποφάσεις και ελέγξιμες ροές.',
        },
        {
          number: '04',
          title: 'Έλεγχος και βελτίωση',
          description: 'Διαδοχικός έλεγχος συμπεριφοράς, προσβασιμότητας, ασφάλειας, backup, διάθεσης και κατανόησης από τον χρήστη.',
        },
      ],
    },
    confidentiality: {
      title: 'Εμπιστευτικότητα από τον σχεδιασμό',
      text:
        'Το portfolio αποκλείει σκόπιμα ιδιωτικά repositories, πραγματικά υπηρεσιακά δεδομένα, εσωτερική αλληλογραφία, διαπιστευτήρια, αναγνωρίσιμες εγγραφές και ευαίσθητες πληροφορίες διάθεσης. Μελλοντικά screenshots θα χρησιμοποιούν αποκλειστικά εικονικά δεδομένα.',
    },
    contact: {
      eyebrow: 'Επικοινωνία',
      title: 'Επαγγελματική συζήτηση και συνεργασία.',
      text:
        'Για θέματα διαχείρισης έργων, ασφάλειας και υγείας, βελτίωσης διαδικασιών ή υπεύθυνων ψηφιακών εργαλείων, επικοινωνήστε μαζί μου μέσω email.',
      emailAction: 'Αποστολή email',
      ecosystemAction: 'Markellos Ecosystem',
    },
    footer: 'Επαγγελματικό portfolio · Επιλεγμένα και ανωνυμοποιημένα έργα',
  },
}
