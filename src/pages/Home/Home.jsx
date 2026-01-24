import CardsSections from "@/components/home/CardsSections";
import HeroSection from "@/components/home/HeroSection";
import { InfoBanners } from "@/components/home/InfoBanner";
import { getCategoryNames } from "@/store/category/category.service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const pluralize = (word) => {
  if (word.endsWith("y")) {
    return word.slice(0, -1) + "ies";
  }

  if (word.endsWith("s")) {
    return word + "es";
  }

  return word + "s";
};

const Home = () => {
  const dispatch = useDispatch();
  const { categoryNames } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryNames());
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      <InfoBanners />
      {categoryNames?.length > 0 && categoryNames?.map((item) => (
        <CardsSections
          key={item?._id}
          title={pluralize(item?.name)}
          searchKey={item?.name?.toLowerCase()}
        />
      ))}
    </>
  );
};

export default Home;
