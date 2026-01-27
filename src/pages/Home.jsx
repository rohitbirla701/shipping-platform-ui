import HeroSection from "../sections/Herosection";
import HowItWorksSection from "../sections/HowItWorksSection";
import PricingSection from "../sections/PricingSection";
import ProductPreviewSection from "../sections/ProductPreviewSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import TrustCTASection from "../sections/TrustCTASection";
import WhoIsItForSection from "../sections/WhoIsItForSection";
import WhyXYZSection from "../sections/WhyXYZSection";

const Home = ({ authType }) => {
    return (
        <main className="bg-orange-100 pt-28">
            <HeroSection authType={authType} />
            <WhyXYZSection />
            <WhoIsItForSection />
            <PricingSection />
            <TestimonialsSection />
            <TrustCTASection />
            <HowItWorksSection />
            <ProductPreviewSection />
        </main>
    );
};

export default Home;
