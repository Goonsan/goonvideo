// src/data/videos.ts
// Vidéos du portfolio (hébergées sur YouTube).
// uploadDate et duration servent aux données structurées VideoObject pour Google.

export type Video = {
    id: string;
    title: string;
    category: 'Mariage' | 'Musique' | 'Business' | 'Voyages' | 'Sport' | 'Lifestyle' | 'Portrait';
    description: string;
    uploadDate: string; // AAAA-MM-JJ
    duration: string;   // format ISO 8601 (ex : PT10M18S)
};

export const videos: Video[] = [
    {
        id: 'AGcEAGJL-Lk',
        title: 'Mariage - Sintia & Maurice',
        category: 'Mariage',
        description: "Film de mariage de Sintia & Maurice : une journée d'émotions, de rires et de larmes de joie, filmée par Olivier Gonnet, vidéaste mariage à Nantes.",
        uploadDate: '2026-08-08',
        duration: 'PT10M18S',
    },
    {
        id: 'fXsKkRrIpZE',
        title: 'Mariage - Anaïs & Baptiste',
        category: 'Mariage',
        description: "Film de mariage cinématique 4K d'Anaïs et Baptiste, une journée placée sous le signe de l'émotion et de la complicité.",
        uploadDate: '2026-04-21',
        duration: 'PT10M11S',
    },
    {
        id: 'iKo0zDvqC8o',
        title: 'Shooting inspiration mariage bohème champêtre chic',
        category: 'Mariage',
        description: "Shooting d'inspiration mariage au style bohème champêtre chic : préparatifs, cérémonie, vin d'honneur.",
        uploadDate: '2026-09-11',
        duration: 'PT2M18S',
    },
    {
        id: 'XIxziMQwV5Y',
        title: 'Mariage - Marjory & Christian',
        category: 'Mariage',
        description: "Film du mariage de Marjory & Christian, filmé dans un magnifique cadre sur le thème de Peaky Blinders.",
        uploadDate: '2023-11-28',
        duration: 'PT6M42S',
    },
    {
        id: 'Vjv3ehNFkGk',
        title: 'Mariage - Chloé & Louis',
        category: 'Mariage',
        description: "Film de mariage cinématographique de Chloé et Louis : émotions intenses, rires partagés et complicité.",
        uploadDate: '2026-06-08',
        duration: 'PT6M38S',
    },
    {
        id: 'NRXY9s8mrwg',
        title: 'Clip Musical - Dystonie',
        category: 'Musique',
        description: "Session live en répétition avec le groupe Dystonie : setup minimaliste à deux caméras et deux lumières, en une seule prise.",
        uploadDate: '2026-03-26',
        duration: 'PT3M35S',
    },
    {
        id: 'iTCQW5TMQP4',
        title: 'Prestation Entreprise - Bien-être & Massage',
        category: 'Business',
        description: "Vidéo de présentation d'un massage bien-être pour VITA'YOGA à Sautron (Loire-Atlantique).",
        uploadDate: '2026-01-06',
        duration: 'PT1M',
    },
    {
        id: 'NDr2XC1KnIA',
        title: 'Voyage sonore & relaxation - Bien-être & Massage',
        category: 'Business',
        description: "Vidéo de présentation d'un voyage sonore (bols, gongs) pour VITA'YOGA à Sautron (Loire-Atlantique).",
        uploadDate: '2026-01-01',
        duration: 'PT1M',
    },
    {
        id: 'gD2jVxmrhaM',
        title: 'Notre voyage au Japon',
        category: 'Voyages',
        description: "Petit clip de voyage : trois minutes à travers quelques-uns des lieux visités au Japon.",
        uploadDate: '2025-09-06',
        duration: 'PT3M6S',
    },
    {
        id: '1EEWf-xUXPg',
        title: "Sport - Au Cœur de l'Action",
        category: 'Sport',
        description: "Montage dynamique d'un match de basket U15 : captation sportive et montage rythmé.",
        uploadDate: '2026-03-03',
        duration: 'PT3M20S',
    },
    {
        id: 'WM4fPxxBw94',
        title: 'Tchaktchouka - Blues en cuisine',
        category: 'Lifestyle',
        description: "Vidéo culinaire ASMR : la tchaktchouka entre blues et sound design immersif.",
        uploadDate: '2026-05-05',
        duration: 'PT54S',
    },
    {
        id: 'XuErLn2O0tA',
        title: 'Qui suis-je ? Storytelling & Vision',
        category: 'Portrait',
        description: "Olivier Gonnet passe de l'autre côté de la caméra : un exercice de storytelling pour présenter sa vision du métier de vidéaste.",
        uploadDate: '2026-01-20',
        duration: 'PT1M46S',
    },
    {
        id: '46Wcgwy0lR4',
        title: 'Portrait de Manu Payet',
        category: 'Portrait',
        description: "Portrait vidéo de Manu Payet réalisé par une « Paillette ».",
        uploadDate: '2026-03-03',
        duration: 'PT1M',
    },
];

export const thumbnailUrl = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
