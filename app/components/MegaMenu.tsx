'use client';

const menuData = [
  {
    title: 'Saree',
    columns: [
      {
        heading: 'Featured',
        links: ['New Arrivals', 'Bestsellers', 'Ready to Ship', 'Sale'],
      },
      {
        heading: 'Occasion',
        links: ['Wedding Wear', 'Party Wear', 'Bridal Wear', 'Festive Wear', 'Casual Wear', 'Bollywood Wear'],
      },
      {
        heading: 'Style',
        links: ['Embroidered Saree', 'Banarasi Saree', 'South Saree', 'Woven Saree', 'Handloom Saree', 'Half & Half Saree', 'Pre-stitched Sarees'],
      },
      {
        heading: 'Fabric',
        links: ['Cotton Saree', 'Pure Silk Saree', 'Art Silk Saree', 'Georgette Saree', 'Chiffon Saree', 'Crepe Saree'],
      },
      {
        heading: 'More',
        links: ['Blouse', 'Petticoat', 'Handbags'],
      },
    ],
    banners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/indian-sarees-menu.jpg', alt: 'Indian Sarees', href: '/showcase/saree-collection', width: 206, height: 240 },
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/shop-wedding-wear.jpg', alt: 'Wedding Shop for Men and Women', href: '/showcase/wedding-collection', width: 335, height: 111 },
    ],
  },
  {
    title: 'Salwar Kameez',
    columns: [
      {
        heading: 'Featured',
        links: ['New Arrivals', 'Bestsellers', 'Ready to Ship', 'Sale'],
      },
      {
        heading: 'Occasion',
        links: ['Festive Wear', 'Party Wear', 'Wedding Wear', 'Casual Wear', 'Bollywood Wear'],
      },
      {
        heading: 'Style',
        links: ['Anarkali Style', 'Straight Style', 'Abaya Style', 'A-Line Suits', 'Pakistani Style', 'Punjabi Style'],
      },
      {
        heading: 'Fabric',
        links: ['Chanderi Suits', 'Georgette Suits', 'Cotton Suits', 'Net Suits', 'Art Silk Suits'],
      },
      {
        heading: 'Alternates',
        links: ['Long Kurtas', 'Tunics', 'Bottoms', 'Top & Bottom Sets', 'Gowns'],
      },
    ],
    banners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/salwar-menu.jpg', alt: 'Embroidered Salwar Kameez', href: '/showcase/salwar-collection', width: 206, height: 240 },
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/footwear-women-menu.jpg', alt: 'Shop Footwear for Women', href: '/footwear/women', width: 335, height: 111 },
    ],
  },
  {
    title: 'Lehenga',
    columns: [
      {
        heading: 'Featured',
        links: ['New Arrivals', 'Bestsellers', 'Ready to Ship', 'Sale'],
      },
      {
        heading: 'Occasion',
        links: ['Bridal Wear', 'Festival Wear', 'Party Wear', 'Wedding Wear'],
      },
      {
        heading: 'Style',
        links: ['Circular Style', 'A-Line Lehenga', 'Indowestern Lehenga'],
      },
      {
        heading: 'Fabric',
        links: ['Art Silk Lehenga', 'Net Lehenga', 'Georgette Lehenga', 'Velvet Lehenga', 'Silk Lehenga'],
      },
      {
        heading: 'Alternates',
        links: ['Gowns', 'Abaya Style Suit'],
      },
    ],
    banners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/lehenga-menu.jpg', alt: 'Bridal Lehenga Choli', href: '/showcase/lehenga-collection', width: 206, height: 240 },
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/shop-wedding-wear.jpg', alt: 'Wedding Shop', href: '/showcase/wedding-collection', width: 335, height: 111 },
    ],
  },
  {
    title: 'Men',
    columns: [
      {
        heading: 'Featured',
        links: ['New Arrivals', 'Bestsellers', 'Ready to Ship', 'Sale'],
      },
      {
        heading: 'Style',
        links: ['Kurta', 'Sherwani', 'Bandhgala', 'Pathani Suit', 'Nehru Jackets'],
      },
      {
        heading: 'More Styles',
        links: ['Kurta Pajama', 'Dhoti Kurta', 'Coats & Blazer', 'Shirts', 'Mens Lower'],
      },
      {
        heading: 'Occasions',
        links: ['Party Wear', 'Wedding Wear', 'Casual Wear', 'Festival Wear', 'Indian Groom Wear'],
      },
      {
        heading: 'Accessories',
        links: ['Mens Accessories', 'Turban / Pagri', 'Dupattas', 'Kantha', 'Kilangi'],
      },
    ],
    banners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/menswear-menu.jpg', alt: 'Menswear Collections', href: '/showcase/menswear-collection', width: 206, height: 240 },
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/footwear-men-menu.jpg', alt: 'Mens Footwear', href: '/footwear/gender-men', width: 335, height: 111 },
    ],
  },
  {
    title: 'Indowestern',
    columns: [
      {
        heading: 'Featured',
        links: ['New Arrivals', 'Bestsellers', 'Ready to Ship', 'Sale'],
      },
      {
        heading: 'Occasion',
        links: ['Casual Wear', 'Festive Wear', 'Party Wear', 'Wedding Wear'],
      },
      {
        heading: 'Style',
        links: ['Kurtis', 'Dresses', 'Long Kurtas', 'Top & Bottom Sets', 'Gowns'],
      },
      {
        heading: 'Bottoms',
        links: ['Skirts', 'Palazzo Pants', 'Patialas', 'Leggings', 'Pants & Trousers'],
      },
      {
        heading: 'More',
        links: ['Stoles & Scarves', 'Dupattas', 'Jackets', 'Tops', 'Indowestern Lehenga'],
      },
    ],
    banners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/indowestern-menu.jpg', alt: 'Casual Indo Westerns', href: '/showcase/indowestern-collection', width: 206, height: 240 },
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/top-bottom-menu.jpg', alt: 'Top & Bottom Sets', href: '/indowestern/top-bottom-sets', width: 335, height: 111 },
    ],
  },
  {
    title: 'Plus',
    columns: [
      {
        heading: 'Featured',
        links: ['New Arrivals', 'Bestsellers', 'Ready to Ship'],
      },
      {
        heading: 'Occasion',
        links: ['Wedding', 'Party Wear', 'Festival Wear', 'Casual Wear'],
      },
      {
        heading: 'Styles',
        links: ['Salwar Kameez', 'Menswear', 'Lehengas', 'Indowestern', 'Sarees', 'Blouses'],
      },
      {
        heading: 'Fabric',
        links: ['Georgette', 'Net', 'Art Silk', 'Velvet'],
      },
      {
        heading: 'Favorites',
        links: ['Abaya Style Suits', 'Kurtas', 'Bottoms', 'Straight Cut Suits'],
      },
    ],
    banners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/plus-size-menu.jpg', alt: 'Plus Size Collection', href: '/plus', width: 206, height: 240 },
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/shop-wedding-wear.jpg', alt: 'Wedding Shop', href: '/showcase/wedding-collection', width: 335, height: 111 },
    ],
  },
  {
    title: 'Jewelry',
    columns: [
      {
        heading: 'Featured',
        links: ['New Arrivals', 'Bestsellers', 'Ready to Ship', 'Sale'],
      },
      {
        heading: 'Style',
        links: ['Earrings', 'Necklaces', 'Bangle & Sets', 'Rings', 'Anklets'],
      },
      {
        heading: 'Work',
        links: ['American Diamonds', 'Stone Studded', 'Pearls', 'Kundan', 'Meenakari'],
      },
      {
        heading: 'Wedding Box',
        links: ['Maang Tikka', 'Nose Rings', 'Bridal Sets', 'Hand Jewelry', 'Mangalsutra'],
      },
      {
        heading: 'Trending',
        links: ['Chokers', 'Chandbalis', 'Jhumkas', 'Ear Cuffs', 'Bracelets'],
      },
    ],
    banners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/menu-category-banners_jewelry.jpg', alt: 'Latest Indian Accessories', href: '/showcase/jewelry-collection', width: 268, height: 159 },
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/shop-wedding-wear.jpg', alt: 'Wedding Shop', href: '/showcase/wedding-collection', width: 335, height: 111 },
    ],
  },
  {
    title: 'Concepts',
    columns: [
      {
        heading: 'New Curations',
        links: ['Royal Heritage', 'Embroidered Blouses', 'Geometric Designs', 'Ultra Violet', 'Flared Silhouettes', 'Beautiful Bottoms'],
      },
      {
        heading: 'Our Best Ever',
        links: ['Bollywood Special', 'Metallic Shades', 'Slits', 'Layered Attires', 'Unusual Designs', 'Pastel Hues'],
      },
      {
        heading: 'Wedding Stories',
        links: ['Ring Ceremony', 'Cocktail Party', 'Haldi Ceremony', 'Mehendi', 'Sangeet Bash', 'Bridal Shower'],
      },
      {
        heading: 'Worth a Glance',
        links: ['Classic Weaves', 'Garden Party', 'Earthy Tones', 'Monotones', 'Rich Embroideries', 'Sheer Looks'],
      },
      {
        heading: 'Fashion Perfect',
        links: ['Asymmetricals', 'Collared Necklines', 'Flower Show', 'Jewel Tones', 'Bright Hues', 'Monochrome Styles'],
      },
    ],
    banners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/designer-concept.jpg', alt: 'Designer Wear', href: '/concepts/designer-wear', width: 206, height: 240 },
    ],
  },
  {
    title: 'Kids',
    columns: [
      {
        heading: 'Featured',
        links: ['Bestsellers', 'Ready to Ship', 'Sale'],
      },
      {
        heading: 'For Girls',
        links: ['Lehenga Sets', 'Salwar Kameez', 'Saree Sets', 'Ethnic Dresses', 'Top & Bottom Sets'],
      },
      {
        heading: 'For Boys',
        links: ['Kurta Pyjama Sets', 'Kids Sherwani Sets', 'Kurta Dhoti Sets', 'Kurta', 'Nehru Jackets', 'Accessories'],
      },
      {
        heading: 'By Colors',
        links: ['Purple Dresses', 'Orange Dresses', 'White Dresses', 'Green Dresses', 'Yellow Dresses', 'Red Dresses', 'Blue Dresses'],
      },
      {
        heading: 'By Occasion',
        links: ['Wedding Dresses', 'Party Dresses', 'Festival Dresses'],
      },
    ],
    banners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/menu-category-banners_kids.jpg', alt: 'Kidswear Collections', href: '/showcase/kidswear-collection', width: 335, height: 160 },
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/2023/banner/header-menu/shop-wedding-wear.jpg', alt: 'Wedding Shop', href: '/showcase/wedding-collection', width: 335, height: 111 },
    ],
  },
  {
    title: 'Discover',
    columns: [
      {
        heading: 'New Arrivals',
        links: [],
        isIcon: true,
        icon: 'newadd',
      },
      {
        heading: 'Weekly Bestsellers',
        links: [],
        isIcon: true,
        icon: 'bestseller',
      },
      {
        heading: 'Ready to Ship',
        links: [],
        isIcon: true,
        icon: 'readytoship',
      },
      {
        heading: 'SALE',
        links: [],
        isSale: true,
      },
      {
        heading: "What's Now",
        links: [],
        isLink: true,
        href: '/new',
      },
      {
        heading: 'Fashion Stories',
        links: [],
        isLink: true,
        href: '/showcase',
      },
      {
        heading: 'Wedding Shop',
        links: [],
        isLink: true,
        href: '/showcase/wedding-collection',
      },
      {
        heading: 'My Personalized Store',
        links: [],
        isLink: true,
        href: '/my-store',
      },
    ],
    isDiscover: true,
    imageBanners: [
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/home/2026/1202/trends-at-utsav-feb.jpg', alt: 'Trends 2026', href: '/trends', width: 206, height: 240 },
      { img: 'https://medias.utsavfashion.com/media/wysiwyg/home/2026/0406/summer-trends-26-menu.jpg', alt: 'Summer Trends 2026', href: '/showcase/indian-summer-styles', width: 206, height: 240 },
    ],
  },
];

export default function MegaMenu() {
  return (
    <nav className="navigation">
      <ul className="megamenu">
        {menuData.map((category, idx) => (
          <li className="megamenu-item" key={idx}>
            <a className="level-top" href={category.isDiscover ? 'javascript:void(0);' : '#'}>
              {category.title}
            </a>
            <div className={`submenu fullwidth ${category.isDiscover ? 'submenu-discover' : ''}`}>
              <div className="submenu-inner">
                {category.isDiscover ? (
                  <>
                    <div className="submenu-discover-links">
                      {category.columns.map((col, colIdx) => (
                        <div className="discover-link-item" key={colIdx}>
                          {col.isIcon && (
                            <a href="#" className="discover-icon-link">
                              <span className={`dmenu-icon _${col.icon}`}></span>
                              <span>{col.heading}</span>
                            </a>
                          )}
                          {col.isSale && (
                            <a href="/sale" className="discover-icon-link discover-sale">
                              <span className="dmenu-icon _sale"></span>
                              <span style={{ color: '#cb4551' }}>{col.heading}</span>
                            </a>
                          )}
                          {col.isLink && (
                            <a href={col.href} className="discover-text-link">
                              {col.heading}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="submenu-discover-images">
                      {category.imageBanners.map((banner, bIdx) => (
                        <a key={bIdx} href={banner.href} className="discover-image-link">
                          <img src={banner.img} alt={banner.alt} width={banner.width} height={banner.height} />
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {category.columns.map((col, colIdx) => (
                      <div className="submenu-column" key={colIdx}>
                        <h4 className="submenu-heading">{col.heading}</h4>
                        <ul className="submenu-links">
                          {col.links.map((link, linkIdx) => (
                            <li key={linkIdx}>
                              <a href="#">{link}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {category.banners && (
                      <div className="submenu-banner">
                        {category.banners.map((banner, bIdx) => (
                          <a key={bIdx} href={banner.href} className="submenu-banner-link">
                            <img
                              src={banner.img}
                              alt={banner.alt}
                              width={banner.width}
                              height={banner.height}
                              className="submenu-banner-img"
                            />
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
