import Link from 'next/link';
import Image from 'next/image';
import './interventi-in-loco.css';

export const metadata = {
  title: 'Interventi in Loco - MELA S.R.L.',
  description: 'Servizi di medicina del lavoro direttamente presso i clienti',
};

export default function InterventiInLocoPage() {
  return (
    <div className="interventi-loco-page">
      <h1 className="interventi-title">INTERVENTI IN LOCO</h1>
      
      <div className="loco-content">
        <p className="interventi-text">
          Possiamo anche intervenire direttamente presso il cliente utilizzando i nostri ambulatori mobili che sono climatizzati, 
          dotati di cabina silente per le prove audiometriche, di spirometro, di visiotest, di elettrocardiogramma e di tutto il necessario 
          per i controlli bioumorali di alcune categorie di lavoratori, di conseguenza sugli ambulatori mobili si possono effettuare tutti 
          gli accertamenti sanitari, strumentali ed ematochimici richiesti dalle normative vigenti.
        </p>
        
        <div className="ambulatori-grid">
          <div className="ambulatorio-card">
            <h2 className="ambulatorio-title">Ambulatorio mobile Est.</h2>
            <div className="ambulatorio-image">
              <Image
                src="/images/camper.jpg"
                alt="Ambulatorio mobile esterno"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="ambulatorio-card">
            <h2 className="ambulatorio-title">Ambulatorio mobile Int.</h2>
            <div className="ambulatorio-image">
              <Image
                src="/images/stanza.jpg"
                alt="Ambulatorio mobile interno"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
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