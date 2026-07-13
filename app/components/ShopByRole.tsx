export default function ShopByRole() {
  const roles = [
    { img: '/image/Shop%20By%20Role/1.webp', label: 'Bride', href: '/bridal' },
    { img: '/image/Shop%20By%20Role/2.webp', label: 'Mother of the Bride', href: '/saree/wedding_woven-saree' },
    { img: '/image/Shop%20By%20Role/3.webp', label: 'Bridesmaids', href: '/concepts/bridesmaid' },
    { img: '/image/Shop%20By%20Role/4.webp', label: 'Groom', href: '/men/groom' },
  ];

  return (
    <section>
      <h2 className="section-heading">Shop By Role</h2>
      <div className="shop-by-role-grid">
        {roles.map((role) => (
          <a key={role.label} href={role.href} className="shop-by-role-item">
            <img src={role.img} alt={role.label} />
          </a>
        ))}
      </div>
    </section>
  );
}
