'use client';

import { useState } from 'react';
import Link from 'next/link';
import './services-section.css';

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);
  
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Interventi in sede */}
        <div 
          className={`service-card ${hoveredService === 'loco' ? 'shrink' : ''}`}
          onMouseEnter={() => setHoveredService('sede')}
          onMouseLeave={() => setHoveredService(null)}
        >
          <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.5 8.5C21.5 7.09554 21.5 6.39331 21.1629 5.88886C21.017 5.67048 20.8295 5.48298 20.6111 5.33706C20.1699 5.04224 19.5774 5.00529 18.496 5.00066C18.5001 5.29206 18.5 5.59655 18.5 5.91051L18.5 6V7.25H19.5C19.9142 7.25 20.25 7.58579 20.25 8C20.25 8.41421 19.9142 8.75 19.5 8.75H18.5V10.25H19.5C19.9142 10.25 20.25 10.5858 20.25 11C20.25 11.4142 19.9142 11.75 19.5 11.75H18.5V13.25H19.5C19.9142 13.25 20.25 13.5858 20.25 14C20.25 14.4142 19.9142 14.75 19.5 14.75H18.5V21.25H17V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V21.25H5.5V14.75H4.5C4.08579 14.75 3.75 14.4142 3.75 14C3.75 13.5858 4.08579 13.25 4.5 13.25H5.5V11.75H4.5C4.08579 11.75 3.75 11.4142 3.75 11C3.75 10.5858 4.08579 10.25 4.5 10.25H5.5V8.75H4.5C4.08579 8.75 3.75 8.41421 3.75 8C3.75 7.58579 4.08579 7.25 4.5 7.25H5.5V6L5.49999 5.9105C5.49996 5.59655 5.49992 5.29206 5.50403 5.00066C4.42262 5.00529 3.83008 5.04224 3.38886 5.33706C3.17048 5.48298 2.98298 5.67048 2.83706 5.88886C2.5 6.39331 2.5 7.09554 2.5 8.5V21.25H2C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H21.5V8.5Z" fill="currentColor" />
          </svg>
          
          {(hoveredService !== 'loco' || !hoveredService) && (
            <>
              <h3 className="service-title">INTERVENTI IN SEDE</h3>
              
              {(hoveredService === 'sede' || !hoveredService) && (
                <>
                  <p className="service-description">
                    Presso i nostri ambulatori a Maranello in via Garibaldi 56, previo prenotazione, è possibile effettuare le visite...
                  </p>
                  <Link href="/interventi-in-sede" className="service-button">
                    SCOPRI
                  </Link>
                </>
              )}
            </>
          )}
        </div>
        
        {/* Interventi in loco */}
        <div 
          className={`service-card ${hoveredService === 'sede' ? 'shrink' : ''}`}
          onMouseEnter={() => setHoveredService('loco')}
          onMouseLeave={() => setHoveredService(null)}
        >
          <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.4999 2.39003 13.2299 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
          </svg>
          
          {(hoveredService !== 'sede' || !hoveredService) && (
            <>
              <h3 className="service-title">INTERVENTI IN LOCO</h3>
              
              {(hoveredService === 'loco' || !hoveredService) && (
                <>
                  <p className="service-description">
                    Possiamo anche intervenire direttamente presso il cliente utilizzando i nostri ambulatori mobili che sono climatizzati...
                  </p>
                  <Link href="/interventi-in-loco" className="service-button">
                    SCOPRI
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}