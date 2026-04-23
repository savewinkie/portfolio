import './globals.css';

export const metadata = {
  title: 'Link — Software Developer & Vibe Coder',
  description: 'Software Developer, Website Builder & Vibe Coder. I build fast, ship fast, and turn ideas into real products.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}