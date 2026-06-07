export const SITE_URL = 'https://kfzgutachten-karakale.de';

export const BUSINESS_NAME = 'Kfz Gutachten und Prüfbüro Karakale';

export const BUSINESS = {
    name: BUSINESS_NAME,
    shortName: 'Kfz Gutachten Karakale',
    phone: '+49 228 96699180',
    mobile: '+49 1573 7154376',
    email: 'info@ing-karakale.de',
    street: 'Siemensstr. 1',
    postalCode: '53121',
    city: 'Bonn',
    country: 'DE',
    latitude: 50.7374,
    longitude: 7.0982,
    logo: '/img/logo/logo_karakale.svg',
    image: '/img/other/Pruefer_unter_Auto_scaled.webp',
    sameAs: [
        'https://www.facebook.com/CarKarakale/',
        'https://www.instagram.com/gutachten.karakale/',
        'https://wa.me/4915737154376',
    ],
};

const DEFAULT_IMAGE = BUSINESS.image;
const FILE_PATH_PATTERN = /\.[a-z0-9]{2,5}$/i;

export function normalizePath(path = '/') {
    let normalized = path || '/';

    if (normalized.startsWith(SITE_URL)) {
        normalized = normalized.replace(SITE_URL, '') || '/';
    }

    normalized = normalized.split('?')[0].split('#')[0];

    if (!normalized.startsWith('/')) {
        normalized = `/${normalized}`;
    }

    if (normalized !== '/' && !normalized.endsWith('/') && !FILE_PATH_PATTERN.test(normalized)) {
        normalized = `${normalized}/`;
    }

    return normalized;
}

export function absoluteUrl(path = '/') {
    if (/^https?:\/\//.test(path)) {
        return path;
    }

    return `${SITE_URL}${normalizePath(path)}`;
}

export function createBreadcrumbs(items = []) {
    const normalizedItems = items.length
        ? items
        : [{ name: 'Startseite', path: '/' }];

    return {
        '@type': 'BreadcrumbList',
        '@id': `${absoluteUrl(normalizedItems[normalizedItems.length - 1].path)}#breadcrumb`,
        itemListElement: normalizedItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}

export function createLocalBusinessSchema(services = []) {
    return {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${SITE_URL}/#localbusiness`,
        name: BUSINESS.name,
        alternateName: BUSINESS.shortName,
        description: 'Kfz Sachverständiger und Prüfbüro in Bonn für Hauptuntersuchung, Unfallgutachten, Oldtimer-Gutachten, Wertgutachten und weitere Kfz Dienstleistungen.',
        url: `${SITE_URL}/`,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        priceRange: '€€',
        image: [
            absoluteUrl('/img/other/Pruefer_unter_Auto_scaled.webp'),
            absoluteUrl('/img/other/leistung_2.webp'),
            absoluteUrl('/img/portfolio/bearbeitet/810_810.jpg'),
        ],
        logo: absoluteUrl(BUSINESS.logo),
        address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS.street,
            postalCode: BUSINESS.postalCode,
            addressLocality: BUSINESS.city,
            addressCountry: BUSINESS.country,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS.latitude,
            longitude: BUSINESS.longitude,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '13:00',
            },
        ],
        areaServed: [
            { '@type': 'City', name: 'Bonn' },
            { '@type': 'AdministrativeArea', name: 'Nordrhein-Westfalen' },
            { '@type': 'AdministrativeArea', name: 'Rheinland-Pfalz' },
        ],
        sameAs: BUSINESS.sameAs,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Kfz Dienstleistungen',
            itemListElement: services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    description: service.description,
                    areaServed: {
                        '@type': 'City',
                        name: 'Bonn',
                    },
                    provider: {
                        '@id': `${SITE_URL}/#localbusiness`,
                    },
                },
            })),
        },
    };
}

export function createSchemaGraph({
    path,
    title,
    description,
    image = DEFAULT_IMAGE,
    breadcrumbs,
    services = [],
    faq = [],
}) {
    const url = absoluteUrl(path);
    const graph = [
        createLocalBusinessSchema(services),
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: BUSINESS.shortName,
            inLanguage: 'de-DE',
            publisher: {
                '@id': `${SITE_URL}/#localbusiness`,
            },
        },
        {
            '@type': 'WebPage',
            '@id': `${url}#webpage`,
            url,
            name: title,
            description,
            inLanguage: 'de-DE',
            isPartOf: {
                '@id': `${SITE_URL}/#website`,
            },
            about: {
                '@id': `${SITE_URL}/#localbusiness`,
            },
            primaryImageOfPage: {
                '@type': 'ImageObject',
                url: absoluteUrl(image),
            },
        },
        createBreadcrumbs(breadcrumbs || [
            { name: 'Startseite', path: '/' },
            { name: title, path },
        ]),
    ];

    if (faq.length) {
        graph.push({
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                },
            })),
        });
    }

    return {
        '@context': 'https://schema.org',
        '@graph': graph,
    };
}

export function createPageHead({
    title,
    description,
    path,
    keywords,
    image = DEFAULT_IMAGE,
    robots,
    breadcrumbs,
    services = [],
    faq = [],
}) {
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);
    const meta = [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:image', property: 'og:image', content: imageUrl },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:image', name: 'twitter:image', content: imageUrl },
    ];

    if (keywords) {
        meta.push({ hid: 'keywords', name: 'keywords', content: keywords });
    }

    if (robots) {
        meta.push({ hid: 'robots', name: 'robots', content: robots });
    }

    return {
        title,
        meta,
        link: [
            { hid: 'canonical', rel: 'canonical', href: url },
        ],
        __dangerouslyDisableSanitizers: ['script'],
        script: [
            {
                hid: 'structured-data',
                type: 'application/ld+json',
                innerHTML: JSON.stringify(createSchemaGraph({
                    path,
                    title,
                    description,
                    image,
                    breadcrumbs,
                    services,
                    faq,
                })),
            },
        ],
    };
}
