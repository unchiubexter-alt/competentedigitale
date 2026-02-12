import Image from "next/image";

const cars = [
  {
    brand: "Porsche",
    model: "911 GT3 RS",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&q=80",
    description:
      "The pinnacle of naturally aspirated Porsche engineering. The GT3 RS is a track weapon disguised as a road car, featuring a 4.0L flat-six that screams to 9,000 RPM.",
    specs: {
      hp: "518",
      torque: "346 lb-ft",
      zeroToSixty: "3.2s",
      topSpeed: "184 mph",
      engine: "4.0L Flat-6",
      weight: "3,268 lbs",
    },
  },
  {
    brand: "Lamborghini",
    model: "Aventador SVJ",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80",
    description:
      "The most extreme Aventador ever built. With active aerodynamics and a screaming V12, the SVJ holds the Nürburgring production car lap record.",
    specs: {
      hp: "770",
      torque: "531 lb-ft",
      zeroToSixty: "2.8s",
      topSpeed: "217 mph",
      engine: "6.5L V12",
      weight: "3,362 lbs",
    },
  },
  {
    brand: "Ferrari",
    model: "F8 Tributo",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    description:
      "A tribute to Ferrari's most powerful V8 ever. The F8 Tributo combines breathtaking performance with stunning Italian design and aerodynamic excellence.",
    specs: {
      hp: "710",
      torque: "568 lb-ft",
      zeroToSixty: "2.9s",
      topSpeed: "211 mph",
      engine: "3.9L Twin-Turbo V8",
      weight: "3,164 lbs",
    },
  },
  {
    brand: "BMW",
    model: "M4 Competition",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=80",
    description:
      "The M4 Competition xDrive delivers explosive performance with all-wheel drive confidence. A perfect blend of daily usability and track capability.",
    specs: {
      hp: "503",
      torque: "479 lb-ft",
      zeroToSixty: "3.4s",
      topSpeed: "180 mph",
      engine: "3.0L Twin-Turbo I6",
      weight: "3,830 lbs",
    },
  },
  {
    brand: "Mercedes-AMG",
    model: "GT Black Series",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=80",
    description:
      "The most powerful AMG V8 production car ever. The GT Black Series is a road-legal race car with flat-plane crank technology and extreme aero.",
    specs: {
      hp: "720",
      torque: "590 lb-ft",
      zeroToSixty: "3.1s",
      topSpeed: "202 mph",
      engine: "4.0L Twin-Turbo V8",
      weight: "3,494 lbs",
    },
  },
  {
    brand: "Ford",
    model: "Mustang GT500",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80",
    description:
      "The most powerful street-legal Ford ever. The Shelby GT500 packs a supercharged 5.2L V8 that delivers earth-shaking American muscle performance.",
    specs: {
      hp: "760",
      torque: "625 lb-ft",
      zeroToSixty: "3.3s",
      topSpeed: "180 mph",
      engine: "5.2L Supercharged V8",
      weight: "4,171 lbs",
    },
  },
];

export default function CarsPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&q=80')",
          }}
        />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <p className="section-label slide-in-up">The Collection</p>
          <h1 className="slide-in-up delay-1">
            <span className="gradient-text">Our Cars</span>
          </h1>
          <div className="divider slide-in-up delay-2" />
          <p className="slide-in-up delay-3">
            Detailed profiles of every machine in our portfolio, complete with
            specs and photography notes.
          </p>
        </div>
      </section>

      {/* Car Details */}
      <section className="section">
        {cars.map((car, index) => (
          <div
            key={index}
            className="car-detail"
            style={{ marginBottom: "5rem" }}
          >
            <div
              className={
                index % 2 === 0 ? "slide-in-left" : "slide-in-right"
              }
              style={{ order: index % 2 === 0 ? 0 : 1 }}
            >
              <Image
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="car-detail-img"
                width={900}
                height={600}
              />
            </div>
            <div
              className={
                index % 2 === 0 ? "slide-in-right" : "slide-in-left"
              }
              style={{ order: index % 2 === 0 ? 1 : 0 }}
            >
              <div className="car-detail-info">
                <p className="car-detail-brand">
                  {car.brand} · {car.year}
                </p>
                <h2>
                  <span className="gradient-text">{car.model}</span>
                </h2>
                <p className="car-detail-desc">{car.description}</p>
                <div className="spec-grid">
                  <div className="spec-item">
                    <div className="spec-item-value">{car.specs.hp}</div>
                    <div className="spec-item-label">Horsepower</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">{car.specs.torque}</div>
                    <div className="spec-item-label">Torque</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">
                      {car.specs.zeroToSixty}
                    </div>
                    <div className="spec-item-label">0-60 MPH</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">{car.specs.topSpeed}</div>
                    <div className="spec-item-label">Top Speed</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">{car.specs.engine}</div>
                    <div className="spec-item-label">Engine</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">{car.specs.weight}</div>
                    <div className="spec-item-label">Weight</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
