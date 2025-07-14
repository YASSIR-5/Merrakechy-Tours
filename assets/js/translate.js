// assets/js/translate.js

// Stockage des données de traduction
const translations = {
    en: {
        // L'anglais est la langue par défaut (pas besoin de traduire)
    },
    fr: {
        // Navigation
        "Home": "Accueil",
        "Services": "Services",
        "Gallery": "Galerie",
        "About": "À Propos",
        "Contact": "Contact",
        "Book Now": "Réserver",

        // Section héro
        "Discover The Magic of Morocco": "Découvrez la Magie du Maroc",
        "Authentic experiences and unforgettable adventures across Marrakech and beyond": "Expériences authentiques et aventures inoubliables à Marrakech et au-delà",
        "Explore Tours": "Explorer les Circuits",
        "Discover Activities": "Découvrir les Activités",
        "Transport Services": "Services de Transport",

        // Villes anciennes
        "Experience Ancient Cities": "Découvrez les Villes Anciennes",
        "Explore Marrakech, Fes, Chefchaouen and other vibrant Moroccan destinations": "Explorez Marrakech, Fès, Chefchaouen et d'autres destinations marocaines vibrantes",
        "City Tours": "Visites de Villes",

        // L'aventure vous attend
        "Adventure Awaits": "L'Aventure vous Attend",
        "Trek through the magnificent Atlas Mountains and discover breathtaking landscapes": "Randonnée à travers les magnifiques montagnes de l'Atlas et découverte de paysages à couper le souffle",
        "Mountain Activities": "Activités de Montagne",

        // Formulaire de réservation
        "Find Your Adventure": "Trouvez Votre Aventure",
        "Activity Type": "Type d'Activité",
        "Select Activity Type": "Sélectionnez le Type d'Activité",
        "Day Tour": "Excursion d'une Journée",
        "Multi-Day Tour": "Circuit de Plusieurs Jours",
        "Activity": "Activité",
        "Transport": "Transport",
        "Destination": "Destination",
        "Select Destination": "Sélectionnez la Destination",
        "Date": "Date",
        "Guests": "Invités",
        "Search": "Rechercher",
        "1 Person": "1 Personne",
        "2 People": "2 Personnes",
        "3 People": "3 Personnes",
        "4 People": "4 Personnes",
        "5+ People": "5+ Personnes",

        // Destinations
        "Marrakech": "Marrakech",
        "Atlas Mountains": "Montagnes de l'Atlas",
        "Essaouira": "Essaouira",
        "Sahara Desert": "Désert du Sahara",
        "Fes": "Fès",

        // Section Activités Populaires
        "Popular Activities": "Activités Populaires",
        "Experience the best of Morocco with our most sought-after adventures": "Découvrez le meilleur du Maroc avec nos aventures les plus recherchées",
        "Learn More": "En Savoir Plus",
        "View All Activities": "Voir Toutes les Activités",

        // Cartes d'activité
        "Agafay Excursion: Extreme Desert Adventure": "Excursion à Agafay : Aventure Extrême dans le Désert",
        "Get ready for a unique experience in the Agafay Desert, the closest desert to Marrakech.": "Préparez-vous pour une expérience unique dans le désert d'Agafay, le plus proche de Marrakech.",
        "Camel Ride in the Palmeraie.": "Balade à dos de dromadaire dans la Palmeraie.",
        "Enjoy a camel ride through the palm groves of the Marrakech oasis.": "Profitez d'une balade à dos de dromadaire à travers les palmeraies de l'oasis de Marrakech.",
        "Hot Air Balloon in Marrakech": "Montgolfière à Marrakech",
        "An authentic experience that will remain etched in your memory.": "Une expérience authentique qui restera gravée dans votre mémoire.",
        "Traditional Cooking Workshop in Marrakech": "Atelier de cuisine traditionnelle à Marrakech",
        "Dive into the heart of Moroccan culture by taking part in an authentic cooking workshop in Marrakech.": "Plongez au cœur de la culture marocaine en participant à un atelier de cuisine authentique à Marrakech.",

        // Section Circuits Populaires
        "Popular Tours": "Circuits Populaires",
        "Explore the best of Morocco with our guided tours": "Explorez le meilleur du Maroc avec nos visites guidées",
        "View Details": "Voir les Détails",
        "View All Tours": "Voir Tous les Circuits",

        // Cartes de circuit
        "2-Day Excursion to Zagora - A Saharan Adventure from Marrakech": "Excursion de 2 jours à Zagora - Une aventure saharienne depuis Marrakech",
        "Set off on an adventure from Marrakech for a unique experience in the heart of the Zagora Desert.": "Partez à l'aventure depuis Marrakech pour une expérience unique au cœur du désert de Zagora.",
        "Excursion to the Ourika Valley": "Excursion dans la vallée de l'Ourika",
        "Discover the Ourika Valley, one of the closest natural gems to Marrakech.": "Découvrez la vallée de l'Ourika, l'un des joyaux naturels les plus proches de Marrakech.",
        "Excursion to Imlil and the High Atlas – An Immersive Journey into the Heart of the Berber Mountains": "Excursion à Imlil et le Haut Atlas – Un voyage immersif au cœur des montagnes berbères",
        "Discover Imlil, a charming village nestled at the foot of Mount Toubkal, the highest peak in North Africa.": "Découvrez Imlil, charmant village niché au pied du mont Toubkal, le sommet le plus élevé d'Afrique du Nord.",

        // Services de Transport
        "Transportation Services": "Services de Transport",
        "Reliable and comfortable transportation across Morocco": "Transport fiable et confortable à travers le Maroc",
        "Airport Transfers": "Transferts Aéroport",
        "Hassle-free pickup and drop-off service between Marrakech Menara Airport and your accommodation.": "Service de prise en charge et de dépose sans tracas entre l'aéroport de Marrakech Menara et votre hébergement.",
        "Private Car with Driver": "Voiture Privée avec Chauffeur",
        "Explore Morocco at your own pace with a private car and experienced driver.": "Explorez le Maroc à votre rythme avec une voiture privée et un chauffeur expérimenté.",
        "City-to-City Transfers": "Transferts entre Villes",
        "Comfortable and direct transportation between Morocco's major cities and destinations.": "Transport confortable et direct entre les principales villes et destinations du Maroc.",

        // Meilleures Destinations
        "Top Destinations": "Meilleures Destinations",
        "Discover the most beautiful places in Morocco": "Découvrez les plus beaux endroits du Maroc",
        "The cultural heart of Morocco with vibrant souks and historic palaces": "Le cœur culturel du Maroc avec ses souks animés et ses palais historiques",
        "Endless golden dunes and starry nights in the world's largest desert": "Dunes dorées infinies et nuits étoilées dans le plus grand désert du monde",
        "Breathtaking mountain ranges with traditional Berber villages": "Chaînes de montagnes à couper le souffle et villages berbères traditionnels",
        "Explore": "Explorer",

        // Témoignages
        "What Our Guests Say": "Ce que Disent Nos Invités",
        "Unforgettable experiences shared by our travelers on Google": "Expériences inoubliables partagées par nos voyageurs sur Google",
        "See All Reviews on Google": "Voir Tous les Avis sur Google",
        "We appreciate your feedback! Help us improve by sharing your experience.": "Nous apprécions vos commentaires ! Aidez-nous à nous améliorer en partageant votre expérience.",

        // Pourquoi Nous Choisir
        "Why Choose Us": "Pourquoi Nous Choisir",
        "We're dedicated to making your Moroccan adventure unforgettable": "Nous nous engageons à rendre votre aventure marocaine inoubliable",
        "Local Expertise": "Expertise Locale",
        "Our guides are born and raised in Morocco with deep knowledge of culture, history, and hidden gems.": "Nos guides sont nés et ont grandi au Maroc avec une connaissance approfondie de la culture, de l'histoire et des joyaux cachés.",
        "Personalized Service": "Service Personnalisé",
        "We tailor each experience to your interests, preferences, and pace of travel.": "Nous adaptons chaque expérience à vos intérêts, préférences et rythme de voyage.",
        "Safety First": "La Sécurité d'Abord",
        "Your safety is our priority with well-maintained equipment and comprehensive insurance.": "Votre sécurité est notre priorité avec un équipement bien entretenu et une assurance complète.",
        "Fair Pricing": "Prix Équitables",
        "Competitive rates with no hidden fees and value-adding extras included.": "Tarifs compétitifs sans frais cachés et extras à valeur ajoutée inclus.",
        "Responsible Tourism": "Tourisme Responsable",
        "We support local communities and minimize environmental impact in all our activities.": "Nous soutenons les communautés locales et minimisons l'impact environnemental dans toutes nos activités.",
        "24/7 Support": "Assistance 24/7",
        "Assistance available around the clock throughout your journey for complete peace of mind.": "Assistance disponible 24h/24 et 7j/7 tout au long de votre voyage pour une tranquillité d'esprit totale.",

        // Newsletter
        "Subscribe to Our Newsletter": "Abonnez-vous à Notre Newsletter",
        "Stay updated with our latest tours, special offers, and travel tips": "Restez informé de nos derniers circuits, offres spéciales et conseils de voyage",
        "Subscribe": "S'abonner",
        "Your Email Address": "Votre Adresse Email",

        // CTA
        "Ready to Explore Morocco?": "Prêt à Explorer le Maroc ?",
        "Contact us today to start planning your perfect adventure": "Contactez-nous dès aujourd'hui pour commencer à planifier votre aventure parfaite",
        "Get in Touch": "Nous Contacter",

        // Pied de page
        "Quick Links": "Liens Rapides",
        "Contact Us": "Contactez-Nous",
        "Newsletter": "Newsletter",
        "We provide authentic travel experiences in Morocco, focusing on activities, tours, and transportation services that showcase the best of our beautiful country.": "Nous proposons des expériences de voyage authentiques au Maroc, en mettant l'accent sur les activités, les circuits et les services de transport qui présentent le meilleur de notre beau pays.",
        "Open Daily: 8AM - 8PM": "Ouvert tous les jours: 8h - 20h",
        "Subscribe to receive updates on new tours and special offers.": "Abonnez-vous pour recevoir des mises à jour sur les nouveaux circuits et les offres spéciales.",
        "All rights reserved.": "Tous droits réservés.",
        "Privacy Policy": "Politique de Confidentialité",
        "Terms & Conditions": "Termes et Conditions",
        "FAQ": "FAQ",

        // Contenu spécifique aux pages d'activités
        "From $45": "À partir de 45€",
        "From $35": "À partir de 35€",
        "From $195": "À partir de 195€",
        "From $65": "À partir de 65€",
        "From $20": "À partir de 20€",
        "From $80/day": "À partir de 80€/jour",
        "From $40": "À partir de 40€",
        "3 Hours": "3 Heures",
        "2 Hours": "2 Heures",
        "4 Hours": "4 Heures",
        "2 Day": "2 Jours",
        "1 Days": "1 Jour",
        "Full Day": "Journée Complète",
        "Best Seller": "Meilleures Ventes",
        "Popular": "Populaire",

        // Temps et localisation
        "Hours": "Heures",
        "Marrakech": "Marrakech",
        "Palm Grove": "Palmeraie",
        "Medina": "Médina",
        "From": "À partir de",
        // Ajoutez cette traduction spécifique pour le texte du pied de page
        "merrakechy": "merrakechy",
        "We provide authentic travel experiences in Morocco, focusing on activities, tours, and transportation services that showcase the best of our beautiful country.":
            "Nous proposons des expériences de voyage authentiques au Maroc, en mettant l'accent sur les activités, les circuits et les services de transport qui présentent le meilleur de notre beau pays.",

        // Contact Page Specific Content
        "Get In Touch": "Contactez-Nous",
        "We're here to help you plan your perfect Moroccan adventure": "Nous sommes là pour vous aider à planifier votre aventure marocaine parfaite",
        "Call Us": "Appelez-Nous",
        "Speak directly with our travel experts": "Parlez directement avec nos experts en voyages",
        "WhatsApp": "WhatsApp",
        "Message us for quick responses": "Envoyez-nous un message pour des réponses rapides",
        "Email Us": "Envoyez-nous un Email",
        "Send us your questions or requests": "Envoyez-nous vos questions ou demandes",
        "Visit Us": "Visitez-Nous",
        "Our office location in Marrakech": "L'emplacement de notre bureau à Marrakech",

        "Send Us a Message": "Envoyez-nous un Message",
        "We'll get back to you as soon as possible": "Nous vous répondrons dès que possible",

        // Form Fields
        "Full Name*": "Nom Complet*",
        "Email Address*": "Adresse Email*",
        "Phone Number": "Numéro de Téléphone",
        "Subject*": "Sujet*",
        "Select Subject": "Sélectionnez un Sujet",
        "Tour Inquiry": "Demande de Circuit",
        "Activity Booking": "Réservation d'Activité",
        "Transport Request": "Demande de Transport",
        "Custom Itinerary": "Itinéraire Personnalisé",
        "General Question": "Question Générale",
        "Your Message*": "Votre Message*",
        "I agree to the": "J'accepte la",
        "privacy policy": "politique de confidentialité",
        "Send Message": "Envoyer le Message",

        // Map and Location
        "Our Operating Hours": "Nos Heures d'Ouverture",
        "Visit our office or reach out during these hours:": "Visitez notre bureau ou contactez-nous pendant ces heures:",
        "Monday - Friday:": "Lundi - Vendredi:",
        "Saturday:": "Samedi:",
        "Sunday:": "Dimanche:",
        "* Hours may vary during holidays and peak tourist seasons.": "* Les horaires peuvent varier pendant les vacances et les saisons touristiques de pointe.",

        // FAQ Section
        "Frequently Asked Questions": "Questions Fréquemment Posées",
        "Quick answers to common questions about booking and contacting us": "Réponses rapides aux questions courantes sur la réservation et la façon de nous contacter",
        "How far in advance should I book a tour?": "Combien de temps à l'avance dois-je réserver un circuit?",
        "We recommend booking at least 2-3 weeks in advance, especially during peak season (March-May and September-November). For custom itineraries and group tours, booking 1-2 months ahead is advisable.": "Nous recommandons de réserver au moins 2-3 semaines à l'avance, surtout pendant la haute saison (mars-mai et septembre-novembre). Pour les itinéraires personnalisés et les visites de groupe, il est conseillé de réserver 1-2 mois à l'avance.",
        "What payment methods do you accept?": "Quels modes de paiement acceptez-vous?",
        "We accept credit/debit cards (Visa, Mastercard), PayPal, bank transfers, and cash payments (for in-person bookings at our office). A 20% deposit is required to confirm your booking.": "Nous acceptons les cartes de crédit/débit (Visa, Mastercard), PayPal, les virements bancaires et les paiements en espèces (pour les réservations en personne à notre bureau). Un acompte de 20% est requis pour confirmer votre réservation.",
        "What is your cancellation policy?": "Quelle est votre politique d'annulation?",
        "Cancellations made 7+ days before the scheduled tour receive a full refund minus transaction fees. Cancellations 3-7 days before receive a 50% refund. Cancellations less than 3 days before are non-refundable. Emergency situations are considered on a case-by-case basis.": "Les annulations effectuées 7 jours ou plus avant la visite prévue donnent droit à un remboursement complet moins les frais de transaction. Les annulations effectuées 3 à 7 jours avant donnent droit à un remboursement de 50%. Les annulations effectuées moins de 3 jours avant ne sont pas remboursables. Les situations d'urgence sont examinées au cas par cas.",
        "How quickly will you respond to my inquiry?": "Dans quel délai répondrez-vous à ma demande?",
        "We typically respond to all inquiries within 24 hours. For urgent matters, we recommend contacting us via WhatsApp or phone for the fastest response.": "Nous répondons généralement à toutes les demandes dans les 24 heures. Pour les questions urgentes, nous vous recommandons de nous contacter par WhatsApp ou par téléphone pour obtenir la réponse la plus rapide.",

        // Call to Action
        "Call Us Now": "Appelez-Nous Maintenant",

        // About Page Header
        "About Us": "À Propos de Nous",
        "Discover who we are and how we create unforgettable Moroccan experiences": "Découvrez qui nous sommes et comment nous créons des expériences marocaines inoubliables",

        // Main About Content
        "With Merrakechy Tour, experience Marrakech differently. Our agency offers authentic experiences: excursions, outdoor adventures, cultural discoveries, and traditional workshops. Guided by passionate professionals, we guarantee you unique moments filled with discovery, enjoyment, and quality service. Choose Merrakechy Tour and let yourself be carried away by the soul of Morocco!": "Avec Marrakechy Tours, vivez Marrakech autrement. Notre agence vous propose des expériences authentiques : excursions, aventures en plein air, découvertes culturelles et ateliers traditionnels. Guidés par des professionnels passionnés, nous vous garantissons des moments uniques, entre découverte, plaisir et qualité de service. Choisissez Marrakechy Tours et laissez-vous emporter par l'âme du Maroc !",

        // About Page Sections
        "Our Story": "Notre Histoire",
        "Our Success Story": "Notre Histoire de Réussite",
        "The numbers speak for themselves": "Les chiffres parlent d'eux-mêmes",
        "Meet Our Team": "Rencontrez Notre Équipe",
        "The passionate people behind your perfect Moroccan adventure": "Les personnes passionnées derrière votre aventure marocaine parfaite",
        "Our Popular Activities/Services": "Nos Activités/Services Populaires",
        "Explore our range of unique Moroccan experiences": "Découvrez notre gamme d'expériences marocaines uniques",

        // Values Section
        "Authenticity": "Authenticité",
        "We provide genuine Moroccan experiences that go beyond typical tourist attractions.": "Nous proposons des expériences marocaines authentiques qui vont au-delà des attractions touristiques typiques.",
        "Passion": "Passion",
        "Our enthusiasm for Morocco drives us to create truly special experiences for our guests.": "Notre enthousiasme pour le Maroc nous pousse à créer des expériences vraiment spéciales pour nos hôtes.",
        "Safety": "Sécurité",
        "Your security and comfort are our top priorities during every step of your journey.": "Votre sécurité et votre confort sont nos priorités absolues à chaque étape de votre voyage.",

        // Stats Counter
        "Happy Travelers": "Voyageurs Satisfaits",
        "Tours Success": "Circuits Réussis",
        "Positives Review": "Avis Positifs",

        // Team Section
        "Founder & Tour Director": "Fondateur & Directeur des Circuits",
        "With over 15 years of experience guiding tours throughout Morocco, [name] established Merrakechy Tour with a vision to share the country's rich cultural heritage with travelers from around the world.": "Avec plus de 15 ans d'expérience dans l'organisation de circuits à travers le Maroc, [nom] a créé Merrakechy Tour avec la vision de partager le riche patrimoine culturel du pays avec des voyageurs du monde entier.",
        "Operations Manager": "Directeur des Opérations",
        "Ensuring that every tour runs smoothly, [name] brings meticulous attention to detail and extensive knowledge of logistics to create seamless travel experiences for our guests.": "Veillant au bon déroulement de chaque circuit, [nom] apporte une attention méticuleuse aux détails et une connaissance approfondie de la logistique pour créer des expériences de voyage sans faille pour nos clients.",
        "Lead Guide - Marrakech": "Guide Principal - Marrakech",
        "Born and raised in Marrakech, [name] is an expert on the city's history, culture, and hidden gems. His passion for storytelling brings the vibrant medina to life for our guests.": "Né et élevé à Marrakech, [nom] est un expert de l'histoire, de la culture et des joyaux cachés de la ville. Sa passion pour la narration fait vivre la médina vibrante pour nos clients.",
        "Desert Experience Specialist": "Spécialiste de l'Expérience Désertique",
        "Having grown up in the Sahara, [name] brings unparalleled knowledge of desert navigation, traditions, and astronomy to our desert excursions, creating unforgettable nights under the stars.": "Ayant grandi dans le Sahara, [nom] apporte une connaissance inégalée de la navigation dans le désert, des traditions et de l'astronomie à nos excursions dans le désert, créant des nuits inoubliables sous les étoiles.",

        // Activities Tabs
        "Guided Marrakech": "Marrakech Guidé",
        "Air Balloon": "Montgolfière",
        "Buggy Ride": "Balade en Buggy",
        "Camel Ride": "Balade à Dos de Chameau",
        "Quad Ride": "Balade en Quad",
        "Airport Transfer": "Transfert Aéroport",
        "Private Car": "Voiture Privée",

        // Activity Details
        "Guided Marrakech Medina Discovery Tour": "Circuit de Découverte Guidé de la Médina de Marrakech",
        "Unveil the rich history and vibrant culture of Marrakech with a guided tour of the Medina.": "Découvrez l'histoire riche et la culture vibrante de Marrakech avec une visite guidée de la Médina.",
        "Hot Air Balloon Over Atlas Mountains": "Montgolfière Au-dessus des Montagnes de l'Atlas",
        "Experience Morocco from a breathtaking perspective with our hot air balloon adventure.": "Découvrez le Maroc d'une perspective à couper le souffle avec notre aventure en montgolfière.",
        "Desert Buggy Adventure": "Aventure en Buggy dans le Désert",
        "Get your adrenaline pumping with an exciting buggy ride through the diverse landscapes.": "Faites monter votre adrénaline avec une excitante balade en buggy à travers les paysages diversifiés.",
        "Traditional Camel Caravan Experience": "Expérience Traditionnelle de Caravane à Dos de Chameau",
        "Embark on a traditional camel caravan journey through the palm groves.": "Embarquez pour un voyage traditionnel en caravane à dos de chameau à travers les palmeraies.",
        "Quad Biking Desert Adventure": "Aventure en Quad dans le Désert",
        "Experience the thrill of quad biking through Morocco's diverse landscapes.": "Vivez le frisson du quad à travers les paysages variés du Maroc.",
        "Airport Transfer Service": "Service de Transfert Aéroport",
        "Start your Moroccan journey with our comfortable and reliable airport transfer service.": "Commencez votre voyage au Maroc avec notre service de transfert aéroport confortable et fiable.",
        "Private Car with Driver": "Voiture Privée avec Chauffeur",
        "Explore Morocco at your own pace with our private car and driver service.": "Explorez le Maroc à votre rythme avec notre service de voiture privée avec chauffeur.",

        // Activity Features
        "Explore the historical and cultural heart of Marrakech": "Explorez le cœur historique et culturel de Marrakech",
        "Visit the iconic Koutoubia Mosque": "Visitez l'emblématique Mosquée Koutoubia",
        "Experience the vibrant atmosphere of Jemaa el Fnaa": "Vivez l'atmosphère vibrante de Jemaa el Fnaa",
        "Discover the opulent beauty of Ksar Bahia": "Découvrez la beauté opulente du Ksar Bahia",
        "Check Availability": "Vérifier la Disponibilité",
        "Watch Experience": "Regarder l'Expérience",
        "Watch Adventure": "Regarder l'Aventure",
        "View Fleet": "Voir la Flotte",
        "Pricing Options": "Options de Prix",

        // Testimonials Section
        "What Our Clients Say": "Ce que Disent Nos Clients",
        "Read testimonials from travelers who experienced Morocco with us": "Lisez les témoignages des voyageurs qui ont vécu le Maroc avec nous"
    }

};

// Langue actuelle
let currentLanguage = 'en';

// Stocker les attributs originaux pour éviter la duplication
const originalAttributes = new Map();

// Cas spécial pour la traduction du texte du pied de page
function translateFooter() {
    if (currentLanguage === 'en') return;

    const footerAboutContent = document.querySelector('.footer-about p');
    if (footerAboutContent) {
        if (!footerAboutContent.hasAttribute('data-original-text')) {
            footerAboutContent.setAttribute('data-original-text', footerAboutContent.textContent);
        }

        footerAboutContent.textContent = translations[currentLanguage]["We provide authentic travel experiences in Morocco, focusing on activities, tours, and transportation services that showcase the best of our beautiful country."];
    }
}
// Fonction pour traduire la page
function translatePage(language) {
    // Mettre à jour la langue actuelle
    currentLanguage = language;

    // Sauvegarder la préférence dans le stockage local
    localStorage.setItem('preferredLanguage', language);

    // Mettre à jour l'état actif du sélecteur de langue
    const languageLinks = document.querySelectorAll('.language-selector a');
    languageLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-lang') === language) {
            link.classList.add('active');
        }
    });

    // Si anglais, revenir au texte original
    if (language === 'en') {
        // Restaurer le contenu de texte original à partir des attributs de données
        document.querySelectorAll('[data-original-text]').forEach(element => {
            element.textContent = element.getAttribute('data-original-text');
        });

        // Restaurer les attributs originaux
        document.querySelectorAll('[data-original-placeholder]').forEach(element => {
            element.setAttribute('placeholder', element.getAttribute('data-original-placeholder'));
        });

        document.querySelectorAll('[data-original-value]').forEach(element => {
            element.value = element.getAttribute('data-original-value');
        });

        return;
    }

    // Obtenir l'objet de traduction pour la langue sélectionnée
    const translationObj = translations[language];
    if (!translationObj) return;

    // Créer un TreeWalker pour obtenir les nœuds de texte efficacement
    // Cette approche est plus fiable que d'utiliser getAllTextNodes
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function (node) {
                // Ignorer les balises script et style
                if (node.parentNode.tagName === 'SCRIPT' ||
                    node.parentNode.tagName === 'STYLE' ||
                    node.parentNode.classList.contains('language-selector')) {
                    return NodeFilter.FILTER_SKIP;
                }
                // Accepter les nœuds de texte non vides
                return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
        }
    );

    // Traiter tous les nœuds de texte pertinents
    let currentNode;
    while (currentNode = walker.nextNode()) {
        const text = currentNode.nodeValue.trim();
        if (text && text.length > 1) {
            // Stocker le texte original uniquement s'il n'est pas déjà stocké
            if (!currentNode.parentNode.hasAttribute('data-original-text')) {
                currentNode.parentNode.setAttribute('data-original-text', currentNode.nodeValue);
            }

            // Essayer de traduire le texte exact
            if (translationObj[text]) {
                // Préserver les espaces avant/après
                const leadingSpace = currentNode.nodeValue.match(/^\s+/) || [''];
                const trailingSpace = currentNode.nodeValue.match(/\s+$/) || [''];
                currentNode.nodeValue = leadingSpace[0] + translationObj[text] + trailingSpace[0];
            } else {
                // Essayer de trouver des correspondances partielles pour un texte plus long
                for (const [enText, frText] of Object.entries(translationObj)) {
                    if (currentNode.nodeValue.includes(enText)) {
                        currentNode.nodeValue = currentNode.nodeValue.replace(enText, frText);
                    }
                }
            }
        }
    }

    // Traduire les attributs pour certains éléments

    // Placeholders
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(element => {
        const placeholder = element.getAttribute('placeholder');
        if (placeholder) {
            if (!element.hasAttribute('data-original-placeholder')) {
                element.setAttribute('data-original-placeholder', placeholder);
            }
            if (translationObj[placeholder]) {
                element.setAttribute('placeholder', translationObj[placeholder]);
            }
        }
    });

    // Valeurs d'entrée (pour les boutons, etc.)
    document.querySelectorAll('input[type="submit"], input[type="button"], button[type="submit"]').forEach(button => {
        if (button.value) {
            if (!button.hasAttribute('data-original-value')) {
                button.setAttribute('data-original-value', button.value);
            }
            if (translationObj[button.value]) {
                button.value = translationObj[button.value];
            }
        }

        // Traduire également le texte des boutons sans attribut de valeur
        if (button.textContent && button.textContent.trim() && !button.hasAttribute('data-original-button-text')) {
            button.setAttribute('data-original-button-text', button.textContent);
            if (translationObj[button.textContent.trim()]) {
                button.textContent = translationObj[button.textContent.trim()];
            }
        }
    });

    // Texte alternatif des images
    document.querySelectorAll('img[alt]').forEach(img => {
        const alt = img.getAttribute('alt');
        if (alt && alt.trim() !== '') {
            if (!img.hasAttribute('data-original-alt')) {
                img.setAttribute('data-original-alt', alt);
            }
            if (translationObj[alt]) {
                img.setAttribute('alt', translationObj[alt]);
            }
        }
    });
    translateFooter();
}

// Initialiser le sélecteur de langue
document.addEventListener('DOMContentLoaded', function () {
    // Créer un sélecteur de langue s'il n'existe pas
    if (!document.querySelector('.language-selector')) {
        const headerRight = document.querySelector('.header-right');

        if (headerRight) {
            // Créer un sélecteur de langue
            const languageSelector = document.createElement('div');
            languageSelector.className = 'language-selector';
            languageSelector.innerHTML = `
          <a href="#" data-lang="en" class="active">EN</a>
          <a href="#" data-lang="fr">FR</a>
        `;

            // Insérer avant le premier enfant
            headerRight.insertBefore(languageSelector, headerRight.firstChild);

            // Ajouter des écouteurs d'événements aux liens de langue
            const languageLinks = languageSelector.querySelectorAll('a');
            languageLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const language = this.getAttribute('data-lang');
                    translatePage(language);
                });
            });
        }
    }

    // Vérifier les préférences de langue sauvegardées
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        translatePage(savedLanguage);
    }
});

// Rendre les fonctions disponibles globalement
window.translatePage = translatePage;