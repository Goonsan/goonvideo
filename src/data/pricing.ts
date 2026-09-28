// src/data/pricing.ts
// Source unique des tarifs : utilisée par la page Tarifs et par les pages de prestations.

export type Pack = {
    name: string;
    price: number;
    desc: string;
    featured?: boolean;
    included?: string;
};

export type PricingCategory = {
    id: 'mariage' | 'clip' | 'recurrent' | 'vitrine';
    icon: string;
    title: string;
    serviceUrl: string; // page de prestation associée
    packs: Pack[];
    extras?: string[];
    note?: string;
};

export const pricing: PricingCategory[] = [
    {
        id: 'mariage',
        icon: '💍',
        title: 'Mariage',
        serviceUrl: '/videaste-mariage-nantes/',
        packs: [
            { name: 'Pack Basique', price: 1000, desc: "La cérémonie et le vin d'honneur" },
            { name: 'Pack Standard', price: 1500, desc: 'De la cérémonie à la première danse', featured: true },
            { name: 'Pack Premium', price: 2000, desc: 'Des préparatifs à la fin du bal', included: '✓ Drone inclus' },
        ],
        extras: ['+ Option Drone : 200 €', '+ Préparatifs : 300 €', '+ Séance Hors Jour J : 200 €'],
        note: 'Frais de déplacement inclus dans un rayon de 100 km autour de Nantes. Au-delà, sur devis.',
    },
    {
        id: 'clip',
        icon: '🎵',
        title: 'Clip Musical',
        serviceUrl: '/clip-musical-nantes/',
        packs: [
            { name: 'Pack Basique', price: 500, desc: 'Captation Live/Répétition, 2h sur place, montage synchro audio' },
            { name: 'Pack Standard', price: 800, desc: 'Clip simple, tournage 1/2 journée, 1 lieu, montage créatif' },
            { name: 'Pack Premium', price: 1500, desc: 'Clip avancé, tournage 1 journée, multi-lieux, étalonnage et effets' },
        ],
    },
    {
        id: 'recurrent',
        icon: '📱',
        title: 'Communication Récurrente',
        serviceUrl: '/video-entreprise-nantes/',
        packs: [
            { name: 'Pack Basique', price: 250, desc: '1 vidéo de 30 sec à 1 min, format vertical, sous-titres inclus' },
            { name: 'Pack Standard', price: 450, desc: '1 vidéo de 1 à 2 min, habillage graphique et motion design' },
            { name: 'Pack Premium', price: 850, desc: 'Pack 1 mois de contenu, 1/2 journée de tournage, 4 vidéos courtes livrées' },
        ],
    },
    {
        id: 'vitrine',
        icon: '🏢',
        title: 'Film Vitrine & Identité',
        serviceUrl: '/video-entreprise-nantes/',
        packs: [
            { name: 'Pack Basique', price: 450, desc: 'Vidéo vitrine dynamique de 1 min, sans interview' },
            { name: 'Pack Standard', price: 850, desc: 'Vidéo de 1 à 2 min, storytelling' },
            { name: 'Pack Premium', price: 1450, desc: 'Film corporate, interviews avec éclairage et son pro' },
        ],
    },
];

export const getPricing = (ids: PricingCategory['id'][]) =>
    pricing.filter((category) => ids.includes(category.id));
