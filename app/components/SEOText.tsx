"use client";

import { useState } from "react";

export default function SEOText() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="seo-section">
      <h1>A Destination For Indian Ethnic & Fusion Fashion</h1>

      {expanded && (
        <>
          <h2>Find saree to fulfill every need</h2>
          <p>
            From luxurious bridal silk sarees to lightweight daily wear cotton
            sarees, our collection spans every occasion. Whether you are looking
            for a Banarasi masterpiece, a delicate Chiffon drape, or a trendy
            pre-stitched saree, we bring you handpicked designs that celebrate
            the timeless elegance of Indian women&apos;s fashion.
          </p>

          <h2>Explore exclusive collection of Lehenga Choli</h2>
          <p>
            Our lehenga choli collection is designed to make every woman feel
            like royalty. From heavily embellished bridal lehengas to
            mehendi-friendly pastel options and reception-ready mirror work
            designs, each piece is crafted with precision, high-quality fabrics,
            and intricate embroidery that captures the essence of Indian
            craftsmanship.
          </p>

          <h2>Wide range of traditional salwar suits</h2>
          <p>
            Discover an extensive range of salwar suits including Anarkali,
            Punjabi, Patiala, and straight-cut suits. Our curated selection
            features hand-embroidered, printed, and dyed suits in georgette,
            silk, and cotton, ideal for festive gatherings, daily wear, or
            formal occasions.
          </p>

          <h2>
            Indian Men&apos;s Wear: A Rich Blend of Culture and Fashion
          </h2>
          <p>
            From classic kurta pyjamas and Nehru jackets to contemporary Indo
            Western outfits, our men&apos;s section offers a sophisticated
            collection that balances tradition with modern style. Perfect for
            weddings, festivals, and formal events.
          </p>

          <h2>
            The fusion of East and West: Exploring the Beauty of Indo-Western
            Clothing
          </h2>
          <p>
            Indo-western outfits blend the grace of Indian attire with the
            contemporary silhouettes of Western fashion. Our collection features
            dhoti pants paired with crop tops, cape lehengas, gown-style
            anarkalis, and jacket-style salwars that are perfect for the modern
            Indian woman.
          </p>

          <h2>
            The Allure of Indian Jewelry: A Closer Look at Its Intricate Designs
          </h2>
          <p>
            No outfit is complete without the perfect jewelry. Explore our range
            of traditional and fusion jewelry including chandelier earrings,
            maang tikkas, necklaces, and bangles designed to complement every
            ensemble and add a touch of sparkle to your celebration.
          </p>
        </>
      )}

      <button
        type="button"
        className="seo-read-more"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </section>
  );
}
