'use client';

import { useState } from 'react';
import './contattaci-form.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    oggetto: '',
    messaggio: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Ottieni l'URL corrente per il redirect
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <form 
      className="contact-form" 
      action="https://formsubmit.co/melav@melav.it" 
      method="POST"
    >
      {/* Campi nascosti per FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Nuovo contatto dal sito MELA SRL" />
      <input type="hidden" name="_next" value={`${currentUrl}/contattaci?success=true`} />
      <input type="hidden" name="_template" value="table" />
      
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      
      <div className="form-row">
        <label htmlFor="oggetto" className="form-label">Oggetto:</label>
        <input
          type="text"
          id="oggetto"
          name="oggetto"
          value={formData.oggetto}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      
      <div className="form-row">
        <label htmlFor="messaggio" className="form-label">Messaggio:</label>
        <textarea
          id="messaggio"
          name="messaggio"
          value={formData.messaggio}
          onChange={handleChange}
          required
          rows={6}
          className="form-control form-textarea"
        ></textarea>
      </div>
      
      <div className="form-row">
        <button type="submit" className="form-button">
          Invia
        </button>
      </div>
    </form>
  );
}