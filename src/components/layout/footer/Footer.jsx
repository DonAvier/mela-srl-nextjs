import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <p>Via Garibaldi 56, Maranello</p>
          <p>+0536 050002</p>
          <p>P. IVA 04171950365</p>
          <p>melav@melav.it</p>
          <p>info@melav.it</p>
        </div>
        
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5688.71741639884!2d10.863028876051432!3d44.52828737107415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fe3a88236a77d%3A0x50c3a7f0c21273ca!2sVia%20Giuseppe%20Garibaldi%2C%2056%2C%2041053%20Maranello%20MO!5e0!3m2!1sit!2sit!4v1742570589567!5m2!1sit!2sit"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa sede MELA SRL"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}