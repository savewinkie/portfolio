import './globals.css';

export const metadata = {
  title: 'Link — Software Developer & Vibe Coder | linkb.dev',
  description: 'Link is a Software Developer and Website Builder specializing in rapid MVP development, Next.js, React, and AI-assisted development. Building fast, shipping faster.',
  keywords: ['linkb', 'link developer', 'linkb.dev', 'software developer', 'website builder', 'vibe coder', 'Next.js developer', 'MVP development', 'full stack developer', 'AI developer'],
  icons: { icon: '/logo.svg' },
  openGraph: {
    title: 'Link — Software Developer & Vibe Coder',
    description: 'Building fast, shipping faster. Full-stack developer specializing in MVPs, websites, and AI tools.',
    url: 'https://linkb.dev',
    siteName: 'linkb.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Link — Software Developer & Vibe Coder',
    description: 'Building fast, shipping faster.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}