import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import BestSellers from "@/components/home/BestSellers";
import Curation from "@/components/home/Curation";
import BrandStory from "@/components/home/BrandStory";
import DiscoverRoutine from "@/components/home/DiscoverRoutine";

const Home = () => {
  return (
    <Layout>
      <HeroSlider />
      <BestSellers />
      <Curation />
      <BrandStory />
      <DiscoverRoutine />
    </Layout>
  );
};

export default Home;
