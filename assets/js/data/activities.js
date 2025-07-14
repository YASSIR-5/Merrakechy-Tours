// assets/js/data/activities.js

// Activity data
const activitiesData = {
    'quad-biking': {
        title: 'Agafay Desert Quad Biking Adventure',
        subtitle: 'Experience the thrill of quad biking in the moon-like landscape of Agafay Desert',
        heroImage: '../assets/images/activities/quad-biking-hero.jpg',
        mainImage: '../assets/images/activities/quad.jpg',
        galleryImages: [
            '../assets/images/activities/quad1.jpeg',
            '../assets/images/activities/quad2.jpeg',
            '../assets/images/activities/quad3.jpeg',
        ],
        pricing: {
            adult: 30,
            child: 30
        },
        price: 30,
        duration: '2 hours',
        location: 'les palmerai, Marrakech',
        rating: 4.9,
        reviews: 95,
        description: `
            <h3>Tour Overview</h3>
            <p>An unforgettable quad adventure – The Palm Grove of Marrakech

A truly unique experience

Enjoy 2 hours of total escape, far beyond an ordinary quad ride: journey through sandy dunes, rugged plateaus, and scenic palm groves, while discovering traditional Berber villages, away from the crowds and tourist noise.</p>
        `,
        includes: [
            'Quad bike rental ',
            'Safety equipment',
            'Safety insuracnce',
            'Quad leader in the Front',
            'Tea Break with locals',
            'Photo Break',
            'Hotel pickup and drop-off (Marrakech area)',

        ],
        bring: [
            'Closed shoes',
            'Long pants recommended',
            'Sunscreen',
            'Water bottle',
        ],
        availability: 'Multiple daily departures',
        additionalInfo: {
            'Difficulty': 'Easy to moderate - no previous experience required',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['camel-ride', 'hot-air-balloon', 'cooking-class']
    },

    'camel-ride': {
        title: 'Camel Ride in the Palmeraie',
        subtitle: 'Enjoy a traditional camel trek through Marrakech\'s palm grove oasis',
        heroImage: '../assets/images/activities/camel-ride-hero.jpg',
        mainImage: '../assets/images/activities/camel.jpeg',
        price: 20,
        pricing: {
            adult: 20,
            child: 20
        },
        duration: '1 hours',
        location: 'Palmeraie, Marrakech',
        rating: 4.7,
        galleryImages: [
            '../assets/images/activities/camel.jpeg',
            '../assets/images/activities/camel1.jpeg',
            '../assets/images/activities/camel2.jpeg',
        ],
        reviews: 80,
        description: `
            <h3>Tour Overview</h3>
            <p>Experience the magic of the Palmeraie with our guided camel trek. This immersive palm grove adventure takes you through lush gardens and traditional Berber villages as you enjoy the gentle rhythm of camel travel.</p>
            <p>Led by experienced local guides, you'll learn about desert life and nomadic traditions while enjoying the peaceful atmosphere of this green oasis just outside Marrakech's bustling medina.</p>
            <p>This activity is suitable for all ages and provides excellent photo opportunities of Morocco's iconic landscapes. After your trek, relax with traditional mint tea in a Berber tent while enjoying the serene surroundings.</p>
        `,
        includes: [
            'Camel ride',
            'Traditional Moroccan refreshments',
            'Mint tea break in Berber tent',
            'Photo stops at scenic viewpoints'
        ],
        bring: [
            'Comfortable clothing',
            'Sunscreen and sunglasses',
            'Hat or head covering',
            'Camera',
            'Water bottle'
        ],
        availability: 'Daily departures at sunrise and 2 hours before sunset',
        additionalInfo: {
            'Difficulty': 'Easy - suitable for all fitness levels',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['quad-biking', 'hot-air-balloon', 'atlas-mountains']
    },

    'hot-air-balloon': {
        title: 'Hot Air Balloon Experience',
        subtitle: 'Soar above the Atlas Mountains at dawn for breathtaking views',
        heroImage: '../assets/images/activities/hot-air-ballon-hero.jpg',
        mainImage: '../assets/images/activities/ballon.jpg',
        galleryImages: [
            '../assets/images/activities/ballon.jpg',
            '../assets/images/activities/ballon1.jpeg',
            '../assets/images/activities/ballon2.jpeg'
        ],
        pricing: {
            adult: 170,
            child: 85
        },
        price: 195,
        duration: '4-5 hours',
        location: 'Marrakech',
        rating: 4.8,
        reviews: 78,
        description: `
            <h3>Tour Overview</h3>
            <p>Soar above the Atlas Mountains with breathtaking views on a dawn hot air balloon flight. This unforgettable experience begins in the early morning as you watch the balloon inflation before gently rising into the sky.</p>
            <p>As the sun rises, you'll drift peacefully over traditional Berber villages, mountains, and desert landscapes. Your pilot will point out significant landmarks and share stories about the region while you capture stunning photographs from this unique aerial perspective.</p>
            <p>After landing, enjoy a traditional Berber breakfast in a local tent, complete with mint tea and freshly baked bread. You'll receive a flight certificate before returning to your accommodation with memories to last a lifetime.</p>
        `,
        includes: [
            'Hotel pickup and return',
            'Hot air balloon flight',
            'Professional pilot',
            'Traditional Breakfast',
            'Flight certificate'
        ],
        bring: [
            'Warm clothing (mornings can be cool)',
            'Camera',
            'Sunglasses',
            'Hat'
        ],
        availability: 'Daily departures at dawn (weather permitting)',
        additionalInfo: {
            'Difficulty': 'Easy - no physical requirements',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['quad-biking', 'camel-ride', 'atlas-mountains']
    },

    'cooking-class': {
        title: 'Moroccan Cooking Workshop',
        subtitle: 'Learn to prepare authentic Moroccan dishes with local chefs',
        heroImage: '../assets/images/activities/cooking-class-hero.jpg',
        mainImage: '../assets/images/activities/cooking-class.jpg',
        galleryImages: [
            '../assets/images/activities/quad.jpg',
            '../assets/images/activities/',
            '../assets/images/activities/hot-air-balloon-3.jpg'
        ],
        price: 75,
        pricing: {
            adult: 45,
            child: 23
        },
        duration: '4 hours',
        location: 'Marrakech Medina',
        groupSize: '2-12 people',
        rating: 4.8,
        reviews: 156,
        description: `
            <h3>Tour Overview</h3>
            <p>Discover the secrets of Moroccan cuisine with our immersive cooking class in Marrakech. This culinary experience begins with a guided visit to a traditional market (souk) where you'll learn about local ingredients and spices that form the foundation of Moroccan cooking.</p>
            <p>Back at our cooking school, located in a traditional riad, our expert chef will guide you through preparing several authentic Moroccan dishes such as tagine, couscous, salads, and pastries. You'll learn traditional techniques handed down through generations while enjoying a relaxed, hands-on experience.</p>
            <p>After the class, sit down to enjoy the delicious meal you've prepared in the beautiful setting of the riad. You'll receive recipe cards to take home so you can recreate these authentic dishes and impress friends and family with your new culinary skills.</p>
        `,
        includes: [
            'Market tour with ingredient shopping',
            'All ingredients and cooking equipment',
            'Hands-on preparation of multiple dishes',
            'Full meal of your own creation',
            'Recipe cards to take home',
            'Tea and refreshments throughout'
        ],
        bring: [
            'Appetite',
            'Camera',
            'Notepad (if you wish to take additional notes)'
        ],
        availability: 'Morning class (9:30am) and afternoon class (3:30pm)',
        additionalInfo: {
            'Difficulty': 'Easy - suitable for all, including beginners',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['camel-ride', 'marrakech-tour', 'hammam-spa']
    },
    "hammam-spa": {
        title: "Hammam & Spa Experience",
        subtitle: "Indulge in a traditional Moroccan bath and relaxing massage treatment",
        heroImage: "../assets/images/activities/cooking-class-hero.jpg", // Using existing image as placeholder
        mainImage: "../assets/images/activities/hammam.jpg", // Using existing image as placeholder
        galleryImages: [
            '../assets/images/activities/quad.jpg',
            '../assets/images/activities/',
            '../assets/images/activities/hot-air-balloon-3.jpg'
        ],
        price: 85,
        pricing: {
            adult: 45,
            child: 23
        },
        duration: "2 hours",
        location: "Marrakech Medina",
        groupSize: "1-6 people",
        rating: 4.7,
        reviews: 112,
        description: `
        <h3>Experience Overview</h3>
        <p>Treat yourself to one of Morocco most cherished traditions - the hammam bath ritual. This centuries-old practice combines deep cleansing, exfoliation, and relaxation in a steam-filled environment, leaving you refreshed and rejuvenated.</p>
        
        <p>Your experience begins in a warm steam room where your skin is allowed to soften. Then, a skilled attendant will apply traditional black soap made from olive oil and eucalyptus, followed by a vigorous exfoliation with a special Kessa glove that removes dead skin cells and impurities.</p>
        
        <p>After rinsing, you will receive a purifying clay mask treatment using ghassoul, a natural mineral clay from the Atlas Mountains. This is followed by a moisturizing process using pure argan oil, known for its nourishing properties.</p>
        
        <p>The experience concludes with a 30-minute relaxing massage using aromatic oils, leaving you in a state of complete relaxation. Throughout the process, you will be treated with the utmost respect for your privacy and comfort.</p>
    `,

        includes: [
            "Guided tour of artisan workshops",
            "Hands-on workshop with master artisan",
            "All materials and tools needed",
            "Your own handcrafted item to take home",
            "Mint tea and Moroccan pastries",
            "English-speaking guide",
            "All taxes and fees"
        ],
        bring: [
            "Comfortable clothing that you do not mind getting dirty",
            "Camera",
            "Small bag for your created item"
        ],
        availability: "Daily at 10:00 AM and 2:00 PM",
        additionalInfo: {
            "Difficulty": "Easy - no experience necessary",
            "Minimum Age": "8 years (children must be accompanied by an adult)",
            "Languages": "English, French, Arabic",
            "Confirmation": "Immediate confirmation",
            "Cancellation": "Free cancellation up to 24 hours before",
            "Workshop Options": "Choose from pottery making, leather working, or carpet weaving when booking"
        },
        relatedPrograms: ["cooking-class", "camel-ride", "marrakech-tour"]
    },



    'agafay-overnight': {
        title: 'Overnight in the Agafay Desert',
        subtitle: 'Magical evening with camel ride, dinner under the stars, and luxury camping experience',
        heroImage: '../assets/images/activities/desert_camping.jpg',
        mainImage: '../assets/images/activities/desert_camping.jpg',
        galleryImages: [
            '../assets/images/activities/desert_camping.jpg',
            '../assets/images/activities/agafay2.jpeg',
            '../assets/images/activities/agafay1.jpeg',
        ],

        price: 45,
        duration: '6 hours',
        location: 'Agafay Desert, near Marrakech',
        groupSize: 'From 4 people',
        rating: 4.9,

        reviews: 123,
        description: `
        <h3>Experience Overview</h3>
        <p>Escape to the calm of the Agafay Desert, just a short drive from Marrakech. This magical overnight experience combines the beauty of Morocco's lunar-like desert landscape with luxury camping and authentic cultural experiences.</p>
        <p>Your adventure begins with a scenic camel ride at sunset, where you'll witness the desert transform as golden light bathes the rolling hills. As night falls, enjoy a traditional Moroccan dinner under a canopy of stars, accompanied by live Berber music around a crackling campfire.</p>
        <p>Sleep comfortably in a luxury tent equipped with real beds and quality linens, far from the noise of the city but close to the essential beauty of the desert. Wake up to a peaceful sunrise and enjoy a fresh open-air breakfast facing the desert hills, creating memories that will last a lifetime.</p>
    `,

        includes: [
            'Private transportation from your Hotel or Riad ',
            'Welcome tea upon arrival',
            'Traditional Moroccan dinner',
            'Live Berber music and entertainment',
            'Campfire experience with stargazing',
            'Berber house visit'
        ],
        bring: [
            'Warm jacket or sweater (desert nights can be cool)',
            'Comfortable walking shoes',
            'Sun protection (hat, sunglasses, sunscreen)',
        ],
        availability: 'Daily departures',
        additionalInfo: {
            'Difficulty': 'Easy - suitable for all ages and fitness levels',
            'Language': 'English, French, Arabic, Berber',
            'Confirmation': 'Immediate confirmation upon booking',
            'Cancellation': 'Free cancellation up to 24 hours before',
            'Best Time': 'Year-round, particularly magical during spring and autumn',
            'Group Size': 'Private and group options available',
            'Facilities': 'Shared bathroom facilities, luxury tents with comfortable beds'
        },
        relatedPrograms: ['quad-biking', 'camel-ride', 'agafay-desert', 'hot-air-balloon']
    },
    'marrakech-city-tour': {
        title: 'Marrakech City Tour',
        subtitle: 'Dive into the heart of Marrakech with a passionate local guide through vibrant souks and historic sites',
        heroImage: '../assets/images/tours/marrakech-medina.jpg',
        mainImage: '../assets/images/tours/marrakech.jpeg',
        galleryImages: [
            '../assets/images/tours/marrakech.jpeg',
            '../assets/images/tours/marrakech1.jpeg',
            '../assets/images/tours/marrakech-souks-spices.jpg',
        ],
        price: 45,
        duration: '6-7 hours',
        location: 'Marrakech Medina and New City',
        groupSize: '2-15 people',
        rating: 4.8,
        reviews: 289,
        description: `
        <h3>Tour Overview</h3>
        <p>Dive into the heart of Marrakech with a passionate local guide who will reveal the soul of this magical city. This comprehensive walking tour takes you through the labyrinthine streets of the ancient medina, where every alley tells a story and every door hides a secret.</p>
        <p>Wander through vibrant souks bursting with colors, aromas, and sounds that awaken all your senses. Discover historic palaces with intricate architecture, hidden gardens that offer peaceful respites, and the legendary Djemaa el-Fna square where Morocco's rich cultural heritage comes alive through storytellers, musicians, and performers.</p>
        <p>This isn't just a tour—it's a journey through colors, culture, and authentic Moroccan life. Your expert local guide will share insider knowledge, historical anecdotes, and cultural insights that you'd never discover on your own, making this an unforgettable immersion into the real Marrakech.</p>
    `,

        includes: [
            'Walking tour of Marrakech medina and main attractions',
            'Entry fees to Bahia Palace and Saadian Tombs',
            'Visit to Ben Youssef Madrasa',
            'Guided exploration of souks and artisan quarters',
            'Cultural insights and historical commentary',
            'Navigation through the medina\'s maze-like streets',
            'Local tips and recommendations',
            'Small group experience for personalized attention'
        ],
        bring: [
            'Comfortable walking shoes (essential)',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera for capturing colorful scenes',
            'Cash for lunch and optional purchases in souks',
            'Light backpack for personal items',
            'Respectful clothing (covering shoulders and knees)',
            'Water bottle to stay hydrated',
            'Open mind and sense of adventure'
        ],
        availability: 'Daily departures at 9:00 AM, year-round',
        additionalInfo: {
            'Difficulty': 'Moderate - involves 4-5 hours of walking on uneven surfaces',
            'Language': 'English, French, Arabic, Spanish (specify preference)',
            'Group Size': 'Small groups for intimate experience',
            'Confirmation': 'Immediate confirmation upon booking',
            'Cancellation': 'Free cancellation up to 24 hours before',
            'Duration': 'Approximately 6-7 hours with lunch break',
            'Meeting Point': 'Central Marrakech location (details provided upon booking)',
            'Weather': 'Tour operates in all weather conditions'
        },
        relatedPrograms: ['cooking-class', 'hammam-spa', 'majorelle-garden', 'quad-biking']
    },
    // Add this to your activities.js file

    'majorelle-garden': {
        title: 'Majorelle Garden Tour',
        subtitle: 'A haven of peace in the heart of Marrakech with vibrant colors and tranquil atmosphere',
        heroImage: '../assets/images/activities/majorelle-garden-hero.jpg',
        mainImage: '../assets/images/activities/majorel.webp',
        galleryImages: [
            '../assets/images/activities/majorel.webp',
            '../assets/images/activities/marrakech-menara-pavilion.webp',
            '../assets/images/activities/palmerai.webp',
        ],
        pricing: {
            adult: 40,
        },
        price: 40,

        duration: '2-3 hours',
        location: 'Marrakech, Gueliz District',
        groupSize: '1-15 people',
        rating: 4.6,
        reviews: 189,
        description: `
        <h3>Experience Overview</h3>
        <p>Experience the cultural treasures of Marrakech on a 3 to 4-hour guided tour. Begin with the Ramparts of Marrakech, a striking 19 km-long wall encircling the old city, featuring 22 historic gates and standing up to 8 meters tall. These walls, made from the region’s signature red earth, reflect the city's deep-rooted history and architectural charm.

Next, explore the stunning Majorelle Garden, a botanical haven home to nearly 3,000 plant species, created in 1931 by French painter Jacques Majorelle. The garden, inspired by Islamic and Moorish designs, became world-famous thanks to fashion designer Yves Saint Laurent, who restored it in 1980. Its iconic Majorelle Blue—a vivid, soothing color found throughout the property—is a registered trademark and a highlight of the visit.

Inside the garden lies the Berber Museum, showcasing a rich collection of traditional Berber artifacts from across Morocco, enhanced by educational materials in French, English, and Arabic..</p>
    `,


        availability: 'Daily from 8:00 AM to 5:00 PM ',
        additionalInfo: {
            'Duration': '3-4 hours',
            'Best Time': 'Early morning (8-10 AM) or late afternoon (4-6 PM) for best light and fewer crowds',
            'Languages': 'Information available in English, French, Arabic',
            'Confirmation': 'Tickets can be purchased at entrance or pre-booked (For Majorelle Garden you must book a ticket from there website)',
            'Cancellation': 'Free cancellation up to 24 hours before',
            'Photography': 'Allowed throughout the garden (some restrictions in museum)',
            'Accessibility': 'Partially wheelchair accessible - main paths are paved'
        },

        relatedPrograms: ['cooking-class', 'marrakech-tour', 'hammam-spa']
    }
};
