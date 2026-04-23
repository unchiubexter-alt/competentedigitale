import Image from "next/image";

const cars = [
  {
    brand: "Porsche",
    model: "911 GT3 RS",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1744278187074-c43c4bf0fa22?q=80&w=900",
    description:
      "Apogeul ingineriei Porsche aspirate natural. GT3 RS este o „armă” de circuit deghizată într-o mașină de stradă, având un motor boxer de 4.0L cu șase cilindri care urcă până la 9.000 RPM.",
    specs: {
      hp: "518",
      torque: "346 nm",
      zeroToHundred: "3.2s",
      topSpeed: "296 km/h",
      engine: "4.0L Flat-6",
      weight: "1482 kg",
    },
  },
  {
    brand: "Lamborghini",
    model: "Aventador SVJ",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1676113125191-c4237fbe7ebc?q=80&w=900",
    description:
      "Cel mai extrem Aventador construit vreodată. Cu aerodinamică activă și un V12 care urlă, SVJ deține recordul de tur pentru mașini de serie pe Nürburgring.",
    specs: {
      hp: "770",
      torque: "531 nm",
      zeroToHundred: "2.8s",
      topSpeed: "350 km/h",
      engine: "6.5L V12",
      weight: "1524 kg",
    },
  },
  {
    brand: "Ferrari",
    model: "F8 Tributo",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    description:
      "Un omagiu adus celui mai puternic V8 produs vreodată de Ferrari. F8 Tributo combină performanțe uluitoare cu design italian spectaculos și excelență aerodinamică.",
    specs: {
      hp: "710",
      torque: "568 nm",
      zeroToHundred: "2.9s",
      topSpeed: "340 km/h",
      engine: "3.9L Twin-Turbo V8",
      weight: "1435 kg",
    },
  },
  {
    brand: "BMW",
    model: "M4 Competition",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1728060839159-f828a58cdaef?q=80&w=900",
    description:
      "M4 Competition xDrive oferă performanțe explozive, alături de încrederea tracțiunii integrale. Un echilibru perfect între utilizarea zilnică și capabilitățile de circuit.",
    specs: {
      hp: "503",
      torque: "479 nm",
      zeroToHundred: "3.4s",
      topSpeed: "290 km/h",
      engine: "3.0L Twin-Turbo I6",
      weight: "1737 kg",
    },
  },
  {
    brand: "Mercedes-AMG",
    model: "GT Black Series",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1758563920452-5d54dc949d34?q=80&w=900",
    description:
      "Cel mai puternic V8 AMG de serie produs vreodată. GT Black Series este o mașină de curse legală pentru stradă, cu tehnologie flat-plane crank și aerodinamică extremă.",
    specs: {
      hp: "720",
      torque: "590 nm",
      zeroToHundred: "3.1s",
      topSpeed: "325 km/h",
      engine: "4.0L Twin-Turbo V8",
      weight: "1584 kg",
    },
  },
  {
    brand: "Ford",
    model: "Mustang GT500",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1753475560073-597230a4fd5e?q=80&w=900",
    description:
      "Cel mai puternic Ford legal pentru stradă creat vreodată. Shelby GT500 este echipat cu un V8 de 5.2L supraalimentat care oferă performanțe brute, tipice muscle car-urilor americane.",
    specs: {
      hp: "760",
      torque: "625 nm",
      zeroToHundred: "3.3s",
      topSpeed: "290 km/h",
      engine: "5.2L Supercharged V8",
      weight: "1891 kg",
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
          <p className="section-label slide-in-up">Colectia</p>
          <h1 className="slide-in-up delay-1">
            <span className="gradient-text">Masinile</span>
          </h1>
          <div className="divider slide-in-up delay-2" />
          <p className="slide-in-up delay-3">
            Profiluri detaliate pentru fiecare mașină din portofoliul nostru, completate cu specificații și note despre fotografii.
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
                    <div className="spec-item-label">Cai putere</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">{car.specs.torque}</div>
                    <div className="spec-item-label">Cuplu</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">
                      {car.specs.zeroToHundred}
                    </div>
                    <div className="spec-item-label">0-100 KM/H</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">{car.specs.topSpeed}</div>
                    <div className="spec-item-label">Top Speed</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">{car.specs.engine}</div>
                    <div className="spec-item-label">Motor</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-item-value">{car.specs.weight}</div>
                    <div className="spec-item-label">Greutate</div>
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
