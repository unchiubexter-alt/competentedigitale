import Image from "next/image";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&q=80",
    title: "Porsche 911 GT3",
    subtitle: "Golden Hour Session",
    classes: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80",
    title: "Lamborghini Aventador",
    subtitle: "Storm Chase",
    classes: "",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    title: "Ferrari F8 Tributo",
    subtitle: "Coastal Road",
    classes: "",
  },
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=80",
    title: "BMW M4 Competition",
    subtitle: "Urban Night",
    classes: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=80",
    title: "Mercedes-AMG GT",
    subtitle: "Desert Shoot",
    classes: "",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80",
    title: "Ford Mustang GT",
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
    src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900&q=80",
    title: "Audi R8 V10",
    subtitle: "Mountain Pass",
    classes: "",
  },
  {
    src: "https://images.unsplash.com/photo-1525609004556-c46c6c5104b8?w=900&q=80",
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
          <p className="section-label slide-in-up">Our Portfolio</p>
          <h1 className="slide-in-up delay-1">
            <span className="gradient-text">The Gallery</span>
          </h1>
          <div className="divider slide-in-up delay-2" />
          <p className="slide-in-up delay-3">
            A curated collection of our finest automotive photography work.
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
            <span className="gradient-text">How We Shoot</span>
          </h2>
          <div className="divider slide-in-up delay-2" />
          <p className="section-desc slide-in-up delay-3">
            Every photo session is carefully planned — from scouting locations to
            chasing the perfect light conditions.
          </p>
        </div>

        <div className="stats">
          <div className="stat-item slide-in-up">
            <div className="stat-number">01</div>
            <div className="stat-label">Scout Location</div>
          </div>
          <div className="stat-item slide-in-up delay-1">
            <div className="stat-number">02</div>
            <div className="stat-label">Plan The Light</div>
          </div>
          <div className="stat-item slide-in-up delay-2">
            <div className="stat-number">03</div>
            <div className="stat-label">Capture Moments</div>
          </div>
          <div className="stat-item slide-in-up delay-3">
            <div className="stat-number">04</div>
            <div className="stat-label">Post-Process</div>
          </div>
        </div>
      </section>
    </main>
  );
}
