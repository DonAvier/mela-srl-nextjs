import Image from "next/image";
import Link from "next/link";
import ServicesSection from "@/components/home/ServicesSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import ScrollButton from "@/components/home/ScrollButton";
import "./home/home.css";

export default function HomePage() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <h1 className="banner-title">MELA S.R.L.</h1>
              <p className="banner-subtitle">
                I PROFESSIONISTI DELLA MEDICINA DEL LAVORO
              </p>
              <Link href="/contattaci" className="banner-button">
                CONTATTACI
              </Link>
            </div>

            <div className="banner-image-container">
              <div className="banner-image-wrapper">
                <div className="blob-background">
                  <Image
                    src="/images/blob.png"
                    alt="Background shape"
                    fill
                    priority
                    className="blob-image"
                  />
                </div>
                <div className="doctor-image-container">
                  <Image
                    src="/images/doc.png"
                    alt="Medico"
                    fill
                    priority
                    className="doctor-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="partner-section">
        <p className="partner-title">I PARTNER DELLA TUA AZIENDA A MODENA</p>
        <ScrollButton />
      </div>

      <section id="chi-siamo" className="about-section">
        <div className="container">
          <h2 className="section-title">CHI SIAMO</h2>
          <p className="about-subtitle">Mela Srl è una società di servizi</p>
          <div className="about-text">
            <p>
              Mela Srl nasce dall'esperienza trentennale nell' ambito della
              sorveglianza sanitaria del dott. Mordini Arrigo, Malaguti
              Giuseppe, Pierotti Francesco, affiancati da altri 2 medici
              competenti.
            </p>
            <p>
              Decidono di unire le loro professionalità per far nascere un nuovo
              competitor, Mela Srl medicina del lavoro, nel mercato della
              sorveglianza sanitaria per agevolare le aziende del territorio
              emiliano romagnolo a trovare in Mela srl tutte le soluzioni per
              avere sempre disponibilità, affidabilità, competenza.
            </p>
            <p>
              L'azienda ha sede a Maranello in via Garibaldi 56, ed opera sia
              presso la sede sia direttamente presso gli stabilimenti dei
              Clienti servendosi di ambulatori mobili attrezzati per effettuare
              la Sorveglianza Sanitaria, questa ultima modalità riduce al minimo
              i tempi di intervento ed abbatte i rischi dovuti allo spostamento
              dei lavoratori dalla propria sede di lavoro, inoltre, limitando
              così il disagio di dover reperire idonei locali aziendali da
              adibire alle visite mediche.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />

      <DoctorsSection />
    </>
  );
}
