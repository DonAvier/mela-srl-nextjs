import Link from 'next/link';
import Image from 'next/image';
import './not-found.css';

export const metadata = {
  title: 'Pagina non trovata - MELA S.R.L.',
  description: 'La pagina che stai cercando non esiste. Torna alla homepage o contattaci per assistenza.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="error-code">404</div>
        
        <h1 className="not-found-title">Pagina non trovata</h1>
        
        <p className="not-found-description">
          Ci dispiace, la pagina che stai cercando non esiste o è stata spostata.
        </p>
        
        <div className="not-found-actions">
          <Link href="/" className="home-button">
            Torna alla Homepage
          </Link>
          
          <div className="quick-links">
            <h2>Link utili:</h2>
            <ul>
              <li>
                <Link href="/interventi-in-sede">
                  Interventi in Sede
                </Link>
              </li>
              <li>
                <Link href="/interventi-in-loco">
                  Interventi in Loco
                </Link>
              </li>
              <li>
                <Link href="/contattaci">
                  Contattaci
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="contact-info-404">
          <p>Hai bisogno di assistenza?</p>
          <div className="contact-methods">
            <a href="tel:+390536050002" className="contact-method">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +0536 050002
            </a>
            <a href="mailto:melav@melav.it" className="contact-method">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              melav@melav.it
            </a>
          </div>
        </div>
        
        <div className="not-found-image">
          <Image
            src="/images/doc.png"
            alt="Medico MELA S.R.L."
            width={200}
            height={200}
            style={{ opacity: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}