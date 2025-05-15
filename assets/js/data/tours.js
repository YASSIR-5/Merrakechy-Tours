// assets/js/data/tours.js

// Tours data
const toursData = {
    'zagora-2-days': {
        title: '2-Day Zagora Desert Tour',
        subtitle: 'Experience the magic of the Zagora Desert with an overnight stay in a Berber camp',
        heroImage: '../assets/images/tours/zagora-desert-hero.jpg',
        mainImage: '../assets/images/tours/zagora-desert.jpg',
        price: 295,
        duration: '2 days / 1 night',
        location: 'Zagora Desert',
        groupSize: '2-16 people',
        rating: 4.8,
        reviews: 145,
        description: `
            <h3>Tour Overview</h3>
            <p>This 2-day adventure takes you from Marrakech to the magical Zagora Desert, crossing the majestic High Atlas Mountains and exploring the ancient Kasbah of Aït Benhaddou along the way.</p>
            <p>Experience an overnight stay in a traditional Berber desert camp, enjoy camel trekking across golden dunes, and witness the spectacular sunset and sunrise over the desert landscape. The journey provides authentic cultural experiences with opportunities to connect with local Berber people and learn about their way of life.</p>
            <p>Throughout the tour, you'll be accompanied by an experienced guide who will share insights into the region's rich history, culture, and natural beauty, making this desert adventure both educational and unforgettable.</p>
        `,
        itinerary: [
            {
                time: 'Day 1',
                title: 'Marrakech to Zagora Desert',
                description: 'Morning departure from Marrakech. Cross the High Atlas Mountains via the Tizi n\'Tichka pass (2260m). Visit the UNESCO World Heritage site of Aït Benhaddou Kasbah. Continue through the Draa Valley with its palm groves. Arrive at the desert gateway in late afternoon for a camel trek to the Berber camp. Enjoy traditional dinner and music under the stars.'
            },
            {
                time: 'Day 2',
                title: 'Zagora Desert to Marrakech',
                description: 'Wake early to witness the desert sunrise. Return by camel to meet your driver. Breakfast at a local guesthouse. Return journey to Marrakech with stops for lunch and scenic photography. Arrive in Marrakech in the evening.'
            }
        ],
        includes: [
            'Transportation in comfortable air-conditioned vehicle',
            'English/French/Spanish speaking guide',
            'Overnight accommodation in desert camp',
            'Camel trekking with experienced camel handlers',
            'Dinner and breakfast',
            'All entrance fees to monuments and attractions',
            'Bottled water during the journey'
        ],
        bring: [
            'Comfortable clothing and walking shoes',
            'Warm jacket (desert nights can be cold)',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
            'Personal toiletries',
            'Cash for personal expenses'
        ],
        availability: 'Daily departures, year-round',
        additionalInfo: {
            'Difficulty': 'Easy - moderate',
            'Language': 'English, French, Arabic, Spanish',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 48h before'
        },
        relatedPrograms: ['ourika-valley', 'imlil-atlas', 'merzouga-3-days']
    },
    
    'ourika-valley': {
        title: 'Ourika Valley Day Trip',
        subtitle: 'Discover lush landscapes and Berber villages in the Atlas Mountains foothills',
        heroImage: '../assets/images/tours/ourika-valley-hero.jpg',
        mainImage: '../assets/images/tours/ourika-valley.jpg',
        price: 55,
        duration: '1 day (8 hours)',
        location: 'Ourika Valley, Atlas Mountains',
        groupSize: '2-16 people',
        rating: 4.7,
        reviews: 187,
        description: `
            <h3>Tour Overview</h3>
            <p>Escape the city heat and discover the natural beauty of Ourika Valley, located just 30 kilometers from Marrakech in the foothills of the Atlas Mountains. This refreshing day trip takes you through scenic landscapes, traditional Berber villages, and along the refreshing Ourika River.</p>
            <p>Visit an authentic Berber home where you'll enjoy traditional Moroccan hospitality with mint tea and homemade bread. Learn about the traditional lifestyle of the indigenous Berber people who have inhabited these mountains for thousands of years.</p>
            <p>The highlight of the tour is a guided hike to the spectacular Setti Fatma waterfalls, where you can cool off in the clear mountain waters. Throughout the day, you'll have plenty of opportunities to capture stunning photographs of the valley's verdant landscapes and mountain vistas.</p>
        `,
        itinerary: [
            {
                time: '9:00 AM',
                title: 'Departure from Marrakech',
                description: 'Morning pickup from your accommodation in Marrakech. Drive through the countryside toward the Atlas Mountains.'
            },
            {
                time: '10:00 AM',
                title: 'Local Stops & Argan Oil Cooperative',
                description: 'Visit a women\'s argan oil cooperative to learn about traditional production methods. Opportunity to purchase authentic argan products.'
            },
            {
                time: '11:30 AM',
                title: 'Berber Village Visit',
                description: 'Visit a traditional Berber home in a local village. Enjoy Moroccan hospitality with mint tea and homemade bread. Learn about Berber culture and traditions.'
            },
            {
                time: '1:00 PM',
                title: 'Lunch by the River',
                description: 'Lunch at a riverside restaurant with beautiful views of the valley and mountains.'
            },
            {
                time: '2:30 PM',
                title: 'Setti Fatma Waterfalls',
                description: 'Guided hike to the famous Setti Fatma waterfalls. Free time to explore and take photos.'
            },
            {
                time: '5:00 PM',
                title: 'Return to Marrakech',
                description: 'Relaxing drive back to Marrakech with short stops for photographs. Arrival at your accommodation by early evening.'
            }
        ],
        includes: [
            'Round-trip transportation from your Marrakech accommodation',
            'English/French/Arabic speaking guide',
            'Visit to a traditional Berber home with tea ceremony',
            'Local guide for the waterfall hike',
            'Bottled water'
        ],
        bring: [
            'Comfortable walking shoes',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
            'Cash for lunch and optional purchases',
            'Swimwear and towel (if you wish to swim at the waterfalls)'
        ],
        availability: 'Daily departures',
        additionalInfo: {
            'Difficulty': 'Easy to moderate (waterfall hike is moderate)',
            'Language': 'English, French, Arabic',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['imlil-atlas', 'zagora-2-days', 'camel-ride']
    },
    
    'imlil-atlas': {
        title: 'Imlil Atlas Mountains Tour',
        subtitle: 'Hike through stunning mountain landscapes and traditional Berber villages',
        heroImage: '../assets/images/tours/imlil-atlas-hero.jpg',
        mainImage: '../assets/images/tours/imlil-atlas.jpg',
        price: 85,
        duration: '1 day (9 hours)',
        location: 'Imlil, High Atlas Mountains',
        groupSize: '2-12 people',
        rating: 4.9,
        reviews: 109,
        description: `
            <h3>Tour Overview</h3>
            <p>Discover the breathtaking beauty of the High Atlas Mountains on this day trip to Imlil, a charming Berber village nestled at the foot of North Africa's highest peak, Mount Toubkal (4,167m). This tour offers a perfect blend of natural scenery, cultural immersion, and light adventure.</p>
            <p>From Marrakech, you'll journey through picturesque landscapes and traditional mountain villages, witnessing the authentic rural lifestyle of the Berber people who have inhabited these mountains for generations. Upon reaching Imlil, you'll enjoy a guided hike through terraced fields, walnut groves, and stunning viewpoints.</p>
            <p>The hiking route is tailored to your fitness level and preferences, with options ranging from easy walks to more challenging trails. Throughout the day, your knowledgeable guide will share insights about Berber culture, local flora and fauna, and the fascinating history of the region.</p>
        `,
        itinerary: [
            {
                time: '8:30 AM',
                title: 'Departure from Marrakech',
                description: 'Morning pickup from your accommodation in Marrakech. Scenic drive through the countryside toward the High Atlas Mountains.'
            },
            {
                time: '10:00 AM',
                title: 'Tahanaout & Asni Stops',
                description: 'Brief stops in the towns of Tahanaout and Asni. Visit a local Berber souk (market) if it coincides with market day.'
            },
            {
                time: '11:00 AM',
                title: 'Arrival in Imlil',
                description: 'Arrive in Imlil village, the gateway to Mount Toubkal. Meet your mountain guide and begin your hiking adventure.'
            },
            {
                time: '11:15 AM',
                title: 'Mountain Hike',
                description: 'Guided trek through stunning landscapes, traditional Berber villages, and terraced farmland. Views of Mount Toubkal and surrounding peaks.'
            },
            {
                time: '1:30 PM',
                title: 'Traditional Berber Lunch',
                description: 'Enjoy a delicious homemade lunch in a local Berber home or mountain restaurant with panoramic views.'
            },
            {
                time: '3:00 PM',
                title: 'Continued Exploration',
                description: 'After lunch, continue exploring the area with your guide. Visit more villages or enjoy some free time for photography.'
            },
            {
                time: '4:00 PM',
                title: 'Return Journey',
                description: 'Begin the return journey to Imlil and then to Marrakech. Brief stops for spectacular photo opportunities.'
            },
            {
                time: '6:30 PM',
                title: 'Arrival in Marrakech',
                description: 'Return to your accommodation in Marrakech in the early evening.'
            }
        ],
        includes: [
            'Round-trip transportation from your Marrakech accommodation',
            'Professional English/French/Arabic speaking driver',
            'Local mountain guide in Imlil',
            'Traditional Moroccan lunch',
            'Mint tea and water',
            'All local taxes and fees'
        ],
        bring: [
            'Hiking or sturdy walking shoes',
            'Layered clothing (temperatures can vary in the mountains)',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
            'Cash for souvenirs or additional refreshments',
            'Small backpack for personal items'
        ],
        availability: 'Daily departures, year-round',
        additionalInfo: {
            'Difficulty': 'Easy to moderate (hiking difficulty can be adjusted)',
            'Language': 'English, French, Arabic, Berber',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 24h before'
        },
        relatedPrograms: ['ourika-valley', 'zagora-2-days', 'hot-air-balloon']
    },
    
    'merzouga-3-days': {
        title: '3-Day Desert Tour to Merzouga',
        subtitle: 'Journey through diverse landscapes to the majestic Erg Chebbi sand dunes',
        heroImage: '../assets/images/tours/zagora-desert-hero.jpg', // Use similar image for now
        mainImage: '../assets/images/tours/zagora-desert.jpg', // Use similar image for now
        price: 375,
        duration: '3 days / 2 nights',
        location: 'Atlas Mountains, Dades Valley, Merzouga Desert',
        groupSize: '2-16 people',
        rating: 4.9,
        reviews: 92,
        description: `
            <h3>Tour Overview</h3>
            <p>This comprehensive 3-day tour takes you on an unforgettable journey from Marrakech to the spectacular Erg Chebbi dunes of Merzouga, home to the most spectacular sand dunes in Morocco. Along the way, you'll experience the diversity of Morocco's landscapes and the richness of its cultural heritage.</p>
            <p>Cross the High Atlas Mountains via the stunning Tizi n'Tichka pass, explore the UNESCO World Heritage site of Aït Benhaddou, and travel through the Valley of a Thousand Kasbahs. Experience the dramatic scenery of Todra Gorge and Dades Valley before reaching the golden sand dunes of Erg Chebbi.</p>
            <p>The highlight of the tour is spending a night in a desert camp nestled among the towering dunes of Merzouga. Enjoy a camel trek at sunset, traditional Berber dinner, and music around the campfire under the star-filled desert sky. This tour offers a perfect blend of adventure, culture, and natural beauty.</p>
        `,
        itinerary: [
            {
                time: 'Day 1',
                title: 'Marrakech to Dades Valley',
                description: 'Morning departure from Marrakech. Cross the High Atlas Mountains via the Tizi n\'Tichka pass (2260m), offering spectacular panoramic views. Visit the UNESCO World Heritage site of Aït Benhaddou Kasbah, famous for its appearance in numerous films. Continue to Ouarzazate and visit the Taourirt Kasbah and the Atlas Film Studios (optional). Drive through the Valley of Roses and the Valley of a Thousand Kasbahs. Overnight stay in a hotel in the Dades Valley.'
            },
            {
                time: 'Day 2',
                title: 'Dades Valley to Merzouga Desert',
                description: 'After breakfast, explore the Dades Gorge and its unique rock formations known as "monkey fingers." Continue to Todra Gorge, a massive fault dividing the High Atlas, with cliffs up to 300m high. Enjoy a walk through this spectacular canyon. Continue to Erfoud, known for its fossil crafts, and on to the desert town of Merzouga. In the late afternoon, mount your camels for a 1.5-hour trek into the Erg Chebbi dunes to witness the sunset. Reach your desert camp for dinner, traditional music, and overnight stay in a Berber tent.'
            },
            {
                time: 'Day 3',
                title: 'Merzouga to Marrakech',
                description: 'Wake up early to witness the spectacular desert sunrise. Return by camel to Merzouga where you will have breakfast and a chance to shower. Begin the long journey back to Marrakech, traveling through different landscapes and taking a different route through the Atlas Mountains. Stop for lunch and breaks along the way. Arrive in Marrakech in the evening.'
            }
        ],
        includes: [
            'Transportation in comfortable air-conditioned vehicle',
            'English/French/Spanish speaking guide',
            'Accommodation: 1 night in hotel/riad, 1 night in desert camp',
            'Camel trekking in Merzouga',
            '2 breakfasts and 2 dinners',
            'All entrance fees to monuments and attractions mentioned',
            'Bottled water during the journey'
        ],
        bring: [
            'Comfortable clothing and walking shoes',
            'Warm jacket (desert nights can be cold)',
            'Sun protection (hat, sunglasses, sunscreen)',
            'Camera',
            'Personal toiletries',
            'Cash for lunches and personal expenses',
            'Flashlight for the desert camp'
        ],
        availability: 'Daily departures, year-round',
        additionalInfo: {
            'Difficulty': 'Easy - moderate',
            'Language': 'English, French, Arabic, Spanish',
            'Confirmation': 'Immediate',
            'Cancellation': 'Free up to 72h before'
        },
        relatedPrograms: ['zagora-2-days', 'ourika-valley', 'imlil-atlas']
    },


"ouzoud-waterfalls": {
    title: "Ouzoud Waterfalls Day Trip",
    subtitle: "Discover Morocco's most spectacular waterfalls surrounded by lush greenery",
    heroImage: "../assets/images/tours/ourika-valley-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder
    price: 65,
    duration: "10 hours",
    location: "Middle Atlas Mountains",
    groupSize: "4-16 people",
    rating: 4.8,
    reviews: 156,
    description: `
        <h3>Tour Overview</h3>
        <p>Experience the natural wonder of the Ouzoud Waterfalls on this full-day excursion from Marrakech. Standing at an impressive 110 meters (360 feet) tall, these cascading falls are the highest in North Africa and one of Morocco's most spectacular natural attractions.</p>
        
        <p>Your journey begins with a scenic drive through olive groves and traditional Berber villages in the Middle Atlas region. Upon arrival at Ouzoud, you'll be captivated by the magnificent waterfalls plunging dramatically into the river below, creating constant rainbows in the mist and a thundering soundtrack to your experience.</p>
        
        <p>With your knowledgeable guide, follow paths down to the basin of the falls where you can take a refreshing boat ride to get closer to the cascades (optional extra). Along the way, watch for the mischievous Barbary macaques, the only monkeys native to North Africa, that inhabit the area.</p>
        
        <p>After working up an appetite, enjoy lunch at a local restaurant overlooking the falls. The afternoon offers free time to further explore the area at your own pace, perhaps taking a swim in the natural pools (seasonal), visiting small local shops, or simply relaxing in this idyllic setting before returning to Marrakech.</p>
    `,
    itinerary: [
        {
            time: "8:00 AM",
            title: "Departure from Marrakech",
            description: "Morning pickup from your accommodation in Marrakech. Meet your guide and fellow travelers before departing in a comfortable, air-conditioned vehicle."
        },
        {
            time: "8:15 AM - 10:30 AM",
            title: "Scenic Drive to Ouzoud",
            description: "Enjoy a picturesque drive through the countryside, passing traditional Berber villages, olive groves, and the foothills of the Atlas Mountains. Brief comfort stop along the way."
        },
        {
            time: "10:30 AM",
            title: "Arrival at Ouzoud Waterfalls",
            description: "First views of the magnificent waterfalls from the upper observation points. Your guide will provide information about the falls and the surrounding area."
        },
        {
            time: "10:45 AM - 12:30 PM",
            title: "Guided Walk",
            description: "Descend along scenic pathways to the basin of the falls, with stops at various viewpoints for photos. Observe local wildlife including Barbary macaques."
        },
        {
            time: "12:30 PM - 1:30 PM",
            title: "Optional Boat Ride",
            description: "Opportunity to take a short boat ride close to the base of the falls (extra cost of approximately 20 MAD)."
        },
        {
            time: "1:30 PM - 2:30 PM",
            title: "Lunch",
            description: "Enjoy lunch at a local restaurant with views of the waterfalls. Options include traditional Moroccan dishes and international cuisine."
        },
        {
            time: "2:30 PM - 3:30 PM",
            title: "Free Time",
            description: "Free time to further explore the area, take a swim in the natural pools (weather permitting), or relax in the surroundings."
        },
        {
            time: "3:30 PM - 6:00 PM",
            title: "Return Journey",
            description: "Begin the return journey to Marrakech, taking a slightly different route to see more of the countryside."
        },
        {
            time: "6:00 PM",
            title: "Arrival in Marrakech",
            description: "Drop-off at your accommodation in Marrakech."
        }
    ],
    includes: [
        "Round-trip transportation from Marrakech in air-conditioned vehicle",
        "Professional English-speaking guide",
        "Guided walking tour of the falls area",
        "Bottled water",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable walking shoes",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Swimwear and towel (if you wish to swim, seasonal)",
        "Camera",
        "Cash for lunch, boat ride, and souvenirs",
        "Light jacket (can be cool near the falls, especially in winter)"
    ],
    availability: "Daily, year-round",
    additionalInfo: {
        "Difficulty": "Moderate - includes walking on uneven terrain and steps",
        "Minimum Age": "None - suitable for all ages",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Not Included": "Lunch (approximately 80-150 MAD per person), boat ride (approximately 20 MAD per person), gratuities"
    },
    relatedPrograms: ["ourika-valley", "essaouira", "imlil-atlas"]
},

"essaouira": {
    title: "Essaouira Day Trip",
    subtitle: "Explore the charming coastal city with its blue and white medina and fresh sea breeze",
    heroImage: "../assets/images/tours/ourika-valley-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder
    price: 75,
    duration: "10 hours",
    location: "Atlantic Coast",
    groupSize: "4-16 people",
    rating: 4.7,
    reviews: 142,
    description: `
        <h3>Tour Overview</h3>
        <p>Escape the heat and bustle of Marrakech for a refreshing day trip to Essaouira, a charming coastal city on Morocco's Atlantic shore. With its fortified medina, bustling fishing port, broad beaches, and refreshing sea breeze, Essaouira offers a perfect contrast to the inland cities.</p>
        
        <p>The journey to Essaouira takes you through the Moroccan countryside and the unique argan forests, where you might spot goats climbing the trees to eat the fruit. A stop at a local women's cooperative provides insight into traditional argan oil production and the opportunity to purchase authentic products.</p>
        
        <p>Upon arrival in Essaouira, you'll be captivated by the city's distinct character - a unique blend of Portuguese, Berber, and French influences visible in its architecture and culture. The UNESCO-listed medina with its blue and white color scheme, impressive ramparts, and artisan workshops is a photographer's dream.</p>
        
        <p>Enjoy a guided tour of the main attractions including the historic port where blue fishing boats dock with their daily catch, the bustling fish market, the artisan quarter, and the impressive 18th-century sea fortifications. After lunch, you'll have free time to explore independently - perhaps strolling along the beach, shopping for unique handicrafts, or simply relaxing in a seafront café before returning to Marrakech.</p>
    `,
    itinerary: [
        {
            time: "8:00 AM",
            title: "Departure from Marrakech",
            description: "Morning pickup from your accommodation in Marrakech. Meet your guide and fellow travelers."
        },
        {
            time: "9:30 AM",
            title: "Argan Oil Cooperative",
            description: "Visit a women's cooperative to learn about traditional argan oil production. Brief tour and opportunity to purchase authentic argan products."
        },
        {
            time: "11:00 AM",
            title: "Arrival in Essaouira",
            description: "Arrive in Essaouira and begin a guided walking tour of the main attractions."
        },
        {
            time: "11:15 AM - 1:00 PM",
            title: "Guided Tour",
            description: "Explore the UNESCO-listed medina, historic port, fish market, artisan quarter, and 18th-century fortifications with your knowledgeable guide."
        },
        {
            time: "1:00 PM - 2:30 PM",
            title: "Lunch",
            description: "Free time for lunch at one of Essaouira's excellent seafood restaurants or local cafes (not included in tour price)."
        },
        {
            time: "2:30 PM - 4:30 PM",
            title: "Free Time",
            description: "Independent exploration of Essaouira. Options include shopping in the souks, walking along the beach, visiting art galleries, or relaxing in a seafront café."
        },
        {
            time: "4:30 PM",
            title: "Departure from Essaouira",
            description: "Meet at the designated point to begin the return journey to Marrakech."
        },
        {
            time: "7:00 PM",
            title: "Arrival in Marrakech",
            description: "Drop-off at your accommodation in Marrakech."
        }
    ],
    includes: [
        "Round-trip transportation from Marrakech in air-conditioned vehicle",
        "Professional English-speaking guide",
        "Guided tour of Essaouira",
        "Visit to argan oil cooperative",
        "Bottled water",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable walking shoes",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Light jacket or windbreaker (it can be windy on the coast)",
        "Camera",
        "Cash for lunch and souvenirs",
        "Beach gear if you plan to enjoy the beach (seasonal)"
    ],
    availability: "Daily, year-round",
    additionalInfo: {
        "Difficulty": "Easy - mostly flat terrain with some walking",
        "Minimum Age": "None - suitable for all ages",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Not Included": "Lunch (approximately 100-200 MAD per person), optional activities, gratuities"
    },
    relatedPrograms: ["marrakech-tour", "ouzoud-waterfalls", "agafay-desert"]
},

"agafay-desert": {
    title: "Agafay Desert Day Trip",
    subtitle: "Experience the lunar-like landscape just outside Marrakech",
    heroImage: "../assets/images/tours/zagora-desert-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/zagora-desert.jpg", // Using existing image as placeholder
    price: 90,
    duration: "8 hours",
    location: "Agafay Desert",
    groupSize: "2-12 people",
    rating: 4.8,
    reviews: 98,
    description: `
        <h3>Tour Overview</h3>
        <p>Discover the captivating beauty of the Agafay Desert on this full-day excursion from Marrakech. Often called the "desert at the gates of Marrakech," the Agafay offers a desert experience without the long journey to the Sahara, located just 30 kilometers from the city.</p>
        
        <p>Unlike the sand dunes of the Sahara, the Agafay presents a different kind of desert beauty - a lunar-like rocky landscape of rolling hills and plateaus that stretches as far as the eye can see. Against the backdrop of the snow-capped Atlas Mountains, this stark yet stunning terrain creates unforgettable panoramic views.</p>
        
        <p>Your day includes a guided exploration of the desert by 4x4 vehicle, visiting scenic viewpoints and stopping at a traditional Berber village where you'll learn about local life and enjoy mint tea with residents. The highlight of the day is a delicious traditional lunch served in a luxury desert camp where you can relax in comfortable settings surrounded by the wilderness.</p>
        
        <p>In the afternoon, choose between relaxing at the camp or taking a gentle camel ride across the desert landscape. As the day winds down, you'll return to Marrakech with amazing photos and memories of Morocco's diverse natural beauty.</p>
    `,
    itinerary: [
        {
            time: "9:00 AM",
            title: "Departure from Marrakech",
            description: "Morning pickup from your accommodation in Marrakech in a comfortable 4x4 vehicle."
        },
        {
            time: "9:45 AM",
            title: "Arrival at Agafay Desert",
            description: "Reach the edges of the Agafay Desert and begin your exploration of this unique landscape."
        },
        {
            time: "10:00 AM - 12:00 PM",
            title: "Desert Exploration by 4x4",
            description: "Journey through the Agafay Desert by 4x4, stopping at panoramic viewpoints for photos with the Atlas Mountains backdrop. Visit a traditional Berber village to learn about local life and enjoy mint tea with residents."
        },
        {
            time: "12:30 PM - 2:00 PM",
            title: "Lunch at Desert Camp",
            description: "Arrive at a luxury desert camp for a traditional Moroccan lunch served in a comfortable setting with views of the desert landscape."
        },
        {
            time: "2:00 PM - 4:00 PM",
            title: "Afternoon Activities",
            description: "Choose between relaxing at the camp enjoying the views or taking a gentle camel ride across the desert (included in tour price)."
        },
        {
            time: "4:00 PM",
            title: "Return Journey",
            description: "Begin the return journey to Marrakech, taking a different route to experience more of the landscape."
        },
        {
            time: "5:00 PM",
            title: "Arrival in Marrakech",
            description: "Drop-off at your accommodation in Marrakech."
        }
    ],
    includes: [
        "Round-trip transportation from Marrakech in 4x4 vehicle",
        "Professional English-speaking guide/driver",
        "Visit to a Berber village with mint tea",
        "Traditional Moroccan lunch at desert camp",
        "Camel ride (approximately 30 minutes)",
        "Bottled water",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Light jacket (can be cool in winter months)",
        "Camera",
        "Cash for souvenirs or extra drinks",
        "Scarf or bandana (useful for protection from dust)"
    ],
    availability: "Daily, year-round",
    additionalInfo: {
        "Difficulty": "Easy - minimal walking required",
        "Minimum Age": "None - suitable for all ages",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 24 hours before",
        "Not Included": "Additional beverages beyond water provided, gratuities"
    },
    relatedPrograms: ["quad-biking", "camel-ride", "zagora-2-days"]
},

"fez-3-days": {
    title: "3-Day Tour from Marrakech to Fez",
    subtitle: "Journey across Morocco from Marrakech to Fez through desert and mountains",
    heroImage: "../assets/images/tours/imlil-atlas-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/imlil-atlas.jpg", // Using existing image as placeholder
    price: 395,
    duration: "3 days / 2 nights",
    location: "Multiple Cities",
    groupSize: "2-12 people",
    rating: 4.7,
    reviews: 89,
    description: `
        <h3>Tour Overview</h3>
        <p>Experience the diverse landscapes and cultural richness of Morocco on this 3-day adventure from Marrakech to Fez. Rather than returning to Marrakech after visiting the desert, this one-way tour continues to the imperial city of Fez, allowing you to see more of Morocco while minimizing travel time.</p>
        
        <p>Your journey begins crossing the spectacular High Atlas Mountains via the Tizi n'Tichka pass, visiting the UNESCO World Heritage site of Aït Benhaddou and the film studios of Ouarzazate. Continue through the Valley of Roses and the Dadès Valley before reaching the edge of the Sahara Desert at Merzouga.</p>
        
        <p>Experience the magic of the desert with a camel trek into the dunes of Erg Chebbi at sunset, followed by a night at a traditional desert camp under the stars. After a memorable desert sunrise, your journey continues through the Middle Atlas Mountains, visiting Berber villages, the cedar forests of Azrou (home to wild Barbary macaques), and the Alpine-style town of Ifrane.</p>
        
        <p>The tour concludes in the medieval city of Fez, where you can extend your stay to explore one of Morocco's most fascinating imperial cities. This carefully crafted itinerary showcases the country's geographic and cultural diversity, from desert to mountains, ancient kasbahs to imperial cities.</p>
    `,
    itinerary: [
        {
            time: "Day 1: 7:30 AM",
            title: "Departure from Marrakech",
            description: "Early morning pickup from your accommodation in Marrakech. Meet your driver/guide and begin your journey."
        },
        {
            time: "Day 1: Morning",
            title: "Cross the High Atlas Mountains",
            description: "Travel over the High Atlas Mountains via the spectacular Tizi n'Tichka pass (2,260m), with stops for panoramic views and photos."
        },
        {
            time: "Day 1: Late Morning",
            title: "Aït Benhaddou",
            description: "Visit the UNESCO World Heritage site of Aït Benhaddou, an impressive fortified village (ksar) that has featured in numerous films. Guided tour of this ancient mud-brick city."
        },
        {
            time: "Day 1: Afternoon",
            title: "Ouarzazate & Valley of Roses",
            description: "Stop in Ouarzazate to visit the film studios (optional) and Taourirt Kasbah. Continue through the Valley of Roses and the stunning Dadès Valley, known as the 'Valley of a Thousand Kasbahs'."
        },
        {
            time: "Day 1: Evening",
            title: "Arrive at Desert Edge",
            description: "Reach Merzouga at the edge of the Sahara Desert. Meet your camel caravan and enjoy a sunset camel trek into the Erg Chebbi dunes to your desert camp."
        },
        {
            time: "Day 1: Night",
            title: "Desert Camp Experience",
            description: "Dinner and overnight at a traditional desert camp. Enjoy Berber music around the campfire under the starry desert sky."
        },
        {
            time: "Day 2: Early Morning",
            title: "Desert Sunrise",
            description: "Optional early wake-up to witness the spectacular desert sunrise. Return to Merzouga by camel."
        },
        {
            time: "Day 2: Morning",
            title: "Breakfast & Departure",
            description: "Breakfast at a local hotel with shower facilities available. Depart for the Middle Atlas Mountains."
        },
        {
            time: "Day 2: Afternoon",
            title: "Ziz Valley & Midelt",
            description: "Drive through the dramatic Ziz Valley with its palm oases and stop in Midelt, known for its minerals and apples, for lunch."
        },
        {
            time: "Day 2: Evening",
            title: "Arrive in Azrou Area",
            description: "Reach Azrou or Ifrane area. Dinner and overnight at a comfortable hotel."
        },
        {
            time: "Day 3: Morning",
            title: "Cedar Forests & Azrou",
            description: "Visit the cedar forests near Azrou, home to wild Barbary macaques. Continue to the 'Little Switzerland' of Morocco, Ifrane, known for its Alpine-style architecture."
        },
        {
            time: "Day 3: Afternoon",
            title: "Journey to Fez",
            description: "Continue through the Middle Atlas Mountains to Fez, with stops in Berber villages along the way."
        },
        {
            time: "Day 3: Late Afternoon",
            title: "Arrive in Fez",
            description: "Arrival in Fez and drop-off at your accommodation (not included in tour price)."
        }
    ],
    includes: [
        "Transportation in comfortable air-conditioned vehicle",
        "English-speaking driver/guide throughout",
        "1 night in desert camp (private tent with shared facilities)",
        "1 night in mid-range hotel/riad (private room with ensuite)",
        "2 breakfasts and 2 dinners",
        "Camel trek in Merzouga",
        "Guided tour of Aït Benhaddou",
        "Bottled water daily",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Warm jacket for cool desert nights",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal toiletries and medications",
        "Camera",
        "Flashlight/headlamp for desert camp",
        "Cash for lunches, drinks, souvenirs, and tips"
    ],
    availability: "Departures every Monday, Wednesday, and Saturday",
    additionalInfo: {
        "Difficulty": "Easy to moderate - some walking required",
        "Minimum Age": "None - suitable for all ages",
        "Accommodation": "1 night in desert camp, 1 night in mid-range hotel/riad",
        "Languages": "English, French, Arabic",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 7 days before",
        "Not Included": "Accommodation in Fez, lunches, beverages, entrance fees to monuments (approximately 50-100 MAD per site), gratuities"
    },
    relatedPrograms: ["zagora-2-days", "merzouga-3-days", "casablanca-7-days"]
},

"casablanca-7-days": {
    title: "7-Day Tour from Casablanca",
    subtitle: "Comprehensive tour of Morocco's imperial cities, mountains, and desert",
    heroImage: "../assets/images/tours/ourika-valley-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder
    price: 875,
    duration: "7 days / 6 nights",
    location: "Multiple Cities",
    groupSize: "2-16 people",
    rating: 4.9,
    reviews: 67,
    description: `
        <h3>Tour Overview</h3>
        <p>Experience the best of Morocco on this comprehensive 7-day journey from Casablanca. This carefully crafted tour covers the country's most iconic destinations, offering a perfect balance of cultural immersion, natural wonders, and authentic experiences.</p>
        
        <p>Beginning in the modern city of Casablanca, you'll visit the magnificent Hassan II Mosque before journeying to the capital, Rabat, with its elegant architecture and ancient ruins. Continue to the blue city of Chefchaouen, nestled in the Rif Mountains, where you'll explore its picturesque blue-washed medina.</p>
        
        <p>In Fez, Morocco's cultural and spiritual center, dive into the UNESCO-listed medieval medina with its labyrinthine streets, traditional artisan workshops, and impressive religious institutions. Then cross the Middle Atlas Mountains to reach the Sahara Desert at Merzouga, where you'll experience a magical camel trek and overnight stay in a desert camp under the stars.</p>
        
        <p>The journey continues through dramatic gorges and the Road of a Thousand Kasbahs to reach the rose-scented Dades Valley. Visit the UNESCO World Heritage site of Aït Benhaddou before crossing the High Atlas Mountains to conclude your adventure in vibrant Marrakech, exploring its historic sites, bustling souks, and famous Djemaa el-Fna square.</p>
        
        <p>Throughout the journey, you'll stay in carefully selected riads and hotels that reflect Moroccan hospitality and architectural traditions, enhancing your cultural experience.</p>
    `,
    itinerary: [
        {
            time: "Day 1",
            title: "Casablanca - Rabat",
            description: "Arrival in Casablanca. Visit the magnificent Hassan II Mosque (exterior). Drive to Rabat, Morocco's capital. Tour Rabat's highlights including the Royal Palace (exterior), Hassan Tower, Mohammed V Mausoleum, and Kasbah of the Udayas. Overnight in Rabat."
        },
        {
            time: "Day 2",
            title: "Rabat - Chefchaouen",
            description: "Morning departure to Chefchaouen in the Rif Mountains. Afternoon exploration of Chefchaouen's blue-washed medina, Plaza Uta el-Hammam, and the Kasbah. Free time to wander the photogenic blue streets. Overnight in Chefchaouen."
        },
        {
            time: "Day 3",
            title: "Chefchaouen - Volubilis - Meknes - Fez",
            description: "Drive to Volubilis to explore the ancient Roman ruins. Continue to the imperial city of Meknes for a tour of its historical sites including Bab Mansour gate, Royal Stables, and the old medina. Arrive in Fez by evening. Overnight in Fez."
        },
        {
            time: "Day 4",
            title: "Fez - Exploring the Ancient Medina",
            description: "Full day guided tour of Fez, the cultural and spiritual capital of Morocco. Explore the UNESCO-listed medieval medina, visit the historical madrassas (religious schools), Nejjarine Fountain, tanneries, and artisan quarters. Overnight in Fez."
        },
        {
            time: "Day 5",
            title: "Fez - Midelt - Erfoud - Merzouga (Sahara Desert)",
            description: "Journey through the Middle Atlas Mountains with a stop in Ifrane, known as 'Little Switzerland.' Continue through cedar forests and Berber villages to Midelt for lunch. Drive through the Ziz Valley to reach Erfoud, and continue to Merzouga at the edge of the Sahara. Sunset camel trek into the Erg Chebbi dunes to your desert camp. Dinner and overnight under the stars."
        },
        {
            time: "Day 6",
            title: "Merzouga - Todra Gorge - Dades Valley - Ouarzazate",
            description: "Optional sunrise camel trek. After breakfast, drive to Tinghir and explore the stunning Todra Gorge with its 300m high cliffs. Continue through the Road of a Thousand Kasbahs to the Dades Valley. Visit the Valley of Roses and the film studios of Ouarzazate. Overnight in Ouarzazate."
        },
        {
            time: "Day 7",
            title: "Ouarzazate - Aït Benhaddou - Marrakech",
            description: "Visit the Taourirt Kasbah in Ouarzazate. Continue to the UNESCO World Heritage site of Aït Benhaddou, an impressive fortified village. Cross the High Atlas Mountains via the spectacular Tizi n'Tichka pass (2,260m). Arrive in Marrakech by late afternoon. Tour ends with drop-off at your Marrakech accommodation."
        }
    ],
    includes: [
        "6 nights accommodation (3* riads/hotels, desert camp)",
        "Transportation in comfortable air-conditioned vehicle throughout",
        "English-speaking driver/guide",
        "Local city guides in Rabat, Fez, and Marrakech",
        "Daily breakfast and dinner (except dinner in Marrakech on day 7)",
        "Camel trek in Merzouga",
        "Bottled water daily",
        "All taxes and service charges"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Warm clothing for cool nights, especially in the mountains and desert",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal toiletries and medications",
        "Camera",
        "Small backpack for day trips",
        "Flashlight/headlamp for desert camp",
        "Cash for lunches, drinks, souvenirs, and tips"
    ],
    availability: "Departures every Saturday",
    additionalInfo: {
        "Difficulty": "Easy to moderate - involves walking in medinas and some uneven terrain",
        "Minimum Age": "None - suitable for all ages",
        "Accommodation": "3* riads/hotels (twin/double rooms with private bathrooms) and one night in desert camp",
        "Languages": "English, French, Arabic, Spanish (request at booking)",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 30 days before; 50% refund up to 15 days before",
        "Not Included": "International flights, lunches, beverages, entrance fees to monuments (approximately 50-100 MAD per site), tips, travel insurance"
    },
    relatedPrograms: ["casablanca-8-days", "fez-3-days", "merzouga-3-days"]
},

"casablanca-8-days": {
    title: "8-Day Tour from Casablanca",
    subtitle: "Extended imperial cities tour with an extra day in Marrakech",
    heroImage: "../assets/images/tours/ourika-valley-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder
    price: 995,
    duration: "8 days / 7 nights",
    location: "Multiple Cities",
    groupSize: "2-16 people",
    rating: 4.8,
    reviews: 58,
    description: `
        <h3>Tour Overview</h3>
        <p>This extended 8-day tour from Casablanca offers everything in our popular 7-day itinerary with the valuable addition of a full day to explore the vibrant city of Marrakech. This allows you to experience this captivating imperial city at a more relaxed pace, visiting additional sites and having free time to discover its hidden treasures.</p>
        
        <p>Beginning with the modern city of Casablanca and the capital Rabat, you'll journey to the blue jewel of Chefchaouen before diving into the medieval wonders of Fez. Cross the Middle Atlas Mountains to experience the magical Sahara Desert with a camel trek and overnight stay beneath the stars.</p>
        
        <p>Continue through dramatic landscapes including the Todra Gorge, Dades Valley, and the UNESCO World Heritage site of Aït Benhaddou before reaching Marrakech, where you'll have two full days to explore. The extra day allows you to visit more attractions such as the Majorelle Garden, Bahia Palace, Saadian Tombs, and the Museum of Moroccan Arts, while also having time to wander the souks, enjoy the atmosphere of Djemaa el-Fna, or simply relax in a traditional hammam.</p>
        
        <p>This comprehensive tour offers the perfect balance of guided exploration and personal discovery, with carefully selected accommodations that showcase the best of Moroccan hospitality and architectural traditions.</p>
    `,
    itinerary: [
        {
            time: "Day 1",
            title: "Casablanca - Rabat",
            description: "Arrival in Casablanca. Visit the magnificent Hassan II Mosque (exterior). Drive to Rabat, Morocco's capital. Tour Rabat's highlights including the Royal Palace (exterior), Hassan Tower, Mohammed V Mausoleum, and Kasbah of the Udayas. Overnight in Rabat."
        },
        {
            time: "Day 2",
            title: "Rabat - Chefchaouen",
            description: "Morning departure to Chefchaouen in the Rif Mountains. Afternoon exploration of Chefchaouen's blue-washed medina, Plaza Uta el-Hammam, and the Kasbah. Free time to wander the photogenic blue streets. Overnight in Chefchaouen."
        },
        {
            time: "Day 3",
            title: "Chefchaouen - Volubilis - Meknes - Fez",
            description: "Drive to Volubilis to explore the ancient Roman ruins. Continue to the imperial city of Meknes for a tour of its historical sites including Bab Mansour gate, Royal Stables, and the old medina. Arrive in Fez by evening. Overnight in Fez."
        },
        {
            time: "Day 4",
            title: "Fez - Exploring the Ancient Medina",
            description: "Full day guided tour of Fez, the cultural and spiritual capital of Morocco. Explore the UNESCO-listed medieval medina, visit the historical madrassas (religious schools), Nejjarine Fountain, tanneries, and artisan quarters. Overnight in Fez."
        },
        {
            time: "Day 5",
            title: "Fez - Midelt - Erfoud - Merzouga (Sahara Desert)",
            description: "Journey through the Middle Atlas Mountains with a stop in Ifrane, known as 'Little Switzerland.' Continue through cedar forests and Berber villages to Midelt for lunch. Drive through the Ziz Valley to reach Erfoud, and continue to Merzouga at the edge of the Sahara. Sunset camel trek into the Erg Chebbi dunes to your desert camp. Dinner and overnight under the stars."
        },
        {
            time: "Day 6",
            title: "Merzouga - Todra Gorge - Dades Valley - Ouarzazate",
            description: "Optional sunrise camel trek. After breakfast, drive to Tinghir and explore the stunning Todra Gorge with its 300m high cliffs. Continue through the Road of a Thousand Kasbahs to the Dades Valley. Visit the Valley of Roses and the film studios of Ouarzazate. Overnight in Ouarzazate."
        },
        {
            time: "Day 7",
            title: "Ouarzazate - Aït Benhaddou - Marrakech",
            description: "Visit the Taourirt Kasbah in Ouarzazate. Continue to the UNESCO World Heritage site of Aït Benhaddou, an impressive fortified village. Cross the High Atlas Mountains via the spectacular Tizi n'Tichka pass (2,260m). Arrive in Marrakech by late afternoon. Evening orientation walk in Djemaa el-Fna square. Overnight in Marrakech."
        },
        {
            time: "Day 8",
            title: "Marrakech - Full Day Exploration",
            description: "Full day guided tour of Marrakech including the Koutoubia Mosque, Bahia Palace, Saadian Tombs, and the Museum of Moroccan Arts. Afternoon visit to the beautiful Majorelle Garden. Free time to explore the souks or relax in a traditional hammam. Tour ends with drop-off at your Marrakech accommodation or airport."
        }
    ],
    includes: [
        "7 nights accommodation (3* riads/hotels, desert camp)",
        "Transportation in comfortable air-conditioned vehicle throughout",
        "English-speaking driver/guide",
        "Local city guides in Rabat, Fez, and Marrakech",
        "Daily breakfast and dinner (except dinner in Marrakech on day 7 and 8)",
        "Camel trek in Merzouga",
        "Bottled water daily",
        "All taxes and service charges"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Warm clothing for cool nights, especially in the mountains and desert",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal toiletries and medications",
        "Camera",
        "Small backpack for day trips",
        "Flashlight/headlamp for desert camp",
        "Cash for lunches, drinks, souvenirs, and tips"
    ],
    availability: "Departures every Saturday",
    additionalInfo: {
        "Difficulty": "Easy to moderate - involves walking in medinas and some uneven terrain",
        "Minimum Age": "None - suitable for all ages",
        "Accommodation": "3* riads/hotels (twin/double rooms with private bathrooms) and one night in desert camp",
        "Languages": "English, French, Arabic, Spanish (request at booking)",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 30 days before; 50% refund up to 15 days before",
        "Not Included": "International flights, lunches, beverages, entrance fees to monuments (approximately 50-100 MAD per site), tips, travel insurance"
    },
    relatedPrograms: ["casablanca-7-days", "casablanca-9-days", "merzouga-3-days"]
},

"casablanca-9-days": {
    title: "9-Day Tour from Casablanca",
    subtitle: "Comprehensive tour with added time in Fes and Essaouira day trip",
    heroImage: "../assets/images/tours/ourika-valley-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder
    price: 1150,
    duration: "9 days / 8 nights",
    location: "Multiple Cities",
    groupSize: "2-16 people",
    rating: 4.9,
    reviews: 52,
    description: `
        <h3>Tour Overview</h3>
        <p>Our 9-day premium tour offers the most comprehensive exploration of Morocco, building on our popular itineraries with valuable additions. This extended journey includes extra time in the cultural capital of Fez and an exciting day trip to the coastal gem of Essaouira from Marrakech, creating the ultimate Moroccan experience.</p>
        
        <p>Beginning in Casablanca and the capital Rabat, you will journey to the enchanting blue city of Chefchaouen before immersing yourself in Fez for two full days - allowing deeper exploration of its vast medina, hidden corners, and cultural attractions. Then cross the Middle Atlas Mountains for your desert adventure in the Sahara, complete with camel trekking and overnight camping under the stars.</p>
        
        <p>Continue through the dramatic landscapes of gorges and valleys to Ouarzazate and the UNESCO site of Aït Benhaddou before reaching vibrant Marrakech. Here, after a full day exploring the imperial city, you will enjoy a refreshing day trip to the charming coastal town of Essaouira, known for its fortified medina, artistic atmosphere, and fresh seafood.</p>
        
        <p>This carefully crafted itinerary offers the perfect balance of cultural immersion, natural wonders, and authentic experiences, with carefully selected accommodations that showcase the best of Moroccan hospitality. With an expert guide throughout, you will gain deep insights into Morocco's rich history, diverse landscapes, and vibrant culture.</p>
    `,
    itinerary: [
        {
            time: "Day 1",
            title: "Casablanca - Rabat",
            description: "Arrival in Casablanca. Visit the magnificent Hassan II Mosque (exterior). Drive to Rabat, Morocco's capital. Tour Rabat's highlights including the Royal Palace (exterior), Hassan Tower, Mohammed V Mausoleum, and Kasbah of the Udayas. Overnight in Rabat."
        },
        {
            time: "Day 2",
            title: "Rabat - Chefchaouen",
            description: "Morning departure to Chefchaouen in the Rif Mountains. Afternoon exploration of Chefchaouen's blue-washed medina, Plaza Uta el-Hammam, and the Kasbah. Free time to wander the photogenic blue streets. Overnight in Chefchaouen."
        },
        {
            time: "Day 3",
            title: "Chefchaouen - Volubilis - Meknes - Fez",
            description: "Drive to Volubilis to explore the ancient Roman ruins. Continue to the imperial city of Meknes for a tour of its historical sites including Bab Mansour gate, Royal Stables, and the old medina. Arrive in Fez by evening. Overnight in Fez."
        },
        {
            time: "Day 4",
            title: "Fez - First Day Exploration",
            description: "First day guided tour of Fez focusing on the UNESCO-listed medieval medina, the historical madrassas (religious schools), Nejjarine Fountain, and the famous leather tanneries. Overnight in Fez."
        },
        {
            time: "Day 5",
            title: "Fez - Second Day Exploration",
            description: "Second day in Fez to explore more areas of this vast city. Visit the ceramic and zellige tile workshops, the Jewish Quarter (Mellah), the Borj Nord fortress for panoramic views, and enjoy time for shopping. Optional visit to a traditional hammam. Overnight in Fez."
        },
        {
            time: "Day 6",
            title: "Fez - Midelt - Erfoud - Merzouga (Sahara Desert)",
            description: "Journey through the Middle Atlas Mountains with stops in Ifrane and cedar forests. Continue to Midelt for lunch. Drive through the Ziz Valley to Erfoud and Merzouga. Sunset camel trek into the Erg Chebbi dunes to your desert camp. Dinner and overnight under the stars."
        },
        {
            time: "Day 7",
            title: "Merzouga - Todra Gorge - Dades Valley - Ouarzazate",
            description: "Optional sunrise camel trek. After breakfast, drive to Tinghir and explore the stunning Todra Gorge. Continue through the Road of a Thousand Kasbahs to the Dades Valley. Visit the Valley of Roses and Ouarzazate. Overnight in Ouarzazate."
        },
        {
            time: "Day 8",
            title: "Ouarzazate - Aït Benhaddou - Marrakech",
            description: "Visit Taourirt Kasbah and the UNESCO site of Aït Benhaddou. Cross the High Atlas Mountains via the Tizi n'Tichka pass. Afternoon guided tour of Marrakech's main sites including Koutoubia Mosque, Bahia Palace, and the famous Djemaa el-Fna square. Overnight in Marrakech."
        },
        {
            time: "Day 9",
            title: "Marrakech - Essaouira Day Trip - Marrakech",
            description: "Full day excursion to the coastal town of Essaouira. En route, visit an argan oil cooperative. Guided tour of Essaouira's fortified medina, port, and beach. Free time to explore the artsy town and enjoy fresh seafood. Return to Marrakech in the evening. Tour ends with drop-off at your accommodation."
        }
    ],
    includes: [
        "8 nights accommodation (3-4* riads/hotels, desert camp)",
        "Transportation in comfortable air-conditioned vehicle throughout",
        "English-speaking driver/guide",
        "Local city guides in Rabat, Fez, Marrakech, and Essaouira",
        "Daily breakfast and dinner (except dinner in Marrakech on days 8 and 9)",
        "Camel trek in Merzouga",
        "Bottled water daily",
        "All taxes and service charges"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Warm clothing for cool nights, especially in the mountains and desert",
        "Light clothing and swimwear for Essaouira (weather permitting)",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal toiletries and medications",
        "Camera",
        "Small backpack for day trips",
        "Flashlight/headlamp for desert camp",
        "Cash for lunches, drinks, souvenirs, and tips"
    ],
    availability: "Departures every Saturday",
    additionalInfo: {
        "Difficulty": "Easy to moderate - involves walking in medinas and some uneven terrain",
        "Minimum Age": "None - suitable for all ages",
        "Accommodation": "3-4* riads/hotels (twin/double rooms with private bathrooms) and one night in desert camp",
        "Languages": "English, French, Arabic, Spanish (request at booking)",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 30 days before; 50% refund up to 15 days before",
        "Not Included": "International flights, lunches, beverages, entrance fees to monuments (approximately 50-100 MAD per site), tips, travel insurance"
    },
    relatedPrograms: ["casablanca-7-days", "casablanca-8-days", "casablanca-10-days"]
},

"casablanca-10-days": {
    title: "10-Day Tour from Casablanca",
    subtitle: "In-depth exploration of Morocco's imperial cities, desert, coast and hidden gems",
    heroImage: "../assets/images/tours/ourika-valley-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder
    price: 1295,
    duration: "10 days / 9 nights",
    location: "Multiple Cities",
    groupSize: "2-16 people",
    rating: 4.9,
    reviews: 45,
    description: `
        <h3>Tour Overview</h3>
        <p>Our premium 10-day grand tour of Morocco offers the most comprehensive and immersive experience possible. This extended journey builds on our popular itineraries with valuable additions, creating the ultimate Moroccan adventure that balances must-see highlights with off-the-beaten-path discoveries.</p>
        
        <p>Beginning in cosmopolitan Casablanca and the elegant capital of Rabat, you will journey to the enchanting blue city of Chefchaouen for a deep exploration of its photogenic medina. Continue to the imperial city of Meknes and the remarkable Roman ruins of Volubilis before immersing yourself in Fez for two full days, allowing you to truly appreciate the vastness of its ancient medina.</p>
        
        <p>Your adventure continues across the Middle Atlas Mountains to the Sahara Desert where you will experience not just a sunset camel trek and overnight camp, but also a morning desert exploration to visit nomadic families and oases. Journey through the dramatic landscapes of the Todra and Dades Gorges, staying overnight in the scenic valley before continuing to Ouarzazate and the UNESCO site of Aït Benhaddou.</p>
        
        <p>After crossing the High Atlas Mountains, spend two days in vibrant Marrakech with a comprehensive guided tour and a day of independent exploration or optional activities. The journey concludes with a full day in the charming coastal town of Essaouira, known for its fortified medina, artistic atmosphere, and excellent seafood.</p>
        
        <p>This meticulously crafted itinerary showcases Morocco's incredible diversity, from imperial cities to desert landscapes, mountain villages to coastal retreats, with carefully selected premium accommodations that highlight the best of Moroccan hospitality and architectural traditions.</p>
    `,
    itinerary: [
        {
            time: "Day 1",
            title: "Casablanca - Rabat",
            description: "Arrival in Casablanca. Visit the magnificent Hassan II Mosque (exterior). Drive to Rabat, Morocco's capital. Tour Rabat's highlights including the Royal Palace (exterior), Hassan Tower, Mohammed V Mausoleum, and Kasbah of the Udayas. Overnight in Rabat."
        },
        {
            time: "Day 2",
            title: "Rabat - Chefchaouen",
            description: "Morning departure to Chefchaouen in the Rif Mountains. Afternoon exploration of Chefchaouen's blue-washed medina, Plaza Uta el-Hammam, and the Kasbah. Free time to wander the photogenic blue streets. Overnight in Chefchaouen."
        },
        {
            time: "Day 3",
            title: "Chefchaouen - Volubilis - Meknes - Fez",
            description: "Drive to Volubilis to explore the ancient Roman ruins. Continue to the imperial city of Meknes for a tour of its historical sites including Bab Mansour gate, Royal Stables, and the old medina. Arrive in Fez by evening. Overnight in Fez."
        },
        {
            time: "Day 4",
            title: "Fez - First Day Exploration",
            description: "First day guided tour of Fez focusing on the UNESCO-listed medieval medina, the historical madrassas (religious schools), Nejjarine Fountain, and the famous leather tanneries. Overnight in Fez."
        },
        {
            time: "Day 5",
            title: "Fez - Second Day Exploration",
            description: "Second day in Fez exploring more areas of this vast city. Visit the ceramic and zellige tile workshops, the Jewish Quarter (Mellah), the Borj Nord fortress for panoramic views, and enjoy time for shopping. Optional traditional hammam experience. Overnight in Fez."
        },
        {
            time: "Day 6",
            title: "Fez - Midelt - Erfoud - Merzouga (Sahara Desert)",
            description: "Journey through the Middle Atlas Mountains with stops in Ifrane and cedar forests. Continue to Midelt for lunch. Drive through the Ziz Valley to Erfoud and Merzouga. Sunset camel trek into the Erg Chebbi dunes to your luxury desert camp. Dinner and overnight under the stars with traditional entertainment."
        },
        {
            time: "Day 7",
            title: "Merzouga - Desert Exploration - Todra Gorge - Dades Valley",
            description: "Optional sunrise camel trek. Morning desert exploration by 4x4 to visit nomadic families and desert oases. Drive to Tinghir to explore the stunning Todra Gorge with its 300m high cliffs. Continue to the beautiful Dades Valley for overnight in a charming guesthouse overlooking the valley."
        },
        {
            time: "Day 8",
            title: "Dades Valley - Ouarzazate - Aït Benhaddou - Marrakech",
            description: "Drive through the Valley of Roses to Ouarzazate to visit the Taourirt Kasbah and film studios. Continue to the UNESCO World Heritage site of Aït Benhaddou for an extensive tour of this impressive fortified village. Cross the High Atlas Mountains via the Tizi n'Tichka pass to reach Marrakech by evening. Overnight in Marrakech."
        },
        {
            time: "Day 9",
            title: "Marrakech - Comprehensive Tour",
            description: "Full day guided tour of Marrakech including the Koutoubia Mosque, Bahia Palace, Saadian Tombs, Ben Youssef Madrasa, and the Museum of Moroccan Arts. Afternoon visit to the beautiful Majorelle Garden and Yves Saint Laurent Museum. Evening visit to the famous Djemaa el-Fna square. Overnight in Marrakech."
        },
        {
            time: "Day 10",
            title: "Marrakech - Essaouira - Marrakech",
            description: "Full day excursion to the coastal town of Essaouira. En route, visit an argan oil cooperative. Guided tour of Essaouira's fortified medina, port, and beach. Free time to explore the artsy town and enjoy fresh seafood. Return to Marrakech in the evening. Tour ends with drop-off at your accommodation or Marrakech airport."
        }
    ],
    includes: [
        "9 nights premium accommodation (4* riads/hotels, luxury desert camp)",
        "Transportation in comfortable air-conditioned vehicle throughout",
        "English-speaking driver/guide",
        "Local expert guides in Rabat, Chefchaouen, Volubilis, Fez, Aït Benhaddou, Marrakech, and Essaouira",
        "Daily breakfast and dinner (except dinner in Marrakech on days 9 and 10)",
        "Sunset and sunrise camel treks in Merzouga",
        "4x4 desert exploration",
        "Bottled water daily",
        "Welcome gift",
        "All taxes and service charges"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Warm clothing for cool nights, especially in the mountains and desert",
        "Light clothing and swimwear for Essaouira (weather permitting)",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal toiletries and medications",
        "Camera",
        "Small backpack for day trips",
        "Flashlight/headlamp for desert camp",
        "Cash for lunches, drinks, souvenirs, and tips"
    ],
    availability: "Departures every Friday and Saturday",
    additionalInfo: {
        "Difficulty": "Easy to moderate - involves walking in medinas and some uneven terrain",
        "Minimum Age": "None - suitable for all ages",
        "Accommodation": "4* riads/hotels (twin/double rooms with private bathrooms) and one night in luxury desert camp",
        "Languages": "English, French, Arabic, Spanish, German (request at booking)",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 30 days before; 50% refund up to 15 days before",
        "Not Included": "International flights, lunches, beverages, entrance fees to monuments (approximately 50-100 MAD per site), tips, travel insurance"
    },
    relatedPrograms: ["casablanca-9-days", "casablanca-12-days", "fez-3-days"]
},

"casablanca-12-days": {
    title: "12-Day Tour from Casablanca",
    subtitle: "Ultimate Morocco experience covering all major destinations plus hidden gems",
    heroImage: "../assets/images/tours/ourika-valley-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/ourika-valley.jpg", // Using existing image as placeholder
    price: 1495,
    duration: "12 days / 11 nights",
    location: "Multiple Cities",
    groupSize: "2-12 people",
    rating: 4.9,
    reviews: 38,
    description: `
        <h3>Tour Overview</h3>
        <p>Our signature 12-day grand tour represents the ultimate Moroccan experience, offering unparalleled depth and breadth in exploring this fascinating country. This comprehensive journey allows you to truly immerse yourself in Morocco's rich culture, diverse landscapes, and authentic experiences at a comfortable pace.</p>
        
        <p>Beginning with the modern city of Casablanca and the capital Rabat, you'll travel north to Tangier on the Mediterranean coast before journeying to the enchanting blue city of Chefchaouen. Continue to the imperial cities of Meknes and Fez, where you'll have ample time to explore their historical treasures, ancient medinas, and artisanal traditions.</p>
        
        <p>Your adventure continues into the Middle Atlas Mountains and to the majestic Sahara Desert for an extended desert experience including sunset and sunrise camel treks, overnight camping, and 4x4 explorations of dunes, oases, and nomadic communities. Journey through dramatic gorges and valleys, visiting remote Berber villages and hidden oases before reaching the famous kasbahs of Ouarzazate and Aït Benhaddou.</p>
        
        <p>After crossing the High Atlas Mountains, spend three full days in and around Marrakech - exploring the imperial city itself, taking a day trip to the scenic Ourika Valley, and experiencing the artistic coastal town of Essaouira. This allows you to balance city exploration with natural beauty and coastal charm.</p>
        
        <p>Throughout the journey, you'll stay in carefully selected premium accommodations that showcase the best of Moroccan hospitality and architectural traditions, from luxury riads in the medinas to a premium desert camp and scenic mountain kasbahs. With an expert guide throughout, you'll gain deep insights into Morocco's rich history, diverse cultures, and contemporary life.</p>
    `,
    itinerary: [
        {
            time: "Day 1",
            title: "Casablanca - Rabat",
            description: "Arrival in Casablanca. Guided visit to the magnificent Hassan II Mosque (interior). Drive to Rabat, Morocco's capital. Tour Rabat's highlights including the Royal Palace (exterior), Hassan Tower, Mohammed V Mausoleum, and Kasbah of the Udayas. Overnight in Rabat."
        },
        {
            time: "Day 2",
            title: "Rabat - Tangier - Chefchaouen",
            description: "Morning departure to Tangier. Panoramic tour of Tangier including Cape Spartel (where the Mediterranean meets the Atlantic) and the Caves of Hercules. Brief walking tour of Tangier's medina. Continue to Chefchaouen in the Rif Mountains. Evening orientation walk. Overnight in Chefchaouen."
        },
        {
            time: "Day 3",
            title: "Chefchaouen Exploration",
            description: "Full day exploring the blue city of Chefchaouen. Morning guided tour of the medina, Plaza Uta el-Hammam, the Kasbah, and the Andalusian Gardens. Afternoon free for independent exploration, shopping, or optional hike to the Spanish Mosque for panoramic views. Overnight in Chefchaouen."
        },
        {
            time: "Day 4",
            title: "Chefchaouen - Volubilis - Meknes - Fez",
            description: "Drive to Volubilis to explore the ancient Roman ruins with a local expert guide. Continue to the imperial city of Meknes for a tour of its historical sites including Bab Mansour gate, Royal Stables, and the old medina. Arrive in Fez by evening. Overnight in Fez."
        },
        {
            time: "Day 5",
            title: "Fez - First Day Exploration",
            description: "First day guided tour of Fez focusing on the UNESCO-listed medieval medina, the historical madrassas (religious schools), Nejjarine Fountain, and the famous leather tanneries. Overnight in Fez."
        },
        {
            time: "Day 6",
            title: "Fez - Second Day Exploration",
            description: "Second day in Fez exploring more areas of this vast city. Visit the ceramic and zellige tile workshops, the Jewish Quarter (Mellah), the Borj Nord fortress for panoramic views, and artisan workshops. Evening special dinner with traditional music. Overnight in Fez."
        },
        {
            time: "Day 7",
            title: "Fez - Ifrane - Midelt - Erfoud - Merzouga (Sahara Desert)",
            description: "Journey through the Middle Atlas Mountains with stops in Ifrane ('Little Switzerland') and the cedar forests of Azrou to see Barbary macaques. Lunch in Midelt. Continue through the dramatic Ziz Valley to Erfoud (fossil center) and finally to Merzouga. Sunset camel trek into the Erg Chebbi dunes to your luxury desert camp. Dinner and overnight under the stars with traditional entertainment."
        },
        {
            time: "Day 8",
            title: "Merzouga - Desert Exploration",
            description: "Optional sunrise camel trek. After breakfast, full day desert exploration by 4x4 to discover different aspects of desert life: visit nomadic families, the oasis of Khamlia to meet the Gnawa people (descendants of sub-Saharan slaves) and hear their music, and hidden oases. Second night at the desert camp or option to return to a hotel with pool."
        },
        {
            time: "Day 9",
            title: "Merzouga - Todra Gorge - Dades Valley",
            description: "Morning departure from the desert. Drive to Tinghir to explore the stunning Todra Gorge with its 300m high cliffs. Optional light hike through the gorge. Continue to the beautiful Dades Valley with stops for photos of the unique rock formations known as 'monkey fingers.' Overnight in a charming guesthouse overlooking the Dades Valley."
        },
        {
            time: "Day 10",
            title: "Dades Valley - Valley of Roses - Ouarzazate - Aït Benhaddou - Marrakech",
            description: "Drive through the Valley of Roses and the Road of a Thousand Kasbahs to Ouarzazate. Visit the Taourirt Kasbah and film studios. Continue to the UNESCO World Heritage site of Aït Benhaddou for an extensive tour of this impressive fortified village. Cross the High Atlas Mountains via the Tizi n'Tichka pass to reach Marrakech by evening. Overnight in Marrakech."
        },
        {
            time: "Day 11",
            title: "Marrakech - Full Day Tour",
            description: "Comprehensive guided tour of Marrakech including the Koutoubia Mosque, Bahia Palace, Saadian Tombs, Ben Youssef Madrasa, the Museum of Moroccan Arts, and the beautiful Majorelle Garden and Yves Saint Laurent Museum. Afternoon exploration of the souks with a specialist shopping guide. Evening visit to the famous Djemaa el-Fna square with dinner at a panoramic restaurant overlooking the square. Overnight in Marrakech."
        },
        {
            time: "Day 12",
            title: "Marrakech - Essaouira - Marrakech or Casablanca",
            description: "Full day excursion to the coastal town of Essaouira. En route, visit an argan oil cooperative. Guided tour of Essaouira's fortified medina, port, and beach. Free time to explore the artsy town and enjoy fresh seafood. Return to Marrakech or Casablanca in the evening. Tour ends with drop-off at your accommodation or airport."
        }
    ],
    includes: [
        "11 nights premium accommodation (4-5* riads/hotels, luxury desert camp)",
        "Transportation in comfortable air-conditioned vehicle throughout",
        "English-speaking driver/guide",
        "Local expert guides in all major cities and sites",
        "Daily breakfast and dinner (except two dinners in Marrakech)",
        "One special dinner with traditional entertainment in Fez",
        "Sunset and sunrise camel treks in Merzouga",
        "4x4 desert exploration",
        "Bottled water daily",
        "Welcome gift and souvenir",
        "All taxes and service charges"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Warm clothing for cool nights, especially in the mountains and desert",
        "Light clothing and swimwear for Essaouira (weather permitting)",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal toiletries and medications",
        "Camera",
        "Small backpack for day trips",
        "Flashlight/headlamp for desert camp",
        "Cash for lunches, drinks, souvenirs, and tips"
    ],
    availability: "Departures first Saturday of each month (limited to 12 participants per departure)",
    additionalInfo: {
        "Difficulty": "Easy to moderate - involves walking in medinas and some uneven terrain",
        "Minimum Age": "12 years recommended for best experience",
        "Accommodation": "4-5* riads/hotels (twin/double rooms with private bathrooms) and luxury desert camp",
        "Languages": "English, French, Arabic, Spanish, German (request at booking)",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 45 days before; 50% refund up to 30 days before",
        "Not Included": "International flights, lunches, some dinners in Marrakech, beverages, entrance fees to monuments (approximately 50-100 MAD per site), tips, travel insurance"
    },
    relatedPrograms: ["casablanca-10-days", "merzouga-5-days", "fez-3-days"]
},
"merzouga-4-days": {
    title: "4-Day Desert Tour to Merzouga",
    subtitle: "Extended desert adventure with more time to explore each destination",
    heroImage: "../assets/images/tours/zagora-desert-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/zagora-desert.jpg", // Using existing image as placeholder
    price: 450,
    duration: "4 days / 3 nights",
    location: "Multiple Locations",
    groupSize: "2-12 people",
    rating: 4.9,
    reviews: 84,
    description: `
        <h3>Tour Overview</h3>
        <p>This extended 4-day desert tour offers a more relaxed and immersive experience compared to the shorter options. With an additional day and night, you'll have more time to explore each destination in depth, take in the breathtaking landscapes at a comfortable pace, and truly connect with the places and people you encounter along the way.</p>
        
        <p>Your journey begins by crossing the spectacular High Atlas Mountains via the Tizi n'Tichka pass, visiting the UNESCO World Heritage site of Aït Benhaddou and exploring the film studios of Ouarzazate. Continue through the Valley of Roses and the Dadès Valley, with an overnight stay allowing you to fully appreciate the "Valley of a Thousand Kasbahs."</p>
        
        <p>On the second day, visit the dramatic Todra Gorge, with time for a light hike between its towering 300-meter cliffs. Continue to the desert town of Merzouga where you'll embark on a sunset camel trek into the stunning Erg Chebbi dunes for an unforgettable night at a traditional desert camp under the stars.</p>
        
        <p>The third day offers the unique opportunity to explore the desert region more deeply, visiting nomadic families, hidden oases, abandoned mines, and the village of Khamlia to experience Gnawa music. After a second night in the desert or at a comfortable hotel, your return journey takes you through different landscapes and the Middle Atlas Mountains, with an overnight in a charming town before arriving back in Marrakech.</p>
    `,
    itinerary: [
        {
            time: "Day 1",
            title: "Marrakech - Atlas Mountains - Aït Benhaddou - Ouarzazate - Dades Valley",
            description: "Morning departure from Marrakech. Cross the High Atlas Mountains via the spectacular Tizi n'Tichka pass (2,260m) with stops for panoramic views. Visit the UNESCO World Heritage site of Aït Benhaddou with guided tour of this ancient ksar. Continue to Ouarzazate to visit the film studios and Taourirt Kasbah. Drive through the Valley of Roses to the Dades Valley. Dinner and overnight at a hotel in the Dades Valley."
        },
        {
            time: "Day 2",
            title: "Dades Valley - Todra Gorge - Merzouga (Sahara Desert)",
            description: "After breakfast, explore the Dades Valley with its unique rock formations known as 'monkey fingers.' Drive to Tinghir to visit the impressive Todra Gorge with time for a light hike between the towering 300m cliffs. Continue to Erfoud, known for its fossils, with optional visit to a fossil workshop. Arrive in Merzouga in the afternoon. Meet your camel caravan for a sunset trek into the Erg Chebbi dunes. Reach a traditional desert camp for dinner, Berber music around the campfire, and overnight in a nomadic tent under the stars."
        },
        {
            time: "Day 3",
            title: "Merzouga Desert Exploration",
            description: "Wake early to witness the spectacular desert sunrise. After breakfast at the camp, enjoy a full day exploring the desert region by 4x4 vehicle. Visit a nomadic family to learn about their lifestyle, the village of Khamlia to meet the Gnawa people and hear their music, abandoned mines, and hidden oases. Lunch in a desert oasis. In the late afternoon, return to the desert camp for a second night or option to stay at a comfortable hotel with pool (please specify preference at booking). Dinner and overnight."
        },
        {
            time: "Day 4",
            title: "Merzouga - Ziz Valley - Middle Atlas - Marrakech",
            description: "After breakfast, begin the return journey to Marrakech taking a different route. Drive through the beautiful Ziz Valley with its palm oases. Continue to the Middle Atlas Mountains with a stop in Midelt, known for its minerals and apples, for lunch. Cross the Middle Atlas through Azrou, Ifrane (known as 'Little Switzerland' for its Alpine-style architecture), and cedar forests where you might spot Barbary macaques. Continue via Beni Mellal with stops for photos and refreshments. Arrive in Marrakech in the evening."
        }
    ],
    includes: [
        "Transportation in comfortable air-conditioned vehicle",
        "English-speaking driver/guide throughout",
        "3 nights accommodation (1 night hotel in Dades Valley, 2 nights in desert camp or 1 night camp + 1 night hotel)",
        "Half-board (daily breakfast and dinner)",
        "Camel trekking in Merzouga",
        "4x4 desert exploration",
        "Guided tours of Aït Benhaddou and Todra Gorge",
        "Bottled water daily",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Warm jacket for cool desert nights",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal toiletries and medications",
        "Camera",
        "Flashlight/headlamp for desert camp",
        "Cash for lunches, drinks, souvenirs, and tips"
    ],
    availability: "Departures every Monday, Wednesday, and Saturday",
    additionalInfo: {
        "Difficulty": "Easy to moderate - some walking required",
        "Minimum Age": "None - suitable for all ages",
        "Accommodation": "Mid-range hotels and traditional desert camp",
        "Languages": "English, French, Arabic, Spanish (request at booking)",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 7 days before",
        "Not Included": "Lunches, beverages, entrance fees to monuments (approximately 50-100 MAD per site), gratuities"
    },
    relatedPrograms: ["zagora-2-days", "merzouga-3-days", "merzouga-5-days"]
},

"merzouga-5-days": {
    title: "5-Day Desert Tour to Merzouga",
    subtitle: "Comprehensive desert journey with time to deeply explore Morocco's southern regions",
    heroImage: "../assets/images/tours/zagora-desert-hero.jpg", // Using existing image as placeholder
    mainImage: "../assets/images/tours/zagora-desert.jpg", // Using existing image as placeholder
    price: 525,
    duration: "5 days / 4 nights",
    location: "Multiple Locations",
    groupSize: "2-12 people",
    rating: 4.9,
    reviews: 76,
    description: `
        <h3>Tour Overview</h3>
        <p>Our 5-day desert expedition is the ultimate Sahara experience, offering the most comprehensive exploration of Morocco's southern regions. This extended journey allows you to travel at a relaxed pace, with time to truly immerse yourself in each destination and discover hidden gems that shorter tours must bypass.</p>
        
        <p>Beginning with a leisurely crossing of the High Atlas Mountains, you'll have ample time to appreciate the spectacular Tizi n'Tichka pass with multiple photo stops. Explore the UNESCO World Heritage site of Aït Benhaddou in depth, with time to wander its ancient streets beyond the main tourist areas. In Ouarzazate, enjoy a comprehensive tour of the film studios where many Hollywood blockbusters were filmed.</p>
        
        <p>The journey continues to the lush Dades Valley for a full day of exploration, including the dramatic road of a thousand kasbahs, the Valley of Roses, and the impressive Dades Gorge with time for hiking. Another highlight is a thorough visit to Todra Gorge, one of Morocco's most spectacular natural wonders, with opportunities for rock climbing or extended hiking for adventure seekers.</p>
        
        <p>Upon reaching the Sahara, you'll experience not just one but two nights in the desert - one at a traditional camp deep in the dunes, and another at a luxury desert camp with premium amenities. In between, enjoy a full day of desert exploration by 4x4, visiting nomadic families, hidden oases, and authentic cultural experiences off the tourist track.</p>
        
        <p>The return journey takes you through different landscapes and the cedar forests of the Middle Atlas Mountains, with a comfortable overnight stay that breaks up the long drive back to Marrakech. Throughout the tour, you'll stay in carefully selected accommodations that highlight authentic Moroccan hospitality.</p>
    `,
    itinerary: [
        {
            time: "Day 1",
            title: "Marrakech - Atlas Mountains - Aït Benhaddou - Ouarzazate",
            description: "Morning departure from Marrakech. Leisurely drive across the High Atlas Mountains via the Tizi n'Tichka pass (2,260m) with multiple stops for photos and short walks to viewpoints. Extended visit to the UNESCO World Heritage site of Aït Benhaddou with time to explore beyond the main tourist areas. Late afternoon arrival in Ouarzazate with tour of the film studios and Taourirt Kasbah. Dinner and overnight at a comfortable riad in Ouarzazate."
        },
        {
            time: "Day 2",
            title: "Ouarzazate - Valley of Roses - Dades Valley - Dades Gorge",
            description: "After breakfast, full day exploring the Dades region. Drive through the Valley of Roses, famous for its annual rose festival (May) and rose products. Visit a rose cooperative to learn about rose water and oil production. Continue to the dramatic Dades Valley with its unique rock formations known as 'monkey fingers.' Afternoon hike in the Dades Gorge with a local guide. Dinner and overnight at a panoramic hotel overlooking the Dades Valley."
        },
        {
            time: "Day 3",
            title: "Dades Valley - Todra Gorge - Erfoud - Merzouga (Sahara Desert)",
            description: "Morning departure to the impressive Todra Gorge with its 300m high cliffs. Extended visit with options for rock climbing with professional guides (additional cost) or a longer hike through the gorge. Continue to Erfoud, known as the fossil capital of Morocco, with visit to a fossil workshop to see how local artisans transform ancient fossils into decorative items. Late afternoon arrival in Merzouga. Meet your camel caravan for a sunset trek deep into the Erg Chebbi dunes. Reach a traditional Berber camp for dinner, music around the campfire, and overnight in a nomadic tent under the stars."
        },
        {
            time: "Day 4",
            title: "Merzouga Desert Exploration",
            description: "Wake early to witness the spectacular desert sunrise. After breakfast at the camp, full day exploring the desert region by 4x4 vehicle. Visit a nomadic family to learn about their lifestyle, the village of Khamlia to experience Gnawa music, abandoned mines, and hidden oases. Picnic lunch in a palm grove oasis. Visit a desert lake (seasonal) that attracts flamingos and other birds. Late afternoon, either return to the traditional camp or transfer to a luxury desert camp with premium facilities including private bathrooms, proper beds, and gourmet dinner. Evening entertainment with traditional music and stargazing."
        },
        {
            time: "Day 5",
            title: "Merzouga - Ziz Valley - Middle Atlas - Marrakech",
            description: "Optional sunrise camel trek or desert meditation session. After breakfast, begin the return journey to Marrakech. Drive through the stunning Ziz Valley with its endless palm groves and ancient ksour (fortified villages). Stop in Midelt for lunch. Continue through the Middle Atlas Mountains with stops in Azrou cedar forest to see wild Barbary macaques, the Alpine-style town of Ifrane (known as 'Little Switzerland'), and Beni Mellal. Arrive in Marrakech in the evening."
        }
    ],
    includes: [
        "Transportation in comfortable air-conditioned vehicle",
        "English-speaking driver/guide throughout",
        "4 nights accommodation (1 night riad in Ouarzazate, 1 night hotel in Dades Valley, 1 night traditional desert camp, 1 night luxury desert camp)",
        "Half-board (daily breakfast and dinner)",
        "Camel trekking in Merzouga",
        "Full-day 4x4 desert exploration",
        "Local guides in Aït Benhaddou, Dades Gorge, and Todra Gorge",
        "Bottled water daily",
        "All taxes and fees"
    ],
    bring: [
        "Comfortable clothing and walking shoes",
        "Warm jacket for cool desert nights",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal toiletries and medications",
        "Camera",
        "Flashlight/headlamp for desert camp",
        "Cash for lunches, drinks, souvenirs, and tips",
        "Swimwear (some hotels have pools)"
    ],
    availability: "Departures every Sunday and Thursday",
    additionalInfo: {
        "Difficulty": "Easy to moderate - some hiking optional",
        "Minimum Age": "None - suitable for all ages",
        "Accommodation": "Mid-range to premium riads/hotels and desert camps",
        "Languages": "English, French, Arabic, Spanish (request at booking)",
        "Confirmation": "Immediate confirmation",
        "Cancellation": "Free cancellation up to 14 days before",
        "Not Included": "Lunches, beverages, entrance fees to monuments (approximately 50-100 MAD per site), optional activities like rock climbing, gratuities"
    },
    relatedPrograms: ["merzouga-3-days", "merzouga-4-days", "fez-3-days"]
}
};