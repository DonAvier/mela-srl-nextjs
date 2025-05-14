import Link from 'next/link';
import './interventi-in-sede.css';

export const metadata = {
  title: 'Interventi in Sede - MELA S.R.L.',
  description: 'Servizi di medicina del lavoro presso la nostra sede a Maranello',
};

export default function InterventiInSedePage() {
  return (
    <div className="interventi-sede-page">
      <h1 className="interventi-title">INTERVENTI IN SEDE</h1>
      
      <div className="interventi-content">
        <p className="interventi-text">
          Presso i nostri ambulatori a Maranello in via Garibaldi 56, previo prenotazione, 
          è possibile effettuare le visite preventive, periodiche, di rientro da infortunio/malattia, 
          cambio mansione a richiesta con tutti i relativi accertamenti accessori.
        </p>
        
        <h2 className="sede-address">Via Giuseppe Garibaldi 56, Maranello</h2>
        
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5688.71741639884!2d10.863028876051432!3d44.52828737107415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fe3a88236a77d%3A0x50c3a7f0c21273ca!2sVia%20Giuseppe%20Garibaldi%2C%2056%2C%2041053%20Maranello%20MO!5e0!3m2!1sit!2sit!4v1742570589567!5m2!1sit!2sit"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa sede MELA SRL"
          ></iframe>
        </div>
        
        <div>
          <Link href="/contattaci" className="cta-button">
            CONTATTACI
          </Link>
        </div>
      </div>
    </div>
  );
}