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
          <p className="hero-subtitle slide-in-up">Automotive Photography</p>
          <h1 className="hero-title slide-in-up delay-1">
            <span className="gradient-text">Capturing Speed</span>
            <br />
            In Every Frame
          </h1>
          <p className="hero-desc slide-in-up delay-2">
            We freeze moments of automotive perfection — from the curves of a
            supercar to the raw power of a muscle car. Every shot tells a story
            of engineering and art.
          </p>
          <Link href="/gallery" className="hero-btn slide-in-up delay-3">
            <span>Explore Gallery</span>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="stats">
          <div className="stat-item scale-in">
            <div className="stat-number">500+</div>
            <div className="stat-label">Photos Taken</div>
          </div>
          <div className="stat-item scale-in delay-1">
            <div className="stat-number">50+</div>
            <div className="stat-label">Car Models</div>
          </div>
          <div className="stat-item scale-in delay-2">
            <div className="stat-number">12</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item scale-in delay-3">
            <div className="stat-number">8+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="section">
        <div className="section-header">
          <p className="section-label slide-in-up">Featured</p>
          <h2 className="section-title slide-in-up delay-1">
            <span className="gradient-text">Iconic Machines</span>
          </h2>
          <div className="divider slide-in-up delay-2" />
          <p className="section-desc slide-in-up delay-2">
            A curated selection of the most breathtaking automobiles we&apos;ve
            had the privilege to photograph.
          </p>
        </div>

        <div className="car-grid">
          <div className="car-card slide-in-up">
            <div className="car-card-img-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
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
                The ultimate track-focused 911. Pure driving perfection captured
                at golden hour.
              </p>
              <div className="car-card-specs">
                <div className="car-card-spec">
                  <div className="car-card-spec-value">518</div>
                  <div className="car-card-spec-label">HP</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">3.2s</div>
                  <div className="car-card-spec-label">0-60</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">184</div>
                  <div className="car-card-spec-label">MPH</div>
                </div>
              </div>
            </div>
          </div>

          <div className="car-card slide-in-up delay-2">
            <div className="car-card-img-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80"
                alt="Lamborghini Aventador"
                className="car-card-img"
                width={800}
                height={500}
              />
            </div>
            <div className="car-card-body">
              <p className="car-card-brand">Lamborghini</p>
              <h3 className="car-card-model">Aventador SVJ</h3>
              <p className="car-card-desc">
                Italian fury meets aerodynamic art. Shot under dramatic storm
                clouds.
              </p>
              <div className="car-card-specs">
                <div className="car-card-spec">
                  <div className="car-card-spec-value">770</div>
                  <div className="car-card-spec-label">HP</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">2.8s</div>
                  <div className="car-card-spec-label">0-60</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">217</div>
                  <div className="car-card-spec-label">MPH</div>
                </div>
              </div>
            </div>
          </div>

          <div className="car-card slide-in-up delay-4">
            <div className="car-card-img-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
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
                Maranello&apos;s masterpiece. Captured on a winding coastal road
                at sunset.
              </p>
              <div className="car-card-specs">
                <div className="car-card-spec">
                  <div className="car-card-spec-value">710</div>
                  <div className="car-card-spec-label">HP</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">2.9s</div>
                  <div className="car-card-spec-label">0-60</div>
                </div>
                <div className="car-card-spec">
                  <div className="car-card-spec-value">211</div>
                  <div className="car-card-spec-label">MPH</div>
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
            <p className="section-label">Behind The Lens</p>
            <h3>
              <span className="gradient-text">The Art of Automotive</span>
              <br />
              Photography
            </h3>
            <p>
              Every car has a personality. Our mission is to capture that
              character — the aggressive stance, the elegant curves, the raw
              power waiting to be unleashed. We use natural light, dramatic
              locations, and precise timing to create images that do justice to
              these mechanical masterpieces.
            </p>
            <Link href="/gallery" className="hero-btn">
              <span>View Our Work</span>
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
            <p className="section-label">Our Approach</p>
            <h3>
              <span className="gradient-text">Light, Shadow</span>
              <br />& Speed
            </h3>
            <p>
              We chase the perfect light. From the golden glow of dawn to the
              neon reflections of city nights, every environment tells a
              different story. Our photographers travel the world to find the
              most stunning backdrops for automotive excellence.
            </p>
            <Link href="/cars" className="hero-btn">
              <span>See All Cars</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
