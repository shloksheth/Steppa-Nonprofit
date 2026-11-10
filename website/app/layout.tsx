import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://steppa-nonprofit.jackbruns247.chatgpt.site'),
  title: 'Steppa | Free coding courses that help teens ship real projects',
  description: 'Free project-based coding courses, moderated group mentorship, and publishing support for learners ages 13 to 18.',
  icons: { icon: '/icon.png', apple: '/icon.png' },
  openGraph: {
    title: 'Steppa | Free coding courses that help teens ship real projects',
    description: 'Free project-based coding courses, moderated group mentorship, and publishing support for learners ages 13 to 18.',
    type: 'website',
    url: '/',
    images: [{ url: '/steppa-makers-desk.png', width: 1672, height: 941, alt: 'Steppa. A creative workspace for learning and building.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steppa | Free coding courses that help teens ship real projects',
    description: 'Free project-based coding courses, moderated group mentorship, and publishing support for learners ages 13 to 18.',
    images: ['/steppa-makers-desk.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
