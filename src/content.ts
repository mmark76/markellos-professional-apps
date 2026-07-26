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
  url?: string
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
      projects: 'Applications',
      approach: 'Process',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Professional experience · Practical needs · Digital tools',
      title: 'Practical applications created to make everyday work clearer and easier.',
      lead:
        'A selection of applications developed from real working needs, with emphasis on organisation, consistency and responsible use.',
      primaryAction: 'View applications',
      secondaryAction: 'Professional profile',
    },
    profile: {
      eyebrow: 'Professional profile',
      title: 'Engineering, management and practical digital improvement.',
      paragraphs: [
        'My work combines civil engineering, project management, health and safety, and the development of practical digital tools.',
        'The applications presented here were created to reduce repetitive work, organise information and make everyday tasks easier to follow.',
      ],
      facts: [
        { value: '20+', label: 'years of professional experience' },
        { value: 'MBA', label: 'management and strategic perspective' },
        { value: '4', label: 'selected professional applications' },
      ],
    },
    expertise: {
      eyebrow: 'Areas of experience',
      title: 'Professional knowledge applied to practical problems.',
      intro:
        'The applications reflect experience in engineering, management, health and safety, administration and workplace organisation.',
      items: [
        { title: 'Civil Engineering', description: 'Technical coordination, structured problem solving and responsible decision-making.' },
        { title: 'Project & Contract Management', description: 'Planning work, setting priorities, monitoring progress and managing responsibilities.' },
        { title: 'Health & Safety', description: 'Organising risks, preventive measures, responsibilities, training and follow-up actions.' },
        { title: 'Process Improvement', description: 'Making repetitive or fragmented work simpler, clearer and easier to manage.' },
        { title: 'Public-Sector Work', description: 'Respecting procedures, confidentiality, accountability and organisational responsibilities.' },
        { title: 'Application Design', description: 'Creating tools that are understandable, useful and appropriate for their intended purpose.' },
      ],
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Selected professional applications.',
      intro:
        'The descriptions focus on why each application was created, what it offers and how it supports everyday work.',
      labels: {
        problem: 'Why it was created',
        solution: 'What it offers',
        contribution: 'My role',
        technologies: 'Technology',
        safeguards: 'Protection and limitations',
        status: 'Stage of development',
      },
      items: [
        {
          id: 'health-safety',
          eyebrow: 'Workplace safety and organisation',
          title: 'Health & Safety Management Application',
          summary:
            'An application for keeping workplace safety information organised and easier to monitor.',
          problem:
            'Risk assessments, responsibilities, preventive measures and training records are often spread across different documents, making regular follow-up difficult.',
          solution:
            'It brings the main information together in one organised environment, helping users record risks, follow actions and maintain a clearer overview.',
          contribution:
            'I identified the needs, organised the way the application should work and guided its design and gradual improvement.',
          technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'Controlled access'],
          safeguards:
            'The public presentation uses demonstration data only. The application does not replace approved procedures, legal duties or professional judgement.',
          status: 'Private development prototype for evaluation and further improvement.',
        },
        {
          id: 'treasury',
          eyebrow: 'Document preparation and calculations',
          title: 'Electronic Treasury Workflow',
          summary:
            'An application that helps prepare a structured treasury document with fewer repeated entries and calculations.',
          problem:
            'Repeated typing, manual calculations, document numbering and preparation take time and can lead to avoidable inconsistencies.',
          solution:
            'It reuses common information, calculates totals automatically, prepares the document for printing or PDF and keeps a personal archive.',
          contribution:
            'I studied the existing work, defined the required functions and organised the calculation, numbering, saving and backup rules.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Local storage', 'Print/PDF support', 'Backup file'],
          safeguards:
            'Information remains on the user’s computer. The application is a personal support tool and is not presented as an official treasury system.',
          status: 'Private working version for controlled personal use.',
        },
        {
          id: 'roster',
          eyebrow: 'Monthly planning and record keeping',
          title: 'Monthly Service Roster Tool',
          summary:
            'A personal application for preparing monthly service rosters and producing clear printable results.',
          problem:
            'Monthly rosters require repeated entries, correct handling of dates, weekends and holidays, accurate totals and reliable personal archiving.',
          solution:
            'It provides a separate workspace for each month, remembers personnel information, calculates totals and supports printing, PDF and backup.',
          contribution:
            'I defined the purpose and workflow, organised the monthly records and planned the saving, backup and desktop use of the application.',
          technologies: ['React', 'TypeScript', 'Local database', 'Desktop application', 'Windows installer'],
          safeguards:
            'It is intended only as a personal aid. Final information must always be checked through the organisation’s approved procedures.',
          status: 'Private application currently being checked for desktop use.',
        },
        {
          id: 'ntt-certification',
          eyebrow: 'Certification preparation and technical learning',
          title: 'Network & Telecommunications Technician Certification',
          summary:
            'A structured study application for preparing for the EOPPEP Network and Telecommunications Technician certification examinations.',
          problem:
            'Certification preparation covers a broad technical syllabus and can become fragmented across notes, theory, exercises and practice questions.',
          solution:
            'It organises the syllabus into clear modules and combines concise theory, active-recall questions, practical labs, quizzes and local progress tracking.',
          contribution:
            'I designed the learning structure, organised the curriculum and developed the public application as an independent study aid.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'YAML curriculum', 'Local storage', 'GitHub Pages'],
          safeguards:
            'The application is an independent educational aid, not official EOPPEP material. The syllabus mapping is still being verified and should be used alongside current official sources.',
          status: 'Public pilot / early-access version with 1 of 16 modules currently available.',
          url: 'https://ntt-certification.markellosecosystem.com/',
        },
      ],
    },
    approach: {
      eyebrow: 'How I work',
      title: 'How the projects are developed.',
      intro:
        'Each project starts with a practical need and develops gradually through understanding, design, testing and improvement.',
      items: [
        {
          number: '01',
          title: 'Understand the need',
          description: 'First, I study what people are trying to do, where difficulties appear and what information they need.',
        },
        {
          number: '02',
          title: 'Set clear limits',
          description: 'I define what the application should do, what it should not do and which responsibilities must remain with the user or organisation.',
        },
        {
          number: '03',
          title: 'Build step by step',
          description: 'The main functions are created gradually so that the application remains clear, manageable and easy to improve.',
        },
        {
          number: '04',
          title: 'Test and improve',
          description: 'The application is reviewed in practice, problems are corrected and improvements are added in successive stages.',
        },
      ],
    },
    confidentiality: {
      title: 'Confidentiality',
      text:
        'The portfolio does not include private code, real operational data, internal correspondence, credentials or identifiable records. Examples use fabricated data.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Professional discussion and collaboration.',
      text:
        'For discussions related to project management, health and safety, process improvement or practical digital tools, contact me by email.',
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
      expertise: 'Εμπειρία',
      projects: 'Εφαρμογές',
      approach: 'Διαδικασία',
      contact: 'Επικοινωνία',
    },
    hero: {
      eyebrow: 'Επαγγελματική εμπειρία · Πρακτικές ανάγκες · Ψηφιακά εργαλεία',
      title: 'Πρακτικές εφαρμογές που κάνουν την καθημερινή εργασία σαφέστερη και ευκολότερη.',
      lead:
        'Μια επιλογή εφαρμογών που αναπτύχθηκαν από πραγματικές ανάγκες εργασίας, με έμφαση στην οργάνωση, τη συνέπεια και την υπεύθυνη χρήση.',
      primaryAction: 'Προβολή εφαρμογών',
      secondaryAction: 'Επαγγελματικό προφίλ',
    },
    profile: {
      eyebrow: 'Επαγγελματικό προφίλ',
      title: 'Μηχανική, διοίκηση και πρακτική ψηφιακή βελτίωση.',
      paragraphs: [
        'Η εργασία μου συνδυάζει την πολιτική μηχανική, τη διαχείριση έργων, την ασφάλεια και υγεία και την ανάπτυξη πρακτικών ψηφιακών εργαλείων.',
        'Οι εφαρμογές που παρουσιάζονται εδώ δημιουργήθηκαν για να μειώνουν την επαναλαμβανόμενη εργασία, να οργανώνουν πληροφορίες και να διευκολύνουν καθημερινές εργασίες.',
      ],
      facts: [
        { value: '20+', label: 'χρόνια επαγγελματικής εμπειρίας' },
        { value: 'MBA', label: 'διοικητική και στρατηγική οπτική' },
        { value: '4', label: 'επιλεγμένες επαγγελματικές εφαρμογές' },
      ],
    },
    expertise: {
      eyebrow: 'Τομείς εμπειρίας',
      title: 'Επαγγελματική γνώση εφαρμοσμένη σε πρακτικά προβλήματα.',
      intro:
        'Οι εφαρμογές συνδυάζουν εμπειρία στη μηχανική, τη διοίκηση, την ασφάλεια και υγεία, τη διοικητική εργασία και την οργάνωση.',
      items: [
        { title: 'Πολιτική Μηχανική', description: 'Τεχνικός συντονισμός, δομημένη επίλυση προβλημάτων και υπεύθυνη λήψη αποφάσεων.' },
        { title: 'Διαχείριση Έργων και Συμβάσεων', description: 'Προγραμματισμός εργασιών, καθορισμός προτεραιοτήτων, παρακολούθηση προόδου και διαχείριση ευθυνών.' },
        { title: 'Ασφάλεια και Υγεία', description: 'Οργάνωση κινδύνων, προληπτικών μέτρων, αρμοδιοτήτων, εκπαίδευσης και ενεργειών παρακολούθησης.' },
        { title: 'Βελτίωση Διαδικασιών', description: 'Απλοποίηση επαναλαμβανόμενων ή κατακερματισμένων εργασιών ώστε να γίνονται σαφέστερες και ευκολότερες.' },
        { title: 'Εργασία στον Δημόσιο Τομέα', description: 'Σεβασμός στις διαδικασίες, την εμπιστευτικότητα, τη λογοδοσία και τις οργανωτικές αρμοδιότητες.' },
        { title: 'Σχεδιασμός Εφαρμογών', description: 'Δημιουργία εργαλείων που είναι κατανοητά, χρήσιμα και κατάλληλα για τον σκοπό τους.' },
      ],
    },
    projects: {
      eyebrow: 'Επιλεγμένα έργα',
      title: 'Επιλεγμένες επαγγελματικές εφαρμογές.',
      intro:
        'Οι περιγραφές εξηγούν γιατί δημιουργήθηκε κάθε εφαρμογή, τι προσφέρει και πώς υποστηρίζει την καθημερινή εργασία.',
      labels: {
        problem: 'Γιατί δημιουργήθηκε',
        solution: 'Τι προσφέρει',
        contribution: 'Ο ρόλος μου',
        technologies: 'Τεχνολογία',
        safeguards: 'Προστασία και περιορισμοί',
        status: 'Στάδιο ανάπτυξης',
      },
      items: [
        {
          id: 'health-safety',
          eyebrow: 'Ασφάλεια στον χώρο εργασίας και οργάνωση',
          title: 'Εφαρμογή Διαχείρισης Ασφάλειας και Υγείας',
          summary:
            'Εφαρμογή για την οργανωμένη καταγραφή και ευκολότερη παρακολούθηση πληροφοριών ασφάλειας και υγείας στην εργασία.',
          problem:
            'Οι εκτιμήσεις κινδύνου, οι αρμοδιότητες, τα μέτρα προστασίας και τα στοιχεία εκπαίδευσης βρίσκονται συχνά σε διαφορετικά έγγραφα, γεγονός που δυσκολεύει την παρακολούθησή τους.',
          solution:
            'Συγκεντρώνει τις βασικές πληροφορίες σε ένα οργανωμένο περιβάλλον και βοηθά στην καταγραφή κινδύνων, την παρακολούθηση ενεργειών και τη διατήρηση σαφέστερης εικόνας.',
          contribution:
            'Καθόρισα τις ανάγκες που έπρεπε να καλύπτει η εφαρμογή, οργάνωσα τον τρόπο λειτουργίας της και καθοδήγησα τον σχεδιασμό και τη σταδιακή βελτίωσή της.',
          technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'Ελεγχόμενη πρόσβαση'],
          safeguards:
            'Η δημόσια παρουσίαση χρησιμοποιεί μόνο υποθετικά στοιχεία. Η εφαρμογή δεν αντικαθιστά τις εγκεκριμένες διαδικασίες, τις νομικές υποχρεώσεις ή την επαγγελματική κρίση.',
          status: 'Ιδιωτικό πρωτότυπο ανάπτυξης για αξιολόγηση και περαιτέρω βελτίωση.',
        },
        {
          id: 'treasury',
          eyebrow: 'Προετοιμασία εγγράφων και υπολογισμοί',
          title: 'Ηλεκτρονική Ροή Εργασίας Ταμείου',
          summary:
            'Εφαρμογή που βοηθά στην προετοιμασία δομημένου εγγράφου ταμείου με λιγότερες επαναλαμβανόμενες καταχωρίσεις και υπολογισμούς.',
          problem:
            'Η επαναλαμβανόμενη πληκτρολόγηση, οι χειροκίνητοι υπολογισμοί, η αρίθμηση και η προετοιμασία εγγράφων απαιτούν χρόνο και μπορεί να προκαλέσουν ασυνέπειες.',
          solution:
            'Επαναχρησιμοποιεί συνηθισμένες πληροφορίες, υπολογίζει αυτόματα τα σύνολα, προετοιμάζει το έγγραφο για εκτύπωση ή PDF και διατηρεί προσωπικό αρχείο.',
          contribution:
            'Μελέτησα την υφιστάμενη εργασία, καθόρισα τις απαραίτητες λειτουργίες και οργάνωσα τους κανόνες υπολογισμού, αρίθμησης, αποθήκευσης και δημιουργίας αντιγράφων ασφαλείας.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Τοπική αποθήκευση', 'Εκτύπωση/PDF', 'Αρχείο αντιγράφου ασφαλείας'],
          safeguards:
            'Οι πληροφορίες παραμένουν στον υπολογιστή του χρήστη. Η εφαρμογή είναι προσωπικό βοηθητικό εργαλείο και δεν παρουσιάζεται ως επίσημο σύστημα ταμείου.',
          status: 'Ιδιωτική λειτουργική έκδοση για ελεγχόμενη προσωπική χρήση.',
        },
        {
          id: 'roster',
          eyebrow: 'Μηνιαίος προγραμματισμός και αρχειοθέτηση',
          title: 'Εργαλείο Μηνιαίων Καταστάσεων Υπηρεσιών',
          summary:
            'Προσωπική εφαρμογή για την προετοιμασία μηνιαίων καταστάσεων υπηρεσιών και την παραγωγή καθαρών εκτυπώσιμων αποτελεσμάτων.',
          problem:
            'Οι μηνιαίες καταστάσεις απαιτούν επαναλαμβανόμενες καταχωρίσεις, σωστό χειρισμό ημερομηνιών, Σαββατοκύριακων και αργιών, ακριβή σύνολα και αξιόπιστη αρχειοθέτηση.',
          solution:
            'Παρέχει ξεχωριστό χώρο εργασίας για κάθε μήνα, θυμάται τα στοιχεία προσωπικού, υπολογίζει σύνολα και υποστηρίζει εκτύπωση, PDF και δημιουργία αντιγράφου ασφαλείας.',
          contribution:
            'Καθόρισα τον σκοπό και τη ροή εργασίας, οργάνωσα τις μηνιαίες καταστάσεις και σχεδίασα την αποθήκευση, τη δημιουργία αντιγράφων ασφαλείας και τη χρήση ως εφαρμογή υπολογιστή.',
          technologies: ['React', 'TypeScript', 'Τοπική βάση δεδομένων', 'Εφαρμογή υπολογιστή', 'Windows installer'],
          safeguards:
            'Προορίζεται μόνο ως προσωπικό βοηθητικό εργαλείο. Οι τελικές πληροφορίες πρέπει πάντοτε να ελέγχονται μέσω των εγκεκριμένων διαδικασιών του οργανισμού.',
          status: 'Ιδιωτική εφαρμογή που βρίσκεται σε έλεγχο για χρήση σε υπολογιστή.',
        },
        {
          id: 'ntt-certification',
          eyebrow: 'Προετοιμασία πιστοποίησης και τεχνική μάθηση',
          title: 'Πιστοποίηση Τεχνικού Δικτύων και Τηλεπικοινωνιών',
          summary:
            'Δομημένη εκπαιδευτική εφαρμογή για προετοιμασία στις εξετάσεις πιστοποίησης ΕΟΠΠΕΠ της ειδικότητας Τεχνικός Δικτύων και Τηλεπικοινωνιών.',
          problem:
            'Η προετοιμασία καλύπτει ευρύ τεχνικό αντικείμενο και μπορεί να κατακερματιστεί σε σημειώσεις, θεωρία, ασκήσεις και ερωτήσεις εξάσκησης.',
          solution:
            'Οργανώνει την ύλη σε σαφείς ενότητες και συνδυάζει σύντομη θεωρία, ερωτήσεις ενεργητικής ανάκλησης, πρακτικά εργαστήρια, quiz και τοπική παρακολούθηση προόδου.',
          contribution:
            'Σχεδίασα τη μαθησιακή δομή, οργάνωσα το πρόγραμμα ύλης και ανέπτυξα τη δημόσια εφαρμογή ως ανεξάρτητο βοήθημα μελέτης.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Δομημένη ύλη YAML', 'Τοπική αποθήκευση', 'GitHub Pages'],
          safeguards:
            'Η εφαρμογή είναι ανεξάρτητο εκπαιδευτικό βοήθημα και όχι επίσημο υλικό του ΕΟΠΠΕΠ. Η αντιστοίχιση της ύλης εξακολουθεί να επαληθεύεται και πρέπει να χρησιμοποιείται μαζί με τις ισχύουσες επίσημες πηγές.',
          status: 'Δημόσια πιλοτική έκδοση / early access με διαθέσιμη 1 από 16 ενότητες.',
          url: 'https://ntt-certification.markellosecosystem.com/',
        },
      ],
    },
    approach: {
      eyebrow: 'Τρόπος εργασίας',
      title: 'Πώς αναπτύσσονται τα έργα.',
      intro:
        'Κάθε έργο ξεκινά από μια πρακτική ανάγκη και εξελίσσεται σταδιακά μέσα από κατανόηση, σχεδιασμό, δοκιμή και βελτίωση.',
      items: [
        {
          number: '01',
          title: 'Κατανόηση της ανάγκης',
          description: 'Αρχικά μελετώ τι προσπαθούν να κάνουν οι χρήστες, πού εμφανίζονται δυσκολίες και ποιες πληροφορίες χρειάζονται.',
        },
        {
          number: '02',
          title: 'Καθορισμός σαφών ορίων',
          description: 'Ορίζω τι πρέπει να κάνει η εφαρμογή, τι δεν πρέπει να κάνει και ποιες ευθύνες παραμένουν στον χρήστη ή στον οργανισμό.',
        },
        {
          number: '03',
          title: 'Σταδιακή κατασκευή',
          description: 'Οι βασικές λειτουργίες δημιουργούνται βήμα προς βήμα, ώστε η εφαρμογή να παραμένει σαφής, διαχειρίσιμη και εύκολη στη βελτίωση.',
        },
        {
          number: '04',
          title: 'Δοκιμή και βελτίωση',
          description: 'Η εφαρμογή ελέγχεται στην πράξη, τα προβλήματα διορθώνονται και νέες βελτιώσεις προστίθενται σταδιακά.',
        },
      ],
    },
    confidentiality: {
      title: 'Εμπιστευτικότητα',
      text:
        'Το portfolio δεν περιλαμβάνει ιδιωτικό κώδικα, πραγματικά υπηρεσιακά δεδομένα, εσωτερική αλληλογραφία, διαπιστευτήρια ή αναγνωρίσιμα στοιχεία. Τα παραδείγματα χρησιμοποιούν υποθετικά δεδομένα.',
    },
    contact: {
      eyebrow: 'Επικοινωνία',
      title: 'Επαγγελματική συζήτηση και συνεργασία.',
      text:
        'Για συζητήσεις σχετικά με τη διαχείριση έργων, την ασφάλεια και υγεία, τη βελτίωση διαδικασιών ή πρακτικά ψηφιακά εργαλεία, μπορείτε να επικοινωνήσετε μαζί μου μέσω email.',
      emailAction: 'Αποστολή email',
      ecosystemAction: 'Markellos Ecosystem',
    },
    footer: 'Επαγγελματικό portfolio · Επιλεγμένα και ανωνυμοποιημένα έργα',
  },
}
