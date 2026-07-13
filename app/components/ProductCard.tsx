import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: string;
  imgSrc: string;
  href?: string;
}

export default function ProductCard({ name, price, imgSrc, href = "#" }: ProductCardProps) {
  return (
    <div className="product-card">
      <Link href={href} className="product-card-img-link">
        <img src={imgSrc} alt={name} className="product-card-img" loading="lazy" />
      </Link>
      <div className="product-card-body">
        <h3 className="product-card-name">{name}</h3>
        <span className="product-card-price">{price}</span>
        <button className="product-card-add-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
