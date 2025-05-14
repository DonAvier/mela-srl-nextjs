'use client';

import Image from 'next/image';
import ContactForm from '@/components/forms/ContattaciForm';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import './contatti.css';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  
  useEffect(() => {
    // Controlla se c'è un parametro success nell'URL
    if (searchParams.get('success') === 'true') {
      setNotification({
        show: true,
        message: 'Messaggio inviato con successo! Ti risponderemo al più presto.',
        type: 'success'
      });
      
      // Nascondi il messaggio dopo 5 secondi
      setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 5000);
      
      // Pulisci l'URL
      window.history.replaceState({}, '', '/contattaci');
    }
  }, [searchParams]);

  return (
    <div className="contact-page">
      <h1 className="contact-title">CONTATTACI</h1>
      
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      
      <div className="contact-container">
        <div className="contact-form-container">
          <ContactForm />
        </div>
        
        <div className="contact-image-container">
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '400px' }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', transform: 'scale(1.4)' }}>
              <Image
                src="/images/blob.png"
                alt="Background shape"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
              <Image
                src="/images/doc.png"
                alt="Medico"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}