// ===== CONFIGURATION =====
const ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };

// ===== DEFAULT DATA =====
const defaultPackages = {
    // === CHITWAN TOURS ===
    'chitwan-wildlife': {
        name: 'Chitwan Wildlife Tour', duration: '1N / 2D', priceNPR: '6,500', priceUSD: '50',
        category: 'chitwan', image: 'chitwan.jpg', badge: 'Wildlife',
        shortDesc: 'A quick wildlife getaway to Chitwan National Park — jeep safari through community forest, elephant breeding center visit, and authentic Tharu cultural dance show.',
        highlights: ['Jeep Safari', 'Elephant Breeding Center', 'Tharu Cultural Dance', 'All Meals'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Sauraha', desc: 'Breakfast at Sigrekhola. Scenic drive. Arrive Sauraha, check-in. Lunch. Visit Wildlife Museum. Elephant Breeding Center. Evening Tharu Cultural Dance Show. Non-veg dinner with music and campfire. Overnight.', image: 'chitwan.jpg' },
            { day: 'Day 2', title: 'Sauraha to Kathmandu', desc: 'Breakfast at hotel. Jeep Safari through Community Forest. Lunch. Check-out and depart for Kathmandu.', image: 'chitwan-safari.jpg' }
        ],
        includes: ['Accommodation (triple/quad sharing)', 'Transportation by super bus', 'All meals (2 Breakfasts, 2 Veg Lunch, 1 Non-veg Dinner)', 'Tharu Cultural Dance Show', 'Jeep Safari (community forest)', 'Elephant Breeding Center & Museum', 'Mineral Water']
    },
    'chitwan-adventure': {
        name: 'Chitwan & CG Dham Tour', duration: '2N / 3D', priceNPR: '9,500', priceUSD: '73',
        category: 'combo', image: 'chitwan-safari.jpg', badge: 'Popular',
        shortDesc: 'Combine wildlife adventure in Chitwan National Park with a spiritual visit to Shashwat Dham (CG Dham) — a divine Sanatan Dharma temple in the scenic foothills of Dev Chuli.',
        highlights: ['CG Dham Temple', 'Jeep Safari', 'Jungle Walk', 'Tharu Cultural Dance', 'Elephant Breeding Center'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Sauraha', desc: 'Breakfast at Sigrekhola. Lunch at Mugling. Visit CG Dham. Proceed to Sauraha. Dinner and overnight.', image: 'chitwan.jpg' },
            { day: 'Day 2', title: 'Explore Chitwan National Park', desc: 'Breakfast at hotel. Jeep Safari in Community Forest. Jungle Walk. Visit Elephant Breeding Center. Lunch at hotel.', image: 'chitwan-safari.jpg' },
            { day: 'Day 3', title: 'Back to Kathmandu', desc: 'Morning breakfast. Depart for Kathmandu with lunch en route.', image: 'chitwan.jpg' }
        ],
        includes: ['Accommodation (triple/quad sharing)', 'Transportation by comfortable bus', 'All meals (Breakfast, Lunch, Dinner)', 'Tharu Cultural Dance Show', 'Jeep Safari (2 hours)', 'CG Dham Sightseeing', 'Elephant Breeding Center']
    },
    'chitwan-lumbini': {
        name: 'Pokhara, Lumbini & Chitwan Tour', duration: '4N / 5D', priceNPR: '18,000', priceUSD: '138',
        category: 'combo', image: 'chitwan.jpg', badge: 'Combo',
        shortDesc: 'The ultimate Nepal combo — Pokhara lakes and mountains, Lumbini (birthplace of Lord Buddha), and Chitwan jungle safari. Three iconic destinations in one comprehensive trip.',
        highlights: ['Pokhara Sightseeing', 'Lumbini Maya Devi Temple', 'Chitwan Jeep Safari', 'Tharu Cultural Dance', 'Fewa Lake Boating'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Pokhara', desc: 'Breakfast at Sigrekhola. Lunch at Abu Khaireni. Arrive Pokhara. Explore Begnas Lake. Hotel check-in at Lakeside. Non-veg dinner.', image: 'pokhara.jpg' },
            { day: 'Day 2', title: 'Explore Pokhara', desc: 'Sightseeing: Phumdikot, Peace Stupa, Gupteshwor Temple & Davi\'s Fall. Lunch. Bindabashini Darshan. Boating at Taal Barahi. Dinner.', image: 'pokhara-lake.jpg' },
            { day: 'Day 3', title: 'Pokhara to Lumbini', desc: 'Breakfast. Depart for Lumbini. Lunch at Tansen. Arrive Lumbini, check-in. Mayadevi Temple Sightseeing. Dinner.', image: 'ghandruk.png' },
            { day: 'Day 4', title: 'Lumbini to Sauraha', desc: 'Breakfast. Visit monasteries at Lumbini. Depart for Sauraha. Lunch en route. Elephant Breeding Center. Tharu Dance. Dinner.', image: 'chitwan.jpg' },
            { day: 'Day 5', title: 'Sauraha to Kathmandu', desc: 'Breakfast. Jeep Safari. Lunch on the way. Arrive Kathmandu.', image: 'chitwan-safari.jpg' }
        ],
        includes: ['Accommodation (Quad/triple sharing)', 'Transportation by Comfortable Bus', 'All meals (Breakfast, Non-Veg Lunch & Dinner)', 'Tharu Cultural Dance Show', 'Entrance fees', 'Jeep Safari', 'One hour boating in Fewa Lake', '2 Cases Mineral Water per day']
    },
    'janakpur-chitwan': {
        name: 'Janakpur & Chitwan Tour', duration: '2N / 3D', priceNPR: '9,000', priceUSD: '69',
        category: 'combo', image: 'chitwan.jpg', badge: 'Spiritual',
        shortDesc: 'A spiritual and wildlife combo — visit Janakpur (birthplace of Goddess Sita, home of the 200-year-old Janaki Temple) and Chitwan National Park with jeep safari and Tharu cultural dance.',
        highlights: ['Janaki Temple', 'Kuseshowor Mahadev', 'Chitwan Jeep Safari', 'Tharu Cultural Dance', 'Elephant Breeding Center'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Janakpur to Bardibas', desc: 'Assemble, briefing. Breakfast at Dhulikhel. Kuseshowor Mahadev Temple visit. Lunch at Mulkot/Khurkot. Explore Janakpur Dham. Drive to Bardibas. Hotel check-in. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Bardibas to Chitwan', desc: 'Breakfast. Depart for Chitwan. Lunch at Hetauda. Sahid Smriti Park. Arrive Sauraha. Elephant Breeding Center. Tharu Cultural Dance Show. Dinner/Overnight.', image: 'chitwan.jpg' },
            { day: 'Day 3', title: 'Explore Sauraha & Return', desc: 'Breakfast. Jeep Safari (2 hours) in community forest. Rest/Leisure. Lunch. Depart for Kathmandu.', image: 'chitwan-safari.jpg' }
        ],
        includes: ['Accommodation (Triple/Quad sharing)', 'Transportation by comfortable vehicle', 'All meals (Breakfast, Lunch, Dinner — except dinner on last day)', 'Tharu Cultural Show', 'All sightseeing as per itinerary', 'Jeep Safari in Community Forest', 'Entrance fees']
    },
    'lumbini-chitwan': {
        name: 'Lumbini & Chitwan Tour', duration: '2N / 3D', priceNPR: '9,000', priceUSD: '69',
        category: 'combo', image: 'chitwan.jpg', badge: 'Explore Nepal',
        shortDesc: 'The "Explore Nepal" tour — visit Lumbini (birthplace of Lord Buddha, UNESCO site) and Chitwan National Park. Includes CG Dham, Lumbini sightseeing by rickshaw, jeep safari, and Tharu cultural dance.',
        highlights: ['Lumbini Sightseeing', 'CG Dham', 'Chitwan Jeep Safari', 'Tharu Cultural Dance', 'Elephant Breeding Center'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Lumbini', desc: 'Assemble, briefing. Breakfast at Sigrekhola. Lunch at Narayangarh. Explore CG Dham. Hotel check-in in Lumbini. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Explore Lumbini & Drive to Chitwan', desc: 'Breakfast. Half-day Lumbini sightseeing. Lunch. Drive to Chitwan. Elephant Breeding Center. Explore Sauraha. Tharu Cultural Dance Show. Dinner/Overnight.', image: 'chitwan.jpg' },
            { day: 'Day 3', title: 'Explore Sauraha & Return', desc: 'Breakfast. Jeep Safari (2 hours) in community forest. Lunch. Depart for Kathmandu.', image: 'chitwan-safari.jpg' }
        ],
        includes: ['Accommodation (Triple/Quad sharing)', 'Transportation by comfortable vehicle', 'All meals (Breakfast, Lunch, Dinner — except dinner on last day)', 'Tharu Cultural Show', 'Sightseeing', 'Jeep Safari in Community Forest', 'Lumbini Sightseeing via Rickshaw']
    },

    // === POKHARA TOURS ===
    'pokhara-ghandruk': {
        name: 'Pokhara Ghandruk Tour', duration: '2N / 3D', priceNPR: '8,500', priceUSD: '65',
        category: 'pokhara', image: 'ghandruk-village.png', badge: 'Quick Trek',
        shortDesc: 'Quick trip combining Pokhara sightseeing with a trek to Ghandruk village — the most visited village in Nepal with stunning Himalayan views and Gurung cultural immersion.',
        highlights: ['Ghandruk Village', 'Pokhara Sightseeing', 'Campfire & Music', 'Boating to Tal Barahi', 'All Meals'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Ghandruk', desc: 'Early morning assembly. Breakfast at Sigurekhola. Lunch at Kulintar/Abunkhaireni. Short 20-minute hike to hotel in Ghandruk. Campfire, music, dance. Dinner & Overnight.', image: 'ghandruk-village.png' },
            { day: 'Day 2', title: 'Ghandruk to Pokhara', desc: 'Early morning hike to Purano Gaun (traditional Gurung village). Return for breakfast. Depart for Pokhara. Lunch en route. Sightseeing: Pumdikot Shiva Statue, Peace Pagoda, Davis Fall, Gupteshwor Cave. Hotel check-in. Dinner.', image: 'pokhara.jpg' },
            { day: 'Day 3', title: 'Pokhara to Kathmandu', desc: 'Early morning Taal Barahi Temple darshan. Breakfast. Departure. Lunch en route. Drive to Kathmandu.', image: 'pokhara-lake.jpg' }
        ],
        includes: ['Transportation for entire tour', '1 night in Ghandruk (sharing)', '1 night in Pokhara (sharing)', '3 meals/day (Breakfast, Veg Lunch, Non-Veg Dinner)', 'Sightseeing as per itinerary', 'Entrance fees', 'Campfire/Music in Ghandruk', 'Round trip boating to Tal Barahi Temple', 'First Aid Medical Kit', 'Mineral Water (2 cases/day)']
    },
    'sikles': {
        name: 'Sikles Village Trek', duration: '3N / 4D', priceNPR: '12,000', priceUSD: '92',
        category: 'pokhara', image: 'ghandruk-trek.jpg', badge: 'Gurung Village',
        shortDesc: 'Trek to traditional Gurung village of Sikles (2,000m) — one of the largest Gurung settlements in Nepal. Stunning views of Annapurna and Manaslu ranges, well-preserved traditional architecture.',
        highlights: ['Sikles Village', 'Gurung Culture', 'Annapurna Views', 'Traditional Architecture', 'Campfire'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Pokhara', desc: 'Assemble, briefing. Breakfast at Sigrekhola. Lunch at Mugling. Explore Begnas Lake. Hotel check-in. Dinner/explore Lakeside. Overnight.', image: 'pokhara.jpg' },
            { day: 'Day 2', title: 'Sightseeing & Drive to Sikles', desc: 'Breakfast. Half-day sightseeing (Pumdikot/Stupa/DavidFalls/Gupteshwor). Lunch. Drive to Sikles. Tea House check-in. Campfire/Music/Dance. Dinner/Overnight.', image: 'ghandruk-trek.jpg' },
            { day: 'Day 3', title: 'Sikles to Pokhara', desc: 'Sunrise/Mountain View. Explore Sikles Village. Breakfast. Hotel check-in in Pokhara. Lunch. Boating/Tal Bahari Darshan. Night Market. Dinner.', image: 'pokhara-lake.jpg' },
            { day: 'Day 4', title: 'Pokhara to Kathmandu', desc: 'Breakfast. Departure. Lunch at Mugling. Drive to Kathmandu.', image: 'pokhara.jpg' }
        ],
        includes: ['Transportation by Deluxe Super Bus', '1 night in Sikles (sharing)', '2 nights in Pokhara (sharing)', '4 Breakfasts, 4 Veg Lunches, 3 Non-Veg Dinners (Chicken)', 'Sightseeing in Pokhara and Sikles', 'Campfire/Music in Sikles', 'Mineral Water (2 cases/day)', 'Pokhara entrance fees']
    },

    // === HERITAGE & VILLAGE TOURS ===
    'chitlang': {
        name: 'Chitlang Village Tour', duration: '1N / 2D', priceNPR: '3,000', priceUSD: '23',
        category: 'heritage', image: 'ghandruk.png', badge: 'Village',
        shortDesc: 'Escape to the charming Chitlang Village on the southwestern ridge of Kathmandu Valley — explore Lichchhavi-era inscriptions, visit the goat cheese factory, boating at Kulekhani, and experience rural culture.',
        highlights: ['Kulekhani Boating', 'Goat Cheese Factory', 'Historic Village', 'Campfire & Music'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Chitlang', desc: 'Drive to Chitlang. Boating and sightseeing at Kulekhani. Bhedafarm sightseeing. Arrive at resort, welcome snacks. Campfire and music. Dinner & Overnight.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Explore Chitlang & Back', desc: 'Breakfast at resort. Sightseeing of goat cheese factory, Saat Dhara & Manjgaun. Lunch at resort. Drive back to Kathmandu.', image: 'ghandruk.png' }
        ],
        includes: ['Transportation as per program', 'Welcome Snacks, 1 Dinner, 1 Lunch, 1 Breakfast', 'Room on sharing basis', 'Boating at Khulekhani']
    },
    'suping-chitlang': {
        name: 'Suping Chitlang Tour', duration: '2N / 3D', priceNPR: '7,500', priceUSD: '58',
        category: 'heritage', image: 'ghandruk.png', badge: 'Eco Tourism',
        shortDesc: 'Eco-tourism getaway through Chitlang and Suping villages near Kathmandu — explore historic villages, Indra Sarovar (Kulekhani Lake), Bheda Farm, Chisapani Gadi, and sunset from suspension bridge.',
        highlights: ['Indra Sarovar (Kulekhani Lake)', 'Chitlang Village', 'Campfire', 'Sunset from Suspension Bridge', 'Jaleshowor Cave'],
        itinerary: [
            { day: 'Day 1', title: 'Bhaktapur to Chitlang to Suping', desc: 'Assemble, briefing. Drive via Chandragiri-Chitlang route. Scenic views of forests, hills, villages. Arrive Chitlang, lunch, naspati garden visit. Continue to Kulekhani/Suping. Bheda Farm. Indra Sarovar. Chisapani Gadi, Hattisa Museum, Power House. Sunset from suspension bridge. Campfire, dinner/overnight.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Explore Suping & Return', desc: 'Breakfast. Explore Jaleshowor Cave, Kiwi Farm, Mustard Field. Drive back to Bhaktapur. Lunch at Kulekhani. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Transportation by Minibus', '1 night accommodation in Suping', '1 Breakfast, 2 Non-Veg Lunches, 2 Non-Veg Dinners', 'First aid medical kit', 'Mineral Water (2 cases/day)']
    },
    'kathmandu-heritage': {
        name: 'Sailung Kalinchowk Dolkha Tour', duration: '2N / 3D', priceNPR: '8,500', priceUSD: '65',
        category: 'combo', image: 'ghandruk.png', badge: 'Pilgrimage',
        shortDesc: 'Pilgrimage and adventure tour — Sailung (3,146m) with panoramic Himalayan views, Kalinchowk Bhagwati Temple (3,800m) with stunning mountain panorama, and Dolakha Bhimsen Temple.',
        highlights: ['Kalinchowk Bhagwati (3,800m)', 'Sailung Viewpoint', 'Dolakha Bhimsen Temple', 'Mountain Panorama', 'Campfire'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Sailung', desc: 'Assemble, briefing. Visit Palanchowk Bhagwati Temple. Lunch at Sukute. Drive to Sailung. Hotel check-in. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Sailung to Kuri', desc: 'Breakfast. Short hike to Sailung Viewpoint (1.5 hours) for landscapes and Mini Great Wall. Lunch. Check-out, drive to Kuri Village. Stop at Kharidhunga for photos. Hotel check-in. Campfire with music/dance. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Kuri to Kalinchowk to Kathmandu', desc: 'Early morning hike to Kalinchowk Bhagwati Temple (1 hour). Mountain views. Return for breakfast. Check-out, drive to Dolakha. Visit Dolakha Bhimsen Temple. Lunch. Drive to Kathmandu.', image: 'ghandruk.png' }
        ],
        includes: ['Transportation by mini bus', '1 Night Sailung (sharing)', '1 Night Kuri Village (sharing)', 'Full board meals (Breakfast, Veg Lunch, Non-Veg Dinner)', 'Sightseeing: Palanchowk, Sailung, Kalinchowk Bhagwati & Dolakha Bhimsen', 'Mineral water (2 cases/day)']
    },

    // === TREKKING ===
    'annapurna': {
        name: 'Annapurna Base Camp Trek', duration: '6N / 7D', priceNPR: '25,000', priceUSD: '192',
        category: 'trek', image: 'abc-trek.jpg', badge: 'Classic',
        shortDesc: 'A classic trek through the Annapurna Sanctuary — ascending from Pokhara through bamboo forests and alpine terrain to reach the base camp at 4,130m with panoramic Himalayan views.',
        highlights: ['ABC Trek (4,130m)', 'Machhapuchhre Base Camp', 'Hot Springs at Jhinnu', 'All Meals', 'Experienced Guide'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Pokhara', desc: 'Early morning departure. Scenic drive via Prithvi Highway alongside Trishuli River. Breakfast at Sigrekhola, lunch at Aabukhaireni. Arrive Pokhara, sightseeing at Pumdikot & Peace Pagoda. Hotel check-in, evening free at Lakeside.', image: 'pokhara.jpg' },
            { day: 'Day 2', title: 'Pokhara to Upper Sinuwa', desc: 'Breakfast at hotel. Drive to Jhinnu Danda. Start trek through terraced farmland and villages. Steady climb via Chhomrong village. Continue uphill through forest to Upper Sinuwa. Tea House check-in.', image: 'abc-trek.jpg' },
            { day: 'Day 3', title: 'Upper Sinuwa to Deurali', desc: 'Gentle walk through dense bamboo and rhododendron forest. Pass Bamboo and Dovan. Gradual ascent with cooler alpine climate. Continue to Deurali. Tea House check-in.', image: 'abc-camp.jpg' },
            { day: 'Day 4', title: 'Deurali to Annapurna Base Camp', desc: 'Gradual climb to Machhapuchhre Base Camp (MBC). Lunch at MBC. Continue trek through glacial basin to ABC (4,130m). Panoramic Himalayan views. Tea House check-in.', image: 'abc-camp.jpg' },
            { day: 'Day 5', title: 'ABC to Bamboo', desc: 'Early morning sunrise over Annapurna range. Descend via MBC, Deurali, Himalaya, and Dovan. Continue downhill through forest to Bamboo. Tea House check-in.', image: 'abc-trek.jpg' },
            { day: 'Day 6', title: 'Bamboo to Jhinnu — Drive to Pokhara', desc: 'Trek down via Sinuwa and Chhomrong. Cross suspension bridge to Jhinnu Danda. Optional visit to natural hot springs. Drive back to Pokhara. Hotel check-in.', image: 'pokhara.jpg' },
            { day: 'Day 7', title: 'Pokhara to Kathmandu', desc: 'Early morning Taal Barahi Darsan. Return to Kathmandu. Scenic journey with mountain and river views. Tour ends.', image: 'pokhara.jpg' }
        ],
        includes: ['Transportation by Super Deluxe Bus', 'Experienced Guide & Assistance Guide', 'Accommodation (Hotel in Pokhara, Tea Houses during trek)', 'All Meals (Breakfast, Lunch & Dinner)', 'Basic First Aid Kit', 'Sightseeing as per Itinerary', 'Boating at Fewa Lake']
    },
    'poonhill': {
        name: 'Ghorepani Poonhill Trek', duration: '4N / 5D', priceNPR: '15,000', priceUSD: '115',
        category: 'trek', image: 'ghandruk-trek.jpg', badge: 'Sunrise',
        shortDesc: 'Easy trek perfect for beginners — no AMS risk. Poon Hill sunrise over Dhaulagiri and Annapurna, through rhododendron forests, Gurung villages of Ghandruk.',
        highlights: ['Poon Hill Sunrise', 'Ghandruk Village', 'Gurung Culture', 'Easy Grade (No AMS Risk)', 'Scorpio Jeep Transport'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Pokhara', desc: 'Gather, briefing. Lunch at Mugling. Hotel check-in at Lakeside. Non-Veg Dinner. Lakeside hangout. Overnight.', image: 'pokhara.jpg' },
            { day: 'Day 2', title: 'Drive to Ulleri, Trek to Ghorepani', desc: 'Breakfast. Depart for Ulleri. Lunch at Ulleri/Banthanti. Trek to Ghorepani (4 hours). Tea house check-in. Dinner/Overnight.', image: 'ghandruk-trek.jpg' },
            { day: 'Day 3', title: 'Ghorepani-Poonhill to Tadapani', desc: 'Wakeup call. Hike to Poonhill (1 hour). Return and breakfast. Trek to Tadapani. Tea house check-in. Dinner/Overnight.', image: 'ghandruk-village.png' },
            { day: 'Day 4', title: 'Trek to Ghandruk & Drive to Pokhara', desc: 'Early breakfast. Trek downhill to Ghandruk. Lunch at Ghandruk. Explore village. En-route Bindabasine Darshan. Hotel check-in in Pokhara. Dinner/Overnight.', image: 'ghandruk-village.png' },
            { day: 'Day 5', title: 'Pokhara to Kathmandu', desc: 'Early morning Tal Bahari Darshan. Breakfast. Departure. Lunch at Mugling.', image: 'pokhara.jpg' }
        ],
        includes: ['Transportation by Scorpio Jeep', '2 Nights Pokhara (MAP basis)', '1 Night Ghorepani (MAP basis)', '1 Night Tadapani (MAP basis)', '5 days Veg lunch along route', '5 Breakfasts, 4 Chicken Dinners', 'All sightseeing as per itinerary']
    },
    'poonhill-ghandruk': {
        name: 'Ghorepani Poonhill Ghandruk Trek', duration: '5N / 6D', priceNPR: '18,000', priceUSD: '138',
        category: 'trek', image: 'ghandruk-trek.jpg', badge: 'Trekking',
        shortDesc: 'The perfect introduction to Annapurna region trekking — short and easy trail through rhododendron forests, Poon Hill sunrise over Dhaulagiri and Annapurna, and Gurung village of Ghandruk.',
        highlights: ['Poon Hill Sunrise (3,210m)', 'Ghandruk Village', 'Rhododendron Forest', 'Annapurna & Dhaulagiri Views', 'Easy Trek'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Tikhedhunga', desc: 'Program briefing. Lunch at Mugling. Continue journey. Tea house check-in. Dinner/Overnight.', image: 'ghandruk-trek.jpg' },
            { day: 'Day 2', title: 'Trek Ulleri to Ghorepani', desc: 'Breakfast. Trek starts. Lunch at Banthanthi. Continue trek. Tea house check-in in Ghorepani. Explore Ghorepani Village. Dinner/Overnight.', image: 'ghandruk-village.png' },
            { day: 'Day 3', title: 'Poonhill & Tadapani', desc: 'Hike to Poonhill (45 min). Spectacular views. Return to teahouse. Breakfast. Trek starts. Lunch at Banthanthi. Tea house check-in in Tadapani. Dinner/Overnight.', image: 'ghandruk-trek.jpg' },
            { day: 'Day 4', title: 'Tadapani to Ghandruk', desc: 'Breakfast. Descend to Ghandruk. Lunch at Ghandruk. Explore village. Drive to Pokhara. Rest Day/Half Day Sightseeing.', image: 'ghandruk-village.png' },
            { day: 'Day 5', title: 'Pokhara Sightseeing', desc: 'Free day in Pokhara — explore Lakeside, boating, or relaxation.', image: 'pokhara.jpg' },
            { day: 'Day 6', title: 'Pokhara to Kathmandu', desc: 'Breakfast. Departure. Lunch en route. Drive to Kathmandu.', image: 'pokhara.jpg' }
        ],
        includes: ['Government registered guide', 'Transportation by Deluxe Super Bus', 'All meals (Breakfast, Lunch, Dinner — except dinner on last day)', 'Accommodation on sharing basis', 'First Aid', 'All sightseeing as per itinerary']
    },
    'dhampus': {
        name: 'Dhampus Australian Camp Trek', duration: '2N / 3D', priceNPR: '8,500', priceUSD: '65',
        category: 'pokhara', image: 'dhampus.jpg', badge: 'Easy Trek',
        shortDesc: 'Short trek to Dhampus village and Australian Camp — the most beautiful and popular village near Pokhara for easy trekking with spectacular Annapurna views and authentic Gurung culture.',
        highlights: ['Dhampus Village', 'Australian Camp Hike', 'Annapurna Views', 'Gurung Culture', 'Easy Trail'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Dhampus', desc: 'Assemble, briefing. Breakfast at Sigrekhola. Lunch at Kulintar/Abunkhairine. Continue to Dhampus. Hotel check-in. Dinner & Overnight.', image: 'dhampus.jpg' },
            { day: 'Day 2', title: 'Dhampus to Pokhara', desc: 'Hike to Australian Camp (1 hour). Return to Dhampus/Breakfast. Departure for Pokhara. Bindabasini Darshan. Hotel check-in. Lunch. Half-day sightseeing (Pumdikot/Stupa/David Falls/Gupteshwor). Dinner.', image: 'pokhara.jpg' },
            { day: 'Day 3', title: 'Pokhara to Kathmandu', desc: 'Early morning Tal Bahari Darshan. Breakfast. Departure for Kathmandu. Lunch at Malekhu.', image: 'pokhara.jpg' }
        ],
        includes: ['Transportation by Bus', '1 night in Dhampus (sharing)', '1 night in Pokhara (sharing)', '3 Breakfasts, 3 Veg Lunches, 2 Non-Veg Dinners (Chicken)', 'Sightseeing in Pokhara and Dhampus', 'All entrance fees', 'Tour Guide', 'Mineral Water (2 cases/day)']
    },
    'australian-camp': {
        name: 'Australian Camp Trek', duration: '3N / 4D', priceNPR: '12,000', priceUSD: '92',
        category: 'pokhara', image: 'dhampus.jpg', badge: 'Mountain Camp',
        shortDesc: 'Easy trek from Dhampus to Australian Camp with stunning views of Annapurna South, Hiunchuli, Machhapuchhre, and Lamjung Himal. Perfect for experiencing Nepal\'s mountain scenery.',
        highlights: ['Australian Camp (2,065m)', 'Annapurna Views', 'Campfire & Music', 'Pokhara Sightseeing', 'Easy Trek'],
        itinerary: [
            { day: 'Day 1', title: 'Bhaktapur to Pokhara', desc: 'Assemble, program briefing. Breakfast at Sigrekhola. Lunch at Malekhu. Explore Begnas Lake. Hotel check-in. Stroll Lakeside. Dinner & Overnight.', image: 'pokhara.jpg' },
            { day: 'Day 2', title: 'Sightseeing & Hike to Australian Camp', desc: 'Breakfast. Sightseeing: Pumdikot/Stupa/Gupteshwor Cave/Davis Falls. Lunch. Drive 1.5 hours to Dhampus. Hike 1.5 hours to Australian Camp. Campfire/Music/Dance. Dinner & Overnight.', image: 'dhampus.jpg' },
            { day: 'Day 3', title: 'Australian Camp to Pokhara', desc: 'Sunrise and mountain views. Breakfast. Hike downhill to Dhampus, drive to Pokhara. Visit Mountain Museum. Boating/Tal Bahari Darshan. Night Market. Dinner.', image: 'pokhara.jpg' },
            { day: 'Day 4', title: 'Pokhara to Bhaktapur', desc: 'Breakfast. Departure. Lunch at Mugling. Drive to Bhaktapur.', image: 'pokhara.jpg' }
        ],
        includes: ['Transportation by Deluxe Super Bus', '1 night at Australian Camp (sharing)', '2 nights at Pokhara (sharing)', '4 Breakfasts, 4 Veg Lunches, 3 Non-Veg Dinners', 'Sightseeing as per itinerary', 'Round trip boating to Tal Bahari Temple', 'Campfire/Music/Dance', 'Mineral Water', 'Entrance fees']
    },
    'ghandruk': {
        name: 'Ghandruk Village Trek', duration: '3N / 4D', priceNPR: '10,000', priceUSD: '77',
        category: 'trek', image: 'ghandruk-village.png', badge: 'Village Trek',
        shortDesc: 'Trek to Ghandruk — the most visited village in Nepal, home to the Gurung ethnic group with panoramic views of Dhaulagiri, Annapurna, Machhapuchhre, and more.',
        highlights: ['Ghandruk Village', 'Gurung Culture', 'Mountain Panorama', 'Campfire', 'Pokhara Sightseeing'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Pokhara', desc: 'Assemble, briefing. Breakfast at Sigrekhola. Lunch at Kulintar/Mugling. Hotel check-in. Dinner/explore Lakeside. Overnight.', image: 'pokhara.jpg' },
            { day: 'Day 2', title: 'Sightseeing & Drive to Ghandruk', desc: 'Breakfast. Half-day sightseeing (Pumdikot/Stupa/David Falls/Gupteshwor). Lunch. Drive to Ghandruk. Hotel check-in. Campfire/Music/Dance. Dinner.', image: 'ghandruk-village.png' },
            { day: 'Day 3', title: 'Ghandruk to Pokhara', desc: 'Sunrise/Mountain View. Short hike to Purano Gaun (20 mins). Breakfast. En-route Bindabashani Darshan. Pokhara hotel check-in. Lunch. Boating/Tal Bahari Darshan. Night Market. Dinner.', image: 'pokhara.jpg' },
            { day: 'Day 4', title: 'Pokhara to Kathmandu', desc: 'Breakfast. Departure. Lunch at Mugling/Kurintar. Drive to Kathmandu.', image: 'pokhara.jpg' }
        ],
        includes: ['Transportation by Deluxe Super Bus', '1 night in Ghandruk (sharing)', '2 nights in Pokhara (sharing)', '4 Breakfasts, 4 Veg Lunches, 3 Non-Veg Dinners (Chicken)', 'Sightseeing in Pokhara and Ghandruk', 'Campfire/Music in Ghandruk', 'Mineral Water (2 cases/day)', 'Pokhara entrance fees', '1 hour boating in Fewa Lake']
    },
    'manang': {
        name: 'Manang Tour', duration: '3N / 4D', priceNPR: '15,000', priceUSD: '115',
        category: 'trek', image: 'annapurna.jpg', badge: 'Mountain',
        shortDesc: 'Explore the "crown jewel" of the Annapurna Circuit — Manang Valley offers incredible beauty, rich culture, and spectacular views of Annapurna ranges. Visit Gangapurna Lake, ancient monasteries, and Ghalegaun.',
        highlights: ['Manang Valley (3,540m)', 'Gangapurna Lake', 'Bhraka Monastery', 'Ghalegaun Homestay', '4WD Scorpio Transport'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Jagat/Dharapani', desc: 'Early morning departure. Breakfast at Sigrekhola. Lunch at Mugling. Drive to Besisahar, then to Jagat. Overnight at Jagat.', image: 'annapurna.jpg' },
            { day: 'Day 2', title: 'Jagat/Dharapani to Manang', desc: 'Breakfast. Departure for Manang. Sightseeing en route: Octopus Waterfalls, Dhukur Pokhari, Apple Farm, Green Lake, Blue Lake, Braka Village, Manang Valley. Arrive Manang. Overnight.', image: 'annapurna.jpg' },
            { day: 'Day 3', title: 'Manang to Ghalegaun', desc: 'Breakfast. Drive to Ghalegaun. Check-in Homestay. Ghalegaun Sightseeing. Dinner/Overnight.', image: 'ghalegaun-village.png' },
            { day: 'Day 4', title: 'Ghalegaun to Kathmandu', desc: 'Breakfast. Departure for Kathmandu. Lunch en route. Arrive Kathmandu.', image: 'annapurna.jpg' }
        ],
        includes: ['Transportation with 4WD Scorpio', '1 Night Jagat (MAP basis)', '1 Night Manang (MAP basis)', '1 Night Ghalegaun (MAP basis)', 'Lunch en route (vegetarian)', 'All sightseeing as per itinerary']
    },
    'manang-extended': {
        name: 'Manang Extended Tour', duration: '4N / 5D', priceNPR: '18,000', priceUSD: '138',
        category: 'trek', image: 'annapurna.jpg', badge: 'Ice Lake',
        shortDesc: 'Extended Manang Valley tour with a hike to Ice Lake (4,600m) — the crown jewel of Annapurna Circuit. Visit ancient monasteries, apple farms, and experience diverse landscapes.',
        highlights: ['Ice Lake Hike (4,600m)', 'Manang Valley', 'Bhraka Monastery', 'Gangapurna Lake', '4WD Scorpio'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Jagat/Dharapani', desc: 'Early departure. Breakfast at Sigrekhola. Lunch at Mugling. Drive to Besisahar, then Jagat. Overnight.', image: 'annapurna.jpg' },
            { day: 'Day 2', title: 'Jagat/Dharapani to Braka', desc: 'Breakfast. Departure for Manang. Sightseeing: Octopus Waterfalls, Green Lake, Blue Lake, Braka Village, Apple Farm, Ancient Gompas. Dinner/Overnight at Braka.', image: 'annapurna.jpg' },
            { day: 'Day 3', title: 'Hike to Ice Lake (4,600m)', desc: 'Early morning departure. Steep ascent above Braka Village. Views of Annapurna III, Gangapurna, Tilicho Peak, Manang Valley. Descend to Braka, drive to Manang. Explore Manang Village. Dinner/Overnight.', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Manang to Besisahar', desc: 'Breakfast. Departure. Lunch en route. Drive to Besisahar. Dinner/Overnight.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Besisahar to Kathmandu', desc: 'Breakfast. Departure. Lunch en route. Arrive Kathmandu.', image: 'annapurna.jpg' }
        ],
        includes: ['Transportation with 4WD Scorpio', '1 Night Jagat (MAP basis)', '1 Night Braka (MAP basis)', '1 Night Manang (MAP basis)', '1 Night Besisahar (MAP basis)', 'Lunch en route (vegetarian)', 'All sightseeing as per itinerary']
    },
    'muktinath': {
        name: 'Muktinath Tour', duration: '3N / 4D', priceNPR: '10,000', priceUSD: '77',
        category: 'heritage', image: 'muktinath-temple.png', badge: 'Pilgrimage',
        shortDesc: 'Quick pilgrimage to Muktinath Temple via Galeshwor — visit Baglung Kalika Temple, Golden Bridge, Rupse Jharana waterfall, Jomsom, and Kagbeni. Both Hindu and Buddhist pilgrimage site.',
        highlights: ['Muktinath Temple', 'Baglung Kalika Temple', 'Rupse Jharana', 'Jomsom & Kagbeni', 'Pokhara Sightseeing'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Galeshwor', desc: 'Assemble, briefing. Breakfast at Sigrekhola. Lunch at AnbuKhairine. Baglung Kalika Temple Darshan. Explore Golden Bridge. Hotel check-in in Galeshwor. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Galeshwor to Muktinath to Marpha', desc: 'Early morning Galeshwor Mahadev Darshan. Breakfast. Departure for Muktinath. Thakali lunch on the way. Sightseeing: Rupse Jharana, Lete Bazar, Jomsom. Muktinath Temple Darshan. Jwala Mai Temple. Dumba Lake. Explore Marpha Village. Dinner/Overnight.', image: 'muktinath-temple.png' },
            { day: 'Day 3', title: 'Marpha to Pokhara', desc: 'Breakfast. Departure for Pokhara. Lunch on the way. Sightseeing: Pumdikot, Davis Falls, Gupteshwor Cave. Hotel check-in. Lakeside hangout. Dinner/Overnight.', image: 'pokhara.jpg' },
            { day: 'Day 4', title: 'Pokhara to Kathmandu', desc: 'Tal Barahi Temple Darshan. Breakfast. Lunch at Mugling/Malekhu. Departure for Kathmandu.', image: 'pokhara.jpg' }
        ],
        includes: ['Accommodation on sharing basis', 'Transportation by super deluxe bus', 'All meals (Breakfast, Veg Lunch & Dinner — except dinner on last day)', 'First Aid Medical Kit', 'Experienced Guide', 'Mineral Water (2 cases/day)', 'Entrance fees', '1 hour boating in Fewa Lake']
    },
    'muktinath-extended': {
        name: 'Muktinath Pilgrimage Tour', duration: '4N / 5D', priceNPR: '15,000', priceUSD: '115',
        category: 'heritage', image: 'muktinath-temple.png', badge: 'Pilgrimage',
        shortDesc: 'Sacred pilgrimage to Muktinath Temple (3,800m) through the deepest gorge in the world — Kali Gandaki corridor between Dhaulagiri and Annapurna. Visit Tatopani hot springs, Marpha village, Kagbeni.',
        highlights: ['Muktinath Temple (3,800m)', 'Kali Gandaki Gorge', 'Tatopani Hot Springs', 'Marpha Village', 'Pokhara Sightseeing'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Pokhara', desc: 'Departure. Breakfast at Sirgekhola. Lunch at Kurintar/Mugling. Hotel check-in. Dinner & Overnight.', image: 'pokhara.jpg' },
            { day: 'Day 2', title: 'Pokhara to Marpha', desc: 'Breakfast. Departure for Marpha. Sightseeing: Balgung Kalika, Galeshwor Dham. Lunch en route. Tatopani, Rupse Waterfalls sightseeing. Hotel check-in in Marpha. Dinner/Overnight.', image: 'muktinath-temple.png' },
            { day: 'Day 3', title: 'Marpha to Muktinath to Lete', desc: 'Breakfast. Departure for Muktinath. Explore Muktinath Temple. Lunch at Muktinath. Drive to Kagbeni. Sightseeing: Kagbeni, Dumba Lake, Jomsom & Marpha. Hotel check-in in Lete. Dinner/Overnight.', image: 'muktinath.png' },
            { day: 'Day 4', title: 'Lete to Pokhara', desc: 'Breakfast and check-out. Lunch on the way. Sightseeing: Pumdikot, Stupa, David\'s Falls. Hotel check-in in Pokhara. Dinner and Lakeside hangout.', image: 'pokhara.jpg' },
            { day: 'Day 5', title: 'Pokhara to Kathmandu', desc: 'Tal Barahi Darsan. Breakfast. Lunch on the way.', image: 'pokhara.jpg' }
        ],
        includes: ['All grounded transportation with experienced driver', '2 Nights Pokhara (MAP basis)', '1 Night Marpha (MAP basis)', '1 Night Lete (MAP basis)', 'All Veg Lunch during entire tour', 'Breakfast for all days', 'Sightseeing as per itinerary']
    },
    'pathibhara': {
        name: 'Pathibhara Pilgrimage Tour', duration: '5N / 6D', priceNPR: '22,000', priceUSD: '169',
        category: 'trek', image: 'ghandruk.png', badge: 'Shakti Peeth',
        shortDesc: 'Sacred pilgrimage to Pathibhara Devi Temple (3,794m) in Taplejung — one of the Shakti Peeths, believed to fulfill devotees\' wishes. Also visit Janaki Temple, Koshi Barrage, and temples in Dharan.',
        highlights: ['Pathibhara Temple (3,794m)', 'Janaki Temple', 'Koshi Barrage', 'Budha Subba Temple', 'Pindeshwor Temple'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Dharan', desc: 'Early start. Kuseshowor Mahadev Darshan. Lunch at Khurkot. Arrive Kanyam, check-in. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Dharan to Sanophedi', desc: 'Morning explore Dharan (Budha Subba/Pindeshwor/Dantakali). Breakfast. Depart for Taplejung. Lunch on the way. Drive to Sanophedi. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Sanophedi to Pathibhara to Taplejung', desc: 'Wake up early (4 AM). Hike to Pathibhara Temple (4-5 hours). Prayers and mountain views. Descend to Thulophedi. Breakfast/lunch. Drive to Taplejung. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 4', title: 'Taplejung to Itahari', desc: 'Breakfast. Depart for Itahari via Mechi Highway. Lunch at Phidim. Arrive Itahari. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 5', title: 'Itahari to Lalgardh', desc: 'Head to Dharan for Budha Subba, Pindeshwor. Continue to Chatara Dham, Baraha Kshetra, Koshi Barrage. Drive to Lalgardh. Dinner/Overnight.', image: 'ghandruk.png' },
            { day: 'Day 6', title: 'Lalgardh to Kathmandu', desc: 'Drive to Janakpur. Visit Janaki Temple. Ram Mandir, Ganga Sagar. Mithila art and culture. Drive back to Kathmandu. Lunch on the way.', image: 'ghandruk.png' }
        ],
        includes: ['Accommodation on sharing basis', 'Transportation by jeep', 'All meals (Breakfast, Lunch, Dinner — except breakfast on Day 1)', 'Lunch vegetarian, Dinner non-vegetarian']
    },
    'rara-lake': {
        name: 'Rara Lake Tour', duration: '6N / 7D', priceNPR: '20,000', priceUSD: '154',
        category: 'trek', image: 'annapurna.jpg', badge: 'Remote',
        shortDesc: 'Journey to Nepal\'s largest and most beautiful lake — Rara Lake (2,990m), known as the "Queen of Lakes." The lake changes color 4-5 times a day. Hike to Murma Top, boating, and explore remote Sinja Valley.',
        highlights: ['Rara Lake', 'Murma Top Viewpoint', 'Boating', 'Sinja Valley', 'Horse Riding'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Kohalpur', desc: 'Morning assemble. Drive by Jeep (12 hours). Lunch on the way. Dinner/Overnight.', image: 'annapurna.jpg' },
            { day: 'Day 2', title: 'Kohalpur to Kalikot', desc: 'After breakfast, drive to Kalikot. Lunch on the way. Dinner/Overnight.', image: 'annapurna.jpg' },
            { day: 'Day 3', title: 'Kalikot to Rara Lake', desc: 'Breakfast. Drive to Mathillo Mili Rara. Lunch. Pass through Sinja Valley and Pandu Gufa. Trek 2.5 hours to Rara Lake. Dinner/Overnight at Rara Lake.', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Explore Rara Lake', desc: 'Breakfast. Full day sightseeing (trekking, boating*). Hike to Murma Top. Lunch at hotel. Dinner/Overnight.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Rara Lake to Kalikot', desc: 'Breakfast. Trek to Mathillo Mili Rara (2.5 hours). Lunch. Drive back to Kalikot. Dinner/Overnight.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Kalikot to Kohalpur', desc: 'Breakfast. Drive back to Surkhet/Kohalpur. Lunch. Dinner/Overnight.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Kohalpur to Kathmandu', desc: 'Breakfast. Drive back to Kathmandu. Lunch on the way.', image: 'annapurna.jpg' }
        ],
        includes: ['Transportation by Super Bus', 'Accommodation on sharing basis', 'All meals (Breakfast, Veg Lunch, Non-Veg Dinner)', 'National Park permits', 'Boating at Rara Lake']
    },

    // === ADVENTURE ===
    'mustang': {
        name: 'Upper Mustang Tour', duration: '4N / 5D', priceNPR: '35,000', priceUSD: '270',
        category: 'adventure', image: 'upper-mustang.png', badge: 'Restricted',
        shortDesc: 'Journey to the forbidden kingdom of Lo Manthang — a remote, restricted Buddhist kingdom with Tibetan-style villages, ancient monasteries, stupas, chhortens, and dramatic Trans-Himalaya landscape.',
        highlights: ['Lo Manthang', 'Muktinath Darshan', 'Restricted Area Permit', 'Kagbeni Village', 'Ancient Monasteries', '4WD Jeep'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Beni/Galeshowor', desc: 'Departure from Bhaktapur for Galeshowor. Lunch at Kulintar. Visit Balgung Kalika Temple for darshan. Check in at hotel in Galeshowor. Evening dinner and overnight stay.', image: 'upper-mustang.png' },
            { day: 'Day 2', title: 'Galeshowor to Chhusang via Muktinath', desc: 'Breakfast at hotel. Sightseeing en route — Galeshwor Mahadev, Tatopani (hot springs), Rupse Jharana waterfall, and Lete. Lunch served en-route. Muktinath Temple darshan (3,800m). Check in at teahouse in Chhusang. Evening dinner and overnight stay.', image: 'muktinath-temple.png' },
            { day: 'Day 3', title: 'Chhusang to Lo Manthang & Return', desc: 'Breakfast at hotel. Drive to Lo Manthang — the ancient walled capital of Mustang. Lunch at Lo Manthang. Sightseeing: Korala Naka border point, Chhosar Caves, and exploring Lo Manthang village with its Tibetan Buddhist monasteries. Drive back to Chhusang/Marpha. Dinner and overnight stay.', image: 'upper-mustang.png' },
            { day: 'Day 4', title: 'Chhusang to Pokhara', desc: 'Breakfast at hotel. Drive to Pokhara. Stop at Marpha village for sightseeing — famous for apple orchards and traditional Thakali architecture. Lunch at Lete. Check in at hotel in Pokhara. Evening dinner and overnight stay.', image: 'pokhara.jpg' },
            { day: 'Day 5', title: 'Pokhara to Kathmandu', desc: 'Visit Tal Barahi Temple on Phewa Lake. Breakfast at hotel. Departure for Kathmandu. Lunch on the way. Continue drive to Kathmandu.', image: 'pokhara.jpg' }
        ],
        includes: ['Transportation by 4WD Jeep', 'Experienced Driver', 'Accommodation (Triple/Quad Sharing)', 'All Meals (4 Chicken Dinners, 5 Veg Lunches, 5 Breakfasts)', 'All Sightseeing as per Itinerary']
    },
    'mustang-extended': {
        name: 'Upper Mustang Extended Tour', duration: '5N / 6D', priceNPR: '21,000', priceUSD: '162',
        category: 'adventure', audience: 'nepali', image: 'upper-mustang.png', badge: 'Extended',
        shortDesc: 'Extended journey to the forbidden kingdom of Lo Manthang with more time to explore — visit ancient Tibetan Buddhist monasteries, stupas, chhortens, prayer walls, Jhong Cave, and experience the raw Trans-Himalaya landscape.',
        highlights: ['Lo Manthang (3,840m)', 'Muktinath Temple', 'ACAP & Special Permits', 'Jhong Cave', 'Ancient Monasteries', 'Marpha Village'],
        itinerary: [
            { day: 'Day 1', title: 'Kathmandu to Beni', desc: 'Early morning departure. Lunch at Kurintar/Mugling. Visit Baglung Kalika Temple. Drive to Beni. Hotel check-in. Dinner/Overnight.', image: 'upper-mustang.png' },
            { day: 'Day 2', title: 'Beni to Chhusang', desc: 'Galeshwor Dham darshan. Breakfast. Drive to Chhusang via Kali Gandaki corridor. Rupse Waterfall. Jomsom, Kagbeni village. Muktinath Temple darshan. Lunch at Ranipauwa. Tea house check-in in Chhusang. Dinner/Overnight.', image: 'muktinath-temple.png' },
            { day: 'Day 3', title: 'Chhusang to Lo-Manthang', desc: 'Breakfast. Drive to Lo Manthang through dramatic landscapes. Lunch at Tea House. Visit Jhong Cave. Explore walled city, monasteries, local culture. Village walk. Dinner/Overnight.', image: 'upper-mustang.png' },
            { day: 'Day 4', title: 'Lo-Manthang to Marpha', desc: 'Breakfast. Departure towards Marpha. Lunch at Chhusang. Dumba Lake. Arrive Marpha. Explore Marpha Village. Dinner/Overnight.', image: 'muktinath.png' },
            { day: 'Day 5', title: 'Marpha to Pokhara', desc: 'Breakfast. Departure for Pokhara. Tatopani sightseeing. Lunch on the way. Sightseeing: Bindabasini Temple, Pumdikot (Shiva Statue). Hotel check-in in Pokhara. Dinner/Overnight.', image: 'pokhara.jpg' },
            { day: 'Day 6', title: 'Pokhara to Kathmandu', desc: 'Tal Barahi Temple darshan. Breakfast. Departure. Lunch en route. Arrive Kathmandu.', image: 'pokhara.jpg' }
        ],
        includes: ['Transportation by Scorpio (4WD Jeep) with experienced driver', '1 Night Beni (MAP basis)', '1 Night Kagbeni (MAP basis)', '1 Night Lo-Manthang (MAP basis)', '1 Night Marpha (MAP basis)', '1 Night Ghandruk (MAP basis)', '1 Night Pokhara (MAP basis)', 'All Veg Lunch during entire tour', 'ACAP Permit', 'Upper Mustang Special Permit', 'Sightseeing as per itinerary']
    },

    // ===== FOREIGNER PACKAGES (from foreigners folder) =====
    'annapurna-circuit-23d': {
        name: 'Annapurna Circuit Trek', duration: '22N / 23D', priceNPR: '85,000', priceUSD: '650',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Classic',
        shortDesc: 'The ultimate Annapurna experience — cross the world\'s widest trekking pass Thorong La (5,416m), traverse from subtropical forests to ice flows, visit Muktinath Temple, Tatopani hot springs, and Poon Hill viewpoint.',
        highlights: ['Thorong La Pass (5,416m)', 'Muktinath Temple', 'Tatopani Hot Springs', 'Poon Hill Viewpoint', 'Marpha Village', 'Tea House Trek'],
        itinerary: [
            { day: 'Day 1', title: 'Welcome to Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel. Trek preparation and briefing.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Explore Kathmandu', desc: 'Free day to explore Kathmandu Durbar Square, Thamel, and Swayambhunath.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Drive to Besisahar, Trek to Khudi', desc: 'Drive Kathmandu to Besisahar (6-7hrs). Trek to Khudi. Overnight tea house.', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Bahundanda', desc: 'Trek through subtropical forests and rice terraces to Bahundanda.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Jagat', desc: 'Continue along Marsyangdi River. Pass waterfalls and villages. Arrive Jagat.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Dharapani', desc: 'Enter Annapurna Conservation Area. Pass through Tal valley. Arrive Dharapani.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Trek to Chame', desc: 'Trek through pine forests with views of Annapurna II and Lamjung Himal.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Pisang', desc: 'Pass through apple orchards. Arrive Pisang with panoramic mountain views.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Trek to Manang', desc: 'Trek to Manang Valley. Visit Barge Monastery. Acclimatize.', image: 'annapurna.jpg' },
            { day: 'Day 10', title: 'Acclimatization Day Manang', desc: 'Day trip to Ice Lake or Gangapurna Lake. Rest and acclimatize.', image: 'annapurna.jpg' },
            { day: 'Day 11', title: 'Trek to Yak Kharka', desc: 'Gradual ascent through high altitude landscape. Yak pastures.', image: 'annapurna.jpg' },
            { day: 'Day 12', title: 'Trek to Thorong Phedi', desc: 'Last stop before Thorong La. Rest and prepare for early start.', image: 'annapurna.jpg' },
            { day: 'Day 13', title: 'Cross Thorong La (5,416m) to Muktinath', desc: 'Early morning departure. Cross world\'s widest trekking pass. Descend to Muktinath.', image: 'muktinath-temple.png' },
            { day: 'Day 14', title: 'Trek to Jomsom', desc: 'Visit Muktinath Temple. Descend through Kali Gandaki gorge. Arrive Jomsom.', image: 'muktinath.png' },
            { day: 'Day 15', title: 'Trek to Marpha', desc: 'Trek through apple orchards. Explore Marpha village and apple brandy factories.', image: 'muktinath.png' },
            { day: 'Day 16', title: 'Trek to Kalopani', desc: 'Continue through Kali Gandaki gorge. Views of Dhaulagiri and Annapurna.', image: 'annapurna.jpg' },
            { day: 'Day 17', title: 'Trek to Tatopani', desc: 'Descend to Tatopani. Relax in natural hot springs.', image: 'annapurna.jpg' },
            { day: 'Day 18', title: 'Trek to Ghorepani', desc: 'Steep climb through rhododendron forest to Ghorepani.', image: 'ghandruk-trek.jpg' },
            { day: 'Day 19', title: 'Poon Hill Sunrise, Trek to Tadapani', desc: 'Early morning hike to Poon Hill for sunrise over 20+ Himalayan peaks. Trek to Tadapani.', image: 'ghandruk-trek.jpg' },
            { day: 'Day 20', title: 'Trek to Ghandruk', desc: 'Descend to Ghandruk village. Explore Gurung culture and architecture.', image: 'ghandruk-village.png' },
            { day: 'Day 21', title: 'Trek to Nayapul, Drive to Pokhara', desc: 'Trek downhill to Nayapul. Drive to Pokhara. Celebrate.', image: 'pokhara.jpg' },
            { day: 'Day 22', title: 'Pokhara to Kathmandu', desc: 'Scenic drive back to Kathmandu. Farewell dinner.', image: 'pokhara.jpg' },
            { day: 'Day 23', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation (tea houses during trek, hotels in cities)', 'All meals during trek', 'ACAP Permit', 'TIMS Card', 'All transportation', 'Porter service (1 porter for 2 people)']
    },
    'langtang-valley-10d': {
        name: 'Langtang Valley Trek', duration: '10N / 11D', priceNPR: '55,000', priceUSD: '420',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Glacier Valley',
        shortDesc: 'Trek to the "Valley of Glaciers" — no flight needed, just a scenic drive from Kathmandu. Hike to Tserko Ri (5,000m) for sunrise views, explore Kyanjin Gompa monastery, and experience Tamang/Sherpa Buddhist culture.',
        highlights: ['Tserko Ri (5,000m)', 'Kyanjin Gompa', 'Langtang Lirung Views', 'Tamang Culture', 'Yak Cheese Factory', 'No Flight Required'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Trek Preparation Day', desc: 'Rest and prepare for trek. Explore Kathmandu.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Drive to Syabrubesi', desc: 'Scenic drive through Trisuli valley to Syabrubesi (7-8hrs).', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Lama Hotel', desc: 'Trek through oak and rhododendron forest along Langtang Khola.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Mundu', desc: 'Continue through Langtang Valley. Views of Langtang Lirung.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Kyanjin Gompa', desc: 'Arrive Kyanjin Gompa. Visit monastery and cheese factory.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Tserko Ri Hike (5,000m)', desc: 'Early morning hike to Tserko Ri for sunrise panorama. Return to Kyanjin Gompa.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Lama Hotel', desc: 'Descend through valley back to Lama Hotel.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Trek to Syabrubesi', desc: 'Continue descent to Syabrubesi via high route.', image: 'annapurna.jpg' },
            { day: 'Day 10', title: 'Drive to Kathmandu', desc: 'Scenic drive back to Kathmandu.', image: 'pokhara.jpg' },
            { day: 'Day 11', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'Langtang Conservation Permit', 'All transportation', 'Porter service (1 porter for 3 people)']
    },
    'langtang-tamang-heritage-9d': {
        name: 'Langtang Tamang Heritage Trail', duration: '9N / 10D', priceNPR: '48,000', priceUSD: '370',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Heritage',
        shortDesc: 'Experience Tibetan-influenced hill tribes on the Tamang Heritage Trail — homestay in Briddim, natural hot springs at Tatopani, Ganesh Himal and Langtang Himalaya views, less crowded alternative.',
        highlights: ['Tamang Culture', 'Homestay in Briddim', 'Natural Hot Springs', 'Ganesh Himal Views', 'Less Crowded', 'Authentic Village Life'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Trek Preparation Day', desc: 'Rest and prepare for trek.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Drive to Syabrubesi', desc: 'Scenic drive to Syabrubesi (8hrs).', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Gatlang', desc: 'Trek through forests to traditional Tamang village of Gatlang.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Tatopani', desc: 'Trek to natural hot springs at Tatopani. Relax.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Thuman', desc: 'Trek to Thuman village with mountain views.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Trek to Briddim (Homestay)', desc: 'Trek to Briddim. Experience authentic Tamang homestay.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Syabrubesi', desc: 'Descend to Syabrubesi.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Drive to Kathmandu', desc: 'Drive back to Kathmandu.', image: 'pokhara.jpg' },
            { day: 'Day 10', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation (homestay + tea houses)', 'All meals during trek', 'Langtang Conservation Permit', 'All transportation', 'Porter service']
    },
    'langtang-circuit-20d': {
        name: 'Langtang Circuit Trek', duration: '20N / 21D', priceNPR: '75,000', priceUSD: '575',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Circuit',
        shortDesc: 'Complete Langtang region circuit — Tamang Heritage Trail + Langtang Valley + Gosaikunda Lake + Helambu. Cross Lauribinayak La (4,610m), visit sacred Gosaikunda Lake, and explore diverse cultures.',
        highlights: ['Gosaikunda Lake (4,460m)', 'Lauribinayak La Pass', 'Kyanjin Gompa', 'Tamang Heritage', 'Helambu Region', 'Sacred Lakes'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Trek Preparation Day', desc: 'Rest and prepare for trek.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Drive to Syabrubesi', desc: 'Scenic drive to Syabrubesi (8hrs).', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Gatlang', desc: 'Trek to Tamang village of Gatlang.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Tatopani', desc: 'Trek to hot springs at Tatopani.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Thuman', desc: 'Trek to Thuman village.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Trek to Briddim', desc: 'Trek to Briddim village.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Lama Hotel', desc: 'Trek to Lama Hotel along Langtang Khola.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Trek to Langtang Valley', desc: 'Continue to Langtang Valley.', image: 'annapurna.jpg' },
            { day: 'Day 10', title: 'Trek to Kyanjin Gompa', desc: 'Arrive Kyanjin Gompa. Visit monastery.', image: 'annapurna.jpg' },
            { day: 'Day 11', title: 'Tserko Ri & Descend', desc: 'Hike Tserko Ri. Descend to Lama Hotel.', image: 'annapurna.jpg' },
            { day: 'Day 12', title: 'Trek to Thulo Syabru', desc: 'Trek to Thulo Syabru.', image: 'annapurna.jpg' },
            { day: 'Day 13', title: 'Trek to Sing Gompa', desc: 'Trek to Sing Gompa monastery.', image: 'annapurna.jpg' },
            { day: 'Day 14', title: 'Trek to Laurebinayak', desc: 'Ascend to Laurebinayak.', image: 'annapurna.jpg' },
            { day: 'Day 15', title: 'Trek to Gosaikunda', desc: 'Arrive sacred Gosaikunda Lake (4,460m).', image: 'annapurna.jpg' },
            { day: 'Day 16', title: 'Trek to Gopte', desc: 'Cross pass and descend to Gopte.', image: 'annapurna.jpg' },
            { day: 'Day 17', title: 'Trek to Tharepati', desc: 'Trek to Tharepati.', image: 'annapurna.jpg' },
            { day: 'Day 18', title: 'Trek to Gul Bhanjyang', desc: 'Descend through forest to Gul Bhanjyang.', image: 'annapurna.jpg' },
            { day: 'Day 19', title: 'Trek to Chisapani', desc: 'Trek to Chisapani for sunset views.', image: 'annapurna.jpg' },
            { day: 'Day 20', title: 'Trek to Sundarijal, Drive to Kathmandu', desc: 'Descend to Sundarijal. Drive to Kathmandu.', image: 'pokhara.jpg' },
            { day: 'Day 21', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'Langtang Conservation Permit', 'Gosaikunda Trek Permit', 'All transportation', 'Porter service']
    },
    'langtang-gosaikunda-10d': {
        name: 'Langtang & Gosaikunda Trek', duration: '10N / 11D', priceNPR: '58,000', priceUSD: '445',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Sacred Lake',
        shortDesc: 'Combine Langtang Valley with sacred Gosaikunda Lake — hike to Tserko Ri (5,000m), visit Kyanjin Gompa, and trek to the holy alpine lake at 4,380m. Diverse landscapes from valleys to high passes.',
        highlights: ['Gosaikunda Lake (4,380m)', 'Tserko Ri (5,000m)', 'Kyanjin Gompa', 'Langtang Valley', 'Laurebina La Pass', 'Sacred Pilgrimage'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Trek Preparation Day', desc: 'Rest and prepare for trek.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Drive to Syabrubesi', desc: 'Scenic drive to Syabrubesi.', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Lama Hotel', desc: 'Trek through forest to Lama Hotel.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Langtang Valley', desc: 'Continue to Langtang Valley.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Kyanjin Gompa', desc: 'Arrive Kyanjin Gompa.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Tserko Ri & Descend to Lama Hotel', desc: 'Hike Tserko Ri. Descend.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Thulo Syabru', desc: 'Trek to Thulo Syabru.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Trek to Sing Gompa', desc: 'Trek to Sing Gompa.', image: 'annapurna.jpg' },
            { day: 'Day 10', title: 'Trek to Laurebinayak', desc: 'Ascend to Laurebinayak.', image: 'annapurna.jpg' },
            { day: 'Day 11', title: 'Trek to Gosaikunda', desc: 'Arrive sacred Gosaikunda Lake.', image: 'annapurna.jpg' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'Langtang Conservation Permit', 'Gosaikunda Trek Permit', 'All transportation', 'Porter service']
    },
    'helambu-10d': {
        name: 'Helambu Trek', duration: '10N / 11D', priceNPR: '45,000', priceUSD: '345',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Near Kathmandu',
        shortDesc: 'Short and easy trek near Kathmandu through Tamang Hyolmo culture — Buddhist monasteries, rhododendron forests, panoramic landscapes from Annapurna to Everest, exotic flora and fauna.',
        highlights: ['Near Kathmandu', 'Tamang Hyolmo Culture', 'Buddhist Monasteries', 'Rhododendron Forests', 'Panoramic Views', 'Easy Grade'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Trek Preparation Day', desc: 'Rest and prepare for trek.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Drive to Chisapani', desc: 'Drive from Bhaktapur to Chisapani.', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Gul Bhanjyang', desc: 'Trek through forest to Gul Bhanjyang.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Tharepati', desc: 'Ascend to Tharepati (3,650m).', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Melamchigaon', desc: 'Descend to Melamchigaon village.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Trek to Tarke Gyang', desc: 'Trek to Tarke Gyang monastery village.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Sermathang', desc: 'Trek to Sermathang.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Trek to Melamchi Pul, Drive to Kathmandu', desc: 'Descend to road. Drive to Kathmandu.', image: 'pokhara.jpg' },
            { day: 'Day 10', title: 'Kathmandu Sightseeing', desc: 'Free day in Kathmandu.', image: 'ghandruk.png' },
            { day: 'Day 11', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'Conservation Permit', 'All transportation', 'Porter service']
    },
    'manaslu-circuit-18d': {
        name: 'Manaslu Circuit Trek', duration: '18N / 19D', priceNPR: '95,000', priceUSD: '730',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Remote',
        shortDesc: 'Circle the world\'s 8th highest mountain — cross Larkya La Pass (5,135m), experience remote off-the-beaten-path trekking through pristine forests and glaciers with Tibetan Buddhist culture.',
        highlights: ['Larkya La Pass (5,135m)', 'Manaslu (8,156m)', 'Remote Trekking', 'Tibetan Buddhist Culture', 'Snow Leopard Habitat', 'Restricted Area'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Rest Day', desc: 'Rest and explore Kathmandu Durbar Square and Thamel.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Drive to Machhakhola', desc: 'Long drive to trailhead Machhakhola (8hrs).', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Jagat', desc: 'Trek along Budhi Gandaki River to Jagat.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Pewa', desc: 'Trek through narrow gorge to Pewa.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Namrung', desc: 'Enter restricted area. Trek to Namrung.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Trek to Lho', desc: 'Trek to Lho with first views of Manaslu.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Sama Gaon', desc: 'Trek to Sama Gaon. Acclimatize.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Acclimatization Day', desc: 'Day trip to Manaslu Base Camp or Pungyen Gompa.', image: 'annapurna.jpg' },
            { day: 'Day 10', title: 'Trek to Samdo', desc: 'Trek to Samdo near Tibetan border.', image: 'annapurna.jpg' },
            { day: 'Day 11', title: 'Acclimatization Day', desc: 'Day trip to Tibet Border viewpoint.', image: 'annapurna.jpg' },
            { day: 'Day 12', title: 'Trek to Dharamsala', desc: 'Trek to Dharamsala (Larkya Phedi).', image: 'annapurna.jpg' },
            { day: 'Day 13', title: 'Cross Larkya La (5,135m) to Bimtang', desc: 'Early start. Cross Larkya La Pass. Descend to Bimtang.', image: 'annapurna.jpg' },
            { day: 'Day 14', title: 'Trek to Dharapani', desc: 'Descend through forest to Dharapani.', image: 'annapurna.jpg' },
            { day: 'Day 15', title: 'Drive to Pokhara', desc: 'Long drive to Pokhara.', image: 'pokhara.jpg' },
            { day: 'Day 16', title: 'Rest Day Pokhara', desc: 'Free day in Pokhara.', image: 'pokhara.jpg' },
            { day: 'Day 17', title: 'Drive to Bhaktapur', desc: 'Tourist bus to Bhaktapur.', image: 'ghandruk.png' },
            { day: 'Day 18', title: 'Free Day Bhaktapur', desc: 'Explore Bhaktapur.', image: 'ghandruk.png' },
            { day: 'Day 19', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'Manaslu Restricted Area Permit', 'ACAP Permit', 'MCAP Permit', 'All transportation', 'Porter service (1 porter for 2 people)']
    },
    'manaslu-tsum-valley-20d': {
        name: 'Manaslu Circuit & Tsum Valley', duration: '20N / 21D', priceNPR: '110,000', priceUSD: '845',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Hidden Valley',
        shortDesc: 'Explore the hidden Tsum Valley (opened 2008) and cross Larkya La — walk to Tibetan border, visit ancient monasteries, Milarepa\'s Cave, and experience pristine Tsumba community culture.',
        highlights: ['Tsum Valley (Hidden Valley)', 'Larkya La Pass (5,106m)', 'Milarepa\'s Cave', 'Mu Gompa', 'Tibetan Border', 'Ancient Monasteries'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Trek Preparation Day', desc: 'Rest and prepare for trek.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Drive to Machhakhola', desc: 'Drive to trailhead (8hrs).', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Jagat', desc: 'Trek along Budhi Gandaki River.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Lok Pa', desc: 'Enter Tsum Valley side trail.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Chumling', desc: 'Trek through Tsum Valley.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Trek to Chukkum Paro', desc: 'Continue deeper into Tsum Valley.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Nile/Chule', desc: 'Reach the heart of Tsum Valley.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Mu Gompa & Return', desc: 'Visit Mu Gompa and Tibetan border area. Return to Nile.', image: 'annapurna.jpg' },
            { day: 'Day 10', title: 'Trek to Chumling', desc: 'Begin exit from Tsum Valley.', image: 'annapurna.jpg' },
            { day: 'Day 11', title: 'Trek to Deng', desc: 'Rejoin Manaslu Circuit trail.', image: 'annapurna.jpg' },
            { day: 'Day 12', title: 'Trek to Namrung', desc: 'Trek to Namrung.', image: 'annapurna.jpg' },
            { day: 'Day 13', title: 'Trek to Lho', desc: 'Views of Manaslu.', image: 'annapurna.jpg' },
            { day: 'Day 14', title: 'Trek to Samagaon', desc: 'Trek to Samagaon.', image: 'annapurna.jpg' },
            { day: 'Day 15', title: 'Acclimatization Day', desc: 'Rest and acclimatize.', image: 'annapurna.jpg' },
            { day: 'Day 16', title: 'Trek to Samdo', desc: 'Trek to Samdo.', image: 'annapurna.jpg' },
            { day: 'Day 17', title: 'Trek to Dharmasala', desc: 'Trek to Dharmasala.', image: 'annapurna.jpg' },
            { day: 'Day 18', title: 'Cross Larkya La to Bimtang', desc: 'Cross Larkya La Pass (5,100m). Descend to Bimtang.', image: 'annapurna.jpg' },
            { day: 'Day 19', title: 'Trek to Dharapani', desc: 'Descend to Dharapani.', image: 'annapurna.jpg' },
            { day: 'Day 20', title: 'Drive to Kathmandu', desc: 'Drive back to Kathmandu.', image: 'pokhara.jpg' },
            { day: 'Day 21', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'Tsum Valley Special Permit', 'Manaslu Conservation Permit', 'All transportation', 'Porter service']
    },
    'mardi-himal': {
        name: 'Mardi Himal Trek', duration: '7N / 8D', priceNPR: '38,000', priceUSD: '290',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Off beaten path',
        shortDesc: 'Less-crowded alternative in the Annapurna region — stunning views of Machhapuchhre (Fishtail), Annapurna South, Hiunchuli, and Mardi Himal. Perfect for those seeking solitude.',
        highlights: ['Machhapuchhre (Fishtail)', 'Annapurna South Views', 'Off the Beaten Path', 'Low Crowd', 'Rhododendron Forests', 'Mountain Sunrise'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Drive to Pokhara', desc: 'Scenic drive to Pokhara.', image: 'pokhara.jpg' },
            { day: 'Day 3', title: 'Drive to Kande, Trek to Forest Camp', desc: 'Drive to Kande. Trek through forest.', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Low Camp', desc: 'Ascend through rhododendron forest to Low Camp.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to High Camp', desc: 'Continue to High Camp with panoramic views.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Mardi Himal Viewpoint & Descend', desc: 'Early morning hike to viewpoint. Descend to Low Camp.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Trek to Siding, Drive to Pokhara', desc: 'Trek to Siding. Drive to Pokhara.', image: 'pokhara.jpg' },
            { day: 'Day 8', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'pokhara.jpg' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'ACAP Permit', 'TIMS Card', 'All transportation', 'Porter service']
    },
    'nar-phu-valley-16d': {
        name: 'Nar Phu Valley Trek', duration: '16D', priceNPR: '72,000', priceUSD: '555',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Restricted',
        shortDesc: 'Remote restricted area trek off the Annapurna Circuit through the hidden Nar and Phu valleys — pristine Tibetan Buddhist culture, dramatic landscapes, and few other trekkers.',
        highlights: ['Nar Valley', 'Phu Village', 'Restricted Area', 'Tibetan Buddhist Culture', 'Kang La Pass', 'Few Trekkers'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Drive to Chame', desc: 'Drive to Chame via Besisahar.', image: 'annapurna.jpg' },
            { day: 'Day 3', title: 'Trek to Pisang', desc: 'Trek to Pisang.', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Ngawal', desc: 'Trek to Ngawal, entry point to Nar Phu.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Phu', desc: 'Trek deep into Phu Valley.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Explore Phu', desc: 'Explore Phu village and monasteries.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Trek to Nar', desc: 'Trek to Nar village.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Explore Nar', desc: 'Explore Nar village and surroundings.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Cross Kang La to Manang', desc: 'Cross Kang La Pass. Descend to Manang.', image: 'annapurna.jpg' },
            { day: 'Day 10', title: 'Acclimatization Manang', desc: 'Rest day in Manang.', image: 'annapurna.jpg' },
            { day: 'Day 11', title: 'Trek to Yak Kharka', desc: 'Continue Annapurna Circuit.', image: 'annapurna.jpg' },
            { day: 'Day 12', title: 'Trek to Thorong Phedi', desc: 'Trek to Thorong Phedi.', image: 'annapurna.jpg' },
            { day: 'Day 13', title: 'Cross Thorong La to Muktinath', desc: 'Cross Thorong La Pass (5,416m).', image: 'muktinath-temple.png' },
            { day: 'Day 14', title: 'Trek to Jomsom', desc: 'Trek to Jomsom.', image: 'muktinath.png' },
            { day: 'Day 15', title: 'Fly to Pokhara', desc: 'Fly from Jomsom to Pokhara.', image: 'pokhara.jpg' },
            { day: 'Day 16', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'pokhara.jpg' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'Nar Phu Valley Restricted Permit', 'ACAP Permit', 'All transportation', 'Domestic flight Jomsom-Pokhara', 'Porter service']
    },
    'tsum-valley': {
        name: 'Tsum Valley Trek', duration: '14N / 15D', priceNPR: '65,000', priceUSD: '500',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Sacred Valley',
        shortDesc: 'Sacred Himalayan pilgrimage valley opened to trekkers in 2008 — close to Tibet border, Milarepa\'s Cave, unique Tsumba community, pristine culture, ancient monasteries and gompas.',
        highlights: ['Tsum Valley (Sacred)', 'Milarepa\'s Cave', 'Tibetan Border', 'Ancient Monasteries', 'Tsumba Community', 'Pristine Culture'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Trek Preparation Day', desc: 'Rest and prepare for trek.', image: 'ghandruk.png' },
            { day: 'Day 3', title: 'Drive to Machhakhola', desc: 'Drive to trailhead (8hrs).', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Trek to Jagat', desc: 'Trek along Budhi Gandaki River.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Lok Pa', desc: 'Enter Tsum Valley.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Chumling', desc: 'Continue through Tsum Valley.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Trek to Chukkum Paro', desc: 'Deeper into the valley.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Nile/Chule', desc: 'Heart of Tsum Valley.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Mu Gompa Visit', desc: 'Visit Mu Gompa and explore.', image: 'annapurna.jpg' },
            { day: 'Day 10', title: 'Return to Chumling', desc: 'Begin return journey.', image: 'annapurna.jpg' },
            { day: 'Day 11', title: 'Trek to Deng', desc: 'Continue descent.', image: 'annapurna.jpg' },
            { day: 'Day 12', title: 'Trek to Jagat', desc: 'Trek to Jagat.', image: 'annapurna.jpg' },
            { day: 'Day 13', title: 'Trek to Machhakhola', desc: 'Trek to Machhakhola.', image: 'annapurna.jpg' },
            { day: 'Day 14', title: 'Drive to Kathmandu', desc: 'Drive back to Kathmandu.', image: 'pokhara.jpg' },
            { day: 'Day 15', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'Tsum Valley Special Permit', 'Manaslu Conservation Permit', 'All transportation', 'Porter service']
    },
    'everest-base-camp': {
        name: 'Everest Base Camp Trek', duration: '14N / 15D', priceNPR: '120,000', priceUSD: '920',
        category: 'trek', audience: 'foreigner', image: 'annapurna.jpg', badge: 'Everest',
        shortDesc: 'The iconic Everest Base Camp trek — fly to Lukla, trek through Sherpa villages, cross suspension bridges, visit Tengboche Monastery, and stand at the base of the world\'s highest mountain.',
        highlights: ['Everest Base Camp (5,364m)', 'Kala Patthar (5,545m)', 'Tengboche Monastery', 'Sherpa Culture', 'Lukla Flight', 'Khumbu Glacier'],
        itinerary: [
            { day: 'Day 1', title: 'Arrive Kathmandu', desc: 'Arrive Kathmandu. Transfer to hotel.', image: 'ghandruk.png' },
            { day: 'Day 2', title: 'Fly to Lukla, Trek to Phakding', desc: 'Scenic mountain flight to Lukla. Trek to Phakding.', image: 'annapurna.jpg' },
            { day: 'Day 3', title: 'Trek to Namche Bazaar', desc: 'Trek to Sherpa capital Namche Bazaar.', image: 'annapurna.jpg' },
            { day: 'Day 4', title: 'Acclimatization Day Namche', desc: 'Rest day. Explore Namche and Everest View Hotel.', image: 'annapurna.jpg' },
            { day: 'Day 5', title: 'Trek to Tengboche', desc: 'Trek to Tengboche Monastery.', image: 'annapurna.jpg' },
            { day: 'Day 6', title: 'Trek to Dingboche', desc: 'Continue to Dingboche.', image: 'annapurna.jpg' },
            { day: 'Day 7', title: 'Acclimatization Day Dingboche', desc: 'Day hike to Nagarjun Hill.', image: 'annapurna.jpg' },
            { day: 'Day 8', title: 'Trek to Lobuche', desc: 'Trek to Lobuche.', image: 'annapurna.jpg' },
            { day: 'Day 9', title: 'Trek to Gorak Shep, EBC', desc: 'Trek to Gorak Shep. Continue to Everest Base Camp.', image: 'annapurna.jpg' },
            { day: 'Day 10', title: 'Kala Patthar Sunrise, Trek to Pheriche', desc: 'Early morning hike to Kala Patthar (5,545m) for sunrise. Descend to Pheriche.', image: 'annapurna.jpg' },
            { day: 'Day 11', title: 'Trek to Namche', desc: 'Long descent to Namche.', image: 'annapurna.jpg' },
            { day: 'Day 12', title: 'Trek to Lukla', desc: 'Trek back to Lukla.', image: 'annapurna.jpg' },
            { day: 'Day 13', title: 'Fly to Kathmandu', desc: 'Morning flight to Kathmandu.', image: 'pokhara.jpg' },
            { day: 'Day 14', title: 'Free Day Kathmandu', desc: 'Free day in Kathmandu.', image: 'ghandruk.png' },
            { day: 'Day 15', title: 'Departure', desc: 'Transfer to airport. Tour ends.', image: 'ghandruk.png' }
        ],
        includes: ['Experienced trekking guide', 'All accommodation', 'All meals during trek', 'Sagarmatha National Park Permit', 'TIMS Card', 'Domestic flights Lukla-Kathmandu round trip', 'All transportation', 'Porter service']
    }
};

const defaultDestinations = [
    { id: 1, name: 'Chitwan', subtitle: 'Wildlife & Jungle Safari', image: 'chitwan.jpg' },
    { id: 2, name: 'Pokhara', subtitle: 'Lakes & Mountain Views', image: 'pokhara-lake.jpg' },
    { id: 3, name: 'Ghandruk', subtitle: 'Gurung Village Trek', image: 'ghandruk-village.png' },
    { id: 4, name: 'Annapurna Base Camp', subtitle: 'Base Camp Trek', image: 'abc-trek.jpg' },
    { id: 5, name: 'Muktinath', subtitle: 'Sacred Pilgrimage', image: 'muktinath-temple.png' },
    { id: 6, name: 'Upper Mustang', subtitle: 'Forbidden Kingdom', image: 'upper-mustang.png' }
];

const defaultSettings = {
    heroTitle: 'Adventure Awaits in Nepal',
    heroSub: 'Your trusted partner for treks, tours & wildlife adventures',
    phone: '+977-9851134076',
    email: 'adventurehunttreks@gmail.com',
    address: 'Suryabinayak, Bhaktapur, Nepal',
    stat1: '20+', stat2: '10,000+', stat3: '4.9/5', stat4: '100%',
    statLabel1: 'Trek Routes', statLabel2: 'Happy Travelers', statLabel3: 'Customer Rating', statLabel4: 'Safety Record',
    aboutTitle: 'About Adventure Hunt Treks',
    aboutDesc: 'Adventure Hunt Treks Pvt. Ltd. is a government-registered trekking and tour operator based in Suryabinayak, Bhaktapur, Nepal.'
};

// ===== AUDIENCE MAP =====
const packageAudience = {
    // Nepali only (domestic tours from website itinerary folder)
    'chitwan-wildlife': 'nepali',
    'chitwan-adventure': 'nepali',
    'chitwan-lumbini': 'nepali',
    'janakpur-chitwan': 'nepali',
    'lumbini-chitwan': 'nepali',
    'pokhara-ghandruk': 'nepali',
    'sikles': 'nepali',
    'chitlang': 'nepali',
    'suping-chitlang': 'nepali',
    'kathmandu-heritage': 'nepali',
    'annapurna': 'nepali',
    'poonhill': 'nepali',
    'poonhill-ghandruk': 'nepali',
    'dhampus': 'nepali',
    'australian-camp': 'nepali',
    'ghandruk': 'nepali',
    'manang': 'nepali',
    'manang-extended': 'nepali',
    'muktinath': 'nepali',
    'muktinath-extended': 'nepali',
    'pathibhara': 'nepali',
    'rara-lake': 'nepali',
    'mustang': 'nepali',
    'mustang-extended': 'nepali',
    // Foreigner only (trekking packages from foreigners folder)
    'annapurna-circuit-23d': 'foreigner',
    'langtang-valley-10d': 'foreigner',
    'langtang-tamang-heritage-9d': 'foreigner',
    'langtang-circuit-20d': 'foreigner',
    'langtang-gosaikunda-10d': 'foreigner',
    'helambu-10d': 'foreigner',
    'manaslu-circuit-18d': 'foreigner',
    'manaslu-tsum-valley-20d': 'foreigner',
    'mardi-himal': 'foreigner',
    'nar-phu-valley-16d': 'foreigner',
    'tsum-valley': 'foreigner',
    'everest-base-camp': 'foreigner'
};

// ===== STATE =====
let userOrigin = null;
let currentFilter = 'all';
let adminBookingFilter = 'all';
let itineraryDayCount = 0;
let tourData = {};

// ===== IMAGE UPLOAD HELPER =====
function handleImageUpload(input, previewId) {
    const file = input.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Please select an image file.'); input.value = ''; return; }
    if (file.size > 2 * 1024 * 1024) { alert('Image must be under 2MB.'); input.value = ''; return; }
    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        document.getElementById(previewId).src = dataUrl;
        document.getElementById(previewId).style.display = 'block';
        const urlInput = input.closest('.form-group').querySelector('.image-url-input');
        if (urlInput) urlInput.value = dataUrl;
    };
    reader.readAsDataURL(file);
}

function createImageUploadHTML(inputId, previewId, currentValue, label) {
    return `
        <div class="image-upload-group">
            <label>${label}</label>
            <div class="image-upload-row">
                <div class="image-upload-box">
                    <input type="file" id="${inputId}" accept="image/*" onchange="handleImageUpload(this, '${previewId}')">
                    <label for="${inputId}" class="upload-label"><i class="fas fa-cloud-upload-alt"></i> Choose Image</label>
                    <img id="${previewId}" src="${currentValue || ''}" alt="Preview" class="image-preview" ${currentValue ? '' : 'style="display:none;"'}>
                </div>
                <div class="image-url-field">
                    <span class="url-or">or paste URL:</span>
                    <input type="text" class="image-url-input" placeholder="e.g. chitwan.jpg" value="${currentValue || ''}">
                </div>
            </div>
        </div>`;
}

// ===== DATA CACHE (in-memory, avoids repeated JSON.parse on large base64 strings) =====
let _cache = { packages: null, destinations: null, bookings: null, settings: null };
let _adminCache = { packages: null, destinations: null };
let _saveTimers = {};

function _debouncedSave(key, data, delay) {
    if (_saveTimers[key]) clearTimeout(_saveTimers[key]);
    _saveTimers[key] = setTimeout(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, delay || 300);
}

// ===== PUBLIC SITE DATA (always returns fresh defaults, never modified by admin) =====
function getPackages() {
    if (_cache.packages) return _cache.packages;
    const stored = localStorage.getItem('aht_packages');
    _cache.packages = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultPackages));
    if (!stored) localStorage.setItem('aht_packages', JSON.stringify(_cache.packages));
    return _cache.packages;
}

function savePackages(pkgs) { _cache.packages = pkgs; _debouncedSave('aht_packages', pkgs, 200); }

function getDestinations() {
    if (_cache.destinations) return _cache.destinations;
    const stored = localStorage.getItem('aht_destinations');
    _cache.destinations = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultDestinations));
    if (!stored) localStorage.setItem('aht_destinations', JSON.stringify(_cache.destinations));
    return _cache.destinations;
}

function saveDestinations(dests) { _cache.destinations = dests; _debouncedSave('aht_destinations', dests, 200); }

function getSettings() {
    if (_cache.settings) return _cache.settings;
    const stored = localStorage.getItem('aht_settings');
    _cache.settings = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultSettings));
    if (!stored) localStorage.setItem('aht_settings', JSON.stringify(_cache.settings));
    return _cache.settings;
}

function saveSettingsData(s) { _cache.settings = s; _debouncedSave('aht_settings', s, 200); }

function getBookings() {
    if (_cache.bookings) return _cache.bookings;
    const stored = localStorage.getItem('aht_bookings');
    _cache.bookings = stored ? JSON.parse(stored) : [];
    return _cache.bookings;
}

function saveBookings(b) { _cache.bookings = b; _debouncedSave('aht_bookings', b, 200); }

// ===== ADMIN DATA (separate storage, never touches public site data) =====
function getAdminPackages() {
    if (_adminCache.packages) return _adminCache.packages;
    const stored = localStorage.getItem('aht_admin_packages');
    _adminCache.packages = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultPackages));
    return _adminCache.packages;
}

function saveAdminPackages(pkgs) { _adminCache.packages = pkgs; _debouncedSave('aht_admin_packages', pkgs, 200); }

function getAdminDestinations() {
    if (_adminCache.destinations) return _adminCache.destinations;
    const stored = localStorage.getItem('aht_admin_destinations');
    _adminCache.destinations = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultDestinations));
    return _adminCache.destinations;
}

function saveAdminDestinations(dests) { _adminCache.destinations = dests; _debouncedSave('aht_admin_destinations', dests, 200); }

// ===== INITIALIZATION =====
const DATA_VERSION = '5.0';
document.addEventListener('DOMContentLoaded', function() {
    // Clear cache if version changed
    const savedVersion = localStorage.getItem('aht_version');
    if (savedVersion !== DATA_VERSION) {
        localStorage.removeItem('aht_packages');
        localStorage.removeItem('aht_destinations');
        localStorage.removeItem('aht_settings');
        localStorage.removeItem('aht_admin_packages');
        localStorage.removeItem('aht_admin_destinations');
        localStorage.setItem('aht_version', DATA_VERSION);
    }

    // Init tourData from storage
    const pkgs = getPackages();
    Object.keys(pkgs).forEach(k => { tourData[k] = pkgs[k]; });

    const savedOrigin = sessionStorage.getItem('userOrigin');
    if (savedOrigin) { userOrigin = savedOrigin; hideModal(); }
    else { showModal(); }

    applySettings();
    renderDynamicPackages();
    renderDynamicDestinations();
    updatePriceDisplay();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() { filterPackages(this.dataset.filter); });
    });

    // Hidden admin panel access - click copyright 5 times
    let copyrightClicks = 0;
    let copyrightTimer = null;
    const copyrightEl = document.getElementById('footerCopyright');
    if (copyrightEl) {
        copyrightEl.addEventListener('click', function() {
            copyrightClicks++;
            if (copyrightTimer) clearTimeout(copyrightTimer);
            copyrightTimer = setTimeout(function() { copyrightClicks = 0; }, 2000);
            if (copyrightClicks >= 5) {
                copyrightClicks = 0;
                if (copyrightTimer) clearTimeout(copyrightTimer);
                showAdminLogin();
            }
        });
    }
});

// ===== RENDER DYNAMIC CONTENT =====
function renderDynamicPackages() {
    const pkgs = getPackages();
    const grid = document.getElementById('packages-grid');
    const contactSelect = document.getElementById('package');

    let options = '<option value="">Select a package</option>';
    const frag = document.createDocumentFragment();

    Object.entries(pkgs).forEach(([id, pkg]) => {
        const audience = packageAudience[id] || 'both';
        if (userOrigin === 'nepal' && audience === 'foreigner') return;
        if (userOrigin === 'foreign' && audience === 'nepali') return;

        const div = document.createElement('div');
        div.className = 'package-card';
        div.dataset.category = pkg.category;
        div.dataset.id = id;
        div.innerHTML = `
            <div class="package-image" style="background: url('${pkg.image}') center/cover;">
                <div class="package-overlay"></div>
                <div class="package-badge">${pkg.badge}</div>
                <button class="itinerary-btn" onclick="openItinerary('${id}')">
                    <i class="fas fa-map"></i> View Itinerary
                </button>
            </div>
            <div class="package-content">
                <h3>${pkg.name}</h3>
                <div class="package-details">
                    <span><i class="fas fa-clock"></i> ${pkg.duration}</span>
                    <span><i class="fas fa-users"></i> 2+ People</span>
                </div>
                <ul class="package-features">
                    ${(pkg.highlights || []).slice(0, 4).map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <div class="package-price">
                    <span class="price npr-price">NPR ${pkg.priceNPR}</span>
                    <span class="price usd-price" style="display:none;">$${pkg.priceUSD}</span>
                    <span class="per-person">per person</span>
                </div>
                <button class="btn btn-primary btn-block book-btn" onclick="showBookingModal('${id}')">Book Now</button>
            </div>`;
        frag.appendChild(div);
        options += `<option value="${id}">${pkg.name}</option>`;
    });

    grid.innerHTML = '';
    grid.appendChild(frag);
    contactSelect.innerHTML = options;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() { filterPackages(this.dataset.filter); });
    });

    updatePriceDisplay();
    if (currentFilter !== 'all') filterPackages(currentFilter);
}

function renderDynamicDestinations() {
    const dests = getDestinations();
    const grid = document.querySelector('.destinations-grid');
    let html = '';
    dests.forEach(d => {
        html += `
        <div class="destination-card" style="background: url('${d.image}') center/cover;" data-id="${d.id}">
            <div class="dest-overlay"></div>
            <div class="dest-content">
                <h3>${d.name}</h3>
                <p>${d.subtitle}</p>
            </div>
        </div>`;
    });
    grid.innerHTML = html;
}

function applySettings() {
    const s = getSettings();
    const heroH1 = document.querySelector('.hero-content h1');
    const heroP = document.querySelector('.hero-content p');
    if (heroH1) heroH1.textContent = s.heroTitle;
    if (heroP) heroP.textContent = s.heroSub;

    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length >= 4) {
        statItems[0].querySelector('h3').textContent = s.stat1;
        statItems[0].querySelector('p').textContent = s.statLabel1;
        statItems[1].querySelector('h3').textContent = s.stat2;
        statItems[1].querySelector('p').textContent = s.statLabel2;
        statItems[2].querySelector('h3').textContent = s.stat3;
        statItems[2].querySelector('p').textContent = s.statLabel3;
        statItems[3].querySelector('h3').textContent = s.stat4;
        statItems[3].querySelector('p').textContent = s.statLabel4;
    }

    const aboutH2 = document.querySelector('.about-text h2');
    const aboutP = document.querySelector('.about-text > p');
    if (aboutH2) aboutH2.textContent = s.aboutTitle;
    if (aboutP) aboutP.textContent = s.aboutDesc;

    // Update contact info in about card
    const contactItems = document.querySelectorAll('.about-contact-card .contact-info-item p');
    if (contactItems.length >= 3) {
        contactItems[0].textContent = s.address;
        contactItems[1].textContent = s.phone;
        contactItems[2].textContent = s.email;
    }
}

// ===== MODAL FUNCTIONS =====
function showModal() { document.getElementById('originModal').style.display = 'flex'; document.body.style.overflow = 'hidden'; }
function hideModal() { document.getElementById('originModal').style.display = 'none'; document.body.style.overflow = 'auto'; }

function selectOrigin(origin, el) {
    userOrigin = origin;
    sessionStorage.setItem('userOrigin', origin);
    document.querySelectorAll('.origin-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    setTimeout(() => {
        hideModal();
        renderDynamicPackages();
        updatePriceDisplay();
        filterPackages('all');
    }, 300);
}

function skipSelection() {
    userOrigin = 'all';
    sessionStorage.setItem('userOrigin', 'all');
    hideModal();
    renderDynamicPackages();
    updatePriceDisplay();
    filterPackages('all');
}

function switchOrigin() {
    userOrigin = null;
    sessionStorage.removeItem('userOrigin');
    showModal();
}

// ===== PRICE DISPLAY =====
function updatePriceDisplay() {
    const isUSD = userOrigin === 'foreign';
    document.querySelectorAll('.npr-price').forEach(el => el.style.display = isUSD ? 'none' : 'inline');
    document.querySelectorAll('.usd-price').forEach(el => el.style.display = isUSD ? 'inline' : 'none');
    const toggle = document.getElementById('priceToggle');
    if (toggle) toggle.checked = isUSD;
    const switchLink = document.getElementById('switchOriginLink');
    if (switchLink) {
        if (userOrigin === 'nepal') {
            switchLink.textContent = 'Switch to Foreigner';
        } else if (userOrigin === 'foreign') {
            switchLink.textContent = 'Switch to Nepali';
        } else {
            switchLink.textContent = '';
        }
    }
}

// ===== FILTER PACKAGES =====
function filterPackages(type) {
    currentFilter = type;
    const cards = document.querySelectorAll('#packages-grid .package-card');
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => { btn.classList.remove('active'); if (btn.dataset.filter === type) btn.classList.add('active'); });
    cards.forEach(card => {
        if (type === 'all' || card.dataset.category === type) { card.classList.remove('hidden'); card.style.animation = 'fadeIn 0.5s ease'; }
        else { card.classList.add('hidden'); }
    });
}

// ===== ITINERARY MODAL =====
function openItinerary(tourId) {
    const pkgs = getPackages();
    const tour = pkgs[tourId];
    if (!tour) return;
    const content = document.getElementById('itineraryContent');
    const isUSD = userOrigin === 'foreign';

    let itineraryHTML = (tour.itinerary || []).map(day => `
        <div class="itinerary-day">
            <div class="day-image"><img src="${day.image}" alt="${day.title}"></div>
            <div class="day-info">
                <span class="day-badge">${day.day}</span>
                <h4>${day.title}</h4>
                <p>${day.desc}</p>
            </div>
        </div>`).join('');

    let includesHTML = (tour.includes || []).map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('');
    let highlightsHTML = (tour.highlights || []).map(item => `<span class="highlight-tag">${item}</span>`).join('');

    content.innerHTML = `
        <div class="itinerary-hero">
            <img src="${tour.image}" alt="${tour.name}">
            <div class="itinerary-hero-overlay">
                <div class="itinerary-hero-content">
                    <span class="itinerary-badge">${tour.badge}</span>
                    <h2>${tour.name}</h2>
                    <div class="itinerary-meta">
                        <span><i class="fas fa-clock"></i> ${tour.duration}</span>
                        <span><i class="fas fa-tag"></i> ${isUSD ? '$' + tour.priceUSD : 'NPR ' + tour.priceNPR}</span>
                        <span><i class="fas fa-user"></i> per person</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="itinerary-body">
            <p class="itinerary-desc">${tour.shortDesc || ''}</p>
            <div class="itinerary-highlights">${highlightsHTML}</div>
            <div class="itinerary-price-bar">
                <div class="price-info">
                    <span class="price-label">Package Price</span>
                    <span class="price-value">${isUSD ? '$' + tour.priceUSD : 'NPR ' + tour.priceNPR}</span>
                    <span class="price-per">per person</span>
                </div>
                <button class="btn btn-primary book-itinerary-btn" onclick="closeItineraryModal(); showBookingModal('${tourId}');">
                    <i class="fas fa-paper-plane"></i> Book This Tour
                </button>
            </div>
            <h3><i class="fas fa-route"></i> Day-by-Day Itinerary</h3>
            <div class="itinerary-days">${itineraryHTML}</div>
            <h3><i class="fas fa-box-open"></i> What's Included</h3>
            <ul class="itinerary-includes">${includesHTML}</ul>
        </div>`;
    document.getElementById('itineraryModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeItineraryModal() { document.getElementById('itineraryModal').style.display = 'none'; document.body.style.overflow = 'auto'; }

// ===== BOOKING SYSTEM =====
let selectedBookingPackage = '';

function showBookingModal(packageId) {
    selectedBookingPackage = packageId || '';
    const formView = document.getElementById('bookingFormView');
    const successView = document.getElementById('bookingSuccessView');
    formView.style.display = 'block';
    successView.style.display = 'none';

    const tourNameEl = document.getElementById('bookingTourName');
    if (packageId) {
        const pkgs = getPackages();
        const pkg = pkgs[packageId];
        if (pkg) tourNameEl.textContent = pkg.name + ' — ' + pkg.duration;
        const pkgSelect = document.getElementById('bookPackageSelect');
    } else {
        tourNameEl.textContent = 'Fill in your details to inquire';
    }

    document.getElementById('bookingModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('bookingForm').reset();
}

function submitBooking(e) {
    e.preventDefault();
    const booking = {
        id: Date.now(),
        name: document.getElementById('bookName').value.trim(),
        email: document.getElementById('bookEmail').value.trim(),
        phone: document.getElementById('bookPhone').value.trim(),
        package: selectedBookingPackage,
        packageName: selectedBookingPackage ? (getPackages()[selectedBookingPackage]?.name || selectedBookingPackage) : 'General Inquiry',
        date: document.getElementById('bookDate').value,
        people: document.getElementById('bookPeople').value,
        message: document.getElementById('bookMessage').value.trim(),
        timestamp: new Date().toISOString(),
        status: 'new'
    };
    let bookings = getBookings();
    bookings.push(booking);
    saveBookings(bookings);

    // Send email notification to admin
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            to: 'adventurehunttreks@gmail.com',
            subject: 'New Booking: ' + booking.packageName,
            message: 'Name: ' + booking.name + '\nEmail: ' + booking.email + '\nPhone: ' + booking.phone + '\nPackage: ' + booking.packageName + '\nDate: ' + (booking.date || 'Flexible') + '\nPeople: ' + (booking.people || 'N/A') + '\nMessage: ' + (booking.message || 'None')
        })
    });

    document.getElementById('bookingFormView').style.display = 'none';
    document.getElementById('bookingSuccessView').style.display = 'block';
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const pkgSelect = document.getElementById('package');
    const booking = {
        id: Date.now(),
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        visitorType: document.getElementById('visitor-type').value,
        package: pkgSelect.value,
        packageName: pkgSelect.options[pkgSelect.selectedIndex].text,
        date: document.getElementById('date').value,
        people: document.getElementById('people').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString(),
        status: 'new'
    };
    let bookings = getBookings();
    bookings.push(booking);
    saveBookings(bookings);
    selectedBookingPackage = pkgSelect.value;

    // Send email notification to admin
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            to: 'adventurehunttreks@gmail.com',
            subject: 'New Inquiry: ' + booking.packageName,
            message: 'Name: ' + booking.name + '\nEmail: ' + booking.email + '\nPhone: ' + booking.phone + '\nType: ' + (booking.visitorType || 'N/A') + '\nPackage: ' + booking.packageName + '\nDate: ' + (booking.date || 'Flexible') + '\nPeople: ' + (booking.people || 'N/A') + '\nMessage: ' + (booking.message || 'None')
        })
    });

    document.getElementById('bookingFormView').style.display = 'none';
    document.getElementById('bookingSuccessView').style.display = 'block';
    document.getElementById('bookingModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    this.reset();
});

// ===== CLOSE MODALS ON OUTSIDE CLICK =====
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) { if (e.target === this) { this.style.display = 'none'; document.body.style.overflow = 'auto'; } });
});

// ===== MOBILE HAMBURGER =====
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.addEventListener('click', function(e) {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.getElementById('hamburger');
    if (navLinks && navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,0.15)' : '0 4px 6px -1px rgba(0,0,0,0.1)';
});

// ==========================================
// ===== ADMIN PANEL =====
// ==========================================

function showAdminLogin() { document.getElementById('adminLoginModal').style.display = 'flex'; document.body.style.overflow = 'hidden'; }
function closeAdminLogin() { document.getElementById('adminLoginModal').style.display = 'none'; document.body.style.overflow = 'auto'; }

function adminLogin() {
    const u = document.getElementById('adminUsername').value;
    const p = document.getElementById('adminPassword').value;
    if (u === ADMIN_CREDENTIALS.username && p === ADMIN_CREDENTIALS.password) {
        closeAdminLogin();
        openAdminDashboard();
    } else {
        document.getElementById('adminError').style.display = 'block';
    }
}

function openAdminDashboard() {
    document.getElementById('adminDashboard').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    switchAdminSection('dashboard');
}

function closeAdminDashboard() {
    document.getElementById('adminDashboard').style.display = 'none';
    document.body.style.overflow = 'auto';
    closeAdminSidebar();
}

function toggleAdminSidebar() {
    const sidebar = document.querySelector('.admin-sidebar');
    const overlay = document.getElementById('adminOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function closeAdminSidebar() {
    const sidebar = document.querySelector('.admin-sidebar');
    const overlay = document.getElementById('adminOverlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
}

function switchAdminSection(section) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.admin-nav-btn[data-section="${section}"]`).classList.add('active');
    document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`section-${section}`).classList.add('active');

    const titles = { dashboard: 'Dashboard', packages: 'Manage Packages', bookings: 'Manage Bookings', destinations: 'Manage Destinations', settings: 'Site Settings', chatlogs: 'Chat Logs' };
    document.getElementById('adminSectionTitle').textContent = titles[section];
    closeAdminSidebar();

    if (section === 'dashboard') loadDashboard();
    if (section === 'packages') loadAdminPackages();
    if (section === 'bookings') loadAdminBookings();
    if (section === 'destinations') loadAdminDestinations();
    if (section === 'settings') loadSettingsForm();
    if (section === 'chatlogs') loadChatLogs();
}

// ===== DASHBOARD =====
function loadDashboard() {
    const bookings = getBookings();
    const pkgs = getAdminPackages();
    const dests = getAdminDestinations();

    document.getElementById('dashBookingCount').textContent = bookings.length;
    document.getElementById('dashPackageCount').textContent = Object.keys(pkgs).length;
    document.getElementById('dashDestCount').textContent = dests.length;
    document.getElementById('dashNewCount').textContent = bookings.filter(b => b.status === 'new').length;

    const recent = [...bookings].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 5);
    const container = document.getElementById('dashRecentBookings');
    if (recent.length === 0) {
        container.innerHTML = '<div class="no-bookings"><i class="fas fa-inbox"></i><h3>No bookings yet</h3></div>';
        return;
    }
    container.innerHTML = recent.map(b => {
        const date = new Date(b.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        return `<div class="recent-booking-item">
            <div class="recent-info"><strong>${b.name}</strong><span>${b.packageName}</span></div>
            <div class="recent-meta"><span class="booking-status status-${b.status}">${b.status}</span><span class="recent-date">${date}</span></div>
        </div>`;
    }).join('');
}

// ===== PACKAGES CRUD =====
function loadAdminPackages() {
    const pkgs = getAdminPackages();
    const list = document.getElementById('packagesList');
    document.getElementById('pkgCount').textContent = Object.keys(pkgs).length;

    let html = '';
    Object.entries(pkgs).forEach(([id, pkg]) => {
        html += `
        <div class="admin-list-item">
            <div class="admin-item-thumb admin-thumb-placeholder"><i class="fas fa-image"></i></div>
            <div class="admin-item-info">
                <h4>${pkg.name}</h4>
                <span class="admin-item-meta">${pkg.duration} | NPR ${pkg.priceNPR} | ${pkg.category}</span>
            </div>
            <div class="admin-item-actions">
                <button class="action-btn btn-edit" onclick="editPackage('${id}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="action-btn btn-delete" onclick="deletePackage('${id}')"><i class="fas fa-trash"></i> Delete</button>
            </div>
        </div>`;
    });
    list.innerHTML = html || '<div class="no-bookings"><h3>No packages</h3></div>';
}

function openPackageForm(id) {
    document.getElementById('pkgFormTitle').textContent = id ? 'Edit Package' : 'Add New Package';
    document.getElementById('pkgEditId').value = id || '';
    itineraryDayCount = 0;

    if (id) {
        const pkgs = getAdminPackages();
        const p = pkgs[id];
        document.getElementById('pkgName').value = p.name;
        document.getElementById('pkgCategory').value = p.category;
        document.getElementById('pkgDuration').value = p.duration;
        document.getElementById('pkgBadge').value = p.badge || '';
        document.getElementById('pkgPriceNPR').value = p.priceNPR;
        document.getElementById('pkgPriceUSD').value = p.priceUSD;
        document.getElementById('pkgImage').value = p.image;
        document.getElementById('pkgDesc').value = p.shortDesc || '';
        document.getElementById('pkgHighlights').value = (p.highlights || []).join(', ');
        document.getElementById('pkgFeatures').value = (p.features || []).join(', ');
        document.getElementById('pkgIncludes').value = (p.includes || []).join(', ');
        const preview = document.getElementById('pkgImagePreview');
        if (p.image) { preview.src = p.image; preview.style.display = 'block'; }

        const editor = document.getElementById('itineraryEditor');
        const frag = document.createDocumentFragment();
        (p.itinerary || []).forEach(day => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = _buildDayEditorHTML(day, editor.children.length + 1);
            frag.appendChild(tempDiv.firstElementChild);
        });
        editor.appendChild(frag);
    } else {
        document.getElementById('pkgName').value = '';
        document.getElementById('pkgCategory').value = 'chitwan';
        document.getElementById('pkgDuration').value = '';
        document.getElementById('pkgBadge').value = '';
        document.getElementById('pkgPriceNPR').value = '';
        document.getElementById('pkgPriceUSD').value = '';
        document.getElementById('pkgImage').value = 'chitwan.jpg';
        document.getElementById('pkgDesc').value = '';
        document.getElementById('pkgHighlights').value = '';
        document.getElementById('pkgFeatures').value = '';
        document.getElementById('pkgIncludes').value = '';
        document.getElementById('pkgImagePreview').style.display = 'none';
        document.getElementById('pkgImageFile').value = '';
        addItineraryDay();
    }
    document.getElementById('packageFormModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePackageForm() { document.getElementById('packageFormModal').style.display = 'none'; document.body.style.overflow = 'auto'; }

function addItineraryDay(data) {
    itineraryDayCount++;
    const editor = document.getElementById('itineraryEditor');
    const dayNum = editor.children.length + 1;
    const div = document.createElement('div');
    div.innerHTML = _buildDayEditorHTML(data, dayNum);
    editor.appendChild(div.firstElementChild);
}

function _buildDayEditorHTML(data, dayNum) {
    const dayId = 'it-day-img-' + dayNum;
    const previewId = 'it-day-preview-' + dayNum;
    const currentValue = data ? data.image : 'chitwan.jpg';
    return `
        <div class="itinerary-day-editor">
            <div class="day-editor-header">
                <span>Day ${dayNum}</span>
                <button type="button" class="btn-remove-day" onclick="this.closest('.itinerary-day-editor').remove(); renumberDays();"><i class="fas fa-times"></i></button>
            </div>
            <div class="form-row">
                <div class="form-group"><label>Day Label</label><input type="text" class="it-day" value="${data ? data.day : 'Day ' + dayNum}"></div>
                <div class="form-group"><label>Title</label><input type="text" class="it-title" value="${data ? data.title : ''}"></div>
            </div>
            <div class="form-group"><label>Description</label><textarea class="it-desc" rows="2">${data ? data.desc : ''}</textarea></div>
            <div class="form-group">
                <label>Day Image</label>
                <div class="image-upload-row">
                    <div class="image-upload-box small">
                        <input type="file" id="${dayId}" accept="image/*" onchange="handleImageUpload(this, '${previewId}')">
                        <label for="${dayId}" class="upload-label"><i class="fas fa-cloud-upload-alt"></i> Image</label>
                        <img id="${previewId}" src="${currentValue}" alt="Preview" class="image-preview small" ${currentValue ? '' : 'style="display:none;"'}>
                    </div>
                    <div class="image-url-field">
                        <span class="url-or">or URL:</span>
                        <input type="text" class="it-image image-url-input" value="${currentValue}">
                    </div>
                </div>
            </div>
        </div>`;
}

function renumberDays() {
    const editor = document.getElementById('itineraryEditor');
    Array.from(editor.children).forEach((div, i) => {
        div.querySelector('.day-editor-header span').textContent = `Day ${i + 1}`;
    });
}

function savePackage() {
    const name = document.getElementById('pkgName').value.trim();
    const category = document.getElementById('pkgCategory').value;
    const duration = document.getElementById('pkgDuration').value.trim();
    const priceNPR = document.getElementById('pkgPriceNPR').value.trim();
    const priceUSD = document.getElementById('pkgPriceUSD').value.trim();
    if (!name || !duration || !priceNPR || !priceUSD) { alert('Please fill in all required fields.'); return; }

    const editId = document.getElementById('pkgEditId').value;
    const id = editId || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const itinerary = [];
    document.querySelectorAll('.itinerary-day-editor').forEach(div => {
        itinerary.push({
            day: div.querySelector('.it-day').value,
            title: div.querySelector('.it-title').value,
            desc: div.querySelector('.it-desc').value,
            image: div.querySelector('.it-image').value
        });
    });

    const pkg = {
        name, category, duration, priceNPR, priceUSD,
        badge: document.getElementById('pkgBadge').value.trim() || 'New',
        image: document.getElementById('pkgImage').value.trim() || 'chitwan.jpg',
        shortDesc: document.getElementById('pkgDesc').value.trim(),
        highlights: document.getElementById('pkgHighlights').value.split(',').map(s => s.trim()).filter(Boolean),
        features: document.getElementById('pkgFeatures').value.split(',').map(s => s.trim()).filter(Boolean),
        includes: document.getElementById('pkgIncludes').value.split(',').map(s => s.trim()).filter(Boolean),
        itinerary
    };

    const pkgs = getAdminPackages();
    pkgs[id] = pkg;
    saveAdminPackages(pkgs);
    closePackageForm();
    loadAdminPackages();
}

function editPackage(id) { openPackageForm(id); }

function deletePackage(id) {
    if (!confirm('Delete this package? This cannot be undone.')) return;
    const pkgs = getAdminPackages();
    delete pkgs[id];
    saveAdminPackages(pkgs);
    loadAdminPackages();
}

// ===== BOOKINGS MANAGEMENT =====
function loadAdminBookings() {
    const bookings = getBookings();
    const filtered = adminBookingFilter === 'all' ? bookings : bookings.filter(b => b.status === adminBookingFilter);
    document.getElementById('bkgCount').textContent = filtered.length;

    const list = document.getElementById('adminBookingsList');
    if (filtered.length === 0) {
        list.innerHTML = '<div class="no-bookings"><i class="fas fa-inbox"></i><h3>No bookings found</h3></div>';
        return;
    }

    const sorted = [...filtered].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    list.innerHTML = sorted.map(b => {
        const date = new Date(b.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        return `
        <div class="booking-card status-${b.status}">
            <div class="booking-header">
                <div class="booking-info"><h4>${b.name}</h4><span class="booking-date">${date}</span></div>
                <span class="booking-status status-${b.status}">${b.status}</span>
            </div>
            <div class="booking-details">
                <div class="detail-row"><i class="fas fa-envelope"></i><span>${b.email || 'N/A'}</span></div>
                <div class="detail-row"><i class="fas fa-phone"></i><span>${b.phone || 'N/A'}</span></div>
                <div class="detail-row"><i class="fas fa-user"></i><span>${b.visitorType === 'nepal' ? 'Nepali' : b.visitorType === 'foreign' ? 'Foreign' : 'N/A'}</span></div>
                <div class="detail-row"><i class="fas fa-map"></i><span class="package-name">${b.packageName}</span></div>
                <div class="detail-row"><i class="fas fa-calendar"></i><span>${b.date || 'Flexible'}</span></div>
                <div class="detail-row"><i class="fas fa-users"></i><span>${b.people || 'N/A'} people</span></div>
                ${b.message ? `<div class="detail-row message-row"><i class="fas fa-comment"></i><span>"${b.message}"</span></div>` : ''}
            </div>
            <div class="booking-actions">
                <button class="action-btn btn-email" onclick="openAdminEmail('${b.email}', '${b.name}', '${b.packageName}')"><i class="fas fa-envelope"></i> Reply</button>
                <button class="action-btn btn-contacted" onclick="updateBookingStatus(${b.id}, 'contacted')"><i class="fas fa-phone"></i> Contacted</button>
                <button class="action-btn btn-confirmed" onclick="updateBookingStatus(${b.id}, 'confirmed')"><i class="fas fa-check"></i> Confirm</button>
                <button class="action-btn btn-delete" onclick="deleteBooking(${b.id})"><i class="fas fa-trash"></i> Delete</button>
            </div>
        </div>`;
    }).join('');
}

function filterAdminBookings(status) {
    adminBookingFilter = status;
    document.querySelectorAll('#section-bookings .admin-filter-btn').forEach(b => { b.classList.remove('active'); if (b.dataset.status === status) b.classList.add('active'); });
    loadAdminBookings();
}

function updateBookingStatus(id, status) {
    let bookings = getBookings();
    bookings = bookings.map(b => b.id === id ? { ...b, status } : b);
    saveBookings(bookings);
    loadAdminBookings();
}

function deleteBooking(id) {
    if (!confirm('Delete this booking?')) return;
    let bookings = getBookings();
    bookings = bookings.filter(b => b.id !== id);
    saveBookings(bookings);
    loadAdminBookings();
}

function clearAllBookings() {
    if (!confirm('Delete ALL bookings? This cannot be undone.')) return;
    localStorage.removeItem('aht_bookings');
    loadAdminBookings();
}

// ===== ADMIN EMAIL (Google Apps Script) =====
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwiir6wDxP1QnJHAA2pP9XwDpjTar49HUCuLQ8hheqLY6mACaX5l5kH023HPEWkuUoSZg/exec';

function sendEmailFromAdmin() {
    const to = document.getElementById('sendEmailTo').value.trim();
    const subject = document.getElementById('sendEmailSubject').value.trim();
    const message = document.getElementById('sendEmailMessage').value.trim();
    const statusEl = document.getElementById('emailStatus');

    if (!to || !subject || !message) {
        statusEl.innerHTML = '<span style="color:red;"><i class="fas fa-exclamation-circle"></i> Please fill in all fields.</span>';
        return;
    }

    statusEl.innerHTML = '<span style="color:#3b82f6;"><i class="fas fa-spinner fa-spin"></i> Sending...</span>';

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: to, subject: subject, message: message })
    })
    .then(function() {
        statusEl.innerHTML = '<span style="color:green;"><i class="fas fa-check-circle"></i> Email sent successfully to ' + to + '</span>';
        document.getElementById('sendEmailTo').value = '';
        document.getElementById('sendEmailSubject').value = '';
        document.getElementById('sendEmailMessage').value = '';
    })
    .catch(function(error) {
        statusEl.innerHTML = '<span style="color:red;"><i class="fas fa-times-circle"></i> Failed to send email.</span>';
        console.error('Email error:', error);
    });
}

function openAdminEmail(email, name, packageName) {
    switchAdminSection('sendemail');
    document.getElementById('sendEmailTo').value = email;
    document.getElementById('sendEmailSubject').value = 'Re: ' + packageName + ' - Adventure Hunt Treks';
    document.getElementById('sendEmailMessage').value = 'Dear ' + name + ',\n\nThank you for your interest in our ' + packageName + ' package.\n\n';
}

function closeAdminEmail() {
    switchAdminSection('bookings');
}

// ===== DESTINATIONS CRUD =====
function loadAdminDestinations() {
    const dests = getAdminDestinations();
    document.getElementById('destCount').textContent = dests.length;
    const list = document.getElementById('destinationsList');

    let html = '';
    dests.forEach(d => {
        html += `
        <div class="admin-list-item">
            <div class="admin-item-thumb admin-thumb-placeholder"><i class="fas fa-map-marker-alt"></i></div>
            <div class="admin-item-info">
                <h4>${d.name}</h4>
                <span class="admin-item-meta">${d.subtitle}</span>
            </div>
            <div class="admin-item-actions">
                <button class="action-btn btn-edit" onclick="editDestination(${d.id})"><i class="fas fa-edit"></i> Edit</button>
                <button class="action-btn btn-delete" onclick="deleteDestination(${d.id})"><i class="fas fa-trash"></i> Delete</button>
            </div>
        </div>`;
    });
    list.innerHTML = html || '<div class="no-bookings"><h3>No destinations</h3></div>';
}

function openDestForm(id) {
    document.getElementById('destFormTitle').textContent = id ? 'Edit Destination' : 'Add New Destination';
    document.getElementById('destEditId').value = id || '';

    if (id) {
        const dests = getAdminDestinations();
        const d = dests.find(x => x.id === id);
        document.getElementById('destName').value = d.name;
        document.getElementById('destSubtitle').value = d.subtitle;
        document.getElementById('destImage').value = d.image;
        const preview = document.getElementById('destImagePreview');
        if (d.image) { preview.src = d.image; preview.style.display = 'block'; }
    } else {
        document.getElementById('destName').value = '';
        document.getElementById('destSubtitle').value = '';
        document.getElementById('destImage').value = 'chitwan.jpg';
        document.getElementById('destImagePreview').style.display = 'none';
        document.getElementById('destImageFile').value = '';
    }
    document.getElementById('destFormModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeDestForm() { document.getElementById('destFormModal').style.display = 'none'; document.body.style.overflow = 'auto'; }

function saveDestination() {
    const name = document.getElementById('destName').value.trim();
    const subtitle = document.getElementById('destSubtitle').value.trim();
    const image = document.getElementById('destImage').value.trim();
    if (!name || !subtitle || !image) { alert('Please fill in all fields.'); return; }

    const editId = document.getElementById('destEditId').value;
    let dests = getAdminDestinations();

    if (editId) {
        dests = dests.map(d => d.id === parseInt(editId) ? { ...d, name, subtitle, image } : d);
    } else {
        const newId = dests.length > 0 ? Math.max(...dests.map(d => d.id)) + 1 : 1;
        dests.push({ id: newId, name, subtitle, image });
    }
    saveAdminDestinations(dests);
    closeDestForm();
    loadAdminDestinations();
}

function editDestination(id) { openDestForm(id); }

function deleteDestination(id) {
    if (!confirm('Delete this destination?')) return;
    let dests = getAdminDestinations();
    dests = dests.filter(d => d.id !== id);
    saveAdminDestinations(dests);
    loadAdminDestinations();
}

// ===== SETTINGS =====
function loadSettingsForm() {
    const s = getSettings();
    document.getElementById('settingHeroTitle').value = s.heroTitle;
    document.getElementById('settingHeroSub').value = s.heroSub;
    document.getElementById('settingPhone').value = s.phone;
    document.getElementById('settingEmail').value = s.email;
    document.getElementById('settingAddress').value = s.address;
    document.getElementById('settingStat1').value = s.stat1;
    document.getElementById('settingStat2').value = s.stat2;
    document.getElementById('settingStat3').value = s.stat3;
    document.getElementById('settingStat4').value = s.stat4;
    document.getElementById('settingAboutTitle').value = s.aboutTitle;
    document.getElementById('settingAboutDesc').value = s.aboutDesc;
}

function saveSettings() {
    const s = {
        heroTitle: document.getElementById('settingHeroTitle').value,
        heroSub: document.getElementById('settingHeroSub').value,
        phone: document.getElementById('settingPhone').value,
        email: document.getElementById('settingEmail').value,
        address: document.getElementById('settingAddress').value,
        stat1: document.getElementById('settingStat1').value,
        stat2: document.getElementById('settingStat2').value,
        stat3: document.getElementById('settingStat3').value,
        stat4: document.getElementById('settingStat4').value,
        statLabel1: 'Trek Routes', statLabel2: 'Happy Travelers', statLabel3: 'Customer Rating', statLabel4: 'Safety Record',
        aboutTitle: document.getElementById('settingAboutTitle').value,
        aboutDesc: document.getElementById('settingAboutDesc').value
    };
    saveSettingsData(s);
    alert('Settings saved successfully!');
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            if (overlay.style.display === 'flex') { overlay.style.display = 'none'; document.body.style.overflow = 'auto'; }
        });
        const cw = document.getElementById('chatbotWindow');
        if (cw && cw.classList.contains('open')) toggleChatbot();
    }
});

// ==========================================
// ===== CHATBOT =====
// ==========================================
let chatConversations = JSON.parse(localStorage.getItem('aht_chats') || '[]');
let currentChat = [];
let chatUser = 'visitor_' + Date.now();

function saveChats() { localStorage.setItem('aht_chats', JSON.stringify(chatConversations)); }

function toggleChatbot() {
    const win = document.getElementById('chatbotWindow');
    const badge = document.getElementById('chatbotBadge');
    win.classList.toggle('open');
    badge.style.display = 'none';
    if (win.classList.contains('open')) {
        document.getElementById('chatbotInput').focus();
    }
}

function addChatMsg(role, text) {
    const container = document.getElementById('chatbotMessages');
    const isBot = role === 'bot';
    const icon = isBot ? 'fas fa-robot' : 'fas fa-user';
    const div = document.createElement('div');
    div.className = `chat-msg ${role}`;
    div.innerHTML = `
        <div class="chat-msg-avatar"><i class="${icon}"></i></div>
        <div class="chat-msg-bubble"><p>${text}</p></div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    currentChat.push({ role, text, time: new Date().toISOString() });
}

function showTyping() {
    const container = document.getElementById('chatbotMessages');
    const div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.id = 'chatTyping';
    div.innerHTML = `
        <div class="chat-msg-avatar"><i class="fas fa-robot"></i></div>
        <div class="chat-msg-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function removeTyping() {
    const el = document.getElementById('chatTyping');
    if (el) el.remove();
}

function sendChatMessage() {
    const input = document.getElementById('chatbotInput');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    addChatMsg('user', text);
    showTyping();
    setTimeout(() => {
        removeTyping();
        const reply = getChatReply(text);
        addChatMsg('bot', reply);
        if (currentChat.length === 2) {
            chatConversations.push({ id: Date.now(), user: chatUser, messages: [...currentChat], timestamp: new Date().toISOString() });
            saveChats();
        } else if (currentChat.length > 2) {
            chatConversations[chatConversations.length - 1].messages = [...currentChat];
            saveChats();
        }
    }, 600 + Math.random() * 800);
}

function sendChatQuick(text) {
    addChatMsg('user', text);
    showTyping();
    setTimeout(() => {
        removeTyping();
        const reply = getChatReply(text);
        addChatMsg('bot', reply);
        if (currentChat.length === 2) {
            chatConversations.push({ id: Date.now(), user: chatUser, messages: [...currentChat], timestamp: new Date().toISOString() });
            saveChats();
        } else if (currentChat.length > 2) {
            chatConversations[chatConversations.length - 1].messages = [...currentChat];
            saveChats();
        }
    }, 600 + Math.random() * 800);
}

function getChatReply(input) {
    const msg = input.toLowerCase();
    const pkgs = getPackages();
    const s = getSettings();

    if (msg.match(/\b(hi|hello|hey|namaste|greetings)\b/)) {
        return 'Hello! Namaste! Welcome to Adventure Hunt Treks. How can I help you plan your Nepal adventure today?';
    }
    if (msg.match(/\b(package|offer|available|tour|all)\b/) && msg.match(/\b(package|offer|tour|all|what)\b/)) {
        const cats = {};
        Object.values(pkgs).forEach(p => { cats[p.category] = (cats[p.category] || 0) + 1; });
        let list = 'We have <strong>' + Object.keys(pkgs).length + '</strong> packages across these categories:<br>';
        Object.entries(cats).forEach(([cat, count]) => {
            list += `<br>&#8226; <strong>${cat.charAt(0).toUpperCase() + cat.slice(1)}</strong> — ${count} packages`;
        });
        list += '<br><br>Prices start from <strong>NPR 7,500</strong> per person. Would you like details on any specific category?';
        return list;
    }
    if (msg.match(/\b(chitwan)\b/)) {
        return 'Chitwan is our most popular destination! We have <strong>5 Chitwan packages</strong> starting from <strong>NPR 6,500 ($50)</strong> per person.<br><br>Highlights include:<br>&#8226; Jeep Safari through Community Forest<br>&#8226; Elephant Breeding Center<br>&#8226; Tharu Cultural Dance Show<br>&#8226; CG Dham Temple Visit<br><br>Durations: 1N/2D to 4N/5D. Would you like to know about a specific Chitwan tour?';
    }
    if (msg.match(/\b(pokhara)\b/)) {
        return 'Pokhara is the gateway to the Annapurna region! We offer <strong>3 Pokhara packages</strong> including sightseeing, paragliding, and boating on Phewa Lake.<br><br>Highlights:<br>&#8226; Sarangkot sunrise view<br>&#8226; World Peace Pagoda<br>&#8226; Phewa Lake boating<br>&#8226; Davis Falls & Gupteshwor Cave<br><br>Would you like details on a specific Pokhara tour?';
    }
    if (msg.match(/\b(trek|trekking|hike|hiking|poon hill|annapurna|langtang|mustang|base camp|abc)\b/)) {
        return 'We have <strong>amazing trekking packages</strong> for all levels:<br><br>&#8226; <strong>Ghorepani Poonhill Trek</strong> (4N/5D) — NPR 15,000<br>&#8226; <strong>Annapurna Base Camp</strong> (6N/7D) — NPR 25,000<br>&#8226; <strong>Ghandruk Village Trek</strong> (3N/4D) — NPR 10,000<br>&#8226; <strong>Manang Tour</strong> (3N/4D) — NPR 15,000<br>&#8226; <strong>Muktinath Tour</strong> (3N/4D) — NPR 10,000<br><br>All treks include guide, meals, accommodation & transport. Which trek interests you?';
    }
    if (msg.match(/\b(booking|book|reserve|inquiry|how to book|process)\b/)) {
        return 'Booking is easy! Here\'s how:<br><br>1. Choose your package from our <a href="#packages">Packages section</a><br>2. Click "Book Now" or "View Itinerary" then "Book This Tour"<br>3. Fill in your contact details<br>4. Our team will confirm within <strong>24 hours</strong><br><br>You can also call us directly at <strong>+977-9851134076</strong> or email <strong>adventurehunttreks@gmail.com</strong>';
    }
    if (msg.match(/\b(price|cost|expensive|cheap|budget|rate|npr|usd)\b/)) {
        const cheapest = Object.values(pkgs).sort((a, b) => parseInt(a.priceNPR.replace(/,/g, '')) - parseInt(b.priceNPR.replace(/,/g, '')))[0];
        return `Our packages range from <strong>NPR 7,500 to NPR 95,000</strong> per person.<br><br>The most affordable is <strong>${cheapest.name}</strong> at NPR ${cheapest.priceNPR} ($${cheapest.priceUSD}).<br><br>We offer flexible payment plans and group discounts. Prices include accommodation, meals, guide, and transport as specified in each package.`;
    }
    if (msg.match(/\b(contact|phone|email|address|call|reach|whatsapp|location)\b/)) {
        return `<strong>Contact Information:</strong><br><br><i class="fas fa-phone"></i> Phone: <strong>${s.phone}</strong><br><i class="fas fa-envelope"></i> Email: <strong>${s.email}</strong><br><i class="fas fa-map-marker-alt"></i> Address: <strong>${s.address}</strong><br><i class="fas fa-clock"></i> Hours: Sun-Fri 9AM-6PM<br><br>We respond within 24 hours!`;
    }
    if (msg.match(/\b(best|recommend|suggest|popular|top|favorite)\b/)) {
        return 'Our <strong>most popular packages</strong> are:<br><br>&#8226; <strong>Chitwan & CG Dham Tour</strong> (2N/3D) — NPR 9,500<br>&#8226; <strong>Ghandruk Village Trek</strong> (3N/4D) — NPR 10,000<br>&#8226; <strong>Annapurna Base Camp</strong> (6N/7D) — NPR 25,000<br><br>Would you like details on any of these?';
    }
    if (msg.match(/\b(safety|safe|secure|risk|insurance)\b/)) {
        return 'Safety is our <strong>top priority</strong>!<br><br>&#8226; Government licensed & insured company<br>&#8226; Experienced certified guides<br>&#8226; First aid kits on all treks<br>&#8226; Emergency evacuation arrangements<br>&#8226; 100% safety record<br>&#8226; Comprehensive travel insurance guidance<br><br>Your safety is guaranteed with Adventure Hunt Treks.';
    }
    if (msg.match(/\b(thank|thanks|great|awesome|perfect|good)\b/)) {
        return 'You\'re welcome! Happy to help. If you have any more questions, just ask. We\'re here to make your Nepal trip unforgettable! <br><br>Ready to book? <a href="#packages">Browse our packages</a> or call us at <strong>+977-9851134076</strong>.';
    }
    if (msg.match(/\b(when|best time|season|month|weather|climate)\b/)) {
        return 'The <strong>best times to visit Nepal</strong>:<br><br>&#8226; <strong>Oct-Nov</strong>: Best season — clear skies, great views<br>&#8226; <strong>Mar-May</strong>: Spring — rhododendrons bloom<br>&#8226; <strong>Jun-Sep</strong>: Monsoon — lush but rainy<br>&#8226; <strong>Dec-Feb</strong>: Winter — cold but fewer crowds<br><br>Trekking is best in Oct-Nov and Mar-May. Chitwan is great year-round.';
    }
    if (msg.match(/\b(group|family|couple|solo|friends)\b/)) {
        return 'We cater to <strong>all types of travelers</strong>:<br><br>&#8226; <strong>Solo travelers</strong> — Join group tours<br>&#8226; <strong>Couples</strong> — Romantic getaway packages<br>&#8226; <strong>Families</strong> — Kid-friendly itineraries<br>&#8226; <strong>Groups</strong> — Special group discounts (10% off for 5+)<br>&#8226; <strong>Corporate</strong> — Team building treks<br><br>What type of trip are you planning?';
    }
    if (msg.match(/\b(food|meal|eat|restaurant|veg|non-veg|diet)\b/)) {
        return 'Meals are included in most packages! Our food includes:<br><br>&#8226; Traditional Nepali cuisine (dal bhat)<br>&#8226; Continental & Chinese options<br>&#8226; Vegetarian options available<br>&#8226; Fresh local produce<br>&#8226; Filtered/spring water provided<br><br>On treks, we ensure nutritious meals to keep your energy up!';
    }
    if (msg.match(/\b(coupon|discount|offer|deal|promo)\b/)) {
        return 'Great question! We offer:<br><br>&#8226; <strong>Group discount</strong>: 10% off for 5+ people<br>&#8226; <strong>Early bird</strong>: 5% off if booked 30+ days ahead<br>&#8226; <strong>Returning customer</strong>: 8% off<br>&#8226; <strong>Student discount</strong>: 10% off with valid ID<br><br>Contact us for custom group packages!';
    }
    if (msg.match(/\b(permit|visa|document|paper|id|passport)\b/)) {
        return 'For Nepal travel you\'ll need:<br><br>&#8226; <strong>Visa</strong>: On-arrival visa available ($30 for 15 days, $50 for 30 days)<br>&#8226; <strong>Passport</strong>: Valid for 6+ months<br>&#8226; <strong>Trek permits</strong>: We arrange TIMS card & national park permits<br>&#8226; <strong>Photos</strong>: 2 passport-size photos<br><br>We handle all permit arrangements for you!';
    }
    if (msg.match(/\b(guide|porter|staff|team|leader)\b/)) {
        return 'Our team is <strong>highly trained</strong>:<br><br>&#8226; <strong>Licensed guides</strong> — Fluent in English, trained in first aid<br>&#8226; <strong>Experienced porters</strong> — Strong and reliable<br>&#8226; <strong>Trip leaders</strong> — 10+ years experience<br>&#8226; All staff are <strong>government certified</strong><br><br>Guide and porter costs are included in package prices.';
    }
    return 'I\'m not sure I understand that. I can help with:<br><br>&#8226; <strong>Packages</strong> — "What packages do you have?"<br>&#8226; <strong>Trekking</strong> — "Tell me about treks"<br>&#8226; <strong>Booking</strong> — "How do I book?"<br>&#8226; <strong>Pricing</strong> — "What are the prices?"<br>&#8226; <strong>Contact</strong> — "How to contact you?"<br>&#8226; <strong>Safety</strong> — "Is it safe?"<br><br>Or type your question and I\'ll do my best to help!';
}

// ===== ADMIN CHAT LOGS =====
let chatLogFilter = 'all';

function loadChatLogs() {
    const chats = JSON.parse(localStorage.getItem('aht_chats') || '[]');
    let filtered = chats;
    const now = new Date();

    if (chatLogFilter === 'today') {
        const today = now.toISOString().slice(0, 10);
        filtered = chats.filter(c => c.timestamp && c.timestamp.startsWith(today));
    } else if (chatLogFilter === 'week') {
        const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString();
        filtered = chats.filter(c => c.timestamp && c.timestamp >= weekAgo);
    }

    document.getElementById('chatCount').textContent = filtered.length;
    const list = document.getElementById('chatLogsList');

    if (filtered.length === 0) {
        list.innerHTML = '<div class="chat-log-empty"><i class="fas fa-comments"></i><h3>No conversations yet</h3><p>Chatbot conversations will appear here</p></div>';
        return;
    }

    const sorted = [...filtered].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    list.innerHTML = sorted.map(chat => {
        const date = new Date(chat.timestamp).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        const msgs = (chat.messages || []).map(m => `
            <div class="chat-log-msg">
                <span class="chat-log-role ${m.role}">${m.role === 'bot' ? 'Bot' : 'User'}:</span>
                <span class="chat-log-text">${m.text}</span>
            </div>`).join('');
        return `
        <div class="chat-log-card">
            <div class="chat-log-header">
                <h4><i class="fas fa-user-circle"></i> ${chat.user || 'Anonymous'}</h4>
                <span class="chat-log-date">${date}</span>
            </div>
            <div class="chat-log-messages">${msgs}</div>
        </div>`;
    }).join('');
}

function filterChatLogs(filter) {
    chatLogFilter = filter;
    document.querySelectorAll('#section-chatlogs .admin-filter-btn').forEach(b => {
        b.classList.remove('active');
        if (b.dataset.chatfilter === filter) b.classList.add('active');
    });
    loadChatLogs();
}

function clearChatLogs() {
    if (!confirm('Clear all chatbot conversations?')) return;
    localStorage.removeItem('aht_chats');
    chatConversations = [];
    currentChat = [];
    loadChatLogs();
}
