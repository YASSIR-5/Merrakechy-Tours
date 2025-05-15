// assets/js/data/activities.js

// Activity data
const activitiesData = {
    'quad-biking': {
        title: 'Agafay Desert Quad Biking Adventure',
        subtitle: 'Experience the thrill of quad biking in the moon-like landscape of Agafay Desert',
        heroImage: '../assets/images/activities/quad-biking-hero.jpg',
        mainImage: '../assets/images/activities/quad-biking-large.jpg',
        price: 65,
        duration: '2 hours',
        location: 'Agafay Desert, near Marrakech',
        groupSize: '1-8 people',
        rating: 4.9,
        reviews: 95,
        description: `
            <h3>Tour Overview</h3>
            <p>Get your adrenaline pumping with our guided quad biking adventure through the unique terrain of the Agafay Desert. Navigate thrilling trails across a lunar-like landscape just outside Marrakech.</p>
            <p>After a thorough safety briefing and practice session, you'll follow your experienced guide through varied terrain - from rocky paths to small dunes and open plains. Stop at panoramic viewpoints to capture stunning photographs of the Atlas Mountains in the distance.</p>
            <p>This exciting activity combines adventure with natural beauty, giving you a unique perspective on Morocco's diverse landscapes. No previous quad biking experience is necessary, making it accessible to beginners while still thrilling for experienced riders.</p>
        `,
        includes: [
            'Quad bike rental and fuel',
            'Safety equipment (helmet, goggles, gloves)',
            'Professional guide',
            'Safety briefing and practice session',
            'Bottled water',
            'Hotel pickup and drop-off (Marrakech area)'
        ],
        bring: [
            'Closed shoes',
            'Sunglasses',
            'Bandana or scarf (for dust)',
            'Long pants recommended',
            'Sunscreen'
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
        mainImage: '../assets/images/activities/camel-ride-large.jpg',
        price: 45,
        duration: '3 hours',
        location: 'Palmeraie, Marrakech',
        groupSize: '1-10 people',
        rating: 4.7,
        reviews: 128,
        description: `
            <h3>Tour Overview</h3>
            <p>Experience the magic of the Palmeraie with our guided camel trek. This immersive palm grove adventure takes you through lush gardens and traditional Berber villages as you enjoy the gentle rhythm of camel travel.</p>
            <p>Led by experienced local guides, you'll learn about desert life and nomadic traditions while enjoying the peaceful atmosphere of this green oasis just outside Marrakech's bustling medina.</p>
            <p>This activity is suitable for all ages and provides excellent photo opportunities of Morocco's iconic landscapes. After your trek, relax with traditional mint tea in a Berber tent while enjoying the serene surroundings.</p>
        `,
        includes: [
            'Professional local guide',
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
        heroImage: '../assets/images/activities/hot-air-balloon-hero.jpg',
        mainImage: '../assets/images/activities/hot-air-balloon-large.jpg',
        price: 195,
        duration: '4 hours (approx. 1 hour in the air)',
        location: 'Atlas Mountains region, near Marrakech',
        groupSize: 'Up to 16 people per balloon',
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
            'Light breakfast before flight',
            'Traditional Berber breakfast after landing',
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
            'Cancellation': 'Free up to 48h before'
        },
        relatedPrograms: ['quad-biking', 'camel-ride', 'atlas-mountains']
    },
    
    'cooking-class': {
        title: 'Moroccan Cooking Workshop',
        subtitle: 'Learn to prepare authentic Moroccan dishes with local chefs',
        heroImage: '../assets/images/activities/cooking-class-hero.jpg',
        mainImage: '../assets/images/activities/cooking-class-large.jpg',
        price: 75,
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
    mainImage: "../assets/images/activities/cooking-class-large.jpg", // Using existing image as placeholder
    price: 85,
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
    itinerary: [
        {
            time: "Arrival",
            title: "Welcome & Preparation",
            description: "Arrive at our traditional spa in the heart of the Marrakech medina. Change into provided spa attire and relax in the lounge with mint tea."
        },
        {
            time: "First Stage",
            title: "Steam Room",
            description: "Enter the warm steam room to allow your skin to soften and pores to open (10-15 minutes)."
        },
        {
            time: "Second Stage",
            title: "Black Soap Application & Exfoliation",
            description: "Traditional black soap is applied to your skin, followed by a thorough exfoliation with a Kessa glove to remove dead skin cells."
        },
        {
            time: "Third Stage",
            title: "Clay Mask Treatment",
            description: "A natural ghassoul clay mask is applied to draw out impurities."
        },
        {
            time: "Fourth Stage",
            title: "Rinse & Moisturizing",
            description: "The clay mask is rinsed away, and pure argan oil is applied to nourish the skin."
        },
        {
            time: "Final Stage",
            title: "Relaxing Massage",
            description: "Enjoy a 30-minute full-body massage with aromatic oils to complete your relaxation experience."
        },
        {
            time: "Conclusion",
            title: "Rest & Refreshment",
            description: "Relax in our lounge area with mint tea and light refreshments before departing."
        }
    ],
    includes: [
        "Traditional hammam ritual",
        "Professional spa attendant",
        "All spa products (black soap, ghassoul clay, argan oil)",
        "30-minute aromatic oil massage",
        "Spa attire (disposable underwear)",
        "Locker for personal belongings",
        "Towels and toiletries",
        "Mint tea and light refreshments"
    ],
    bring: [
        "Swimwear (optional, disposable underwear is provided)",
        "Flip-flops (optional, spa slippers are provided)",
        "Change of clothes"
    ],
    availability: "Daily from 10:00 AM to 8:00 PM",
    additionalInfo: {
        "Difficulty": "Easy - relaxation activity",
        "Minimum Age": "16 years",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Note": "Men and women are treated in separate facilities. Please inform us of any health conditions before booking."
    },
    relatedPrograms: ["cooking-class", "camel-ride", "marrakech-tour"]
},

"craft-workshop": {
    title: "Traditional Craft Workshops",
    subtitle: "Learn authentic Moroccan crafts from master artisans",
    heroImage: "../assets/images/activities/cooking-class-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/activities/cooking-class-large.jpg", // Using existing image as placeholder
    price: 55,
    duration: "3 hours",
    location: "Marrakech Medina",
    groupSize: "2-8 people",
    rating: 4.8,
    reviews: 87,
    description: `
        <h3>Experience Overview</h3>
        <p>Immerse yourself in centuries-old Moroccan craftsmanship with our hands-on workshop led by master artisans. Choose from pottery making, leather working, or traditional carpet weaving to learn authentic techniques passed down through generations.</p>
        
        <p>Your experience begins with a visit to artisan workshops in the medina, where you will observe skilled craftspeople at work and learn about the cultural significance of these traditional art forms. Then, you will participate in a hands-on workshop where you will create your own piece to take home as a unique souvenir.</p>
        
        <p>Throughout the workshop, your master artisan will guide you through each step of the process, sharing the history and cultural context of the craft. You will gain insight into the tools, materials, and techniques that have remained largely unchanged for centuries.</p>
        
        <p>This workshop offers more than just a creative activity - it provides a deeper understanding of Moroccan culture through its artistic heritage and supports local artisans who are preserving these traditional crafts.</p>
    `,
    itinerary: [
        {
            time: "10:00 AM or 2:00 PM",
            title: "Meeting Point",
            description: "Meet your guide at a designated point in the medina."
        },
        {
            time: "10:15 AM or 2:15 PM",
            title: "Artisan Quarter Tour",
            description: "Visit traditional workshops in the medina to observe master craftspeople at work and learn about different crafts."
        },
        {
            time: "11:00 AM or 3:00 PM",
            title: "Workshop Introduction",
            description: "Introduction to your chosen craft (pottery, leather working, or carpet weaving) with explanation of materials, tools, and techniques."
        },
        {
            time: "11:15 AM or 3:15 PM",
            title: "Hands-on Workshop",
            description: "Begin your hands-on experience creating your own piece under the guidance of a master artisan."
        },
        {
            time: "12:30 PM or 4:30 PM",
            title: "Tea Break",
            description: "Enjoy mint tea and Moroccan pastries while your creation is being finished (fired, dried, or prepared for transport)."
        },
        {
            time: "1:00 PM or 5:00 PM",
            title: "Conclusion",
            description: "Receive your finished piece or arrangement for later pickup/delivery (for items that require additional processing time)."
        }
    ],
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

"sandboarding": {
    title: "Desert Sandboarding Adventure",
    subtitle: "Experience the thrill of sliding down desert dunes",
    heroImage: "../assets/images/activities/quad-biking-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/activities/quad-biking-large.jpg", // Using existing image as placeholder
    price: 70,
    duration: "3 hours",
    location: "Agafay Desert",
    groupSize: "2-10 people",
    rating: 4.8,
    reviews: 64,
    description: `
        <h3>Experience Overview</h3>
        <p>Experience the exhilaration of sandboarding on the dunes of the Agafay Desert with our guided adventure. Similar to snowboarding but on sand, this thrilling activity is suitable for all skill levels, from complete beginners to experienced boarders.</p>
        
        <p>After a short drive from Marrakech to the Agafay Desert, our expert instructors will provide a comprehensive safety briefing and basic techniques for sandboarding. You will then have ample time to practice and improve your skills on dunes of varying heights.</p>
        
        <p>Our high-quality sandboards are designed specifically for desert conditions, providing optimal performance and safety. As you gain confidence, you can progress to higher dunes and more challenging runs, always under the watchful eye of our experienced guides.</p>
        
        <p>Between runs, take in the stunning desert landscape and dramatic views of the Atlas Mountains in the distance. The unique terrain of the Agafay Desert, with its mixture of small and medium-sized dunes, provides the perfect environment for this exciting activity.</p>
    `,
    itinerary: [
        {
            time: "9:00 AM or 2:00 PM",
            title: "Hotel Pickup",
            description: "Convenient pickup from your Marrakech accommodation."
        },
        {
            time: "9:30 AM or 2:30 PM",
            title: "Arrival at Agafay Desert",
            description: "Arrive at our base in the Agafay Desert. Meet your instructors and get fitted with sandboarding equipment."
        },
        {
            time: "9:45 AM or 2:45 PM",
            title: "Safety Briefing & Instruction",
            description: "Comprehensive safety briefing and basic instruction on sandboarding techniques. Practice on small dunes to build confidence."
        },
        {
            time: "10:15 AM or 3:15 PM",
            title: "Sandboarding Session",
            description: "Begin your sandboarding adventure on progressively larger dunes, with guidance from instructors throughout."
        },
        {
            time: "11:15 AM or 4:15 PM",
            title: "Refreshment Break",
            description: "Take a break to enjoy refreshments and spectacular views of the desert landscape."
        },
        {
            time: "11:30 AM or 4:30 PM",
            title: "Advanced Dunes (Optional)",
            description: "For those feeling confident, try sandboarding on some of the larger dunes under close instructor supervision."
        },
        {
            time: "12:00 PM or 5:00 PM",
            title: "Return to Base",
            description: "Return to base camp to freshen up before departure."
        },
        {
            time: "12:30 PM or 5:30 PM",
            title: "Return to Marrakech",
            description: "Transfer back to your accommodation in Marrakech."
        }
    ],
    includes: [
        "Hotel pickup and drop-off (Marrakech city area)",
        "Transportation in air-conditioned vehicle",
        "Professional sandboarding instructor",
        "Sandboarding equipment (board, wax, protective gear)",
        "Safety briefing and instruction",
        "Bottled water and refreshments",
        "All taxes and service charges"
    ],
    bring: [
        "Comfortable, loose clothing",
        "Closed shoes (trainers/sneakers)",
        "Sunglasses",
        "Sunscreen",
        "Bandana or scarf (to protect from sand)",
        "Camera",
        "Sense of adventure!"
    ],
    availability: "Daily departures at 9:00 AM and 2:00 PM",
    additionalInfo: {
        "Difficulty": "Easy to moderate - no previous experience required",
        "Minimum Age": "8 years",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Weather": "Activity runs in most weather conditions, except during high winds or rain"
    },
    relatedPrograms: ["quad-biking", "camel-ride", "desert-camping"]
},

"hiking-tours": {
    title: "Atlas Mountains Hiking Tours",
    subtitle: "Explore breathtaking landscapes and traditional Berber villages on foot",
    heroImage: "../assets/images/tours/imlil-atlas-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/imlil-atlas.jpg", // Using existing image as placeholder
    price: 60,
    duration: "6-8 hours",
    location: "High Atlas Mountains",
    groupSize: "2-12 people",
    rating: 4.7,
    reviews: 103,
    description: `
        <h3>Experience Overview</h3>
        <p>Discover the majestic High Atlas Mountains on foot with our guided hiking tours, suitable for all fitness levels. These treks offer an authentic mountain experience with incredible scenery, cultural encounters with Berber villages, and the chance to reconnect with nature away from the bustling city.</p>
        
        <p>Departing from Marrakech, you will journey into the heart of the Atlas Mountains. Upon arrival at the trailhead, your experienced mountain guide will lead you along scenic paths that wind through terraced fields, walnut groves, and traditional Berber villages where life continues much as it has for centuries.</p>
        
        <p>Throughout the hike, your knowledgeable guide will share insights about Berber culture, local flora and fauna, and the fascinating history of the region. The pace is adjusted to the comfort level of the group, with regular stops to rest, take photos, and simply absorb the breathtaking mountain vistas.</p>
        
        <p>A highlight of the tour is a traditional lunch in a local Berber home or mountain restaurant, providing authentic flavors and a welcome rest. This immersive experience combines physical activity, cultural exchange, and natural beauty for a truly memorable day in the Atlas Mountains.</p>
    `,
    itinerary: [
        {
            time: "8:30 AM",
            title: "Hotel Pickup",
            description: "Morning pickup from your Marrakech accommodation."
        },
        {
            time: "9:30 AM",
            title: "Scenic Drive",
            description: "Scenic drive through the foothills of the Atlas Mountains with a stop for panoramic views and photos."
        },
        {
            time: "10:30 AM",
            title: "Arrival & Preparation",
            description: "Arrive at the trailhead in the Atlas Mountains. Meet your mountain guide, review the hiking route, and begin your trek."
        },
        {
            time: "10:45 AM",
            title: "Morning Hike",
            description: "Trek through stunning mountain landscapes, with your guide providing information about the geography, flora, and fauna of the region."
        },
        {
            time: "12:30 PM",
            title: "Village Visit",
            description: "Visit a traditional Berber village to learn about mountain life and culture."
        },
        {
            time: "1:00 PM",
            title: "Lunch",
            description: "Enjoy a traditional Berber lunch in a local family home or mountain restaurant with spectacular views."
        },
        {
            time: "2:00 PM",
            title: "Afternoon Hike",
            description: "Continue your trek along different paths, exploring more of the beautiful mountain landscape."
        },
        {
            time: "3:30 PM",
            title: "Tea Break",
            description: "Stop for mint tea and a rest at a scenic viewpoint."
        },
        {
            time: "4:30 PM",
            title: "Return to Trailhead",
            description: "Complete your hike and return to the vehicle."
        },
        {
            time: "5:30 PM",
            title: "Return to Marrakech",
            description: "Drive back to Marrakech, arriving at your accommodation around 6:30 PM."
        }
    ],
    includes: [
        "Hotel pickup and drop-off (Marrakech city area)",
        "Transportation in air-conditioned vehicle",
        "Professional mountain guide",
        "Traditional Berber lunch",
        "Mint tea and snacks",
        "Bottled water",
        "All taxes and service charges"
    ],
    bring: [
        "Comfortable hiking or walking shoes with good grip",
        "Layered clothing (temperatures can vary in the mountains)",
        "Hat and sunglasses",
        "Sunscreen",
        "Small backpack for personal items",
        "Camera",
        "Walking stick/poles (optional)",
        "1-2 liters of water (in addition to water provided)"
    ],
    availability: "Daily departures, year-round",
    additionalInfo: {
        "Difficulty": "Easy to moderate (routes can be adapted to group fitness level)",
        "Minimum Age": "6 years (trails can be adapted for families)",
        "Languages": "English, French, Arabic, Berber",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Weather": "Activity runs year-round, but routes may change in winter months due to snow"
    },
    relatedPrograms: ["imlil-atlas", "ourika-valley", "camel-ride"]
},

"rock-climbing": {
    title: "Rock Climbing Experience",
    subtitle: "Scale the magnificent cliffs of Todra Gorge with expert guides",
    heroImage: "../assets/images/tours/imlil-atlas-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/imlil-atlas.jpg", // Using existing image as placeholder
    price: 90,
    duration: "5 hours",
    location: "Todra Gorge",
    groupSize: "1-6 people",
    rating: 4.9,
    reviews: 56,
    description: `
        <h3>Experience Overview</h3>
        <p>Challenge yourself with a rock climbing adventure on the spectacular limestone cliffs of Todra Gorge. Known as the "Morocco Verdon," these majestic walls offer routes for all levels, from complete beginners to experienced climbers, all against the backdrop of one of Morocco most stunning natural wonders.</p>
        
        <p>Your experience is led by professional climbing guides with international certifications and intimate knowledge of the local routes. The day begins with comprehensive safety instruction and equipment fitting, followed by climbing sessions tailored to your experience level.</p>
        
        <p>For beginners, we focus on building confidence and teaching fundamental techniques on easier routes, with the difficulty gradually increasing as your skills develop. Experienced climbers can test themselves on more challenging routes, with our guides providing local knowledge about the best climbs for your ability.</p>
        
        <p>Throughout the day, you will have the opportunity to complete multiple climbs, with rest breaks to appreciate the magnificent scenery of the gorge. The towering walls reaching heights of 300 meters, the peaceful river running through the canyon, and the changing colors of the rock as the sun moves across the sky create an unforgettable backdrop for your climbing adventure.</p>
    `,
    itinerary: [
        {
            time: "9:00 AM",
            title: "Meeting Point",
            description: "Meet your climbing guides at the designated location in Todra Gorge. (Transportation packages from Marrakech available at additional cost.)"
        },
        {
            time: "9:15 AM",
            title: "Introduction & Equipment",
            description: "Introduction to your guides, safety briefing, and equipment fitting (harness, helmet, climbing shoes)."
        },
        {
            time: "9:45 AM",
            title: "Basic Techniques",
            description: "Learn or review basic climbing techniques, safety procedures, and communication signals."
        },
        {
            time: "10:15 AM",
            title: "First Climbs",
            description: "Begin climbing on routes appropriate to your experience level with close guidance from instructors."
        },
        {
            time: "12:00 PM",
            title: "Lunch Break",
            description: "Break for a picnic lunch in the shade of the gorge while discussing the morning climbs."
        },
        {
            time: "1:00 PM",
            title: "Afternoon Climbing Session",
            description: "Continue climbing, attempting more challenging routes as confidence and skills improve."
        },
        {
            time: "2:30 PM",
            title: "Final Climbs",
            description: "Complete your last climbs of the day, possibly attempting a slightly more challenging route to test your progress."
        },
        {
            time: "3:30 PM",
            title: "Conclusion",
            description: "Return equipment, debrief with guides, and receive recommendations for future climbing."
        }
    ],
    includes: [
        "Professional certified climbing guides",
        "All necessary climbing equipment (harness, helmet, climbing shoes, ropes, carabiners)",
        "Safety briefing and basic instruction",
        "Picnic lunch and bottled water",
        "Photos of your climbing experience (sent digitally after the tour)",
        "Personal accident insurance"
    ],
    bring: [
        "Comfortable, flexible clothing suitable for physical activity",
        "Sneakers or light hiking shoes for walking around between climbs",
        "Sunscreen and lip balm",
        "Sunglasses and hat",
        "Small backpack for personal items",
        "Camera",
        "1-2 liters of water (in addition to water provided)"
    ],
    availability: "Daily, September through June (July and August can be too hot for comfortable climbing)",
    additionalInfo: {
        "Difficulty": "Adaptable to all levels from complete beginners to experienced climbers",
        "Minimum Age": "10 years",
        "Guide-to-Client Ratio": "1:4 maximum for safety",
        "Languages": "English, French, Arabic, Spanish",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 48 hours before",
        "Weather": "Activity subject to cancellation in case of rain or high winds for safety reasons"
    },
    relatedPrograms: ["hiking-tours", "quad-biking", "hot-air-balloon"]
}
};