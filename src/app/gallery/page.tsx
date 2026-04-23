import Image from "next/image";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1744278187074-c43c4bf0fa22?q=80&w=900",
    title: "Porsche 911 GT3",
    subtitle: "Golden Hour Session",
    classes: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1676113125191-c4237fbe7ebc?q=80&w=900",
    title: "Lamborghini Aventador",
    subtitle: "Storm Chase",
    classes: "",
  },
  {
    src: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=800",
    title: "Ferrari F8 Tributo",
    subtitle: "Coastal Road",
    classes: "",
  },
  {
    src: "https://images.unsplash.com/photo-1728060839159-f828a58cdaef?q=80&w=900",
    title: "BMW M4 Competition",
    subtitle: "Urban Night",
    classes: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1758563920452-5d54dc949d34?q=80&w=900",
    title: "Mercedes-AMG GT",
    subtitle: "Desert Shoot",
    classes: "",
  },
  {
    src: "https://images.unsplash.com/photo-1753475560073-597230a4fd5e?q=80&w=900",
    title: "Ford Mustang GT500",
    subtitle: "American Muscle",
    classes: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=900&q=80",
    title: "McLaren 720S",
    subtitle: "Track Day",
    classes: "",
  },
  {
    src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=900",
    title: "Audi R8 V10",
    subtitle: "Mountain Pass",
    classes: "",
  },
  {
    src: "https://images.unsplash.com/photo-1584273421792-84b448728b38?q=80&w=900",
    title: "Nissan GT-R",
    subtitle: "Neon City",
    classes: "wide",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')",
          }}
        />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <p className="section-label slide-in-up">Portofoliu</p>
          <h1 className="slide-in-up delay-1">
            <span className="gradient-text">Galeria</span>
          </h1>
          <div className="divider slide-in-up delay-2" />
          <p className="slide-in-up delay-3">
            O colecție atent selecționată a celor mai reușite lucrări de fotografie auto din portofoliu.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${item.classes} scale-in delay-${(index % 5) + 1}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={900}
                height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="gallery-item-overlay">
                <p className="gallery-item-subtitle">{item.subtitle}</p>
                <p className="gallery-item-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="section">
        <div className="section-header">
          <p className="section-label slide-in-up">Behind The Scenes</p>
          <h2 className="section-title slide-in-up delay-1">
            <span className="gradient-text">Cum fotografiem</span>
          </h2>
          <div className="divider slide-in-up delay-2" />
          <p className="section-desc slide-in-up delay-3">
            Fiecare ședință foto este planificată cu atenție — de la alegerea locațiilor până la căutarea condițiilor perfecte de lumină.
          </p>
        </div>

        <div className="stats">
          <div className="stat-item slide-in-up">
            <div className="stat-number">01</div>
            <div className="stat-label">Locatia</div>
          </div>
          <div className="stat-item slide-in-up delay-1">
            <div className="stat-number">02</div>
            <div className="stat-label">Lumina</div>
          </div>
          <div className="stat-item slide-in-up delay-2">
            <div className="stat-number">03</div>
            <div className="stat-label">Capturarea momentului</div>
          </div>
          <div className="stat-item slide-in-up delay-3">
            <div className="stat-number">04</div>
            <div className="stat-label">Editare</div>
          </div>
        </div>
      </section>
    </main>
  );
}
