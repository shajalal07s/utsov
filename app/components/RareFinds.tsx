import Image from "next/image";
import Link from "next/link";

const items = [
  { label: "Elegant Lehengas", src: "/image/Timeless-1.webp", href: "/collections/elegant-lehengas" },
  { label: "Embellished Abaya", src: "/image/Timeless-2.webp", href: "/collections/embellished-abaya" },
  { label: "Kurta Sets", src: "/image/Timeless-3.webp", href: "/collections/kurta-sets" },
  { label: "Pastel Ethnic Wear", src: "/image/Timeless-4.webp", href: "/collections/pastel-ethnic" },
];

export default function RareFinds() {
  return (
    <section className="rare-finds-section">
      <h2 className="section-heading">Rare Finds, Timeless Style</h2>
      <div className="rare-finds-grid">
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="rare-finds-item">
            <Image
              src={item.src}
              alt={item.label}
              width={300}
              height={400}
              className="rare-finds-img"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
