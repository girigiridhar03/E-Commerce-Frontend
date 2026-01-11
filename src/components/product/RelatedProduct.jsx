import React from "react";
import { useSelector } from "react-redux";
import ProductCards from "./ProductCards";

const RelatedProduct = () => {
  const { relatedProductsArr, rLoading } = useSelector(
    (state) => state.product
  );

  return (
    <div className="flex flex-col gap-2.5 mb-10 p-3">
      <header className="flex items-center justify-between px-2">
        <h3 className="text-xl font-bold">Related Products</h3>
      </header>
      <div
        className="  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4 
  gap-4"
      >
        {relatedProductsArr?.map((item) => (
          <ProductCards
            key={item?.singleVariant?._id}
            title={item.productName}
            img={item?.singleVariant?.images[0]?.url}
            desc={item?.singleVariant?.description}
            price={item?.singleVariant?.currentPrice}
            originalPrice={item?.singleVariant?.originalPrice}
            discount={item?.singleVariant?.discountPercent}
            slug={item?.slug}
            pId={item?._id}
            vId={item?.singleVariant?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
