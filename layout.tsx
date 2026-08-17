import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Sinraila Beauty Salon | Beauty Salon in Banda, Uttar Pradesh',
  description: 'Sinraila Beauty Salon in Gular Naka, Banda, Uttar Pradesh. Explore beauty and salon services and contact us for appointments.',
  openGraph: {
    title: 'Sinraila Beauty Salon | Beauty Salon in Banda, Uttar Pradesh',
    description: 'Sinraila Beauty Salon in Gular Naka, Banda, Uttar Pradesh. Explore beauty and salon services and contact us for appointments.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://maps.app.goo.gl/t6jfhDL91nCXkPhf9',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sinraila Beauty Salon | Beauty Salon in Banda, Uttar Pradesh',
    description: 'Sinraila Beauty Salon in Gular Naka, Banda, Uttar Pradesh. Explore beauty and salon services and contact us for appointments.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Sinraila Beauty Salon",
    "image": "https://picsum.photos/seed/salon-hero/1920/1080",
    "@id": "https://maps.app.goo.gl/t6jfhDL91nCXkPhf9",
    "url": "https://maps.app.goo.gl/t6jfhDL91nCXkPhf9",
    "telephone": "06394293474",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Maheswari Devi Mandir, Ramlila Maidan, Gular Naka",
      "addressLocality": "Banda",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "210001",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "11:30",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "11:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#FDFBF7] text-gray-800 antialiased" suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
