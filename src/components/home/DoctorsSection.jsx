import './doctors-section.css';

export default function DoctorsSection() {
  return (
    <section className="doctors-section">
      <div className="container">
        <h2 className="section-title">I NOSTRI MEDICI</h2>
        <div className="doctors-list">
          <p>Dott. Mordini Arrigo (Medico Competente)</p>
          <p>Dott. Malaguti Giuseppe (Medico Competente)</p>
          <p>Dott. Pierotti Francesco (specialista in Medicina del lavoro)</p>
        </div>
      </div>
    </section>
  );
}