import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CarouselCom } from "./Carousel";
import ProDetails from "./ProDetails";

const ProductDetailsContainer = () => {
  const { singleProductDetails, sLoading } = useSelector(
    (state) => state.product
  );

  const defaultImg =
    singleProductDetails?.selectedVariant?.images?.[0]?.url ?? null;

  const [selectedImg, setSelectedImg] = useState("");
  const proImg = selectedImg || defaultImg;

  if (sLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-stretch w-full select-none gap-3 ">
      {/* Images Container */}
      <div className="w-full md:w-1/2 flex flex-col items-center gap-2.5 p-1.5">
        <div className="w-full aspect-square flex items-center justify-center">
          <img
            src={proImg}
            draggable={false}
            className="w-full h-full object-contain"
            alt={singleProductDetails?.productName ?? "product-image"}
          />
        </div>

        <CarouselCom
          images={singleProductDetails?.selectedVariant?.images ?? []}
          selectedImg={proImg}
          onSelect={setSelectedImg}
        />
      </div>

      {/* Details Container */}
      <ProDetails singleProductDetails={singleProductDetails} />
    </div>
  );
};

export default ProductDetailsContainer;
