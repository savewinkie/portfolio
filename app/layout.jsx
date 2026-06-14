import './globals.css';

export const metadata = {
  metadataBase: new URL('https://linkb.dev'),
  title: 'Linkb — Developer from Amsterdam | linkb.dev',
  description:
    'Self-taught developer from Amsterdam building clean, fast web experiences with Next.js, React & JavaScript. From SaaS platforms to landing pages to AI tools.',
  keywords: [
    'Linkb',
    'linkb.dev',
    'developer',
    'web developer',
    'Amsterdam',
    'Next.js',
    'React',
    'JavaScript',
    'freelance developer',
    'portfolio',
  ],
  authors: [{ name: 'Linkb', url: 'https://linkb.dev' }],
  creator: 'Linkb',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://linkb.dev' },
  openGraph: {
    type: 'website',
    url: 'https://linkb.dev',
    siteName: 'linkb.dev',
    title: 'Linkb — Developer from Amsterdam',
    description:
      'Building clean, fast web experiences with Next.js & React. From SaaS platforms to landing pages to AI tools.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Linkb — Developer from Amsterdam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linkb — Developer from Amsterdam',
    description: 'Building clean, fast web experiences with Next.js & React.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Linkb',
  url: 'https://linkb.dev',
  jobTitle: 'Web Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amsterdam',
    addressCountry: 'NL',
  },
  knowsAbout: ['Next.js', 'React', 'JavaScript', 'Web Development'],
  sameAs: ['https://github.com/savewinkie'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}