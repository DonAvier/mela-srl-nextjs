import { Suspense } from 'react';
import ContactPageContent from './ContactPageContent';

export const metadata = {
  title: 'Contattaci - MELA S.R.L. Medicina del Lavoro',
  description: 'Contatta MELA S.R.L. per servizi di medicina del lavoro a Modena. Via Garibaldi 56, Maranello. Tel: +0536 050002. Email: melav@melav.it',
  keywords: 'contatti medicina lavoro modena, MELA SRL contatti, preventivo medicina lavoro',
  alternates: {
    canonical: 'https://www.melav.it/contattaci',
  },
  openGraph: {
    title: 'Contatta MELA S.R.L. - Medicina del Lavoro',
    description: 'Richiedi informazioni sui nostri servizi di medicina del lavoro. Preventivi gratuiti.',
    url: 'https://www.melav.it/contattaci',
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Caricamento...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}