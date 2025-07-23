import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustedProviders from "@/components/home/TrustedProviders";
import ServicesOverview from "@/components/home/ServicesOverview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedProviders />
      <ServicesOverview />
    </Layout>
  );
};

export default Index;
