const siteData = {
    info: {
        phone: "+39 0174 000000",
        email: "info@famigliarolando.it",
        address: "Via Centrale 18, 12079 Caprauna (CN)",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me/390000000000"
    },
    // SOLO 3 PIATTI - NO PREZZI
    menu: [
        {
            category: "Per Cominciare",
            items: [
                { name: "Vitello Tonnato Antico", desc: "Girello cotto rosa, salsa densa tradizionale, frutto del cappero." },
                { name: "Battuta al Coltello", desc: "Fassona piemontese, nocciola Tonda Gentile, tuorlo d'uovo marinato." },
                { name: "L'Uovo nel Bosco", desc: "Uovo pochè, spuma di patate d'alta quota, tartufo nero." }
            ]
        },
        {
            category: "Paste Fresche",
            items: [
                { name: "Plin della Tradizione", desc: "Pizzicati a mano nel tovagliolo, serviti al burro d'alpeggio." },
                { name: "Tajarin 40 Tuorli", desc: "Ragù bianco di salsiccia di Bra, salvia croccante." },
                { name: "Risotto Riserva", desc: "Riso Carnaroli invecchiato 24 mesi, Castelmagno DOP, riduzione al Nebbiolo." }
            ]
        },
        {
            category: "Secondi Piatti",
            items: [
                { name: "Guancia Brasata", desc: "Cottura lenta 12 ore, polenta macinata a pietra." },
                { name: "Il Cervo", desc: "Filetto scottato, frutti di bosco selvatici, terra di cacao." },
                { name: "Agnello Sambucano", desc: "Costolette in crosta di erbe alpine, purè di sedano rapa." }
            ]
        }
    ],
    wines: [
        { 
            title: "Bollicine", 
            subtitle: "L'inizio perfetto",
            img: "https://images.unsplash.com/photo-1598155523122-38423bd4d6bc?w=800",
            list: ["Alta Langa DOCG", "Champagne Grand Cru"]
        },
        { 
            title: "I Grandi Rossi", 
            subtitle: "Re della tavola",
            img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800",
            list: ["Barolo Cannubi", "Barbaresco Sorì"]
        },
        { 
            title: "Bianchi Rari", 
            subtitle: "Eleganza pura",
            img: "https://images.unsplash.com/photo-1572569762391-4966d494871e?w=800",
            list: ["Timorasso Derthona", "Roero Arneis"]
        }
    ],
    reviews: [
        { text: "Un'esperienza fuori dal tempo. Eleganza pura.", author: "Guida Michelin" },
        { text: "La cura del dettaglio qui è una religione.", author: "Marco B." },
        { text: "Sapori che non dimenticheremo mai.", author: "Elena S." },
        { text: "Il silenzio della montagna e il lusso del piatto.", author: "Gambero Rosso" }
    ]
};