import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    lang: 'en' | 'ar';
    pageType?: 'website' | 'article';
    canonical?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    lang,
    pageType = 'website',
    canonical = 'https://ansury.systems',
    image = 'https://ansury.systems/og-image.jpg' // Default OG image
}) => {
    const siteName = 'Ansury Systems';
    const fullTitle = `${title} | ${siteName}`;

    // JSON-LD structured data for AI SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ansury Systems",
        "image": image,
        "@id": "https://ansury.systems",
        "url": "https://ansury.systems",
        "telephone": "+97451182644",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Level 24, Tornado Tower, West Bay",
            "addressLocality": "Doha",
            "addressCountry": "QA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.3186,
            "longitude": 51.5310
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://linkedin.com/company/ansury-systems",
            "https://twitter.com/ansury_systems"
        ],
        "description": description,
        "areaServed": "Qatar",
        "serviceType": [
            "AI Marketing Automation",
            "Landing Page Optimization",
            "Lead Qualification Systems",
            "Autonomous Marketing Ecosystems"
        ]
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* AI Search & Discovery Tags */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="google-site-verification" content="placeholder-verification-id" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={pageType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content={lang === 'ar' ? 'ar_QA' : 'en_US'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@ansury_systems" />

            {/* Language Alternates */}
            <link rel="alternate" hrefLang="en" href="https://ansury.systems/en" />
            <link rel="alternate" hrefLang="ar" href="https://ansury.systems/ar" />
            <link rel="alternate" hrefLang="x-default" href="https://ansury.systems" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
