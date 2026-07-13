import Image from "next/image";
import Link from "next/link";

const items = [
  { label: "Bridal Lehengas", src: "/image/Handpicked-1.webp", href: "/collections/bridal-lehengas" },
  { label: "Resham & Zari Sarees", src: "/image/Handpicked-2.webp", href: "/collections/resham-zari" },
  { label: "The Designer Closet", src: "/image/Handpicked-3.webp", href: "/collections/designer-closet" },
];

export default function HandpickedCollections() {
  return (
    <section className="handpicked-section">
      <h2 className="section-heading">Handpicked Collections</h2>
      <div className="handpicked-grid">
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="handpicked-item">
            <Image
              src={item.src}
              alt={item.label}
              width={400}
              height={500}
              className="handpicked-img"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
