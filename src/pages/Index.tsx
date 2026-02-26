import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TilesBySpace from "@/components/TilesBySpace";
import FeaturedCollections from "@/components/FeaturedCollections";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TilesBySpace />
        <FeaturedCollections />
        <DesignPhilosophy />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
