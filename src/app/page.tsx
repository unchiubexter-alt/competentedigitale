import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle slide-in-up">Fotografii automotive</p>
          <h1 className="hero-title slide-in-up delay-1">
            <span className="gradient-text">Capturarea vitezei</span>
            <br />
            In fiecare frame
          </h1>
          <p className="hero-desc slide-in-up delay-2">
            Înghețăm momente de perfecțiune auto — de la liniile elegante ale unui supercar până la forța brută a unui muscle car. Fiecare cadru spune o poveste despre inginerie și artă.
          </p>
          <Link href="/gallery" className="hero-btn slide-in-up delay-3">
            <span>Exploreaza galeria</span>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="stats">
          <div className="stat-item scale-in">
            <div className="stat-number">500+</div>
            <div className="stat-label">Poze facute</div>
          </div>
          <div className="stat-item scale-in delay-1">
            <div className="stat-number">50+</div>
            <div className="stat-label">Modele masini</div>
          </div>
          <div className="stat-item scale-in delay-2">
            <div className="stat-number">12</div>
            <div className="stat-label">Tari</div>
          </div>
          <div className="stat-item scale-in delay-3">
            <div className="stat-number">8+</div>
            <div className="stat-label">Ani experienta</div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="section">
        <div className="section-header">
          <p className="section-label slide-in-up">Prezentate</p>
          <h2 className="section-title slide-in-up delay-1">
            <span className="gradient-text">Masini iconice</span>
          </h2>
          <div className="divider slide-in-up delay-2" />
          <p className="section-desc slide-in-up delay-2">
            O colecție atent aleasă a celor mai spectaculoase automobile pe care am avut privilegiul să le fotografiez.
          </p>
        </div>

        <div className="car-grid">
          <div className="car-card slide-in-up">
            <div className="car-card-img-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1634673970798-a15ae56f6c65?q=80&w=800"
                alt="Porsche 911 GT3"
                className="car-card-img"
                width={800}
                height={500}
              />
            </div>
            <div className="car-card-body">
              <p className="car-card-brand">Porsche</p>
              <h3 className="car-card-model">911 GT3 RS</h3>
              <p className="car-card-desc">
                Cel mai pur 911 orientat spre circuit. Perfecțiunea condusului surprinsă la ora de aur.
              </p>
              <div className="car-card-specs">
                <div className="car-card-spec">
                  <div className="car-card-spec-value">518</div>
                  <div className="car-card-spec-label">HP</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">3.2s</div>
                  <div className="car-card-spec-label">0-100</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">296</div>
                  <div className="car-card-spec-label">KM/H</div>
                </div>
              </div>
            </div>
          </div>

          <div className="car-card slide-in-up delay-2">
            <div className="car-card-img-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=800"
                alt="Lamborghini Aventador"
                className="car-card-img"
                width={800}
                height={500}
              />
            </div>
            <div className="car-card-body">
              <p className="car-card-brand">Lamborghini</p>
              <h3 className="car-card-model">Aventador</h3>
              <p className="car-card-desc">
                „Furia italiană întâlnește arta aerodinamică. Surprinsă sub nori de furtună dramatici.
              </p>
              <div className="car-card-specs">
                <div className="car-card-spec">
                  <div className="car-card-spec-value">770</div>
                  <div className="car-card-spec-label">HP</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">2.8s</div>
                  <div className="car-card-spec-label">0-100</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">350</div>
                  <div className="car-card-spec-label">KM/H</div>
                </div>
              </div>
            </div>
          </div>

          <div className="car-card slide-in-up delay-4">
            <div className="car-card-img-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=800"
                alt="Ferrari F8 Tributo"
                className="car-card-img"
                width={800}
                height={500}
              />
            </div>
            <div className="car-card-body">
              <p className="car-card-brand">Ferrari</p>
              <h3 className="car-card-model">F8 Tributo</h3>
              <p className="car-card-desc">
                Un omagiu adus celui mai puternic V8 produs vreodată de Ferrari. F8 Tributo combină performanțe uluitoare cu design italian spectaculos și excelență aerodinamică.
              </p>
              <div className="car-card-specs">
                <div className="car-card-spec">
                  <div className="car-card-spec-value">710</div>
                  <div className="car-card-spec-label">HP</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">2.9s</div>
                  <div className="car-card-spec-label">0-100</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">340</div>
                  <div className="car-card-spec-label">KM/H</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="section">
        <div className="featured">
          <div className="featured-img-wrapper slide-in-left">
            <Image
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=80"
              alt="BMW M4 Competition"
              className="featured-img"
              width={900}
              height={600}
            />
          </div>
          <div className="featured-content slide-in-right">
            <p className="section-label">In spatele lentilei</p>
            <h3>
              <span className="gradient-text">Arta automotivelor</span>
              <br />
              Fotografie
            </h3>
            <p>
              Fiecare mașină are o personalitate. Misiunea noastră este să surprindem acest caracter — poziția agresivă, liniile elegante, puterea brută care așteaptă să fie dezlănțuită. 
              Folosim lumină naturală, locații dramatice și o sincronizare precisă pentru a crea imagini care fac dreptate acestor capodopere mecanice.
            </p>
            <Link href="/gallery" className="hero-btn">
              <span>Vizualizeaza lucrarile</span>
            </Link>
          </div>
        </div>

        <div className="featured reverse" style={{ marginTop: "4rem" }}>
          <div className="featured-img-wrapper slide-in-right">
            <Image
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=80"
              alt="Mercedes AMG GT"
              className="featured-img"
              width={900}
              height={600}
            />
          </div>
          <div className="featured-content slide-in-left">
            <p className="section-label">Abordarea</p>
            <h3>
              <span className="gradient-text">Lumina, umbra</span>
              <br />& Viteza
            </h3>
            <p>
              Căutăm lumina perfectă. De la strălucirea aurie a zorilor până la reflexiile neon ale nopților urbane, fiecare mediu spune o poveste diferită. 
              Fotografi noștri călătoresc în întreaga lume pentru a găsi cele mai spectaculoase fundaluri pentru excelența auto.
            </p>
            <Link href="/cars" className="hero-btn">
              <span>Vezi toate masinile</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
