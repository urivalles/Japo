// --- INITIAL DATA & SEEDING ---

const DEFAULT_ITINERARY = [
    {
        date: '2026-08-05',
        dayLabel: 'Dia 0',
        weekday: 'Dimecres',
        title: 'Sortida cap al Japó',
        activities: [
            'Vol de sortida des de Barcelona (BCN) cap a Tòquio (Shenzhen Airlines, 12:20h).',
            'Nit a bord.'
        ],
        accommodation: '✈️ Vol internacional (a bord)',
        type: 'titon',
        badge: 'titon',
        coords: [41.2974, 2.0833] // BCN
    },
    {
        date: '2026-08-06',
        dayLabel: 'Dia 1',
        weekday: 'Dijous',
        title: 'Arribada a Narita i establiment a Ueno',
        activities: [
            'Arribada a Narita a les 18:00h.',
            'Tren Keisei Skyliner directe a Ueno (41 minuts).',
            'Check-in, sopar de ramen i primer descans.'
        ],
        accommodation: '🏨 Hostel Ueno / Asakusa',
        type: 'titon',
        badge: 'titon',
        coords: [35.7111, 139.7770] // Ueno
    },
    {
        date: '2026-08-07',
        dayLabel: 'Dia 2',
        weekday: 'Divendres',
        title: 'Tòquio: Asakusa i Matsuri',
        activities: [
            'Exploració dels mercats d\'Ueno (Ameyoko) i temple Sensō-ji d\'Asakusa.',
            'Al vespre: Festival Hachioji Matsuri (carrosses, fanals i tambors Taiko).'
        ],
        accommodation: '🏨 Hostel Ueno / Asakusa',
        type: 'titon',
        badge: 'titon',
        coords: [35.7147, 139.7967] // Asakusa
    },
    {
        date: '2026-08-08',
        dayLabel: 'Dia 3',
        weekday: 'Dissabte',
        title: 'Excursió: Platja i Mar (Kamakura)',
        activities: [
            'Tren directe JR Tokaido Line des d\'Ueno fins a la costa de Kamakura / Illa d\'Enoshima.',
            'Passejada vora la platja, bosc humit i peix fresc.'
        ],
        accommodation: '🏨 Hostel Ueno / Asakusa',
        type: 'titon',
        badge: 'titon',
        coords: [35.3192, 139.5467] // Kamakura
    },
    {
        date: '2026-08-09',
        dayLabel: 'Dia 4',
        weekday: 'Diumenge',
        title: 'Cap a Utsunomiya (El Hub del Nord)',
        activities: [
            'Matí de passeig relaxat per Asakusa.',
            'Migdia: tren local JR Utsunomiya Line directe a Utsunomiya.',
            'Tarda: Check-in a la guesthouse. Visita al Bosc de Bambú de Wakayama Farm i la Cova Subterrània d\'Oya.'
        ],
        accommodation: '🏨 Guesthouse Estació Utsunomiya',
        type: 'titon',
        badge: 'titon',
        coords: [36.5551, 139.8826] // Utsunomiya
    },
    {
        date: '2026-08-10',
        dayLabel: 'Dia 5',
        weekday: 'Dilluns',
        title: 'Ascensió al Mont Nantai (Nikko)',
        activities: [
            'Tren local a Nikko + bus al Llac Chuzenji.',
            'Ascensió al Mont Nantai (2.486 m). Volcà sagrat, estil Pedraforca.'
        ],
        accommodation: '🏨 Guesthouse Estació Utsunomiya',
        type: 'titon',
        badge: 'titon',
        coords: [36.7645, 139.4912] // Mt Nantai
    },
    {
        date: '2026-08-11',
        dayLabel: 'Dia 6',
        weekday: 'Dimarts',
        title: 'Okunikko: Natura i Termes',
        activities: [
            'Senderisme per la marjal de Senjogahara i cascades de Kegon.',
            'Tarda de relaxació en un onsen a Yunomoto.',
            'Sopar de gyozas tradicionals a Utsunomiya.'
        ],
        accommodation: '🏨 Guesthouse Estació Utsunomiya',
        type: 'titon',
        badge: 'titon',
        coords: [36.7845, 139.4448] // Senjogahara
    },
    {
        date: '2026-08-12',
        dayLabel: 'Dia 7',
        weekday: 'Dimecres',
        title: 'Nikko Patrimoni de la Humanitat',
        activities: [
            'Recorregut cultural per l\'àrea dels temples (Toshogu) entre xipressos centenaris.',
            'Camí de les estàtues Jizo de Kanmangafuchi.'
        ],
        accommodation: '🏨 Guesthouse Estació Utsunomiya',
        type: 'titon',
        badge: 'titon',
        coords: [36.7581, 139.5989] // Nikko Toshogu
    },
    {
        date: '2026-08-13',
        dayLabel: 'Dia 8',
        weekday: 'Dijous',
        title: 'Tòquio: Trobada amb en Banana',
        activities: [
            'Checkout a Utsunomiya i tren local cap a Tòquio (Shinjuku).',
            '17:30 h: Retrobament amb en Banana. Free tours per Shinjuku, Asakusa i Shibuya.'
        ],
        accommodation: '🏨 IMANO TOKYO HOSTEL (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.6938, 139.7032] // Shinjuku
    },
    {
        date: '2026-08-14',
        dayLabel: 'Dia 9',
        weekday: 'Divendres',
        title: 'Tòquio compartit',
        activities: [
            'Free Tour i visites guiades per la ciutat amb en Banana.',
            'Continuació de visites per barris icònics.'
        ],
        accommodation: '🏨 IMANO TOKYO HOSTEL (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.6580, 139.7016] // Shibuya
    },
    {
        date: '2026-08-15',
        dayLabel: 'Dia 10',
        weekday: 'Dissabte',
        title: 'Cap al Mont Fuji',
        activities: [
            'Aproximació a Fujinomiya.',
            'Preparació per a l\'ascens de l\'endemà. Base camp.'
        ],
        accommodation: '🏨 CABIN HOUSE YADO FUJINOMIYA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.2238, 138.6133] // Fujinomiya
    },
    {
        date: '2026-08-16',
        dayLabel: 'Dia 11',
        weekday: 'Diumenge',
        title: 'Cim del Mont Fuji',
        activities: [
            'Ascensió conjunta i descens al Mont Fuji (Ruta Fujinomiya).'
        ],
        accommodation: '🏨 CABIN HOUSE YADO FUJINOMIYA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.3606, 138.7274] // Mt Fuji
    },
    {
        date: '2026-08-17',
        dayLabel: 'Dia 12',
        weekday: 'Dilluns',
        title: 'Arribada a Takayama i Ta-Q-Bin',
        activities: [
            'Titon: Viatge a Takayama. Enviament de maleta gran a Kyoto via Ta-Q-Bin.',
            'Banana: Viatja sol cap a Odawara.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Titon)',
        type: 'titon',
        badge: 'titon',
        coords: [36.1461, 137.2520] // Takayama
    },
    {
        date: '2026-08-17',
        dayLabel: 'Banana 1',
        weekday: 'Dilluns',
        title: 'Banana a Odawara',
        activities: ['Banana fa nit a Odawara.'],
        accommodation: 'Hostel a Odawara',
        type: 'banana',
        badge: 'banana',
        coords: [35.2536, 139.1553] // Odawara
    },
    {
        date: '2026-08-18',
        dayLabel: 'Dia 13',
        weekday: 'Dimarts',
        title: 'Relax a Takayama',
        activities: [
            'Pau, mercats matinals i natura pels voltants de Takayama.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Titon)',
        type: 'titon',
        badge: 'titon',
        coords: [36.1461, 137.2520]
    },
    {
        date: '2026-08-18',
        dayLabel: 'Banana 2',
        weekday: 'Dimarts',
        title: 'Banana a Nagoya',
        activities: ['Banana viatja a Nagoya.'],
        accommodation: 'Hostel a Nagoya',
        type: 'banana',
        badge: 'banana',
        coords: [35.1815, 136.9066] // Nagoya
    },
    {
        date: '2026-08-19',
        dayLabel: 'Dia 14',
        weekday: 'Dimecres',
        title: 'Retrobament a Takayama',
        activities: [
            'Banana arriba a Takayama per retrobar-se amb Titon.',
            'Visita conjunta per la ciutat.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [36.1461, 137.2520]
    },
    {
        date: '2026-08-20',
        dayLabel: 'Dia 15',
        weekday: 'Dijous',
        title: 'Shirakawa-go i Separació',
        activities: [
            'Bus a Shirakawa-go junts (1h de trajecte).',
            'Separació a les 15:00 h: Titon cap a Kanazawa, Banana cap a Kyoto.'
        ],
        accommodation: '🏨 BLUE HOUR KANAZAWA (Titon)',
        type: 'titon',
        badge: 'titon',
        coords: [36.5613, 136.6562] // Kanazawa
    },
    {
        date: '2026-08-20',
        dayLabel: 'Banana 3',
        weekday: 'Dijous',
        title: 'Banana arriba a Kyoto',
        activities: ['Banana fa el check-in a Kyoto.'],
        accommodation: 'Hostel a Kyoto',
        type: 'banana',
        badge: 'banana',
        coords: [35.0116, 135.7681] // Kyoto
    },
    {
        date: '2026-08-21',
        dayLabel: 'Dia 16',
        weekday: 'Divendres',
        title: 'Cap a Kyoto i retrobament',
        activities: [
            'Tren Thunderbird des de Kanazawa cap a Kyoto.',
            'Recull de la maleta gran a l\'hostel enviada via Ta-Q-Bin.',
            'Retrobament amb Banana.'
        ],
        accommodation: '🏨 SHIJO GUESTHOUSE HIVE (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [35.0116, 135.7681] // Kyoto
    },
    {
        date: '2026-08-22',
        dayLabel: 'Dia 17',
        weekday: 'Dissabte',
        title: 'Kyoto Compartit',
        activities: [
            'Visites conjuntes per Kyoto: temples, mercats i passejos.'
        ],
        accommodation: '🏨 SHIJO GUESTHOUSE HIVE (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.9671, 135.7727] // Fushimi
    },
    {
        date: '2026-08-23',
        dayLabel: 'Dia 18',
        weekday: 'Diumenge',
        title: 'Cap a Osaka',
        activities: [
            'Tren cap a Osaka.',
            'Dotonbori, vida nocturna i gastronomia de carrer.'
        ],
        accommodation: '🏨 ACRO CAPSULE NAMBA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.6687, 135.5013] // Namba
    },
    {
        date: '2026-08-24',
        dayLabel: 'Dia 19',
        weekday: 'Dilluns',
        title: 'Osaka Urbana',
        activities: [
            'Exploració del barri de Shinsekai, el mercat Kuromon i zones d\'oci.'
        ],
        accommodation: '🏨 ACRO CAPSULE NAMBA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.6525, 135.5063] // Shinsekai
    },
    {
        date: '2026-08-25',
        dayLabel: 'Dia 20',
        weekday: 'Dimarts',
        title: 'Hiroshima i Miyajima',
        activities: [
            'Shinkansen cap a Hiroshima.',
            'Ferry a l\'Illa de Miyajima (cérvols i ascens al Mont Misen).'
        ],
        accommodation: '🏨 WEBASE HIROSHIMA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.2965, 132.3206] // Miyajima
    },
    {
        date: '2026-08-26',
        dayLabel: 'Dia 21',
        weekday: 'Dimecres',
        title: 'Hiroshima de la Pau',
        activities: [
            'Visita profunda al Parc i Museu de la Pau per tancar el viatge.'
        ],
        accommodation: '🏨 WEBASE HIROSHIMA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [34.3927, 132.4526] // Hiroshima Peace Park
    },
    {
        date: '2026-08-27',
        dayLabel: 'Dia 22',
        weekday: 'Dijous',
        title: 'Tornada (Vol des de Kansai)',
        activities: [
            'Shinkansen Hiroshima → Shin-Osaka + Haruka Express → Aeroport KIX.',
            'Vol de tornada cap a BCN a les 15:15 h (Shenzhen Airlines).'
        ],
        accommodation: '✈️ Vol',
        type: 'titon',
        badge: 'titon',
        coords: [34.4320, 135.2304] // KIX
    }
];
;

const DEFAULT_EXPENSES = [
    { id: '1', category: 'Vols', concept: 'Vol Open-Jaw BCN-Tòquio / Kansai-BCN (Estimat)', amount: 850 },
    { id: 'h-ueno', category: 'Allotjament', concept: 'Hostel Ueno / Asakusa', amount: 55 },
    { id: 'h-utsunomiya', category: 'Allotjament', concept: 'Guesthouse Utsunomiya', amount: 89 },
    { id: 'h-shinjuku', category: 'Allotjament', concept: 'Hostel Shinjuku (Tòquio)', amount: 52 },
    { id: 'h-fuji', category: 'Allotjament', concept: 'Hostel Fuji', amount: 53 },
    { id: 'h-takayama', category: 'Allotjament', concept: 'Hostel Takayama', amount: 55 },
    { id: 'h-kanazawa', category: 'Allotjament', concept: 'Hostel Kanazawa', amount: 17 },
    { id: 'h-kyoto', category: 'Allotjament', concept: 'Hostel Kyoto', amount: 34 },
    { id: 'h-osaka', category: 'Allotjament', concept: 'Hostel Osaka', amount: 27 },
    { id: 'h-hiroshima', category: 'Allotjament', concept: 'Hostel Hiroshima', amount: 36 },
    { id: '4', category: 'Transport', concept: 'Trens regionals i de muntanya', amount: 80 },
    { id: '5', category: 'Transport', concept: 'Trens llargs Shinkansen', amount: 130 },
    { id: '6', category: 'Menjar i oci', concept: 'Menjar diari (Konbinis / Gyudon)', amount: 250 }
];

const DEFAULT_VIDEOS = [
    {
        id: '1',
        title: 'Consells per a l\'ascensió al Mont Nantai (Nikko)',
        url: 'https://www.youtube.com/watch?v=XXXXXXX',
        timestamp: '02:15',
        notes: 'Explica per on agafar el bus al Llac Chuzenji i el punt clau de les escales de pedra.'
    },
    {
        id: '2',
        title: 'Enviament de maletes Ta-Q-Bin al Japó',
        url: 'https://www.youtube.com/watch?v=XXXXXXX',
        timestamp: '05:30',
        notes: 'Guia pas a pas de com emplenar el formulari de Yamato Transport per enviar la maleta de Takayama a Kyoto.'
    }
];

const DEFAULT_TASKS = [
    { id: '1', text: 'Reservar els vols definitius BCN - Japó (open-jaw o anada/tornada KIX/NRT)', completed: true },
    { id: '2', text: 'Reservar Hostel a Ueno o Asakusa (06 - 09 Agost)', completed: false },
    { id: '3', text: 'Posar alarma per comprar bitllet Nohi Bus (Takayama -> Shirakawa-go -> Kanazawa) un mes abans', completed: false },
    { id: '4', text: 'Comprar assegurança mèdica internacional', completed: false },
    { id: '5', text: 'Contractar eSIM de dades per al mòbil (ex: Ubigi o Holafly)', completed: false }
];

// --- APP STATE ---

let state = {
    currentTab: 'itinerary',
    itineraryFilter: 'all',
    expenses: [],
    videos: [],
    tasks: []
};

// Map variable
let map = null;
let mapMarkers = [];
let routePolyline = null;

// --- STATE MANAGEMENT (LOCAL STORAGE) ---

function loadState() {
    state.expenses = JSON.parse(localStorage.getItem('japo_expenses')) || DEFAULT_EXPENSES;
    state.videos = JSON.parse(localStorage.getItem('japo_videos')) || DEFAULT_VIDEOS;
    state.tasks = JSON.parse(localStorage.getItem('japo_tasks')) || DEFAULT_TASKS;
}

function saveState(key) {
    if (key === 'expenses' || !key) localStorage.setItem('japo_expenses', JSON.stringify(state.expenses));
    if (key === 'videos' || !key) localStorage.setItem('japo_videos', JSON.stringify(state.videos));
    if (key === 'tasks' || !key) localStorage.setItem('japo_tasks', JSON.stringify(state.tasks));
}

// --- RENDERING FUNCTIONS ---

// Tab Switching
function initTabSwitching() {
    const navButtons = document.querySelectorAll('.nav-btn, .mobile-nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            state.currentTab = target;

            // Update UI buttons active state
            navButtons.forEach(b => {
                if (b.getAttribute('data-target') === target) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });

            // Show active section
            sections.forEach(section => {
                const secId = section.getAttribute('id');
                if (secId === `section-${target}`) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            // Special initializations on tab open
            if (target === 'map') {
                setTimeout(() => {
                    if (map) {
                        map.invalidateSize();
                    } else {
                        initMap();
                    }
                }, 100);
            }
        });
    });
}

// Countdown timer
function initCountdown() {
    const targetDate = new Date('2026-08-05T00:00:00');
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const countText = document.getElementById('countdown-days');
    const badge = document.getElementById('countdown-container');
    
    if (diffDays > 0) {
        countText.innerText = diffDays;
    } else if (diffDays === 0) {
        badge.innerHTML = "🎉 Avui marxes al Japó!";
        badge.style.background = "rgba(255, 121, 198, 0.15)";
        badge.style.borderColor = "var(--accent-pink)";
        badge.style.color = "var(--accent-pink)";
        badge.style.boxShadow = "var(--glow-pink)";
    } else {
        badge.innerHTML = "🇯🇵 Gaudint del viatge!";
        badge.style.background = "rgba(80, 250, 123, 0.15)";
        badge.style.borderColor = "var(--accent-green)";
        badge.style.color = "var(--accent-green)";
        badge.style.boxShadow = "var(--glow-green)";
    }
}

// 1. Itinerary Renderer
function renderItinerary() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';

    const filteredData = DEFAULT_ITINERARY.filter(day => {
        if (state.itineraryFilter === 'all') return true;
        if (state.itineraryFilter === 'overlap') return day.type === 'overlap';
        if (state.itineraryFilter === 'titon') return day.type === 'titon';
        return true;
    });

    filteredData.forEach(day => {
        const item = document.createElement('div');
        item.className = `timeline-item ${day.type}`;

        const badgeHtml = day.badge === 'shared' 
            ? `<span class="badge badge-shared"><i class="fa-solid fa-users"></i> Compartit</span>`
            : day.badge === 'titon'
                ? `<span class="badge badge-titon"><i class="fa-solid fa-user"></i> Titon (Tu)</span>`
                : `<span class="badge badge-banana"><i class="fa-solid fa-user-astronaut"></i> Banana</span>`;

        let activitiesHtml = '';
        day.activities.forEach(act => {
            activitiesHtml += `<li class="day-activity-item">${act}</li>`;
        });

        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="day-card glass-panel">
                <div class="day-header">
                    <span class="day-number">${day.dayLabel}</span>
                    <div class="day-date">${formatDateLabel(day.date)}</div>
                    <div class="day-weekday">${day.weekday}</div>
                </div>
                <div class="day-body">
                    <div class="route-badges">${badgeHtml}</div>
                    <h3 class="day-title">${day.title}</h3>
                    <ul class="day-activity-list">${activitiesHtml}</ul>
                    ${day.accommodation ? `<div class="day-accommodation"><i class="fa-solid fa-hotel"></i> ${day.accommodation}</div>` : ''}
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

function formatDateLabel(dateStr) {
    const d = new Date(dateStr);
    return `${d.getDate()}/${d.getMonth() + 1}`;
}

function initItineraryFilters() {
    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.itineraryFilter = btn.getAttribute('data-filter');
            renderItinerary();
        });
    });
}

// 2. Leaflet Map Renderer
function initMap() {
    if (map) return;

    // Center in Japan main island area
    map = L.map('map-element', {
        zoomControl: true,
        scrollWheelZoom: false
    }).setView([35.2, 137.5], 6);

    // Premium dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Filter out coordinates for plotting lines
    const coordsList = DEFAULT_ITINERARY
        .filter(day => day.coords && day.coords.length === 2)
        .map(day => ({
            coords: day.coords,
            title: day.title,
            date: day.date,
            type: day.type,
            dayLabel: day.dayLabel
        }));

    // Draw markers
    coordsList.forEach(point => {
        let color = '#ff79c6'; // Shared
        if (point.type === 'titon') color = '#50fa7b';
        if (point.type === 'banana') color = '#06b6d4';

        const marker = L.circleMarker(point.coords, {
            radius: 8,
            fillColor: color,
            color: '#ffffff',
            weight: 2,
            opacity: 0.9,
            fillOpacity: 0.8
        }).addTo(map);

        marker.bindPopup(`
            <div class="map-popup-content">
                <h3>${point.dayLabel}: ${point.title}</h3>
                <p><strong>Data:</strong> ${point.date}</p>
                <p>Tipus de ruta: <span style="color:${color}; font-weight:bold;">${point.type.toUpperCase()}</span></p>
            </div>
        `);
        mapMarkers.push(marker);
    });

    // Draw lines joining path
    const titonPath = coordsList.filter(p => p.type === 'titon' || p.type === 'overlap').map(p => p.coords);
    const bananaPath = coordsList.filter(p => p.type === 'banana' || p.type === 'overlap').map(p => p.coords);

    if (titonPath.length > 0) {
        L.polyline(titonPath, { color: '#50fa7b', weight: 3, opacity: 0.7 }).addTo(map);
    }
    if (bananaPath.length > 0) {
        L.polyline(bananaPath, { color: '#06b6d4', weight: 3, opacity: 0.7, dashArray: '5, 8' }).addTo(map);
    }

    // Zoom map fit bounds
    const allCoords = coordsList.map(p => p.coords);
    if (allCoords.length > 0) {
        const bounds = L.polyline(allCoords).getBounds();
        map.fitBounds(bounds, { padding: [30, 30] });
    }
}

// 3. Budget Module
function renderBudget() {
    const tableBody = document.getElementById('expense-table-body');
    tableBody.innerHTML = '';

    let totalSpent = 0;

    state.expenses.forEach(exp => {
        totalSpent += parseFloat(exp.amount);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><span class="expense-category-cell">${getCategoryEmoji(exp.category)} ${exp.category}</span></td>
            <td>${exp.concept}</td>
            <td style="font-weight: 600;">${exp.amount} €</td>
            <td>
                <button class="btn-delete-expense" data-id="${exp.id}" title="Eliminar despesa">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Update spent text and progress bar
    document.getElementById('budget-spent-text').innerText = `${totalSpent.toLocaleString('ca-ES')} € gastats`;
    
    const limit = 1500;
    let percentage = (totalSpent / limit) * 100;
    if (percentage > 100) percentage = 100;
    
    const progressBar = document.getElementById('budget-progress-bar');
    progressBar.style.width = `${percentage}%`;

    const statusMessage = document.getElementById('budget-status-message');
    if (totalSpent > limit) {
        progressBar.style.background = 'var(--accent-red)';
        progressBar.style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.5)';
        statusMessage.innerHTML = `⚠️ Compte! Has superat el pressupost per <strong>${(totalSpent - limit)} €</strong>.`;
        statusMessage.className = 'budget-status-message warning';
    } else {
        progressBar.style.background = 'linear-gradient(90deg, var(--accent-green), var(--accent-purple))';
        progressBar.style.boxShadow = 'var(--glow-green)';
        statusMessage.innerHTML = `Estàs dins del pressupost estimat! Et queden <strong>${(limit - totalSpent)} €</strong>.`;
        statusMessage.className = 'budget-status-message';
    }

    // Attach delete listeners
    document.querySelectorAll('.btn-delete-expense').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            state.expenses = state.expenses.filter(e => e.id !== id);
            saveState('expenses');
            renderBudget();
        });
    });
}

function getCategoryEmoji(cat) {
    if (cat === 'Vols') return '✈️';
    if (cat === 'Allotjament') return '🏨';
    if (cat === 'Transport') return '🚄';
    if (cat === 'Menjar i oci') return '🍜';
    return '🎒';
}

function initBudgetForm() {
    const form = document.getElementById('expense-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const category = document.getElementById('expense-category').value;
        const concept = document.getElementById('expense-concept').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);

        if (!concept || isNaN(amount)) return;

        const newExpense = {
            id: Date.now().toString(),
            category,
            concept,
            amount
        };

        state.expenses.push(newExpense);
        saveState('expenses');
        renderBudget();

        // Reset form
        form.reset();
    });

    const resetBtn = document.getElementById('btn-reset-expenses');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Estàs segur que vols restablir les despeses per defecte? Es perdran els canvis manualment fets.')) {
                state.expenses = [...DEFAULT_EXPENSES];
                saveState('expenses');
                renderBudget();
            }
        });
    }
}

// 4. Videos Module
function renderVideos() {
    const container = document.getElementById('video-cards-container');
    container.innerHTML = '';

    state.videos.forEach(vid => {
        const card = document.createElement('div');
        card.className = 'video-card glass-panel resource-card';
        
        // Extract YouTube ID for potential thumbnail
        const ytId = getYoutubeId(vid.url);
        const thumbHtml = ytId 
            ? `<div style="background-image: url('https://img.youtube.com/vi/${ytId}/hqdefault.jpg'); height: 120px; background-size: cover; background-position: center; border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--border-glass)"></div>`
            : '';

        card.innerHTML = `
            <div>
                ${thumbHtml}
                <div class="resource-top">
                    <h4>${vid.title}</h4>
                    ${vid.timestamp ? `<span class="resource-timestamp"><i class="fa-regular fa-clock"></i> Minut: ${vid.timestamp}</span>` : ''}
                </div>
                <p class="resource-notes">${vid.notes || 'Sense anotacions.'}</p>
            </div>
            <div class="resource-actions">
                <a href="${vid.url}" target="_blank" class="resource-link">
                    <i class="fa-brands fa-youtube"></i> Veure vídeo
                </a>
                <button class="btn-delete-resource" data-id="${vid.id}" title="Eliminar recurs">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    // Attach delete listeners
    document.querySelectorAll('.btn-delete-resource').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            state.videos = state.videos.filter(v => v.id !== id);
            saveState('videos');
            renderVideos();
        });
    });
}

function getYoutubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function initVideoForm() {
    const form = document.getElementById('video-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('video-title').value;
        const url = document.getElementById('video-url').value;
        const timestamp = document.getElementById('video-timestamp').value;
        const notes = document.getElementById('video-notes').value;

        if (!title || !url) return;

        const newVideo = {
            id: Date.now().toString(),
            title,
            url,
            timestamp,
            notes
        };

        state.videos.push(newVideo);
        saveState('videos');
        renderVideos();

        form.reset();
    });
}

// 5. Tasks Module
function renderTasks() {
    const container = document.getElementById('tasks-list-container');
    container.innerHTML = '';

    // Sort tasks: uncompleted first
    const sortedTasks = [...state.tasks].sort((a, b) => a.completed - b.completed);

    sortedTasks.forEach(task => {
        const item = document.createElement('li');
        item.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        item.innerHTML = `
            <div class="task-checkbox-container" data-id="${task.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${task.text}</span>
            </div>
            <button class="btn-delete-task" data-id="${task.id}" title="Eliminar tasca">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(item);
    });

    // Toggle complete status
    document.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                task.completed = !task.completed;
                saveState('tasks');
                renderTasks();
            }
        });
    });

    // Delete task
    document.querySelectorAll('.btn-delete-task').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.tasks = state.tasks.filter(t => t.id !== id);
            saveState('tasks');
            renderTasks();
        });
    });
}

function initTaskForm() {
    const input = document.getElementById('new-task-input');
    const btn = document.getElementById('btn-add-task');

    const handleAddTask = () => {
        const text = input.value.trim();
        if (!text) return;

        const newTask = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.tasks.push(newTask);
        saveState('tasks');
        renderTasks();

        input.value = '';
    };

    btn.addEventListener('click', handleAddTask);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddTask();
    });
}

// --- INIT APP ---

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    
    // Core Layout
    initTabSwitching();
    initCountdown();
    
    // Modules
    renderItinerary();
    initItineraryFilters();
    
    renderBudget();
    initBudgetForm();
    
    renderVideos();
    initVideoForm();
    
    renderTasks();
    initTaskForm();
});
