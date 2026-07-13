import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import PromoStrip from "./components/PromoStrip";
import HeroSlider from "./components/HeroSlider";
import ShopByRole from "./components/ShopByRole";
import USPSection from "./components/USPSection";
import FashionStories from "./components/FashionStories";
import ShopByCelebration from "./components/ShopByCelebration";
import HandpickedCollections from "./components/HandpickedCollections";
import AppBanner from "./components/AppBanner";
import RareFinds from "./components/RareFinds";
import SEOText from "./components/SEOText";
import Footer from "./components/Footer";
import SideScroller from "./components/SideScroller";

export default function Home() {
  return (
    <>
      <Header />
      <PromoStrip />
      <HeroSlider />
      <main>
        <section className="section">
          <div className="container">
            <ShopByRole />
          </div>
        </section>
        <section className="usp-cards-wrapper">
          <div className="container">
            <USPSection />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <FashionStories />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <ShopByCelebration />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <ProductSection />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <HandpickedCollections />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <AppBanner />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <RareFinds />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SEOText />
          </div>
        </section>
      </main>
      <Footer />
      <SideScroller />
    </>
  );
}
