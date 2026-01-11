import React, { useEffect, useState } from "react";
import ProductCards from "../product/ProductCards";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/store/product/product.service";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const getVisibleCount = () => {
  if (window.innerWidth >= 1280) return 4;
  if (window.innerWidth >= 1024) return 3;
  return 2;
};
const CardsSections = ({ title, searchKey }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product?.[searchKey]);
  const [limit, setLimit] = useState(getVisibleCount());

  useEffect(() => {
    if (!searchKey) return;
    dispatch(
      getProducts({ page: 1, limit: 4, search: searchKey, key: searchKey })
    );
  }, [dispatch, searchKey]);

  useEffect(() => {
    const handleResize = () => setLimit(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-2.5 mb-10">
      <header className="flex items-center justify-between px-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <Link to={`/products?sValue=${searchKey}`}>
          <Button size="sm">View All</Button>
        </Link>
      </header>
      <div
        className="  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4 
  gap-4"
      >
        {data?.products?.slice(0, limit)?.map((item) => (
          <ProductCards
            key={item?.variantId}
            title={item.productName}
            img={item?.images[0]?.url}
            desc={item?.description}
            price={item?.currentPrice}
            originalPrice={item?.originalPrice}
            discount={item?.discountPercent}
            slug={item?.slug}
            pId={item?._id}
            vId={item?.variantId}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsSections;
