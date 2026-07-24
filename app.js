/* ==========================================================================
   🇯🇵 GUIA DIDÀCTICA DE PROGRAMACIÓ - JAPÓ 2026 (app.js) 🇯🇵
   ==========================================================================
   Hola Uri! Aquest fitxer conté tota la "intel·ligència" i la lògica interactiva
   de la teva web-app del viatge al Japó.

   💡 COM FUNCIONA AQUEST FITXER?
   1. CONSTANTS (Dades per defecte): Guardem les llistes de l'itinerari, despeses,
      tasques, maleta, etc. en estructuresanomenades "Arrays d'Objectes".
   2. ESTAT (State): Una variable anomenada `state` que manté el control de què
      s'està mostrant a la pantalla i quines dades té l'usuari actualment.
   3. MEMÒRIA (LocalStorage): Funcions com `loadState()` i `saveState()` que
      guarden automàticament tot el que afegeixes o modifiques a la memòria local
      del teu navegador (ordinador o mòbil) perquè no es perdi mai.
   4. RENDERITZACIÓ (Render): Funcions que agafen les dades i construeixen el codi
      visual HTML dinàmicament per pintar-ho a la teva pantalla.
   5. ESDEVENIMENTS (Events / Listeners): Detecció de clics en botons, capçaleres,
      sub-pestanyes o formularis per executar accions a l'instant.

   NOTA: Els comentaris com aquest (que comencen amb // o /*) són 100% INOFENSIUS.
   El navegador els ignora completament en executar la pàgina web.
   ========================================================================== */

// --- 1. DADES INICIALS DE LA RUTA (ARRAY D'OBJECTES ITINERARI) ---
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
        type: 'uri',
        badge: 'uri',
        coords: [41.2974, 2.0833],
        secretWisdom: {
            kanji: "一期一会",
            romaji: "Ichigo Ichie",
            translation: "Cada trobada i cada viatge és únic i irrepetible. Viu el moment present com si fos l'únic a la teva vida."
        }
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
        type: 'uri',
        badge: 'uri',
        coords: [35.7111, 139.7770],
        secretWisdom: {
            kanji: "初心",
            romaji: "Shoshin",
            translation: "La ment de principiant: mantén la ment oberta, neta i curiosa, lliure de judicis previs per deixar-te sorprendre."
        }
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
        type: 'uri',
        badge: 'uri',
        coords: [35.7147, 139.7967],
        secretWisdom: {
            kanji: "侘寂",
            romaji: "Wabi-Sabi",
            translation: "Troba la bellesa en la senzillesa, el pas del temps i les imperfeccions naturals del món."
        }
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
        type: 'uri',
        badge: 'uri',
        coords: [35.3192, 139.5467],
        secretWisdom: {
            kanji: "森林浴",
            romaji: "Shinrin-yoku",
            translation: "Bany de bosc: submergeix-te en el silenci dels arbres i deixa que la natura et renovi l'energia."
        }
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
        type: 'uri',
        badge: 'uri',
        coords: [36.5551, 139.8826],
        secretWisdom: {
            kanji: "生き甲斐",
            romaji: "Ikigai",
            translation: "La teva raó de ser: allò que et fa bategar el cor quan t'aixeques al matí amb ganes d'explorar."
        }
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
        type: 'uri',
        badge: 'uri',
        coords: [36.7645, 139.4912],
        secretWisdom: {
            kanji: "木漏れ日",
            romaji: "Komorebi",
            translation: "La llum del sol que filtra entre les fulles: aprèn a veure la poesia en els raigs de llum fugaços."
        }
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
        type: 'uri',
        badge: 'uri',
        coords: [36.7845, 139.4448],
        secretWisdom: {
            kanji: "金継ぎ",
            romaji: "Kintsugi",
            translation: "Les taques i cicatrius del camí et fan més fort i valuós. L'art de la vida és omplir les esquerdes d'or."
        }
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
        type: 'uri',
        badge: 'uri',
        coords: [36.7581, 139.5989],
        secretWisdom: {
            kanji: "改善",
            romaji: "Kaizen",
            translation: "Millora contínua: un petit pas cada dia et porta a la cimera de la muntanya més alta."
        }
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
        coords: [35.6938, 139.7032],
        secretWisdom: {
            kanji: "幽玄",
            romaji: "Yugen",
            translation: "La bellesa profunda i misteriosa: hi ha coses que no s'expliquen amb paraules, sinó que se senten al cor."
        }
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
        coords: [35.6580, 139.7016],
        secretWisdom: {
            kanji: "物の哀れ",
            romaji: "Mono no Aware",
            translation: "La bellesa d'allò efímer: com la flor del cirerer, valora la fragilitat d'un instant que no durarà per sempre."
        }
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
        coords: [35.2238, 138.6133],
        secretWisdom: {
            kanji: "桜梅桃李",
            romaji: "Oubaitori",
            translation: "Cirerer, prunera, presseguer i albercoquer: no et comparis amb ningú; cadascú floreix a la seva manera."
        }
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
        coords: [35.3606, 138.7274],
        secretWisdom: {
            kanji: "我慢",
            romaji: "Gaman",
            translation: "Perseverança digna: resisteix les pujades dures amb serenor, fortalesa interior i un somriure intern."
        }
    },
    {
        date: '2026-08-17',
        dayLabel: 'Dia 12',
        weekday: 'Dilluns',
        title: 'Arribada a Takayama i Ta-Q-Bin',
        activities: [
            'Uri: Viatge a Takayama. Enviament de maleta gran a Kyoto via Ta-Q-Bin.',
            'Banana: Viatja sol cap a Odawara.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Uri)',
        type: 'uri',
        badge: 'uri',
        coords: [36.1461, 137.2520],
        secretWisdom: {
            kanji: "なんくるないさ",
            romaji: "Nankurunaisa",
            translation: "Amb el temps i l'actitud adequada, tot s'ordena. Fluixa amb el camí sense angoixar-te."
        }
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
        coords: [35.2536, 139.1553],
        secretWisdom: {
            kanji: "知足",
            romaji: "Chisoku",
            translation: "Saber que en tens prou: la veritable riquesa és gaudir plenament de la senzillesa de cada moment."
        }
    },
    {
        date: '2026-08-18',
        dayLabel: 'Dia 13',
        weekday: 'Dimarts',
        title: 'Relax a Takayama',
        activities: [
            'Pau, mercats matinals i natura pels voltants de Takayama.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Uri)',
        type: 'uri',
        badge: 'uri',
        coords: [36.1461, 137.2520],
        secretWisdom: {
            kanji: "和",
            romaji: "Wa",
            translation: "Harmonia: cerca l'equilibri entre la teva pau interior, els teus companys de ruta i el món."
        }
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
        coords: [35.1815, 136.9066],
        secretWisdom: {
            kanji: "無常",
            romaji: "Mujo",
            translation: "Impermanència: tot canvia constantment. Accepta el canvi com la millor oportunitat per aprendre."
        }
    },
    {
        date: '2026-08-19',
        dayLabel: 'Dia 14',
        weekday: 'Dimecres',
        title: 'Retrobament a Takayama',
        activities: [
            'Banana arriba a Takayama per retrobar-se amb Uri.',
            'Visita conjunta per la ciutat.'
        ],
        accommodation: '🏨 GUESTHOUSE OUKA (Compartit)',
        type: 'overlap',
        badge: 'shared',
        coords: [36.1461, 137.2520],
        secretWisdom: {
            kanji: "温故知新",
            romaji: "Onko Chishin",
            translation: "Aprendre del passat per entendre el futur: observa la història antiga per donar sentit al teu propi camí."
        }
    },
    {
        date: '2026-08-20',
        dayLabel: 'Dia 15',
        weekday: 'Dijous',
        title: 'Shirakawa-go i Separació',
        activities: [
            'Bus a Shirakawa-go junts (1h de trajecte).',
            'Separació a les 15:00 h: Uri cap a Kanazawa, Banana cap a Kyoto.'
        ],
        accommodation: '🏨 BLUE HOUR KANAZAWA (Uri)',
        type: 'uri',
        badge: 'uri',
        coords: [36.5613, 136.6562],
        secretWisdom: {
            kanji: "七転び八起き",
            romaji: "Nana korobi ya oki",
            translation: "Caure set cops, aixecar-se vuit: la perseverança no és no cansar-se mai, sinó tornar a començar sempre."
        }
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
        coords: [35.0116, 135.7681],
        secretWisdom: {
            kanji: "心技体",
            romaji: "Shin-Gi-Tai",
            translation: "Ment, tècnica i cos: l'equilibri perfecte per afrontar qualsevol repte amb èxit."
        }
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
        coords: [35.0116, 135.7681],
        secretWisdom: {
            kanji: "自他共栄",
            romaji: "Jita Kyoei",
            translation: "Prosperitat mútua: viatjar en equip és sumar forces, cuidar de l'altre i créixer junts."
        }
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
        coords: [34.9671, 135.7727],
        secretWisdom: {
            kanji: "不倒翁",
            romaji: "Daruma Spirit",
            translation: "L'esperit del Daruma: fixa un objectiu clar, mantén la mirada en el futur i no et rendeixis mai."
        }
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
        coords: [34.6687, 135.5013],
        secretWisdom: {
            kanji: "花鳥風月",
            romaji: "Kachou Fuugetsu",
            translation: "Descobrir-se a un mateix en la natura: contempla la bellesa de les flors, els ocells, el vent i la lluna."
        }
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
        coords: [34.6525, 135.5063],
        secretWisdom: {
            kanji: "残心",
            romaji: "Zanshin",
            translation: "Atenció plena: quan acabis una etapa o un dia, mantén la ment desperta i conscient del moment."
        }
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
        type: 'uri',
        badge: 'uri',
        coords: [34.4320, 135.2304] // KIX
    }
];
;

const DEFAULT_EXPENSES = [
    { id: '1', category: 'Vols', concept: 'Vol Open-Jaw BCN-Tòquio / Kansai-BCN (Confirmat)', amount: 850, paid: true },
    { id: 'h-ueno', category: 'Allotjament', concept: 'Tomariya Ueno Hostel (06-09 Agost - 3 nits)', amount: 55, paid: true },
    { id: 'h-utsunomiya', category: 'Allotjament', concept: 'Guesthouse Utsunomiya (09-13 Agost - 4 nits)', amount: 90, paid: true },
    { id: 'h-shinjuku', category: 'Allotjament', concept: 'IMANO Tokyo Hostel Shinjuku (13-15 Agost)', amount: 58, paid: false },
    { id: 'h-fuji', category: 'Allotjament', concept: 'Cabin House Yado Fujinomiya (15-17 Agost)', amount: 53, paid: false },
    { id: 'h-takayama', category: 'Allotjament', concept: 'Guesthouse Ouka Takayama (17-20 Agost)', amount: 55, paid: false },
    { id: 'h-kanazawa', category: 'Allotjament', concept: 'Blue Hour Kanazawa (20-21 Agost)', amount: 17, paid: false },
    { id: 'h-kyoto', category: 'Allotjament', concept: 'Shijo Guesthouse Hive Kyoto (21-23 Agost)', amount: 34, paid: false },
    { id: 'h-osaka', category: 'Allotjament', concept: 'Acro Capsule Namba Osaka (23-25 Agost)', amount: 27, paid: false },
    { id: 'h-hiroshima', category: 'Allotjament', concept: 'Webase Hiroshima (25-27 Agost)', amount: 36, paid: false },
    { id: 't-week1', category: 'Transport', concept: 'Setmana 1: Tòquio, Kamakura, Utsunomiya, Nikko (Skyliner + Tobu Bus)', amount: 97, paid: false },
    { id: 't-week2', category: 'Transport', concept: 'Setmana 2: Fuji, Takayama, Nohi Bus, Kanazawa, Thunderbird a Kyoto', amount: 182, paid: false },
    { id: 't-week3', category: 'Transport', concept: 'Setmana 3: Kyoto, Osaka, Shinkansen Hiroshima, Ferry Miyajima, Haruka KIX', amount: 218, paid: false },
    { id: 't-taqbin', category: 'Transport', concept: 'Enviament Maleta Gran Ta-Q-Bin (Takayama -> Kyoto)', amount: 16, paid: false },
    { id: 'food-daily', category: 'Menjar i oci', concept: 'Menjar diari (Konbinis, Ramen, Gyudon, Izakayas - 21 dies @ 24€/dia)', amount: 504, paid: false },
    { id: 'leisure-temples', category: 'Menjar i oci', concept: 'Entrades Temples Nikko, Onsens, Cova Oya, Museu Pau', amount: 96, paid: false },
    { id: 'esim-data', category: 'Altres', concept: 'eSIM de dades mòbil (Ubigi / Holafly 21 dies)', amount: 30, paid: false },
    { id: 'insurance-heymondo', category: 'Altres', concept: 'Assegurança de viatge Heymondo (Pla Tranquilidad)', amount: 80.49, paid: true }
];

const DEFAULT_VIDEOS = [
    {
        id: '1',
        title: 'Nikko i el volcà Mont Nantai (2.486m)',
        url: 'https://www.youtube.com/watch?v=0h6Qz-Yx3wE',
        timestamp: '03:15',
        notes: 'Excursió de senderisme intens des de Nikko i el Llac Chuzenji. Molt recomanable ver el sender abans de pujar.'
    },
    {
        id: '2',
        title: 'Com utilitzar el servei Ta-Q-Bin (Yamato Transport)',
        url: 'https://www.youtube.com/watch?v=132K5J1K91c',
        timestamp: '02:00',
        notes: 'Com enviar la teva maleta gran des de Takayama directament a l\'hostel de Kyoto per viatjar lleuger a Shirakawa-go i Kanazawa.'
    },
    {
        id: '3',
        title: 'Guia de Kanazawa: Mercat Omicho i Barri Geisha',
        url: 'https://www.youtube.com/watch?v=JmBwQ1x9J2k',
        timestamp: '05:45',
        notes: 'Punts clau per visitar en les 24 hores que passaràs a Kanazawa abans de trobar-te a Kyoto.'
    }
];

const DEFAULT_TASKS = [
    { id: '1', text: 'Reclamar Tax-Free a la caixa mostrant el passaport original', completed: false },
    { id: '2', text: 'Comprovar reserva del bus Nohi (20/08) Takayama -> Shirakawa-go -> Kanazawa', completed: false }
];

const DEFAULT_LUGGAGE = [
    { id: 'l1', text: 'Motxilla de senderisme principal (30-40L)', completed: false },
    { id: 'l2', text: 'Calçat de trekking / trail running ja usat (crucial pel volcà Mont Nantai a Nikko i Fuji; mai estrenar calçat nou)', completed: false },
    { id: 'l3', text: 'Paravents / Impermeable lleuger de muntanya (a la muntanya i Nikko el temps pot canviar en 15 minuts)', completed: false },
    { id: 'l4', text: 'Roba tècnica transpirable de secat ràpid (per a la calor i humitat intensa de l\'agost)', completed: false },
    { id: 'l5', text: 'Tovallola de microfibra de secat ràpid (imprescindible per als onsens/banys termals i lavabos sense paperets)', completed: false },
    { id: 'l6', text: 'Farmaciola bàsica (tiretes per a nafres Compeed, Ibuprofè, Fortasec, suero de rehidratació oral i vaselina pels peus)', completed: false },
    { id: 'l7', text: 'Adaptador d\'endoll tipus A (2 clavilles planes paral·leles, 100V Japó)', completed: false },
    { id: 'l8', text: 'Passaport original en vigor (obligatori dur-lo a sobre per llei al Japó i imprescindible per a compres Tax-Free)', completed: false },
    { id: 'l9', text: '1 maleta de cabina + 1 motxilla de dia lleugera (15-20L) per a excursions i senderisme', completed: false },
    { id: 'l10', text: 'Picarol d\'os (Kuma-suzu) per al senderisme a Nikko i Okunikko (recomanat per la policia local)', completed: false },
    { id: 'l11', text: 'Cantimplora o bossa d\'aigua reomplible de 1.5L (la humitat a l\'agost requereix hidratació constant)', completed: false },
    { id: 'l12', text: 'Bastons de trekking telescòpics per a les baixades pedregoses del Mont Nantai i Fuji', completed: false },
    { id: 'l13', text: 'Frontal o llanterna petita per si es camina a la vora del capvespre', completed: false },
    { id: 'l14', text: 'Bateria externa Powerbank (10.000 - 20.000 mAh) per als dies llargs d\'excursió', completed: false },
    { id: 'l15', text: 'Roba interior i samarretes de secat ràpid per rentar a mà fàcilment a l\'hostel', completed: false },
    { id: 'l16', text: 'Gorra/sombrero i ulleres de sol pel sol alpí intens d\'agost', completed: false },
    { id: 'l17', text: 'Protector solar FPS 50+ resistent a la suor i repel·lent de mosquits fort (DEET/Picaridina)', completed: false },
    { id: 'l18', text: 'Bossa impermeable / zip-lock per a protegir telèfon i passaport si plou fort a la muntanya', completed: false },
    { id: 'l19', text: 'Bossa de tela plegable per a compres o menjar de konbini', completed: false }
];

const DEFAULT_SHOPPING = [
    { id: 's1', text: '📖 Goshuincho: Llibreta oficial per recollir els segells cal·ligràfics (Goshuin) fets a mà pels monjos de cada temple/santuari (~15 € llibreta, ~3-4 € segell)', completed: false },
    { id: 's2', text: '🍶 Sake artesà d\'Hida Takayama: Ampolles petites de les destil·leries tradicionals del barri vell de Sanmachi Suji (Funasaka o Harada Brewery)', completed: false },
    { id: 's3', text: '🥢 Hashi personalitzats: Bastonets de fusta artesana gravats amb el teu nom al moment (~10-15 €)', completed: false },
    { id: 's4', text: '🪵 Lacats en fusta Hida Shunkei (Takayama): Cuinera o caixetes de fusta d\'auró vernissada transparent tradicional dels Alps Japonesos', completed: false },
    { id: 's5', text: '✨ Fulla d\'or Kanazawahaku (Kanazawa): Cosmètica, dolços o petits detalls decorats amb la mítica fulla d\'or artesanal', completed: false },
    { id: 's6', text: '🍵 Te Matcha d\'alta selecció d\'Uji (Kyoto): Matcha de grau cerimonial comprat a botigues centenàries d\'Uji o Kyoto', completed: false },
    { id: 's7', text: '🍂 Te torrat Kaga Bōcha (Kanazawa): Te torrat de tija exclusiu de la regió d\'Ishikawa amb aroma de fruits secs', completed: false },
    { id: 's8', text: '🌿 Te verd de Shizuoka / Fuji: Te de fulla de les faldilles del Mont Fuji', completed: false },
    { id: 's9', text: '🪨 Ceràmica de Mashiko (Mashiko-yaki): Terrissa artesanal tradicional de Tochigi / Utsunomiya', completed: false },
    { id: 's10', text: '🔪 Ganivets artesanals japonesos (Osaka Doguyasuji o Seki): Ganivets de cuina d\'alta precisió gravats amb el teu nom', completed: false },
    { id: 's11', text: '🪔 Incens de sàndal de Kyoto: Incens natural de botigues tradicionals centenàries (com Shoyeido a Kyoto)', completed: false },
    { id: 's12', text: '🍁 Momiji Manju (Miyajima): Dolç en forma de fulla d\'adzeroler farcit de pasta de mongeta dolça (anko) o xocolata', completed: false },
    { id: 's13', text: '🎏 Tenugui: Mocador de cotó tradicional estampat a mà molt versàtil (~5-10 €)', completed: false },
    { id: 's14', text: '🎐 Furin: Campaneta de vent tradicional japonesa de vidre o ferro closca (~5-10 €)', completed: false },
    { id: 's15', text: '🦶 Pegats de mentol Kyusoku Jikan: Pegats refrescants pels peus descostats després de caminar 20 km (a qualsevol farmàcia, ~5 €)', completed: false },
    { id: 's16', text: '📝 Papereria de gamma alta: Llibretes Midori, Apica o Stology de paper d\'alta textura (~3-8 €)', completed: false }
];

const DEFAULT_PLACES = [
    { id: 'p1', text: '🏛️ [Pla B Nikko/Utsunomiya] Oya History Museum (Cova d\'Oya): Pedrera subterrània gegantina de pedra volcànica a 15 min d\'Utsunomiya. Catedral subterrània a 13°C (ideal si plou o fa molta calor)', completed: false },
    { id: 'p2', text: '🎨 [Pla B Kanazawa] 21st Century Museum of Contemporary Art: Museu d\'art modern d\'arquitectura circular mundialment famós (amb la piscina de Leandro Erlich). Perfecte si plou als jardins Kenroku-en', completed: false },
    { id: 'p3', text: '🍵 [Pla B Kyoto] Temple Byodoin a Uji: El temple imprès a les monedes de 10 iens i tast de Matcha fresc al costat del riu Uji (a 20 min en tren de Kyoto)', completed: false },
    { id: 'p4', text: '🏯 [Excursió des d\'Osaka/Kyoto] Castell d\'Himeji (La Garça Blanca): El castell feudal original més espectacular i millor conservat del Japó (a 30 min en Shinkansen)', completed: false },
    { id: 'p5', text: '🦌 [Excursió des de Kyoto] Nara & Temple Todai-ji: Parc dels cérvols sagrats lliures que et saluden i l\'edifici de fusta més gran del món amb el Gran Buda', completed: false },
    { id: 'p6', text: '♨️ [Pla B Osaka] Spa World / World Onsen: Complex termal indoor d\'Osaka amb banys tematitzats asiàtics i europeus per provar l\'onsen si plou', completed: false },
    { id: 'p7', text: '🌊 [Excursió des de Tòquio] Illa d\'Enoshima & Kamakura: Platja, coves marítimes d\'Iwaya i vistes del Fuji des de la costa', completed: false },
    { id: 'p8', text: '🏮 [Pla B Tòquio] Barri històric de Yanaka & Nezu Shrine: El Tòquio tradicional que va sobreviure als bombardeigs, amb carrers tranquils i templis de fusta', completed: false },
    { id: 'p9', text: '🏔️ [Miyajima Extra] Ascensió al Mont Misen: Pujada a peu o en telecabina fins al cim de l\'illa de Miyajima amb vistes 360° del Mar Interior de Seto', completed: false }
];

const DEFAULT_OBSERVATIONS = [
    { id: 'o1', text: '💴 Efectiu en Iens imprescindible: Cal dur sempre entre 5.000 i 10.000 JPY en efectiu a sobre. Màquines de bitllets rurals, busos de muntanya, entrades a temples, onsens i restaurants de ramen NOMÉS accepten efectiu.', completed: false },
    { id: 'o2', text: '🏦 On treure diners sense comissions: Utilitza les targetes N26 o Revolut als caixers 7-Bank (supermercats 7-Eleven) o E-net (FamilyMart). Tenen el menú en anglès/espanyol i la millor taxa de canvi.', completed: false },
    { id: 'o3', text: '💳 IC Card al Mòbil (Suica / Pasmo): Pots afegir la Suica/Pasmo directament a l\'Apple Wallet o Google Wallet per pagar metros, busos, vending machines i taquilles d\'estació amb un sol toc.', completed: false },
    { id: 'o4', text: '🛍️ Compres Tax-Free (10% Descompte): Duu SEMPRE el passaport original a sobre. En compres superiors a 5.000 JPY (~32 €) a la mateixa botiga t\'apliquen el 10% de descompte d\'impostos directament a la caixa.', completed: false },
    { id: 'o5', text: '🚫 Mai no es deixa propina: La propina no existeix al Japó i es considera un insult o un error. Si te la deixes a la taula, el cambrer sortirà corrent al carrer per retornar-te els diners.', completed: false },
    { id: 'o6', text: '🍣 Menjar de Konbini (7-Eleven, FamilyMart, Lawson): Menjar d\'altíssima frescor i qualitat molt barat. Must try: Onigiri de salmó/tonyina (~1 €), sandvitx d\'ou Tamago Sando (~1.50 €) i FamiChiki.', completed: false },
    { id: 'o7', text: '🍜 Ordre a les màquines de Ramen (Ticket Vending Machines): Als restaurants tradicionals de ramen selecciones el plat a la màquina de l\'entrada, pagues en efectiu i lliures el tiquet de paper al xef.', completed: false },
    { id: 'o8', text: '🥢 Mai no clavar els bastonets en vertical a l\'arròs (Tsukitate-bashi): Aquest gest només es fa en rituals funeraris. Deixa els bastonets sobre el suport de ceràmica (hashi-oki).', completed: false },
    { id: 'o9', text: '🍜 Fer soroll al menjar fideus (Slurping): Absorbir fideus de ramen, soba o udon fent soroll és socialment acceptat i indica que el plat està boníssim, a més de refredar el caldo.', completed: false },
    { id: 'o10', text: '💧 Aigua i te gratuïts als restaurants: A gairebé tots els restaurants locals et serviran un vas d\'aigua amb gel (Ohiya) o te verd calent (Ocha) totalment gratuït només seure (Okawari).', completed: false },
    { id: 'o11', text: '🤫 Silenci al Transport Públic: Als trens i metros està mal vist parlar per telèfon o a crits. Posa el telèfon en mode silenciós (Manner Mode). Per parlar al Shinkansen ves als vestíbuls.', completed: false },
    { id: 'o12', text: '🗑️ Guardar les escombraries a la motxilla: Gairebé no hi ha papereres públiques als carrers. Porta una bossa de plàstic a la motxilla. Utilitza les papereres de llaunes al costat de les vending machines.', completed: false },
    { id: 'o13', text: '🚫 No caminar menjar o bevent pel carrer: A la cultura japonesa no es camina mentre es menja. Consumeix l\'snack al costat del konbini o vending machine on l\'hagis comprat o busca un banc.', completed: false },
    { id: 'o14', text: '👟 Sabates fora a les entrades (Genkan): En Ryokans, molts hostals, temples i zones amb tatami cal treure\'s les sabates al graó d\'entrada (genkan) i anar amb mitjons nets sense forats.', completed: false },
    { id: 'o15', text: '🚶 Escales mecàniques (Tòquio vs Kansai): A Tòquio la gent s\'atura a la part esquerra deixant la dreta lliure. A Kansai (Osaka/Kyoto) és a la inversa (s\'aturen a la dreta).', completed: false },
    { id: 'o16', text: '🧳 Taquilles d\'Estació (Coin Lockers): Totes les estacions tenen taquilles de diferents mides pagables amb Suica o monedes de 100 JPY per deixar la motxilla o maleta unes hores.', completed: false },
    { id: 'o17', text: '🥵 Calor i Humitat d\'Agost (Natsubate): L\'agost és molt humit i calorós (33-38°C). Beu aigua constantment, compra begudes isotòniques com Pocari Sweat o Aquarius i fes pauses amb aire condicionat.', completed: false },
    { id: 'o18', text: '♨️ Etiqueta als Onsens: Dutxa\'t i renta\'t 100% amb sabó abans d\'entrar a l\'aigua calenta. S\'entra 100% nu (sense banyador). Si tens tatuatges grans, cobreix-los amb un adhesiu.', completed: false },
    { id: 'o19', text: '🐻 Picarol d\'Os a la Muntanya (Nikko / Alps): Als camins de bosc de Nikko, Okunikko i els Alps hi ha ossos negres japonesos. Porta el picarol (Kuma-suzu) penjat de la motxilla.', completed: false },
    { id: 'o20', text: '🦟 Repel·lent de mosquits i protector solar: Els mosquits d\'estiu (ka) són agressius en zones de muntanya i humides. Aplica protector solar FPS 50+ i repel·lent fort.', completed: false },
    { id: 'o21', text: '🗺️ Google Maps i Google Lens: Google Maps indica el vagó exacte de tren, la sortida exacta d\'estació i el preu. Google Lens és essencial per traduir menús de fusta amb la càmera.', completed: false },
    { id: 'o22', text: '🧳 Servei d\'enviament de maletes (Ta-Q-Bin / Yamato): Enviar la maleta gran des de Takayama cap a Kyoto per ~16 € permet viatjar ultralleuger als busos de muntanya de Shirakawa-go.', completed: false },
    { id: 'o23', text: '🚨 Apps d\'Emergència: Descarrega l\'app Safety Tips (alertes de terratrèmols i calor en anglès) i guarda el número de l\'Ambaixada d\'Espanya a Tòquio (+81 80 4368 2817).', completed: false },
    { id: 'o24', text: '🔌 Adaptador tipus A i Powerbank: Endolls de 2 clavilles planes (100V Japó). Carrega la bateria externa Powerbank cada nit per no quedar-te sense mòbil durant la ruta.', completed: false }
];

// --- 2. ESTAT GLOBAL DE L'APLICACIÓ (STATE) ---
// L'objecte `state` és com la "memòria de treball" de l'aplicació mentre està oberta.
// Recorda quina pestanya estàs veient, quins filtres tens activats i conté les llistes de dades.
let state = {
    currentTab: 'itinerary',
    itineraryFilter: 'all',
    budgetLimit: 2500,
    budgetFilterStatus: 'all',
    budgetFilterCategory: 'all',
    budgetSortBy: 'default',
    budgetSortOrder: 'desc',
    expenses: [],
    videos: [],
    tasks: [],
    luggage: [],
    shopping: [],
    places: [],
    observations: []
};

// Map variable
let map = null;
let mapMarkers = [];
let routePolyline = null;

// --- STATE MANAGEMENT (LOCAL STORAGE) ---

function loadState() {
    state.budgetLimit = parseInt(localStorage.getItem('japo_budget_limit')) || 2500;
    state.expenses = JSON.parse(localStorage.getItem('japo_expenses')) || DEFAULT_EXPENSES;
    state.videos = JSON.parse(localStorage.getItem('japo_videos')) || DEFAULT_VIDEOS;
    state.tasks = JSON.parse(localStorage.getItem('japo_tasks')) || DEFAULT_TASKS;
    state.luggage = JSON.parse(localStorage.getItem('japo_luggage')) || DEFAULT_LUGGAGE;
    state.shopping = JSON.parse(localStorage.getItem('japo_shopping')) || DEFAULT_SHOPPING;
    state.places = JSON.parse(localStorage.getItem('japo_places')) || DEFAULT_PLACES;
    state.observations = JSON.parse(localStorage.getItem('japo_observations')) || DEFAULT_OBSERVATIONS;

    // Assegurar que la SIM card està present si l'usuari ja tenia dades guardades
    const hasSimExpense = state.expenses.some(exp => exp.concept.toLowerCase().includes('sim'));
    if (!hasSimExpense) {
        state.expenses.push({ id: 'sim-card-exp', category: 'Altres', concept: 'Targeta SIM internet Japó', amount: 100, paid: false });
        saveState('expenses');
    }

    // Assegurar que l'assegurança Heymondo està present i pagada
    const hasHeymondoExpense = state.expenses.some(exp => exp.id === 'insurance-heymondo' || exp.concept.toLowerCase().includes('heymondo'));
    if (!hasHeymondoExpense) {
        state.expenses.push({ id: 'insurance-heymondo', category: 'Altres', concept: 'Assegurança de viatge Heymondo (Pla Tranquilidad)', amount: 80.49, paid: true });
        saveState('expenses');
    }

    // Actualitzar les despeses de transport al desglossament V6 de 513 €
    const hasOldTransport = state.expenses.some(exp => exp.id === 't-airports' || exp.id === 't-tokyo-nikko');
    if (hasOldTransport) {
        state.expenses = state.expenses.filter(exp => !exp.id.startsWith('t-'));
        state.expenses.push(
            { id: 't-week1', category: 'Transport', concept: 'Setmana 1: Tòquio, Kamakura, Utsunomiya, Nikko (Skyliner + Tobu Bus)', amount: 97, paid: false },
            { id: 't-week2', category: 'Transport', concept: 'Setmana 2: Fuji, Takayama, Nohi Bus, Kanazawa, Thunderbird a Kyoto', amount: 182, paid: false },
            { id: 't-week3', category: 'Transport', concept: 'Setmana 3: Kyoto, Osaka, Shinkansen Hiroshima, Ferry Miyajima, Haruka KIX', amount: 218, paid: false },
            { id: 't-taqbin', category: 'Transport', concept: 'Enviament Maleta Gran Ta-Q-Bin (Takayama -> Kyoto)', amount: 16, paid: false }
        );
        saveState('expenses');
    }

    const hasSimTask = state.tasks.some(task => task.text.toLowerCase().includes('sim'));
    if (!hasSimTask) {
        state.tasks.push({ id: 'sim-card-task', text: 'Comprar targeta SIM / eSIM per a internet al Japó (~100 €)', completed: false });
        saveState('tasks');
    }

    // Afegir les noves tasques de maleta si no hi són
    const hasLuggageStrategy = state.tasks.some(task => task.id === 'luggage-strategy-task');
    if (!hasLuggageStrategy) {
        state.tasks.push({ id: 'luggage-strategy-task', text: 'Decidir combinació de maletes (idealment 1 maleta de cabina + 1 motxilla per caminar)', completed: false });
        state.tasks.push({ id: 'takkyubin-service-task', text: 'Consultar funcionament i preus del servei d\'enviament de maletes (Ta-Q-Bin / Yamato)', completed: false });
        saveState('tasks');
    }

    // Afegir la tasca dels bancs si no hi és
    const hasBankTask = state.tasks.some(task => task.id === 'bank-commissions-task');
    if (!hasBankTask) {
        state.tasks.push({ id: 'bank-commissions-task', text: 'Buscar targeta/banc sense comissions pel viatge (revisar Revolut, Wise o un compte de promoció local)', completed: false });
        saveState('tasks');
    }

    // Afegir recursos de N26 si no hi són
    const hasN26Resources = state.videos.some(vid => vid.id === 'n26-1');
    if (!hasN26Resources) {
        const n26Items = [
            {
                id: 'n26-1',
                title: 'Guia N26: Pagar amb targeta al Japó',
                url: 'https://n26.com/es-es/pagar-con-tarjeta-en-japon',
                timestamp: '',
                notes: 'Informació oficial sobre l\'ús, tipus de canvi i comissions de la targeta N26 al Japó.'
            },
            {
                id: 'n26-2',
                title: 'Japonpedia: Targeta N26 al Japó',
                url: 'https://japonpedia.com/tarjeta-n26-japon/',
                timestamp: '',
                notes: 'Guia pràctica de viatgers sobre l\'ús de N26 en caixers i comerços japonesos.'
            },
            {
                id: 'n26-3',
                title: 'Comiviajeros: Com funciona N26 a l\'estranger',
                url: 'https://comiviajeros.com/tarjeta-n26-pagar-extranjero/',
                timestamp: '',
                notes: 'Comparativa i experiències pràctiques d\'ús de la targeta de viatge N26.'
            }
        ];
        state.videos.push(...n26Items);
        saveState('videos');
    }

    // Afegir els nous elements de maleta si no hi són
    const hasNewLuggageItems = state.luggage.some(item => item.id === 'l9');
    if (!hasNewLuggageItems) {
        const itemsToAdd = [
            { id: 'l9', text: '1 o 2 maletes de cabina petites (idealment només 1 si és possible)', completed: false },
            { id: 'l10', text: 'Motxilla petita de dia (15-20L) per al senderisme', completed: false },
            { id: 'l11', text: 'Cantimplora o bossa d\'aigua (mínim 1.5L, fa molta calor)', completed: false },
            { id: 'l12', text: 'Bastons de trekking per a les baixades de muntanya', completed: false },
            { id: 'l13', text: 'Roba interior i samarretes de secat ràpid per rentar a mà', completed: false },
            { id: 'l14', text: 'Gorra i ulleres de sol pel sol intens d\'agost', completed: false },
            { id: 'l15', text: 'Protector solar resistent a la suor i repel·lent de mosquits fort', completed: false }
        ];
        state.luggage.push(...itemsToAdd);
        saveState('luggage');
    }

    // Forçar l'actualització de les llistes enriquides V6
    const hasV6Luggage = state.luggage.some(item => item.id === 'l19');
    if (!hasV6Luggage) {
        state.luggage = DEFAULT_LUGGAGE;
        saveState('luggage');
    }

    const hasV6Shopping = state.shopping.some(item => item.id === 's16');
    if (!hasV6Shopping) {
        state.shopping = DEFAULT_SHOPPING;
        saveState('shopping');
    }

    const hasV6Places = state.places.some(item => item.id === 'p9');
    if (!hasV6Places) {
        state.places = DEFAULT_PLACES;
        saveState('places');
    }

    const hasV6Obs = state.observations.some(item => item.id === 'o24');
    if (!hasV6Obs) {
        state.observations = DEFAULT_OBSERVATIONS;
        saveState('observations');
    }
}

// `saveState(key)` agafa les dades de l'objecte `state` i les converteix en text (JSON)
// per desar-les al `localStorage` del navegador.
function saveState(key) {
    if (key === 'budgetLimit' || !key) localStorage.setItem('japo_budget_limit', state.budgetLimit.toString());
    if (key === 'expenses' || !key) localStorage.setItem('japo_expenses', JSON.stringify(state.expenses));
    if (key === 'videos' || !key) localStorage.setItem('japo_videos', JSON.stringify(state.videos));
    if (key === 'tasks' || !key) localStorage.setItem('japo_tasks', JSON.stringify(state.tasks));
    if (key === 'luggage' || !key) localStorage.setItem('japo_luggage', JSON.stringify(state.luggage));
    if (key === 'shopping' || !key) localStorage.setItem('japo_shopping', JSON.stringify(state.shopping));
    if (key === 'places' || !key) localStorage.setItem('japo_places', JSON.stringify(state.places));
    if (key === 'observations' || !key) localStorage.setItem('japo_observations', JSON.stringify(state.observations));
}

// --- 4. CONTROL DE NAVEGACIÓ I PESTANYES (UI NAVIGATION) ---

// Metadades visuals de la capçalera (Títol, Kanji en japonès i imatge decorativa per a cada secció)
const SECTION_META = {
    itinerary: { title: 'Cronograma del Viatge', kanji: '日程', icon: 'assets/icons/bonsai.jpg' },
    map: { title: 'Mapa de la Ruta', kanji: '地図', icon: 'assets/icons/fuji.jpg' },
    budget: { title: 'Control del Pressupost', kanji: '予算', icon: 'assets/icons/manekineko.jpg' },
    transports: { title: 'Transports i Trajectes', kanji: '交通', icon: 'assets/icons/fuji.jpg' },
    tasks: { title: 'Tasques Pendents', kanji: '作業', icon: 'assets/icons/crane.jpg' },
    practical: { title: 'Guia Pràctica, Maleta i Notes', kanji: '準備', icon: 'assets/icons/bamboo.jpg' },
    emergencies: { title: 'Dades Importants i Emergències', kanji: '緊急', icon: 'assets/icons/lantern.jpg' },
    videos: { title: 'Vídeos de YouTube i Recursos', kanji: '動画', icon: 'assets/icons/lantern.jpg' }
};

// Funció que activa la sub-pestanya interna triada a la secció "Guia Pràctica" (Maleta, Tasques, Compres, Visites, Consells)
function initPracticalSubtabs() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.practical-subnav-btn');
        if (!btn) return;

        e.preventDefault();
        const target = btn.getAttribute('data-subtab');
        if (!target) return;

        const subBtns = document.querySelectorAll('.practical-subnav-btn');
        const subContents = document.querySelectorAll('.practical-subtab-content');

        subBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        subContents.forEach(content => {
            if (content.id === `practical-sub-${target}`) {
                content.classList.add('active');
                content.style.display = 'block';
            } else {
                content.classList.remove('active');
                content.style.display = 'none';
            }
        });
    });
}

// Funció principal de canvi de pestanyes de la barra lateral i mòbil
function initTabSwitching() {
    const navButtons = document.querySelectorAll('.nav-btn, .mobile-nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            state.currentTab = target;

            // Dynamic 2-Floor Header Update
            const meta = SECTION_META[target] || SECTION_META.itinerary;
            const img = document.getElementById('header-section-image');
            const title = document.getElementById('header-section-title');
            const kanji = document.getElementById('header-section-kanji');

            if (img) img.src = meta.icon;
            if (title) title.textContent = meta.title;
            if (kanji) kanji.textContent = meta.kanji;

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

// Countdown timer: Intense mode before flight, and Daily Secret Wisdom in top badge during the trip!
function initCountdown() {
    const targetDate = new Date('2026-08-05T00:00:00');
    const endDate = new Date('2026-08-28T23:59:59');
    const today = new Date();
    
    const countText = document.getElementById('countdown-days');
    const badge = document.getElementById('countdown-container');
    
    if (!badge) return;

    // YYYY-MM-DD date formatter for local day match
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (today >= targetDate && today <= endDate) {
        // During trip: Dynamically load today's Secret Wisdom Quote in the top badge!
        const todayDay = DEFAULT_ITINERARY.find(d => d.date === todayStr);
        if (todayDay && todayDay.secretWisdom) {
            badge.innerHTML = `🔮 ${todayDay.dayLabel}: <strong>${todayDay.secretWisdom.kanji} (${todayDay.secretWisdom.romaji})</strong> — "${todayDay.secretWisdom.translation}"`;
            badge.className = "countdown-badge trip-ontour-daily";
        } else {
            badge.innerHTML = "🇯🇵 ON TOUR! Disfruta URI!! ✈️⛩️";
            badge.className = "countdown-badge trip-ontour";
        }
    } else if (today > endDate) {
        badge.innerHTML = "🌸 Viatge al Japó completat! Memòries per sempre! 🇯🇵⛩️";
        badge.className = "countdown-badge trip-ontour";
    } else {
        // Intense vibrant countdown before flight
        badge.className = "countdown-badge intense-countdown";
        if (countText) countText.innerText = diffDays > 0 ? diffDays : 0;
    }
}

// 1. Itinerary Renderer
function renderItinerary() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';

    const filteredData = DEFAULT_ITINERARY.filter(day => {
        if (state.itineraryFilter === 'all') return true;
        if (state.itineraryFilter === 'overlap') return day.type === 'overlap';
        if (state.itineraryFilter === 'uri') return day.type === 'uri';
        return true;
    });

    filteredData.forEach(day => {
        const item = document.createElement('div');
        item.className = `timeline-item ${day.type}`;

        const badgeHtml = day.badge === 'shared' 
            ? `<span class="badge badge-shared"><i class="fa-solid fa-users"></i> Compartit</span>`
            : day.badge === 'uri'
                ? `<span class="badge badge-uri"><i class="fa-solid fa-user"></i> Uri (Tu)</span>`
                : `<span class="badge badge-banana"><i class="fa-solid fa-user-astronaut"></i> Banana</span>`;

        let activitiesHtml = '';
        day.activities.forEach(act => {
            activitiesHtml += `<li class="day-activity-item">${act}</li>`;
        });

        const secretHtml = day.secretWisdom ? `
            <div class="secret-wisdom-wrapper">
                <button class="btn-reveal-secret" data-day="${day.dayLabel}" data-date="${day.date}">
                    <i class="fa-solid fa-scroll"></i> 🔮 Desvelar Consell Secret del Dia <span class="secret-tag">秘密</span>
                </button>
                <div class="secret-wisdom-card hidden" id="secret-${day.dayLabel}">
                    <div class="secret-header">
                        <span class="secret-kanji">${day.secretWisdom.kanji}</span>
                        <span class="secret-romaji">${day.secretWisdom.romaji}</span>
                    </div>
                    <p class="secret-translation">"${day.secretWisdom.translation}"</p>
                </div>
            </div>
        ` : '';

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
                    ${secretHtml}
                </div>
            </div>
        `;
        container.appendChild(item);
    });

    // Attach click listeners with date lock checking
    document.querySelectorAll('.btn-reveal-secret').forEach(btn => {
        btn.addEventListener('click', () => {
            const dayId = btn.getAttribute('data-day');
            const dayDate = btn.getAttribute('data-date');
            const card = document.getElementById(`secret-${dayId}`);
            if (!card) return;

            // Check if day is unlocked (today >= dayDate)
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            const todayStr = `${yyyy}-${mm}-${dd}`;

            const isUnlocked = todayStr >= dayDate;

            if (!isUnlocked) {
                // Future day is locked!
                const d = new Date(dayDate);
                const formattedDate = `${d.getDate()}/${d.getMonth() + 1}`;
                card.innerHTML = `
                    <div style="text-align: center; padding: 6px 0; color: var(--accent-red); font-weight: 700; font-size: 0.9rem;">
                        🔒 Aquest consell es desbloquejarà el ${dayId} (${formattedDate})!
                    </div>
                `;
                card.classList.remove('hidden');
                btn.innerHTML = `<i class="fa-solid fa-lock"></i> 🔒 Consell Bloquejat <span class="secret-tag">秘密</span>`;
                return;
            }

            // Unlocked day (today or past day)
            const isHidden = card.classList.contains('hidden');
            if (isHidden) {
                card.classList.remove('hidden');
                btn.innerHTML = `<i class="fa-solid fa-book-open"></i> 📜 Consell Revelat <span class="secret-tag">秘密</span>`;
            } else {
                card.classList.add('hidden');
                btn.innerHTML = `<i class="fa-solid fa-scroll"></i> 🔮 Desvelar Consell Secret del Dia <span class="secret-tag">秘密</span>`;
            }
        });
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

    // Premium light Japanese tile layer (CARTO Voyager)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Filter out coordinates for plotting lines (Japan region only: Lat 30..46, Lng 128..146)
    const coordsList = DEFAULT_ITINERARY
        .filter(day => day.coords && day.coords.length === 2)
        .filter(day => day.coords[0] >= 30 && day.coords[0] <= 46 && day.coords[1] >= 128 && day.coords[1] <= 146)
        .map(day => ({
            coords: day.coords,
            title: day.title,
            date: day.date,
            type: day.type,
            dayLabel: day.dayLabel
        }));

    // Draw markers
    coordsList.forEach(point => {
        let color = '#1d4ed8'; // Shared Royal Indigo Blue
        if (point.type === 'uri') color = '#d63031'; // Uri Red
        if (point.type === 'banana') color = '#111318'; // Banana Black

        const marker = L.circleMarker(point.coords, {
            radius: 7,
            fillColor: color,
            color: '#ffffff',
            weight: 2,
            opacity: 0.9,
            fillOpacity: 0.9
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

    // Add Shirakawa-go marker explicitly if not in coordsList
    const hasShirakawaMarker = coordsList.some(p => p.coords[0] === 36.2562 && p.coords[1] === 136.9042);
    if (!hasShirakawaMarker) {
        const shirakawaPoint = {
            coords: [36.2562, 136.9042],
            title: 'Shirakawa-go (Excursió conjunta)',
            date: '2026-08-20',
            type: 'overlap',
            dayLabel: 'Dia 15'
        };
        coordsList.push(shirakawaPoint);

        const marker = L.circleMarker(shirakawaPoint.coords, {
            radius: 7,
            fillColor: '#1d4ed8',
            color: '#ffffff',
            weight: 2,
            opacity: 0.9,
            fillOpacity: 0.9
        }).addTo(map);

        marker.bindPopup(`
            <div class="map-popup-content">
                <h3>Dia 15: Shirakawa-go (Excursió conjunta)</h3>
                <p><strong>Data:</strong> 2026-08-20</p>
                <p>Tipus de ruta: <span style="color:#1d4ed8; font-weight:bold;">OVERLAP</span></p>
            </div>
        `);
        mapMarkers.push(marker);
    }

    // --- EXACT COLOR ROUTE SEGMENTS ---
    // 1. Uri Solo Segments (Red #d63031, weight 3)
    const uriSolo1 = [
        [35.7111, 139.7770], // Ueno
        [35.7147, 139.7967], // Asakusa
        [35.3192, 139.5467], // Kamakura
        [36.5551, 139.8826], // Utsunomiya
        [36.7645, 139.4912], // Mt Nantai
        [36.7845, 139.4448], // Senjogahara
        [36.7581, 139.5989], // Nikko Toshogu
        [35.6938, 139.7032]  // Shinjuku (rejoins Banana)
    ];

    const uriSolo2 = [
        [36.2562, 136.9042], // Shirakawa-go (separates)
        [36.5613, 136.6562], // Kanazawa
        [35.0116, 135.7681]  // Kyoto (rejoins Banana)
    ];

    // 2. Banana Solo Segments (Black #111318, weight 3)
    const bananaSoloSegment1 = [
        [35.2238, 138.6133], // Fujinomiya
        [35.2536, 139.1553], // Odawara
        [35.1815, 136.9066], // Nagoya
        [36.1461, 137.2520]  // Takayama
    ];

    const bananaSoloSegment2 = [
        [36.2562, 136.9042], // Shirakawa-go
        [35.0116, 135.7681]  // Kyoto
    ];

    // 3. Shared / Overlap Segments (Vibrant Royal Indigo Blue #1d4ed8, weight 4)
    const sharedSegment1 = [
        [35.6938, 139.7032], // Shinjuku
        [35.6580, 139.7016], // Shibuya
        [35.2238, 138.6133], // Fujinomiya
        [35.3606, 138.7274], // Mt Fuji
        [36.1461, 137.2520], // Takayama
        [36.2562, 136.9042]  // Shirakawa-go
    ];

    const sharedSegment2 = [
        [35.0116, 135.7681], // Kyoto
        [34.9671, 135.7727], // Fushimi
        [34.6687, 135.5013], // Namba Osaka
        [34.6525, 135.5063], // Shinsekai
        [34.2965, 132.3206], // Miyajima
        [34.3927, 132.4526], // Hiroshima Peace Park
        [34.4320, 135.2304]  // KIX
    ];

    // Draw Uri Solo Lines (Red)
    L.polyline(uriSolo1, { color: '#d63031', weight: 3, opacity: 0.95 }).addTo(map);
    L.polyline(uriSolo2, { color: '#d63031', weight: 3, opacity: 0.95 }).addTo(map);

    // Draw Banana Solo Lines (Sumi Black)
    L.polyline(bananaSoloSegment1, { color: '#111318', weight: 3, opacity: 0.95 }).addTo(map);
    L.polyline(bananaSoloSegment2, { color: '#111318', weight: 3, opacity: 0.95 }).addTo(map);

    // Draw Shared Lines (Vibrant Royal Indigo Blue)
    L.polyline(sharedSegment1, { color: '#1d4ed8', weight: 4, opacity: 0.95 }).addTo(map);
    L.polyline(sharedSegment2, { color: '#1d4ed8', weight: 4, opacity: 0.95 }).addTo(map);

    // Zoom map fit bounds
    const allCoords = coordsList.map(p => p.coords);
    if (allCoords.length > 0) {
        const bounds = L.polyline(allCoords).getBounds();
        map.fitBounds(bounds, { padding: [30, 30] });
    }

    // OSM Map expander button handler
    const expandBtn = document.getElementById('btn-toggle-osm-size');
    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            const mapEl = document.getElementById('map-element');
            if (mapEl) {
                const currentHeight = mapEl.style.height || '400px';
                if (currentHeight === '400px' || !mapEl.style.height) {
                    mapEl.style.height = '800px';
                    expandBtn.innerHTML = '<i class="fa-solid fa-compress"></i> Reduir Mapa OSM';
                } else {
                    mapEl.style.height = '400px';
                    expandBtn.innerHTML = '<i class="fa-solid fa-expand"></i> Ampliar Mapa OSM';
                }
                setTimeout(() => map.invalidateSize(), 200);
            }
        });
    }
}

// 3. Budget Module
function renderBudget() {
    const tableBody = document.getElementById('expense-table-body');
    tableBody.innerHTML = '';

    let totalSpent = 0;
    let totalPaid = 0;
    let totalPending = 0;
    const limit = state.budgetLimit || 2500;

    // Overall totals for full budget metric bar
    state.expenses.forEach(exp => {
        const amt = parseFloat(exp.amount) || 0;
        totalSpent += amt;
        if (exp.paid) totalPaid += amt;
        else totalPending += amt;
    });

    // 1. Filter expenses
    let displayExpenses = state.expenses.filter(exp => {
        if (state.budgetFilterStatus === 'paid' && !exp.paid) return false;
        if (state.budgetFilterStatus === 'pending' && exp.paid) return false;
        if (state.budgetFilterCategory !== 'all' && exp.category !== state.budgetFilterCategory) return false;
        return true;
    });

    // 2. Sort expenses
    if (state.budgetSortBy === 'amount-desc') {
        displayExpenses.sort((a, b) => b.amount - a.amount);
    } else if (state.budgetSortBy === 'amount-asc') {
        displayExpenses.sort((a, b) => a.amount - b.amount);
    } else if (state.budgetSortBy === 'amount') {
        displayExpenses.sort((a, b) => state.budgetSortOrder === 'desc' ? b.amount - a.amount : a.amount - b.amount);
    } else if (state.budgetSortBy === 'category') {
        displayExpenses.sort((a, b) => state.budgetSortOrder === 'desc' ? b.category.localeCompare(a.category) : a.category.localeCompare(b.category));
    } else if (state.budgetSortBy === 'concept') {
        displayExpenses.sort((a, b) => state.budgetSortOrder === 'desc' ? b.concept.localeCompare(a.concept) : a.concept.localeCompare(b.concept));
    } else if (state.budgetSortBy === 'paid') {
        displayExpenses.sort((a, b) => state.budgetSortOrder === 'desc' ? (b.paid === a.paid ? 0 : b.paid ? 1 : -1) : (a.paid === b.paid ? 0 : a.paid ? 1 : -1));
    }

    if (displayExpenses.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `<td colspan="5" style="text-align: center; padding: 20px; color: var(--text-muted);">No s'ha trobat cap despesa amb els filtres seleccionats.</td>`;
        tableBody.appendChild(emptyRow);
    } else {
        displayExpenses.forEach(exp => {
            const amt = parseFloat(exp.amount) || 0;
            const row = document.createElement('tr');
            const isPaid = exp.paid === true;
            const statusBadge = isPaid 
                ? `<button class="btn-toggle-paid paid" data-id="${exp.id}" style="background: rgba(29, 78, 216, 0.12); color: var(--indigo-navy); border: 1px solid rgba(29, 78, 216, 0.35); padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">☑️ Pagat</button>`
                : `<button class="btn-toggle-paid pending" data-id="${exp.id}" style="background: rgba(214, 48, 49, 0.12); color: var(--accent-red); border: 1px solid rgba(214, 48, 49, 0.35); padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">⏳ Pendent</button>`;

            row.innerHTML = `
                <td><span class="expense-category-cell">${getCategoryEmoji(exp.category)} ${exp.category}</span></td>
                <td>${exp.concept}</td>
                <td style="font-weight: 600;">${amt.toLocaleString('ca-ES')} €</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn-delete-expense" data-id="${exp.id}" title="Eliminar despesa">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Update TH sort icons
    document.querySelectorAll('.sortable-th').forEach(th => {
        const key = th.getAttribute('data-sort-key');
        const icon = th.querySelector('.sort-icon');
        if (!icon) return;
        if (state.budgetSortBy === key || (key === 'amount' && (state.budgetSortBy === 'amount-desc' || state.budgetSortBy === 'amount-asc'))) {
            th.classList.add('active-sort');
            const isDesc = state.budgetSortBy === 'amount-desc' || state.budgetSortOrder === 'desc';
            icon.className = isDesc ? 'fa-solid fa-sort-down sort-icon' : 'fa-solid fa-sort-up sort-icon';
        } else {
            th.classList.remove('active-sort');
            icon.className = 'fa-solid fa-sort sort-icon';
        }
    });

    // Update UI elements
    const headerLimitEl = document.getElementById('budget-header-limit');
    if (headerLimitEl) headerLimitEl.innerText = `${limit.toLocaleString('ca-ES')} €`;

    const limitTextEl = document.getElementById('budget-limit-text');
    if (limitTextEl) limitTextEl.innerText = `Límit: ${limit.toLocaleString('ca-ES')} €`;

    const spentTextEl = document.getElementById('budget-spent-text');
    if (spentTextEl) spentTextEl.innerText = `${totalSpent.toLocaleString('ca-ES')} € gastats`;

    const paidTextEl = document.getElementById('budget-paid-text');
    if (paidTextEl) paidTextEl.innerText = `☑️ Pagat: ${totalPaid.toLocaleString('ca-ES')} €`;

    const pendingTextEl = document.getElementById('budget-pending-text');
    if (pendingTextEl) pendingTextEl.innerText = `⏳ Pendent: ${totalPending.toLocaleString('ca-ES')} €`;

    let percentage = (totalSpent / limit) * 100;
    if (percentage > 100) percentage = 100;
    
    const progressBar = document.getElementById('budget-progress-bar');
    if (progressBar) progressBar.style.width = `${percentage}%`;

    const statusMessage = document.getElementById('budget-status-message');
    if (statusMessage) {
        if (totalSpent > limit) {
            progressBar.style.background = 'var(--accent-red)';
            progressBar.style.boxShadow = '0 0 10px rgba(214, 48, 49, 0.5)';
            statusMessage.innerHTML = `⚠️ Compte! Has superat el pressupost per <strong>${(totalSpent - limit).toLocaleString('ca-ES')} €</strong>.`;
            statusMessage.className = 'budget-status-message warning';
        } else {
            progressBar.style.background = 'linear-gradient(90deg, var(--indigo-navy), var(--accent-red))';
            progressBar.style.boxShadow = '0 4px 12px rgba(29, 78, 216, 0.3)';
            statusMessage.innerHTML = `Estàs dins del pressupost estimat! Et queden <strong>${(limit - totalSpent).toLocaleString('ca-ES')} €</strong>.`;
            statusMessage.className = 'budget-status-message';
        }
    }

    // Toggle paid status listener
    document.querySelectorAll('.btn-toggle-paid').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const exp = state.expenses.find(e => e.id === id);
            if (exp) {
                exp.paid = !exp.paid;
                saveState('expenses');
                renderBudget();
            }
        });
    });

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

function initBudgetFilters() {
    document.addEventListener('click', (e) => {
        const th = e.target.closest('.sortable-th');
        if (!th) return;

        const key = th.getAttribute('data-sort-key');
        if (!key) return;

        if (state.budgetSortBy === key || (key === 'amount' && (state.budgetSortBy === 'amount-desc' || state.budgetSortBy === 'amount-asc'))) {
            state.budgetSortOrder = state.budgetSortOrder === 'asc' ? 'desc' : 'asc';
            if (key === 'amount') state.budgetSortBy = state.budgetSortOrder === 'desc' ? 'amount-desc' : 'amount-asc';
        } else {
            state.budgetSortBy = key;
            state.budgetSortOrder = 'desc';
            if (key === 'amount') state.budgetSortBy = 'amount-desc';
        }
        renderBudget();
    });
}

function initBudgetForm() {
    const form = document.getElementById('expense-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const category = document.getElementById('expense-category').value;
            const concept = document.getElementById('expense-concept').value;
            const amount = parseFloat(document.getElementById('expense-amount').value);
            const paid = document.getElementById('expense-paid') ? document.getElementById('expense-paid').checked : false;

            if (!concept || isNaN(amount)) return;

            const newExpense = {
                id: Date.now().toString(),
                category,
                concept,
                amount,
                paid
            };

            state.expenses.push(newExpense);
            saveState('expenses');
            renderBudget();

            // Reset form
            form.reset();
        });
    }

    const editLimitBtn = document.getElementById('btn-edit-budget-limit');
    if (editLimitBtn) {
        editLimitBtn.addEventListener('click', () => {
            const currentLimit = state.budgetLimit || 2000;
            const newLimitStr = prompt('Introdueix el nou límit de pressupost (€):', currentLimit);
            if (newLimitStr !== null) {
                const newLimit = parseInt(newLimitStr);
                if (!isNaN(newLimit) && newLimit > 0) {
                    state.budgetLimit = newLimit;
                    saveState('budgetLimit');
                    renderBudget();
                } else {
                    alert('Si us plau, introdueix un número vàlid.');
                }
            }
        });
    }
}

// 4. Videos Module
function renderVideos() {
    const container = document.getElementById('video-cards-container');
    if (!container) return;
    container.innerHTML = '';

    state.videos.forEach(vid => {
        const card = document.createElement('div');
        card.className = 'video-card glass-panel resource-card';
        
        const ytId = getYoutubeId(vid.url);
        let mediaHtml = '';

        if (ytId) {
            mediaHtml = `<div class="video-embed-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--border-glass);">
                <iframe src="https://www.youtube.com/embed/${ytId}" title="${vid.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top:0; left:0; width: 100%; height: 100%;"></iframe>
            </div>`;
        }

        card.innerHTML = `
            <div>
                ${mediaHtml}
                <div class="resource-top">
                    <h4>${vid.title}</h4>
                    ${vid.timestamp ? `<span class="resource-timestamp"><i class="fa-regular fa-clock"></i> Minut: ${vid.timestamp}</span>` : ''}
                </div>
                <p class="resource-notes" style="margin-top: 8px;">${vid.notes || 'Sense anotacions.'}</p>
            </div>
            <div class="resource-actions" style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center;">
                <a href="${vid.url}" target="_blank" class="resource-link">
                    <i class="fa-brands fa-youtube"></i> Obrir a YouTube
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


// 6. Luggage Module
function renderLuggage() {
    const container = document.getElementById('luggage-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Sort luggage: uncompleted first
    const sortedLuggage = [...state.luggage].sort((a, b) => a.completed - b.completed);

    sortedLuggage.forEach(item => {
        const li = document.createElement('li');
        li.className = `task-item ${item.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox-container" data-id="${item.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${item.text}</span>
            </div>
            <button class="btn-delete-task btn-delete-luggage" data-id="${item.id}" title="Eliminar de la maleta">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(li);
    });

    // Toggle complete status
    container.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const item = state.luggage.find(t => t.id === id);
            if (item) {
                item.completed = !item.completed;
                saveState('luggage');
                renderLuggage();
            }
        });
    });

    // Delete luggage item
    container.querySelectorAll('.btn-delete-luggage').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.luggage = state.luggage.filter(t => t.id !== id);
            saveState('luggage');
            renderLuggage();
        });
    });
}

function initLuggageForm() {
    const input = document.getElementById('new-luggage-input');
    const btn = document.getElementById('btn-add-luggage');
    if (!input || !btn) return;

    const handleAddLuggage = () => {
        const text = input.value.trim();
        if (!text) return;

        const newItem = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.luggage.push(newItem);
        saveState('luggage');
        renderLuggage();

        input.value = '';
    };

    btn.addEventListener('click', handleAddLuggage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddLuggage();
    });
}

// 7. Shopping Module
function renderShopping() {
    const container = document.getElementById('shopping-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Sort shopping: uncompleted first
    const sortedShopping = [...state.shopping].sort((a, b) => a.completed - b.completed);

    sortedShopping.forEach(item => {
        const li = document.createElement('li');
        li.className = `task-item ${item.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox-container" data-id="${item.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${item.text}</span>
            </div>
            <button class="btn-delete-task btn-delete-shopping" data-id="${item.id}" title="Eliminar de la llista">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(li);
    });

    // Toggle complete status
    container.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const item = state.shopping.find(t => t.id === id);
            if (item) {
                item.completed = !item.completed;
                saveState('shopping');
                renderShopping();
            }
        });
    });

    // Delete shopping item
    container.querySelectorAll('.btn-delete-shopping').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.shopping = state.shopping.filter(t => t.id !== id);
            saveState('shopping');
            renderShopping();
        });
    });
}

function initShoppingForm() {
    const input = document.getElementById('new-shopping-input');
    const btn = document.getElementById('btn-add-shopping');
    if (!input || !btn) return;

    const handleAddShopping = () => {
        const text = input.value.trim();
        if (!text) return;

        const newItem = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.shopping.push(newItem);
        saveState('shopping');
        renderShopping();

        input.value = '';
    };

    btn.addEventListener('click', handleAddShopping);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddShopping();
    });
}

// 8. Places Module
function renderPlaces() {
    const container = document.getElementById('places-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Sort places: uncompleted first
    const sortedPlaces = [...state.places].sort((a, b) => a.completed - b.completed);

    sortedPlaces.forEach(item => {
        const li = document.createElement('li');
        li.className = `task-item ${item.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox-container" data-id="${item.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${item.text}</span>
            </div>
            <button class="btn-delete-task btn-delete-place" data-id="${item.id}" title="Eliminar de la llista">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(li);
    });

    // Toggle complete status
    container.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const item = state.places.find(t => t.id === id);
            if (item) {
                item.completed = !item.completed;
                saveState('places');
                renderPlaces();
            }
        });
    });

    // Delete place item
    container.querySelectorAll('.btn-delete-place').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.places = state.places.filter(t => t.id !== id);
            saveState('places');
            renderPlaces();
        });
    });
}

function initPlacesForm() {
    const input = document.getElementById('new-place-input');
    const btn = document.getElementById('btn-add-place');
    if (!input || !btn) return;

    const handleAddPlace = () => {
        const text = input.value.trim();
        if (!text) return;

        const newItem = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.places.push(newItem);
        saveState('places');
        renderPlaces();

        input.value = '';
    };

    btn.addEventListener('click', handleAddPlace);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddPlace();
    });
}

// 9. Observations Module
function renderObservations() {
    const container = document.getElementById('observations-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Sort observations: uncompleted first
    const sortedObservations = [...state.observations].sort((a, b) => a.completed - b.completed);

    sortedObservations.forEach(item => {
        const li = document.createElement('li');
        li.className = `task-item ${item.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox-container" data-id="${item.id}">
                <div class="task-checkbox">
                    <i class="fa-solid fa-check"></i>
                </div>
                <span class="task-text">${item.text}</span>
            </div>
            <button class="btn-delete-task btn-delete-observation" data-id="${item.id}" title="Eliminar de la llista">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        container.appendChild(li);
    });

    // Toggle complete status
    container.querySelectorAll('.task-checkbox-container').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            const item = state.observations.find(t => t.id === id);
            if (item) {
                item.completed = !item.completed;
                saveState('observations');
                renderObservations();
            }
        });
    });

    // Delete observation item
    container.querySelectorAll('.btn-delete-observation').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering check toggle
            const id = btn.getAttribute('data-id');
            state.observations = state.observations.filter(t => t.id !== id);
            saveState('observations');
            renderObservations();
        });
    });
}

function initObservationsForm() {
    const input = document.getElementById('new-observation-input');
    const btn = document.getElementById('btn-add-observation');
    if (!input || !btn) return;

    const handleAddObservation = () => {
        const text = input.value.trim();
        if (!text) return;

        const newItem = {
            id: Date.now().toString(),
            text,
            completed: false
        };

        state.observations.push(newItem);
        saveState('observations');
        renderObservations();

        input.value = '';
    };

    btn.addEventListener('click', handleAddObservation);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddObservation();
    });
}

// --- 5. ARRANCADA I INICIALITZACIÓ AUTOMÀTICA DE LA WEB (DOM CONTENT LOADED) ---
// L'esdeveniment `DOMContentLoaded` s'executa automàticament just quan el navegador
// ha acabat de llegir l'HTML. És el "punt d'arribada" on s'engega tota l'aplicació:
// 1. Carrega la memòria (`loadState()`).
// 2. Activa la navegació i esdeveniments de clics (`initTabSwitching()`, `initPracticalSubtabs()`).
// 3. Pinta a la pantalla cada mòdul (`renderItinerary()`, `renderBudget()`, etc.).
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    
    // Core Layout
    initTabSwitching();
    initCountdown();
    
    // Modules
    renderItinerary();
    initItineraryFilters();
    
    renderBudget();
    initBudgetFilters();
    initBudgetForm();
    
    renderVideos();
    initVideoForm();
    
    renderTasks();
    initTaskForm();

    renderLuggage();
    initLuggageForm();

    renderShopping();
    initShoppingForm();

    renderPlaces();
    initPlacesForm();

    renderObservations();
    initObservationsForm();

    initPracticalSubtabs();
});

// --- 6. FUNCIONALITAT OFFLINE I PWA (SERVICE WORKER) ---
// Registrem el Service Worker (`sw.js`). Això és el que permet que la web-app es pugui
// guardar al mòbil com una app independent i funcioni 100% SENSE INTERNET durant el viatge!
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('PWA Service Worker registered successfully:', reg.scope))
            .catch(err => console.error('PWA Service Worker registration failed:', err));
    });
}


