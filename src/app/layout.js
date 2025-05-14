import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.melav.it'),
  title: {
    default: 'MELA S.R.L. - Medicina del Lavoro Modena | Visite Mediche Aziendali',
    template: '%s | MELA S.R.L. Medicina del Lavoro'
  },
  description: 'MELA S.R.L. offre servizi completi di medicina del lavoro a Modena e provincia. Visite mediche aziendali, sorveglianza sanitaria, ambulatori mobili. 30 anni di esperienza.',
  keywords: [
    'medicina del lavoro modena',
    'visite mediche aziendali',
    'sorveglianza sanitaria',
    'medico competente modena',
    'MELA SRL',
    'ambulatorio mobile',
    'sicurezza sul lavoro',
    'prevenzione aziendale',
    'Maranello medicina lavoro',
    'visite periodiche lavoratori'
  ],
  authors: [{ name: 'MELA S.R.L.' }],
  creator: 'MELA S.R.L.',
  publisher: 'MELA S.R.L.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'MELA S.R.L. - Medicina del Lavoro a Modena',
    description: 'Servizi professionali di medicina del lavoro con 30 anni di esperienza. Visite in sede e ambulatori mobili.',
    url: 'https://www.melav.it',
    siteName: 'MELA S.R.L.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MELA S.R.L. - Medicina del Lavoro'
      }
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MELA S.R.L. - Medicina del Lavoro',
    description: 'Servizi professionali di medicina del lavoro a Modena e provincia',
    images: ['/images/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: 'https://www.melav.it',
  },
  verification: {
    google: 'il-tuo-codice-google-site-verification',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Schema.org structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'MELA S.R.L.',
  alternateName: 'MELA Medicina del Lavoro',
  url: 'https://www.melav.it',
  logo: 'https://www.melav.it/images/mela.png',
  description: 'Servizi professionali di medicina del lavoro con ambulatori in sede e mobili a Modena e provincia',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Giuseppe Garibaldi 56',
    addressLocality: 'Maranello',
    addressRegion: 'MO',
    postalCode: '41053',
    addressCountry: 'IT'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.52828737107415,
    longitude: 10.863028876051432
  },
  telephone: '+39 0536 050002',
  email: 'melav@melav.it',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  },
  priceRange: '€€',
  medicalSpecialty: 'OccupationalTherapy',
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Visite mediche preventive',
      description: 'Visite mediche per nuove assunzioni'
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Visite mediche periodiche',
      description: 'Controlli periodici per i lavoratori'
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Sorveglianza sanitaria',
      description: 'Programma completo di sorveglianza sanitaria aziendale'
    }
  ],
  employee: [
    {
      '@type': 'Person',
      name: 'Dott. Mordini Arrigo',
      jobTitle: 'Medico Competente'
    },
    {
      '@type': 'Person',
      name: 'Dott. Malaguti Giuseppe',
      jobTitle: 'Medico Competente'
    },
    {
      '@type': 'Person',
      name: 'Dott. Pierotti Francesco',
      jobTitle: 'Specialista in Medicina del Lavoro'
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        {/* Google Analytics - sostituire con il tuo ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {/* Schema.org JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}