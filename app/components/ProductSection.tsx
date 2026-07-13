import ProductCard from "./ProductCard";

const products = [
  { name: "Silk Saree", price: "$89.00", img: "https://picsum.photos/seed/saree1/400/500" },
  { name: "Designer Lehenga", price: "$149.00", img: "https://picsum.photos/seed/lehenga1/400/500" },
  { name: "Anarkali Suit", price: "$69.00", img: "https://picsum.photos/seed/anarkali/400/500" },
  { name: "Men's Sherwani", price: "$129.00", img: "https://picsum.photos/seed/sherwani/400/500" },
  { name: "Kurta Pajama", price: "$59.00", img: "https://picsum.photos/seed/kurta1/400/500" },
  { name: "Bridal Lehenga", price: "$249.00", img: "https://picsum.photos/seed/bridal1/400/500" },
  { name: "Party Gown", price: "$99.00", img: "https://picsum.photos/seed/gown1/400/500" },
  { name: "Nehru Jacket", price: "$79.00", img: "https://picsum.photos/seed/nehru/400/500" },
  { name: "Embroidery Saree", price: "$109.00", img: "https://picsum.photos/seed/saree2/400/500" },
  { name: "Casual Kurti", price: "$39.00", img: "https://picsum.photos/seed/kurti1/400/500" },
  { name: "Wedding Gown", price: "$199.00", img: "https://picsum.photos/seed/gown2/400/500" },
  { name: "Men's Bandhgala", price: "$119.00", img: "https://picsum.photos/seed/bandhgala/400/500" },
];

export default function ProductSection() {
  return (
    <section className="product-section">
      <h2 className="section-heading">Trending Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.name} name={p.name} price={p.price} imgSrc={p.img} />
        ))}
      </div>
    </section>
  );
}
