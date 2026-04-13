import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  hr: {
    translation: {
      nav: {
        about: "O nama",
        menu: "Meni",
        location: "Lokacija",
        contact: "Kontakt",
      },
      hero: {
        tagline: "Zamotaj dan u slatko!",
        ctaMenu: "Pogledaj meni",
        ctaOrder: "Naruči sada",
      },
      about: {
        title: "O nama",
        text: `
<p>Dobrodošli u <strong>PalachinqO</strong> – palačinkarnicu smještenu u srcu Zagreba, uz Mali plac - Britanac.</p>
 
<p>PalachinqO je nastao iz želje za nečim toplim, jednostavnim i poznatim – palačinkama, koje nisu samo hrana, nego uspomena, tradicija i trenutak… samo za sebe.</p>

<p>Naša receptura je jednostavna, provjerena i domaća – baš onakva kakvu generacije pamte. Nema pretjerivanja, nema kompliciranja, nema modernih prečaca.</p>
<!--break-->
<p>Samo tanko, mekano i prozračno tijesto sa hrskavim rubovima, punjeno premium namazima najviše kvalitete.</p>

<p>Održavamo visoku razinu higijene, nutritivnih i energetskih vrijednosti, ali i okusa koji se ne može postići “gotovim”, umjetnim smjesama.</p>

<p>Ovdje se sve temelji na domaćoj pripremi i svježini. Smjesu radimo isključivo u stvarnom vremenu, bez zamrzavanja ili dugotrajnog stajanja.</p>

<p>Sastojci se peku odmah nakon što se zamiješaju, u malim količinama i točno onda kada je Vama potrebno. Upravo onako kako rade bake za unuke, s puno pažnje i ljubavi.</p>

<p>PalachinqO u malom prostoru stvara veliki osmijeh svima vama koji nam svakodnevno dolazite; studentima – koji tražite brzi zalogaj, obiteljima – u zajedničkim trenucima u šetnji, turistima – koji želite probati nešto izvorno i domaće, mladima – koji želite nešto slatko u opuštenoj atmosferi.</p>

<p>Svima vama koji svakodnevno “živite Britanac” i pišete neku svoju jedinstvenu životnu priču, PalachinqO ju čini još toplijom, mirisnijom i ukusnijom.</p>

<p><strong>Pozor!</strong> Dolaskom u PalachinqO riskirate povratak u djetinjstvo.</p>

<p>Veselimo se zajedničkim trenucima uz mirise i okuse koji se pamte!</p>
`,
        readMore: "Pročitaj više",
        readLess: "Sakrij",
      },
      menu: {
        title: "Meni",
        sweet: "Palačinke",
        salty: "Slane",
        drinks: "Pića",
      },
      location: {
        title: "Gdje smo?",
        open: "Otvoreno",
        days: "Uto–Ned",
        hours: "15:00 - 23:00",
        hoursLater: "Slatke: 11:00–23:00",
        taste: "Ujutro slane, popodne slatke.",
        closedSunday: "Ponedjeljkom ne radimo",
      },
      contact: {
        title: "Kontakt",
        name: "Ime",
        email: "Email",
        message: "Poruka",
        send: "Pošalji",
      },
      footer: { rights: "Sva prava pridržana." },
      privacy: {
        title: "Pravila privatnosti",
        backToHome: "Povratak na početnu",
        lastUpdatedLabel: "Zadnje ažuriranje:",
        lastUpdated: "2025-11-05",

        intro: {
          heading: "Uvod",
          body: "Ova Pravila privatnosti objašnjavaju kako prikupljamo, koristimo, otkrivamo i štitimo vaše osobne podatke kada koristite našu web stranicu i usluge.",
        },

        data_we_collect: {
          heading: "Podaci koje prikupljamo",
          list: [
            "Podaci koje nam izravno dajete — ime, e-mail i podaci o narudžbi kada izvršite narudžbu ili nas kontaktirate.",
            "Automatski prikupljeni podaci — dijagnostika korištenja, podaci o uređaju i pregledniku, IP adresa, kolačići i slične tehnologije.",
            "Treće strane — pružatelji usluga plaćanja, analitike ili povezane usluge (ako je primjenjivo).",
          ],
        },

        how_we_use: {
          heading: "Kako koristimo vaše podatke",
          list: [
            "Za pružanje i funkcioniranje usluga te izvršavanje narudžbi.",
            "Za komunikaciju o narudžbama, obavijestima i podršci.",
            "Za poboljšanje naše web stranice i ponude putem analitike i testiranja.",
            "Za ispunjavanje zakonskih obveza te sprječavanje zlouporaba i prijevara.",
          ],
        },

        cookies: {
          heading: "Kolačići i praćenje",
          body: "Koristimo kolačiće i slične tehnologije za pamćenje postavki, analizu korištenja i pružanje određenih funkcija. Pogledajte našu Politiku kolačića za više detalja.",
        },

        data_sharing: {
          heading: "Dijeljenje podataka i treće strane",
          list: [
            "Dijelimo podatke s pružateljima usluga (procesori plaćanja, hosting, analitika) koji djeluju u naše ime.",
            "Možemo otkriti podatke kako bismo ispunili zakonske zahtjeve ili zaštitili prava i imovinu.",
            "Ne prodajemo vaše osobne podatke trećim stranama.",
          ],
        },

        retention: {
          heading: "Zadržavanje podataka",
          body: "Osobne podatke zadržavamo onoliko dugo koliko je potrebno za pružanje usluga, ispunjavanje zakonskih obveza i rješavanje sporova.",
        },

        your_rights: {
          heading: "Vaša prava",
          list: [
            "Zatražiti pristup osobnim podacima koje posjedujemo.",
            "Zatražiti ispravak ili brisanje osobnih podataka (uz zakonske iznimke).",
            "Prigovoriti ili ograničiti obradu gdje je primjenjivo.",
            "Povući privolu kada se na nju oslanjamo.",
            "Za ostvarivanje ovih prava kontaktirajte nas putem donje e-pošte.",
          ],
        },

        security: {
          heading: "Sigurnost",
          body: "Primjenjujemo razumne tehničke i organizacijske mjere kako bismo zaštitili vaše osobne podatke, ali ne možemo jamčiti apsolutnu sigurnost.",
        },

        international_transfers: {
          heading: "Međunarodni prijenosi",
          body: "Osobni podaci mogu se obrađivati u drugim državama; poduzimamo korake kako bismo osigurali odgovarajuće zaštitne mjere.",
        },

        changes: {
          heading: "Promjene ovih pravila",
          list: [
            "Povremeno možemo ažurirati ova Pravila privatnosti. Datum ažuriranja bit će prikazan na vrhu stranice.",
            "Ako su promjene značajne, možemo obavijestiti korisnike putem e-pošte ili istaknute obavijesti na stranici.",
          ],
        },

        contactHeading: "Kontakt",
        contactEmail: "E-pošta: info@palachinqo.com",
      },
      terms: {
        title: "Uvjeti korištenja",
        backToHome: "Povratak na početnu",
        lastUpdatedLabel: "Zadnje ažuriranje:",
        lastUpdated: "2025-11-05",

        intro: {
          heading: "Uvod",
          body: "Ovi Uvjeti korištenja reguliraju vaše korištenje naše web stranice i usluga. Pristupanjem ili korištenjem stranice prihvaćate ove uvjete. Ako se ne slažete, nemojte koristiti stranicu.",
        },

        use_of_service: {
          heading: "Korištenje usluge",
          list: {
            item1:
              "Morate imati najmanje 16 godina za korištenje naših usluga (ili minimalnu dob u vašoj jurisdikciji).",
            item2:
              "Slažete se koristiti stranicu zakonito i ne sudjelovati u zloupotrebi ili prijevari.",
            item3:
              "Možemo suspendirati ili ukinuti račune koji krše ove uvjete.",
          },
        },

        pricing_and_payments: {
          heading: "Cijene i plaćanja",
          list: {
            item1:
              "Cijene prikazane na stranici su u EUR i mogu uključivati ili isključivati poreze.",
            item2:
              "Zadržavamo pravo promjene cijena i ispravka pogrešaka. Potvrdite konačnu cijenu na blagajni.",
          },
        },

        disclaimer: {
          heading: "Odricanje od jamstava",
          body: "Usluga se pruža 'kakva jest' i odričemo se svih jamstava u najvećoj mjeri dopuštenoj zakonom.",
        },

        changes: {
          heading: "Promjene ovih uvjeta",
          list: {
            item1:
              "Povremeno možemo ažurirati ove Uvjete. Datum ažuriranja bit će prikazan na vrhu stranice.",
            item2:
              "Nastavak korištenja nakon promjena znači prihvaćanje ažuriranih Uvjeta.",
          },
        },

        privacy: {
          heading: "Privatnost",
          body: "Naša Pravila privatnosti opisuju kako prikupljamo i koristimo osobne podatke. Korištenjem stranice pristajete na te prakse.",
        },

        governing_law: {
          heading: "Mjerodavno pravo",
          body: "Ovi Uvjeti podliježu zakonima zemlje u kojoj je registrirano naše poslovanje, osim ako lokalni zakon ne zahtijeva drugačije.",
        },

        contactHeading: "Kontakt",
        contactEmail: "E-pošta: info@palachinqo.com",
      },
      cookies: {
        title: "Politika kolačića",
        backToHome: "Povratak na početnu",
        lastUpdatedLabel: "Zadnje ažuriranje:",
        lastUpdated: "2025-11-05",

        what_are_cookies: {
          heading: "Što su kolačići?",
          body: "Kolačići su male tekstualne datoteke koje se pohranjuju na vaš uređaj kada posjetite web stranice. Pomažu web stranicama zapamtiti informacije o vašem posjetu — poput jezika ili sadržaja košarice — kako bi poboljšale vaše iskustvo.",
        },

        how_we_use: {
          heading: "Kako koristimo kolačiće",
          list: [
            "Pamćenje jezika i korisničkih postavki.",
            "Održavanje sesije (ostajete prijavljeni tijekom posjeta).",
            "Analiza korištenja stranice putem anonimne statistike.",
            "Osiguravanje osnovnih funkcija i poboljšanja performansi.",
          ],
        },

        types: {
          heading: "Koje vrste kolačića koristimo",
          list: [
            "Nužni kolačići — potrebni za rad stranice.",
            "Preferencijski kolačići — pamte korisničke izbore.",
            "Analitički kolačići — prikupljaju anonimne podatke o korištenju.",
            "Marketinški kolačići — prikazivanje relevantnih ponuda (ako se koriste).",
          ],
        },

        your_choices: {
          heading: "Vaše mogućnosti",
          list: [
            "Možete blokirati kolačiće (neke funkcije možda neće raditi).",
            "Možete izbrisati kolačiće ručno.",
            "Možete blokirati kolačiće trećih strana.",
            "Upute potražite u postavkama svog preglednika.",
          ],
        },

        contact_and_updates: {
          heading: "Kontakt i ažuriranja",
          body: "Ako imate pitanja o našoj Politici kolačića, kontaktirajte nas na info@palachinqo.com. Ova se politika može povremeno ažurirati; datum će biti prikazan ovdje.",
        },

        contactHeading: "Kontakt",
        contactEmail: "E-pošta: info@palachinqo.com",
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: "About",
        menu: "Menu",
        location: "Location",
        contact: "Contact",
      },
      hero: {
        tagline: "Roll your day into sweetness!",
        ctaMenu: "See menu",
        ctaOrder: "Order now",
      },
      about: {
        title: "About us",
        text: `<p>Welcome to <strong>PalachinqO</strong> – a crêpe house located in the heart of Zagreb, right next to Mali plac – Britanac.</p>

<p>PalachinqO was created out of a desire for something warm, simple, and familiar – crêpes that are not just food, but a memory, a tradition, and a moment… just for yourself.</p>

<p>Our recipe is simple, time-tested, and homemade – just the way generations remember it. No exaggeration, no complications, no modern shortcuts.</p>
<!--break-->
<p>Only thin, soft, airy batter with crispy edges, filled with premium spreads of the highest quality.</p>

<p>We maintain a high standard of hygiene, nutritional and energy value, as well as flavours that cannot be achieved with “instant” or artificial mixes.</p>

<p>Everything here is based on homemade preparation and freshness. We make the batter exclusively in real time – never frozen, never pre-made, never left to sit.</p>

<p>Ingredients are cooked immediately after mixing, in small batches, and exactly when you need them. Just like grandmothers make for their grandchildren – with care and lots of love.</p>

<p>In a small space, PalachinqO creates big smiles for all of you who visit us daily: students looking for a quick bite, families enjoying a walk, tourists wanting to try something local and authentic, and young people who simply want something sweet in a relaxed setting.</p>

<p>To all of you who “live Britanac” every day and write your own unique life story, PalachinqO makes it warmer, more fragrant, and more delicious.</p>

<p><strong>Warning!</strong> By coming to PalachinqO, you risk being transported back to your childhood.</p>

<p>We look forward to sharing moments filled with flavours and aromas you won’t forget!</p>`,
        readMore: "Read more",
        readLess: "Show less",
      },
      menu: {
        title: "Menu",
        sweet: "Crepes",
        salty: "Salty",
        drinks: "Drinks",
      },
      location: {
        title: "Where to find us?",
        open: "Open",
        days: "Tue–Sun",
        hours: "15:00 - 23:00",
        taste: "Salty in the morning, sweet in the evening.",
        closedSunday: "We are closed on Sundays",
      },
      contact: {
        title: "Contact",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
      },
      footer: { rights: "All rights reserved." },
      privacy: {
        title: "Privacy Policy",
        backToHome: "Back to Home",
        lastUpdatedLabel: "Last updated:",
        lastUpdated: "2025-11-05",

        intro: {
          heading: "Introduction",
          body: "This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services.",
        },

        data_we_collect: {
          heading: "Data we collect",
          list: [
            "Information you give us directly — name, email, and order details when you place an order or contact us.",
            "Automatically collected data — usage diagnostics, device and browser info, IP address, cookies, and similar technologies.",
            "Third-party sources — payment processors, analytics providers, or connected services (when applicable).",
          ],
        },

        how_we_use: {
          heading: "How we use your data",
          list: [
            "To provide and operate our services and fulfill orders.",
            "To communicate with you about orders, updates, and support.",
            "To improve our website and offerings via analytics and testing.",
            "To comply with legal obligations and prevent abuse or fraud.",
          ],
        },

        cookies: {
          heading: "Cookies & tracking",
          body: "We use cookies and similar technologies to remember preferences, analyze usage, and provide certain features. See our Cookies Policy for details.",
        },

        data_sharing: {
          heading: "Data sharing & third parties",
          list: [
            "We share data with service providers (payment processors, hosting, analytics) who perform services on our behalf.",
            "We may disclose information to comply with legal requirements or protect rights and property.",
            "We do not sell your personal data to third parties.",
          ],
        },

        retention: {
          heading: "Data retention",
          body: "We retain personal data as long as necessary to provide services, comply with legal obligations, and resolve disputes.",
        },

        your_rights: {
          heading: "Your rights",
          list: [
            "Request access to the personal data we hold about you.",
            "Request correction or deletion of your personal data (subject to legal limits).",
            "Object to or restrict processing where applicable.",
            "Withdraw consent where we rely on it.",
            "To exercise these rights, contact us at the email below.",
          ],
        },

        security: {
          heading: "Security",
          body: "We implement reasonable technical and organizational measures to protect your personal data, but cannot guarantee absolute security.",
        },

        international_transfers: {
          heading: "International transfers",
          body: "Your personal data may be processed in countries other than your residence; we take steps to ensure appropriate safeguards.",
        },

        changes: {
          heading: "Changes to this policy",
          list: [
            "We may update this Privacy Policy from time to time. The updated date will be shown at the top of this page.",
            "If changes are significant, we may notify users by email or a prominent notice on the site.",
          ],
        },

        contactHeading: "Contact",
        contactEmail: "Email: info@palachinqo.com",
      },
      terms: {
        title: "Terms of Service",
        backToHome: "Back to Home",
        lastUpdatedLabel: "Last updated:",
        lastUpdated: "2025-11-05",

        intro: {
          heading: "Introduction",
          body: "These Terms of Service govern your use of our website and services. By accessing or using the site you agree to be bound by these terms. If you do not agree, please do not use the site.",
        },

        use_of_service: {
          heading: "Use of the service",
          list: {
            item1:
              "You must be at least 16 years old to use our services (or the minimum age required in your jurisdiction).",
            item2:
              "You agree to use the site lawfully and not to engage in abusive or fraudulent activity.",
            item3:
              "We may suspend or terminate accounts that violate these terms.",
          },
        },

        pricing_and_payments: {
          heading: "Pricing & Payments",
          list: {
            item1:
              "Prices displayed on the site are in EUR and may include or exclude taxes as indicated.",
            item2:
              "We reserve the right to change prices and correct errors. Confirm the final price at checkout.",
          },
        },

        disclaimer: {
          heading: "Disclaimer of warranties",
          body: 'The service is provided "as is" and we disclaim all warranties to the fullest extent permitted by law.',
        },

        changes: {
          heading: "Changes to these terms",
          list: {
            item1:
              "We may update these Terms occasionally. We will post the updated date at the top of this page.",
            item2:
              "Continued use after changes constitutes acceptance of the updated Terms.",
          },
        },

        privacy: {
          heading: "Privacy",
          body: "Our Privacy Policy describes how we collect and use personal data. By using the site you also consent to the practices described there.",
        },

        governing_law: {
          heading: "Governing law",
          body: "These Terms are governed by the laws of the jurisdiction where our business is established, unless otherwise required by mandatory local law.",
        },

        contactHeading: "Contact",
        contactEmail: "Email: info@palachinqo.com",
      },
      cookies: {
        title: "Cookies Policy",
        backToHome: "Back to Home",
        lastUpdatedLabel: "Last updated:",
        lastUpdated: "2025-11-05",

        what_are_cookies: {
          heading: "What are cookies?",
          body: "Cookies are small text files stored on your device (computer or mobile) by websites you visit. They help websites remember information about your visit — like language preference or items in your shopping cart — to improve your experience.",
        },

        how_we_use: {
          heading: "How we use cookies",
          list: [
            "Remember your language and preferences.",
            "Maintain session state (keep you logged in during a visit).",
            "Analyze site usage (anonymous analytics to improve content).",
            "Provide basic functionality and performance improvements.",
          ],
        },

        types: {
          heading: "Types of cookies we use",
          list: [
            "Essential cookies — required for the site to work (e.g., session cookies).",
            "Preference cookies — remember user choices (language, theme).",
            "Analytics cookies — collect anonymous usage information.",
            "Advertising cookies — to display relevant offers (if applicable).",
          ],
        },

        your_choices: {
          heading: "Your choices",
          list: [
            "Block cookies (may break some features).",
            "Delete cookies manually.",
            "Block third-party cookies.",
            "Check your browser help pages for instructions.",
          ],
        },

        contact_and_updates: {
          heading: "Contact & updates",
          body: "If you have questions about our Cookies Policy, contact us at info@palachinqo.com. We may update this policy occasionally; the 'last updated' date will be shown here.",
        },

        contactHeading: "Contact",
        contactEmail: "Email: info@palachinqo.com",
      },
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "hr",
  supportedLngs: ["hr", "en"],
  detection: {
    order: ["querystring", "localStorage", "navigator"],
    caches: ["localStorage"],
  },
  returnObjects: true,
  interpolation: { escapeValue: false },
});

export default i18n;
