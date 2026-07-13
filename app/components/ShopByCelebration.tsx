import Image from "next/image";
import Link from "next/link";

const items = [
  { label: "Sangeet Night Looks", src: "/image/Celebration-1.webp", href: "/collections/sangeet" },
  { label: "Cocktail Party Looks", src: "/image/Celebration-2.webp", href: "/collections/cocktail" },
  { label: "Mehendi Function Looks", src: "/image/Celebration-3.webp", href: "/collections/mehendi" },
  { label: "Haldi Looks", src: "/image/Celebration-4.webp", href: "/collections/haldi" },
];

export default function ShopByCelebration() {
  return (
    <section className="shop-celebration-section">
      <h2 className="section-heading">Shop by Celebration</h2>
      <div className="celebration-grid">
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="celebration-item">
            <Image
              src={item.src}
              alt={item.label}
              width={300}
              height={300}
              className="celebration-img"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
