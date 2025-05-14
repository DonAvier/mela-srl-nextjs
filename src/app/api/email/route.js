import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configurazione del transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function POST(request) {
  try {
    const { email, oggetto, messaggio } = await request.json();
    
    // Validazione
    if (!email || !oggetto || !messaggio) {
      return NextResponse.json(
        { success: false, message: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }
    
    // Opzioni email
   const mailOptions = {
      from: `"MELA SRL" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || 'melav@melav.it',
      replyTo: email, // Permette di rispondere direttamente al mittente
      subject: `Nuovo contatto dal sito - ${oggetto}`,
      text: `Hai ricevuto un messaggio dal sito.\n\nEmail del mittente: ${email}\n\nMessaggio:\n${messaggio}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #087E8B;">Nuovo messaggio dal sito MELA SRL</h2>
          <p><strong>Email del mittente:</strong> ${email}</p>
          <p><strong>Oggetto:</strong> ${oggetto}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <p style="margin: 0;"><strong>Messaggio:</strong></p>
            <p style="white-space: pre-line;">${messaggio}</p>
          </div>
        </div>
      `,
    };
    
    // Invio email
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Errore nell\'invio dell\'email:', error);
          reject(error);
        } else {
          console.log('Email inviata con successo:', info.response);
          resolve(info);
        }
      });
    });
    
    return NextResponse.json(
      { success: true, message: 'Email inviata con successo' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email:', error);
    
    return NextResponse.json(
      { success: false, message: 'Errore durante l\'invio dell\'email' },
      { status: 500 }
    );
  }
}