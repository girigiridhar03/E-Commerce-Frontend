import CardsSections from "@/components/home/CardsSections";
import HeroSection from "@/components/home/HeroSection";
import { InfoBanners } from "@/components/home/InfoBanner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoBanners />
      <CardsSections title={"Mobiles"} searchKey={"mobiles"} />
      <CardsSections title={"Laptops"} searchKey={"laptops"} />
    </>
  );
};

export default Home;
